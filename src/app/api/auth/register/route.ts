/**
 * Route d'inscription des utilisateurs
 * @module api/auth/register/route
 *
 * Gère la création de nouveaux comptes utilisateurs avec vérification
 * des données, hashage sécurisé du mot de passe, et validation des doublons.
 */

import { connectDB } from "@/lib/db";
import { User } from "@/models/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

/**
 * Traite les requêtes POST pour l'inscription des utilisateurs
 *
 * @param {Request} req - Requête HTTP entrante contenant les données d'inscription
 * @returns {Promise<NextResponse>} Réponse HTTP avec le statut de l'inscription
 *
 * @example
 * // Format de requête attendu
 * {
 *   "email": "user@example.com",
 *   "password": "motdepasse123"
 * }
 *
 * // Réponse en cas de succès (201)
 * {
 *   "user": {
 *     "id": "...",
 *     "email": "user@example.com",
 *     "name": null,
 *     "image": null
 *   },
 *   "message": "Inscription réussie"
 * }
 */
export async function POST(req: Request) {
  try {
    // Extraction et validation des données de la requête
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    // Connexion à la base de données
    await connectDB();

    // Vérification de l'unicité de l'email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 400 }
      );
    }

    // Hashage sécurisé du mot de passe avec un salt de 12 rounds
    const hashedPassword = await bcrypt.hash(password, 12);

    // Création d'un nouvel utilisateur en base de données
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: null, // Champ optionnel pour le nom d'affichage
      image: null, // Champ optionnel pour l'avatar
    });

    // Préparation des données utilisateur sécurisées pour la réponse
    // Exclut les informations sensibles comme le mot de passe
    const safeUser = {
      id: newUser._id.toString(),
      email: newUser.email,
      name: newUser.name,
      image: newUser.image,
    };

    // Renvoie une réponse de succès avec les données utilisateur sécurisées
    return NextResponse.json(
      { user: safeUser, message: "Inscription réussie" },
      { status: 201 }
    );
  } catch (error) {
    // Journalisation de l'erreur pour le débogage
    console.error("Erreur lors de l'inscription:", error);

    // Renvoie une réponse d'erreur générique pour la sécurité
    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
}
