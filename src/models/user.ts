/**
 * Modèle Mongoose pour les utilisateurs
 * @module models/user
 *
 * Définit la structure et les validations pour les documents utilisateur
 * dans la base de données MongoDB. Inclut les champs essentiels pour
 * l'authentification et le profil utilisateur.
 */

import mongoose from "mongoose";

/**
 * Schéma Mongoose pour les utilisateurs
 *
 * @property {string} name - Nom d'affichage de l'utilisateur (optionnel)
 * @property {string} email - Adresse email unique de l'utilisateur (requis)
 * @property {string} password - Mot de passe hashé de l'utilisateur (requis)
 * @property {string} image - URL de l'avatar de l'utilisateur (optionnel)
 * @property {Date} createdAt - Date de création du compte (automatique)
 * @property {Date} updatedAt - Date de dernière modification (automatique)
 */
const userSchema = new mongoose.Schema(
  {
    // Nom d'affichage optionnel
    name: {
      type: String,
      default: null,
    },

    // Email unique requis pour l'authentification
    email: {
      type: String,
      required: true,
      unique: true,
    },

    // Mot de passe hashé requis
    password: {
      type: String,
      required: true,
    },

    // URL de l'avatar optionnelle
    image: {
      type: String,
      default: null,
    },
  },
  {
    // Active les timestamps automatiques (createdAt, updatedAt)
    timestamps: true,
  }
);

/**
 * Modèle Mongoose pour les utilisateurs
 * Réutilise le modèle existant s'il existe déjà, sinon en crée un nouveau
 *
 * @example
 * // Création d'un nouvel utilisateur
 * const newUser = await User.create({
 *   email: 'user@example.com',
 *   password: 'hashedPassword123'
 * });
 *
 * @example
 * // Recherche d'un utilisateur par email
 * const user = await User.findOne({ email: 'user@example.com' });
 */
export const User = mongoose.models.User || mongoose.model("User", userSchema);
