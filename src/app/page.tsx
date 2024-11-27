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
    <div className="container flex flex-col gap-5 mx-auto px-4 py-8">
      <div className=" flex flex-col gap-3 mb-4">
        <h1 className="text-4xl font-bold">Bienvenue sur Algorithm</h1>
        <p className="text-lg text-gray-700">
          Apprenez l&apos;algorithme étape par étape avec des solutions
          visuelles.
        </p>
      </div>

      <div className="flex flex-col gap-5">
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
