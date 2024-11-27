"use client";

import { useState } from "react";
import ProblemList from "@/components/problems/ProblemList";
import LevelFilter from "@/components/problems/LevelFilter";

export default function Home() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur Algorithm</h1>
      <p className="text-lg text-gray-700 mb-8">
        Apprenez l&apos;algorithme étape par étape avec des solutions visuelles.
      </p>

      <LevelFilter
        selectedLevel={selectedLevel}
        onLevelChange={setSelectedLevel}
      />

      <ProblemList selectedLevel={selectedLevel} />
    </div>
  );
}
