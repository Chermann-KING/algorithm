/**
 * Utilitaire de connexion à la base de données MongoDB
 * @module lib/db
 *
 * Gère la connexion à MongoDB en utilisant Mongoose, avec gestion d'état
 * et réutilisation des connexions existantes pour optimiser les performances.
 */

import mongoose from "mongoose";

// Vérifie la présence de l'URI MongoDB dans les variables d'environnement
if (!process.env.MONGODB_URI) {
  throw new Error(
    "Veuillez définir l'URI MongoDB dans les variables d'environnement"
  );
}

/**
 * Établit ou réutilise une connexion à la base de données MongoDB
 *
 * @returns {Promise<typeof mongoose.Connection>} La connexion Mongoose active
 * @throws {Error} Si la connexion échoue
 *
 * @example
 * // Utilisation dans une route API
 * async function handler(req, res) {
 *   try {
 *     await connectDB();
 *     // Utiliser la connexion...
 *   } catch (error) {
 *     // Gérer l'erreur...
 *   }
 * }
 *
 * @remarks
 * Les états de connexion Mongoose sont :
 * - 0: déconnecté
 * - 1: connecté
 * - 2: connexion en cours
 * - 3: déconnexion en cours
 */
export async function connectDB() {
  try {
    // Vérifie si une connexion active existe déjà
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    // Établit une nouvelle connexion si nécessaire
    return await mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    // Journalise et propage l'erreur pour une gestion appropriée
    console.error("Erreur de connexion MongoDB:", error);
    throw error;
  }
}

export default connectDB;
