/**
 * Modèle de données pour les problèmes d'algorithme
 * @module models/problem
 *
 * Définit le schéma Mongoose pour les problèmes, incluant leur contenu,
 * versions, solutions, tests et historique des modifications.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose, { Schema } from "mongoose";
import { Difficulty } from "@/types/problem";

/**
 * Interface décrivant la structure d'un document problème
 * @interface IProblem
 * @extends Document
 */
export interface IProblem extends Document {
  /** Status de complétion (utilisé pour le mapping avec le front) */
  completed: unknown;
  /** Identifiant MongoDB unique */
  _id: Schema.Types.ObjectId;
  /** Slug URL-friendly du problème */
  slug: string;
  /** Code de référence interne unique */
  code: string;
  /** ID du niveau parent */
  levelId: number;
  /** Titre du problème */
  title: string;
  /** Description détaillée du problème */
  description: string;
  /** Niveau de difficulté */
  difficulty: Difficulty;
  /** Ordre d'affichage dans le niveau */
  order: number;
  /** Numéro de version actuel */
  version: number;
  /** Statut de publication */
  status: "draft" | "published" | "archived";
  /** Historique des modifications */
  history: {
    version: number;
    title: string;
    description: string;
    modifiedAt: Date;
    modifiedBy: Schema.Types.ObjectId;
  }[];
  /** Cas de tests pour la validation */
  testCases: {
    version: number;
    cases: {
      input: any;
      expectedOutput: any;
    }[];
  };
  /** Solutions de référence */
  solutions: {
    version: number;
    /** Solution en pseudo-code ou flowchart */
    nocode: {
      explanation: string;
      code: string;
      svg?: {
        content: string;
        contentType: string;
      };
    };
    /** Solution en JavaScript */
    javascript: {
      explanation: string;
      code: string;
    };
  };
  /** Date de création */
  createdAt: Date;
  /** Date de dernière modification */
  updatedAt: Date;
}

/**
 * Schéma Mongoose pour les problèmes
 * Définit la structure et les validations des documents problème
 */
const problemSchema = new Schema<IProblem>(
  {
    slug: { type: String, required: true, unique: true },
    code: { type: String, required: true },
    levelId: { type: Number, required: true, ref: "Level" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    difficulty: {
      type: String,
      enum: ["facile", "moyen", "dificile"],
      required: true,
    },
    order: { type: Number, required: true },
    version: { type: Number, default: 1 },
    status: {
      type: String,
      enum: ["draft", "published", "archived"],
      default: "published",
    },
    history: [
      {
        version: Number,
        title: String,
        description: String,
        modifiedAt: Date,
        modifiedBy: { type: Schema.Types.ObjectId, ref: "User", null: true },
      },
    ],
    testCases: {
      version: Number,
      cases: [
        {
          input: Schema.Types.Mixed,
          expectedOutput: Schema.Types.Mixed,
          description: String,
        },
      ],
    },
    solutions: {
      version: Number,
      nocode: {
        explanation: String,
        code: String,
        svg: {
          content: String,
          contentType: String,
        },
      },
      javascript: {
        explanation: String,
        code: String,
      },
    },
  },
  {
    timestamps: true, // Active les timestamps automatiques
  }
);

/**
 * Index composé pour optimiser les requêtes par niveau et ordre
 * Permet des requêtes efficaces pour l'affichage ordonné des problèmes
 */
problemSchema.index({ levelId: 1, order: 1 });

/**
 * Modèle Mongoose pour les problèmes
 * Réutilise le modèle existant s'il existe déjà, sinon en crée un nouveau
 */
export const Problem =
  mongoose.models.Problem || mongoose.model<IProblem>("Problem", problemSchema);
