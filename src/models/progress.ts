/**
 * Modèle de données pour la progression des utilisateurs
 * @module models/progress
 *
 * Définit le schéma Mongoose pour suivre la progression des utilisateurs
 * à travers les problèmes, incluant leurs tentatives, solutions et statistiques.
 */

import mongoose, { Schema, Document } from "mongoose";

/**
 * Interface décrivant la structure d'un document de progression
 * @interface IProgress
 * @extends Document
 */
export interface IProgress extends Document {
  /** ID de l'utilisateur lié à cette progression */
  userId: Schema.Types.ObjectId;
  /** ID du problème concerné */
  problemId: Schema.Types.ObjectId;
  /** Version du problème au moment de la résolution */
  problemVersion: number;
  /** ID du niveau contenant le problème */
  levelId: number;
  /** Indique si le problème a été complété */
  completed: boolean;
  /** Solution validée pour le problème */
  solution?: {
    version: number;
    nocode?: string;
    javascript?: string;
  };
  /** Liste des tentatives de résolution */
  attempts: Array<{
    date: Date;
    solutionType: "nocode" | "javascript";
    code: string;
    success: boolean;
    feedback?: string;
  }>;
  /** Date de la dernière tentative */
  lastAttempt: Date;
  /** Date de complétion du problème */
  completedAt?: Date;
  /** Date de création de l'enregistrement */
  createdAt: Date;
  /** Date de dernière modification */
  updatedAt: Date;
}

/**
 * Schéma Mongoose pour la progression
 * Définit la structure et les validations des documents de progression
 */
const progressSchema = new Schema<IProgress>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    problemId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Problem",
    },
    problemVersion: {
      type: Number,
      required: true,
    },
    levelId: {
      type: Number,
      required: true,
      ref: "Level",
    },
    completed: {
      type: Boolean,
      default: false,
    },
    solution: {
      version: {
        type: Number,
        required: true,
        default: 1,
      },
      nocode: String,
      javascript: String,
    },
    attempts: [
      {
        date: {
          type: Date,
          default: Date.now,
        },
        solutionType: {
          type: String,
          enum: ["nocode", "javascript"],
          required: true,
        },
        code: {
          type: String,
          required: true,
        },
        success: {
          type: Boolean,
          required: true,
        },
        feedback: String,
      },
    ],
    lastAttempt: {
      type: Date,
      default: Date.now,
    },
    completedAt: Date,
  },
  {
    timestamps: true, // Active les timestamps automatiques
  }
);

/**
 * Index pour optimiser les requêtes
 * Crée un index unique composé pour éviter les doublons de progression
 */
progressSchema.index({ userId: 1, levelId: 1, problemId: 1 }, { unique: true });

/**
 * Index pour les requêtes de statistiques
 * Optimise les requêtes de filtrage et d'agrégation
 */
progressSchema.index({ userId: 1, completed: 1 });
progressSchema.index({ levelId: 1, completed: 1 });

/**
 * Middleware pre-save
 * Met à jour automatiquement la date de dernière tentative
 */
progressSchema.pre("save", function (next) {
  if (this.isModified("attempts")) {
    this.lastAttempt = new Date();
  }
  next();
});

/**
 * Méthode pour ajouter une nouvelle tentative
 * Gère également la mise à jour du statut de complétion
 *
 * @param {string} solutionType - Type de solution ("nocode" ou "javascript")
 * @param {string} code - Code de la solution
 * @param {boolean} success - Indique si la tentative est réussie
 * @param {string} [feedback] - Feedback optionnel sur la tentative
 * @returns {Promise<IProgress>} Document de progression mis à jour
 */
progressSchema.methods.addAttempt = async function (
  solutionType: "nocode" | "javascript",
  code: string,
  success: boolean,
  feedback?: string
) {
  this.attempts.push({
    date: new Date(),
    solutionType,
    code,
    success,
    feedback,
  });

  if (success && !this.completed) {
    this.completed = true;
    this.completedAt = new Date();
    this.solution = {
      version: this.problemVersion,
      [solutionType]: code,
    };
  }

  return this.save();
};

/**
 * Virtual pour le nombre total de tentatives
 * @virtual
 */
progressSchema.virtual("totalAttempts").get(function () {
  return this.attempts.length;
});

/**
 * Virtual pour le taux de réussite
 * Calcule le pourcentage de tentatives réussies
 * @virtual
 */
progressSchema.virtual("successRate").get(function (this: IProgress) {
  const attempts = this.attempts || [];
  if (attempts.length === 0) return 0;

  const successfulAttempts = attempts.reduce(
    (count, attempt) => count + (attempt.success ? 1 : 0),
    0
  );

  return (successfulAttempts / attempts.length) * 100;
});

/**
 * Modèle Mongoose pour la progression
 * Réutilise le modèle existant s'il existe déjà, sinon en crée un nouveau
 */
export const Progress =
  mongoose.models.Progress ||
  mongoose.model<IProgress>("Progress", progressSchema);
