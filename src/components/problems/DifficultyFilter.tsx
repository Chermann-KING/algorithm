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
            ? "bg-gray-200 text-gray-800"
            : "bg-gray-100 hover:bg-gray-200 text-gray-600"
        }`}
      >
        <CircleSlash2 className="h-4 w-4" />
        Toutes les difficultés
      </button>
      <button
        onClick={() => onDifficultyChange("facile")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedDifficulty === "facile"
            ? "bg-green-100 text-green-800"
            : "bg-gray-100 hover:bg-green-50 text-gray-600"
        }`}
      >
        <Laugh className="h-4 w-4" />
        Facile
      </button>
      <button
        onClick={() => onDifficultyChange("moyen")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedDifficulty === "moyen"
            ? "bg-yellow-100 text-yellow-800"
            : "bg-gray-100 hover:bg-yellow-50 text-gray-600"
        }`}
      >
        <Meh className="h-4 w-4" />
        Moyen
      </button>
      <button
        onClick={() => onDifficultyChange("dificile")}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
          selectedDifficulty === "dificile"
            ? "bg-red-100 text-red-800"
            : "bg-gray-100 hover:bg-red-50 text-gray-600"
        }`}
      >
        <BicepsFlexed className="h-4 w-4" />
        Difficile
      </button>
    </div>
  );
}
