"use client";

import { useState } from "react";
import ProblemList from "@/components/problems/ProblemList";
import LevelFilter from "@/components/problems/LevelFilter";
import DifficultyFilter from "@/components/problems/DifficultyFilter";

type Difficulty = "facile" | "moyen" | "dificile" | null;

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>(null);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Bienvenue sur Algorithm
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Apprenez l&apos;algorithme étape par étape avec des solutions
          visuelles.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-8">
        <LevelFilter
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />
        <DifficultyFilter
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
        />
      </div>

      <ProblemList
        selectedLevel={selectedLevel}
        selectedDifficulty={selectedDifficulty}
      />
    </div>
  );
}
