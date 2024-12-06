"use client";

import { CircleSlash2, BicepsFlexed, Laugh, Meh } from "lucide-react";

/**
 * Type définissant les niveaux de difficulté possibles
 * null représente "toutes les difficultés"
 */
type Difficulty = "facile" | "moyen" | "dificile" | null;

/**
 * Interface définissant les propriétés du filtre de difficulté
 * @property selectedDifficulty - La difficulté actuellement sélectionnée
 * @property onDifficultyChange - Callback appelé lors du changement de difficulté
 */
interface DifficultyFilterProps {
  selectedDifficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

/**
 * Composant DifficultyFilter
 * Barre de filtrage avec boutons interactifs pour sélectionner un niveau de difficulté
 *
 * Caractéristiques :
 * - Icônes visuelles pour chaque niveau
 * - Code couleur distinct par difficulté
 * - Support du mode sombre
 * - États interactifs (hover, active)
 *
 * Structure des boutons :
 * 1. Toutes les difficultés (gris)
 * 2. Facile (vert)
 * 3. Moyen (jaune)
 * 4. Difficile (rouge)
 *
 * @param {DifficultyFilterProps} props - Les propriétés du composant
 */
export default function DifficultyFilter({
  selectedDifficulty,
  onDifficultyChange,
}: DifficultyFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {/* Bouton "Toutes les difficultés" */}
      <button
        onClick={() => onDifficultyChange(null)}
        className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
          selectedDifficulty === null
            ? "bg-muted text-foreground" // État actif
            : "bg-background hover:bg-muted text-muted-foreground" // État inactif
        }`}
      >
        <CircleSlash2 className="h-4 w-4 shrink-0" />
        <span className="truncate">Toutes les difficultés</span>
      </button>

      {/* Bouton "Facile" */}
      <button
        onClick={() => onDifficultyChange("facile")}
        className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
          selectedDifficulty === "facile"
            ? "bg-green-100/80 text-green-800 dark:bg-green-800/20 dark:text-green-300"
            : "bg-background hover:bg-green-100/50 text-muted-foreground dark:hover:bg-green-800/10"
        }`}
      >
        <Laugh className="h-4 w-4 shrink-0" />
        <span>Facile</span>
      </button>

      {/* Bouton "Moyen" */}
      <button
        onClick={() => onDifficultyChange("moyen")}
        className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
          selectedDifficulty === "moyen"
            ? "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300"
            : "bg-background hover:bg-yellow-100/50 text-muted-foreground dark:hover:bg-yellow-800/10"
        }`}
      >
        <Meh className="h-4 w-4 shrink-0" />
        <span>Moyen</span>
      </button>

      {/* Bouton "Difficile" */}
      <button
        onClick={() => onDifficultyChange("dificile")}
        className={`flex items-center gap-2 px-4 py-2 text-sm rounded-lg transition-colors ${
          selectedDifficulty === "dificile"
            ? "bg-red-100/80 text-red-800 dark:bg-red-800/20 dark:text-red-300"
            : "bg-background hover:bg-red-100/50 text-muted-foreground dark:hover:bg-red-800/10"
        }`}
      >
        <BicepsFlexed className="h-4 w-4 shrink-0" />
        <span>Difficile</span>
      </button>
    </div>
  );
}
