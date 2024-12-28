/**
 * Actions serveur pour la gestion des niveaux et problèmes
 * @module lib/actions/problems
 *
 * Fournit des fonctions server-side pour récupérer et formater
 * les données des niveaux, problèmes et progression des utilisateurs.
 */

"use server";

import { connectDB } from "@/lib/db";
import { Level } from "@/models/level";
import { Problem } from "@/models/problem";
import { Progress } from "@/models/progress";
import { getServerSession } from "next-auth/next";

/**
 * Récupère tous les niveaux avec leurs problèmes associés et la progression
 *
 * Cette fonction :
 * 1. Récupère tous les niveaux et problèmes de la base de données
 * 2. Si un utilisateur est connecté, récupère sa progression
 * 3. Associe les problèmes à leurs niveaux respectifs
 * 4. Calcule la progression pour chaque niveau
 *
 * @returns {Promise<Array>} Liste des niveaux formatés avec leurs problèmes et progression
 *
 * @example Exemple de retour :
 * [
 *   {
 *     id: 1,
 *     title: "Les Variables",
 *     description: "Introduction aux variables",
 *     objectives: ["Objectif 1", "Objectif 2"],
 *     problems: [
 *       {
 *         id: "exo01",
 *         title: "Déclaration de Variables",
 *         description: "...",
 *         difficulty: "facile",
 *         completed: false
 *       }
 *     ],
 *     progress: 50
 *   }
 * ]
 */
export async function getProblemLevels() {
  try {
    await connectDB();
    const session = await getServerSession();

    // Récupération parallèle des données de base
    const [problems, levels] = await Promise.all([
      Problem.find(),
      Level.find().sort({ order: 1 }), // Tri par ordre croissant
    ]);

    // Récupération de la progression utilisateur si connecté
    let userProgress = [];
    if (session?.user) {
      userProgress = await Progress.find({ userId: session.user.id });
    }

    // Transformation et formatage des données
    return levels.map((level) => {
      // Association des problèmes au niveau
      const levelProblems = problems
        .filter((p) => p.levelId === level.order)
        .map((p) => ({
          id: p.code, // Utilise le code comme identifiant unique
          title: p.title,
          description: p.description,
          difficulty: p.difficulty,
          // Vérifie si le problème est complété par l'utilisateur
          completed: userProgress.some(
            (prog) =>
              prog.problemId.toString() === p._id.toString() && prog.completed
          ),
        }));

      // Construction de l'objet niveau
      return {
        id: level.order,
        title: level.title,
        description: level.description,
        objectives: level.objectives,
        problems: levelProblems,
        progress: calculateProgress(levelProblems),
      };
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des niveaux:", error);
    return []; // Retourne un tableau vide en cas d'erreur
  }
}

/**
 * Calcule le pourcentage de progression basé sur les problèmes complétés
 *
 * @param {Array<{completed: boolean}>} problems Liste des problèmes avec leur état
 * @returns {number} Pourcentage de progression (0-100)
 *
 * @example
 * const progress = calculateProgress([
 *   { completed: true },
 *   { completed: false },
 *   { completed: true }
 * ]); // Retourne 66.67
 */
function calculateProgress(problems: { completed: boolean }[]) {
  if (problems.length === 0) return 0;
  const completed = problems.filter((p) => p.completed).length;
  return (completed / problems.length) * 100;
}
