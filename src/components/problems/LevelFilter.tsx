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
    <div className="flex gap-2 flex-wrap">
      <button
        onClick={() => onLevelChange(null)}
        className={`px-4 py-2 text-sm rounded-lg transition-colors ${
          selectedLevel === null
            ? "bg-primary text-primary-foreground"
            : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground"
        }`}
      >
        <span>Tous les niveaux</span>
      </button>
      {problems.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            selectedLevel === level.id
              ? "bg-primary text-primary-foreground"
              : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground"
          }`}
        >
          <span>Niveau {level.id}</span>
        </button>
      ))}
    </div>
  );
}
