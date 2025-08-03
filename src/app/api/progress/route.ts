/**
 * Route API pour la gestion de la progression des utilisateurs
 * @module app/api/progress/route
 *
 * Fournit des endpoints pour :
 * - Récupérer la progression d'un utilisateur (GET)
 * - Mettre à jour ou créer une progression (POST)
 */

import { connectDB } from "@/lib/db";
import { Progress } from "@/models/progress";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

/**
 * Gestionnaire de requête GET pour l'endpoint /api/progress
 *
 * Récupère toute la progression de l'utilisateur authentifié.
 * Les données de progression sont enrichies avec les informations des problèmes associés.
 *
 * @returns {Promise<NextResponse>} Liste des progressions de l'utilisateur
 * @throws {Error} Renvoie une erreur 401 si non authentifié ou 500 en cas d'erreur serveur
 *
 * @example Exemple de réponse :
 * [
 *   {
 *     userId: "user_id",
 *     problemId: {
 *       _id: "problem_id",
 *       levelId: 1,
 *       // autres propriétés du problème
 *     },
 *     completed: true,
 *     // autres propriétés de progression
 *   }
 * ]
 */
export async function GET() {
  try {
    await connectDB();
    const session = await getServerSession();

    // Vérifie l'authentification
    if (!session?.user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // Récupère la progression avec les détails des problèmes
    const userProgress = await Progress.find({
      userId: session.user.id,
    }).populate("problemId", "levelId");

    return NextResponse.json(userProgress);
  } catch (error) {
    console.error("Erreur lors de la récupération de la progression:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

/**
 * Gestionnaire de requête POST pour l'endpoint /api/progress
 *
 * Met à jour ou crée une progression pour un problème spécifique.
 * Si une progression existe déjà, elle est mise à jour, sinon une nouvelle est créée.
 *
 * @param {Request} request Corps de la requête contenant les données de progression
 * @returns {Promise<NextResponse>} La progression mise à jour ou créée
 * @throws {Error} Renvoie une erreur 401 si non authentifié ou 500 en cas d'erreur serveur
 *
 * @example Corps de requête attendu :
 * {
 *   problemId: "problem_id",
 *   levelId: 1,
 *   completed: true,
 *   // autres données optionnelles de progression
 * }
 */
export async function POST(request: Request) {
  try {
    await connectDB();
    const session = await getServerSession();

    if (!session?.user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    const data = await request.json();

    // Mise à jour ou création de la progression
    // Utilise findOneAndUpdate avec upsert pour créer si n'existe pas
    const progress = await Progress.findOneAndUpdate(
      {
        userId: session.user.id,
        problemId: data.problemId,
        levelId: data.levelId,
      },
      {
        $set: {
          completed: data.completed,
          ...data,
        },
      },
      {
        new: true, // Retourne le document mis à jour
        upsert: true, // Crée si n'existe pas
      }
    );

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Erreur lors de la mise à jour de la progression:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
