"use client";

import { problems } from "@/lib/problems/problemsData";

interface LevelFilterProps {
  selectedLevel: number | null;
  onLevelChange: (level: number | null) => void;
}

export default function LevelFilter({
  selectedLevel,
  onLevelChange,
}: LevelFilterProps) {
  return (
    <div className="flex gap-2 mb-8 flex-wrap">
      <button
        onClick={() => onLevelChange(null)}
        className={`px-4 py-2 rounded-lg ${
          selectedLevel === null
            ? "bg-blue-600 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
      >
        Tous les niveaux
      </button>
      {problems.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`px-4 py-2 rounded-lg ${
            selectedLevel === level.id
              ? "bg-blue-600 text-white"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Niveau {level.id}
        </button>
      ))}
    </div>
  );
}
