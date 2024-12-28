/**
 * Client-side component pour l'affichage des niveaux et de la progression
 * @module app/(main)/levels/levels-client
 *
 * Composant React qui gère l'affichage et l'interaction avec les niveaux
 * du parcours d'apprentissage, incluant la progression globale et individuelle.
 */

"use client";

import { useState } from "react";
import { Level } from "@/types/level";
import { LevelCard } from "@/components/levels/LevelCard";

/**
 * Props du composant LevelsClient
 * @interface LevelsClientProps
 */
interface LevelsClientProps {
  /** Données initiales des niveaux fournies par le serveur */
  initialLevels: Level[];
}

/**
 * Composant client pour l'affichage des niveaux et de leur progression
 *
 * Affiche :
 * - Un en-tête avec la progression globale
 * - Une barre de progression
 * - La liste des niveaux sous forme de cartes
 *
 * @param {LevelsClientProps} props - Propriétés du composant
 * @param {Level[]} props.initialLevels - Données initiales des niveaux
 *
 * @example
 * // Dans un composant parent
 * <LevelsClient initialLevels={levelsData} />
 */
export function LevelsClient({ initialLevels }: LevelsClientProps) {
  // État local pour les niveaux
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [levels, setLevels] = useState(initialLevels);

  /**
   * Calcul du nombre total d'exercices à travers tous les niveaux
   */
  const totalExercises = levels.reduce(
    (sum, level) => sum + level.problems.length,
    0
  );

  /**
   * Calcul du nombre d'exercices complétés
   */
  const completedExercises = levels.reduce(
    (sum, level) =>
      sum + level.problems.filter((problem) => problem.completed).length,
    0
  );

  /**
   * Calcul du pourcentage de progression globale
   */
  const globalProgress = (completedExercises / totalExercises) * 100;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* En-tête avec progression globale */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Parcours d&apos;apprentissage
        </h1>
        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium">Progression globale</span>
            <span className="text-sm text-muted-foreground">
              {completedExercises}/{totalExercises} exercices complétés
            </span>
          </div>
          {/* Barre de progression */}
          <div className="w-full bg-background rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full transition-all"
              style={{ width: `${globalProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Liste des niveaux */}
      <div className="grid gap-6">
        {levels.map((level, index) => (
          <LevelCard
            key={level.id}
            level={level}
            // Un niveau est déverrouillé s'il est le premier ou si le précédent est complété
            isUnlocked={index === 0 || levels[index - 1].progress === 100}
            // Progression du niveau précédent (100% pour le premier niveau)
            previousProgress={index > 0 ? levels[index - 1].progress : 100}
          />
        ))}
      </div>
    </div>
  );
}
