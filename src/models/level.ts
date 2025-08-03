/**
 * Modèle de données pour les niveaux du parcours d'apprentissage
 * @module models/level
 *
 * Définit le schéma Mongoose pour les niveaux, incluant leurs objectifs,
 * prérequis et relations avec les problèmes.
 */

import mongoose, { Schema, Document } from "mongoose";
import { IProblem } from "./problem";

/**
 * Interface décrivant la structure d'un document niveau
 * @interface ILevel
 * @extends Document
 */
export interface ILevel extends Document {
  /** Pourcentage de progression dans le niveau */
  progress: number;
  /** Identifiant numérique unique du niveau */
  _id: number;
  /** Titre du niveau */
  title: string;
  /** Description des apprentissages du niveau */
  description: string;
  /** Liste des objectifs pédagogiques */
  objectives: string[];
  /** Ordre d'affichage du niveau dans le parcours */
  order: number;
  /** Prérequis pour accéder au niveau */
  requirements: {
    /** Progression minimale requise dans le niveau précédent (0-100) */
    previousLevelProgress: number;
  };
  /** Liste des problèmes associés au niveau */
  problems: IProblem[];
  /** Date de création */
  createdAt: Date;
  /** Date de dernière modification */
  updatedAt: Date;
}

/**
 * Schéma Mongoose pour les niveaux
 * Définit la structure et les validations des documents niveau
 */
const levelSchema = new Schema<ILevel>(
  {
    // ID numérique unique pour faciliter l'ordre et les références
    _id: {
      type: Number,
      required: true,
    },
    // Titre descriptif du niveau
    title: {
      type: String,
      required: true,
    },
    // Description détaillée des apprentissages
    description: {
      type: String,
      required: true,
    },
    // Liste des objectifs pédagogiques à atteindre
    objectives: [
      {
        type: String,
        required: true,
      },
    ],
    // Ordre d'affichage unique dans le parcours
    order: {
      type: Number,
      required: true,
      unique: true,
    },
    // Prérequis pour débloquer le niveau
    requirements: {
      // Progression minimale requise (pourcentage)
      previousLevelProgress: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
        default: 100,
      },
    },
  },
  {
    timestamps: true, // Active les timestamps automatiques
  }
);

/**
 * Modèle Mongoose pour les niveaux
 * Réutilise le modèle existant s'il existe déjà, sinon en crée un nouveau
 *
 * @example
 * // Création d'un nouveau niveau
 * const newLevel = await Level.create({
 *   _id: 1,
 *   title: "Les Variables",
 *   description: "Introduction aux variables",
 *   objectives: ["Comprendre les types", "Déclarer des variables"],
 *   order: 1,
 *   requirements: { previousLevelProgress: 100 }
 * });
 *
 * @example
 * // Récupération des niveaux ordonnés
 * const levels = await Level.find().sort({ order: 1 });
 */
export const Level =
  mongoose.models.Level || mongoose.model<ILevel>("Level", levelSchema);
