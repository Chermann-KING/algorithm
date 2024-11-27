"use client";

import { CircleSlash2, BicepsFlexed, Laugh, Meh } from "lucide-react";

type Difficulty = "facile" | "moyen" | "dificile" | null;

interface DifficultyFilterProps {
  selectedDifficulty: Difficulty;
  onDifficultyChange: (difficulty: Difficulty) => void;
}

export default function DifficultyFilter({
  selectedDifficulty,
  onDifficultyChange,
}: DifficultyFilterProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onDifficultyChange(null)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedDifficulty === null
            ? "bg-muted text-foreground"
            : "bg-background hover:bg-muted text-muted-foreground"
        }`}
      >
        <CircleSlash2 className="h-4 w-4" />
        Toutes les difficultés
      </button>
      <button
        onClick={() => onDifficultyChange("facile")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedDifficulty === "facile"
            ? "bg-green-100/80 text-green-800 dark:bg-green-800/20 dark:text-green-300"
            : "bg-background hover:bg-green-100/50 text-muted-foreground dark:hover:bg-green-800/10"
        }`}
      >
        <Laugh className="h-4 w-4" />
        Facile
      </button>
      <button
        onClick={() => onDifficultyChange("moyen")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedDifficulty === "moyen"
            ? "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300"
            : "bg-background hover:bg-yellow-100/50 text-muted-foreground dark:hover:bg-yellow-800/10"
        }`}
      >
        <Meh className="h-4 w-4" />
        Moyen
      </button>
      <button
        onClick={() => onDifficultyChange("dificile")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedDifficulty === "dificile"
            ? "bg-red-100/80 text-red-800 dark:bg-red-800/20 dark:text-red-300"
            : "bg-background hover:bg-red-100/50 text-muted-foreground dark:hover:bg-red-800/10"
        }`}
      >
        <BicepsFlexed className="h-4 w-4" />
        Difficile
      </button>
    </div>
  );
}
