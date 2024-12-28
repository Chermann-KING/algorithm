/**
 * Route API pour la gestion des niveaux et problèmes
 * @module app/api/levels/route
 *
 * Fournit un endpoint GET qui retourne la liste des niveaux avec leurs problèmes
 * associés et la progression de l'utilisateur authentifié.
 */

import { connectDB } from "@/lib/db";
import { Level } from "@/models/level";
import { Problem } from "@/models/problem";
import { Progress } from "@/models/progress";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

/**
 * Gestionnaire de requête GET pour l'endpoint /api/levels
 *
 * Récupère et retourne:
 * - La liste des niveaux ordonnés
 * - Les problèmes associés à chaque niveau
 * - L'état de progression de l'utilisateur connecté
 *
 * @returns {Promise<NextResponse>} Réponse formatée contenant les niveaux et leur progression
 * @throws {Error} Renvoie une erreur 401 si non authentifié ou 500 en cas d'erreur serveur
 *
 * @example Exemple de réponse :
 * [
 *   {
 *     id: "niveau1_id",
 *     title: "Les Variables",
 *     description: "Introduction aux variables",
 *     objectives: ["Objectif 1", "Objectif 2"],
 *     problems: [
 *       {
 *         id: "probleme1_id",
 *         title: "Déclaration de Variables",
 *         description: "Apprendre à déclarer des variables",
 *         difficulty: "facile",
 *         completed: false
 *       }
 *     ],
 *     progress: 75 // Pourcentage de progression
 *   }
 * ]
 */
export async function GET() {
  try {
    // Connexion à la base de données
    await connectDB();

    // Vérification de l'authentification
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Récupération parallèle des données
    const [levels, problems, userProgress] = await Promise.all([
      Level.find().sort({ order: 1 }), // Niveaux triés par ordre
      Problem.find(), // Tous les problèmes
      Progress.find({ userId: session.user.id }), // Progression de l'utilisateur
    ]);

    // Transformation des données pour le format de réponse
    const formattedLevels = levels.map((level) => {
      // Filtrage et formatage des problèmes pour ce niveau
      const levelProblems = problems
        .filter((p) => p.levelId === level._id)
        .map((p) => ({
          id: p._id.toString(),
          title: p.title,
          description: p.description,
          difficulty: p.difficulty,
          // Vérifie si l'utilisateur a complété ce problème
          completed: userProgress.some(
            (prog) =>
              prog.problemId.toString() === p._id.toString() && prog.completed
          ),
        }));

      // Calcul du pourcentage de progression pour ce niveau
      const progress =
        levelProblems.length > 0
          ? (levelProblems.filter((p) => p.completed).length /
              levelProblems.length) *
            100
          : 0;

      // Construction de l'objet niveau formaté
      return {
        id: level._id,
        title: level.title,
        description: level.description,
        objectives: level.objectives,
        problems: levelProblems,
        progress,
      };
    });

    // Retourne la réponse formatée
    return NextResponse.json(formattedLevels);
  } catch (error) {
    // Log et gestion des erreurs
    console.error(error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
