"use client";

import { useState } from "react";
import ProblemList from "@/components/problems/ProblemList";
import LevelFilter from "@/components/problems/LevelFilter";
import DifficultyFilter from "@/components/problems/DifficultyFilter";

/**
 * Type définissant les niveaux de difficulté possibles
 * null représente "toutes les difficultés"
 */
type Difficulty = "facile" | "moyen" | "dificile" | null;

/**
 * Page d'accueil de l'application Algorithm
 *
 * Fonctionnalités principales :
 * - Filtrage des problèmes par niveau
 * - Filtrage par difficulté
 * - Affichage de la liste des problèmes filtrée
 *
 * Architecture :
 * 1. En-tête avec titre et description
 * 2. Filtres interactifs
 * 3. Liste des problèmes filtrée
 */
export default function Home() {
  /**
   * États pour gérer les filtres
   * @selectedLevel - Le niveau actuellement sélectionné (null pour tous)
   * @selectedDifficulty - La difficulté actuellement sélectionnée (null pour toutes)
   */
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<Difficulty>(null);

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* En-tête de la page */}
      <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          Bienvenue sur Algorithm
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Apprenez l&apos;algorithme étape par étape avec des solutions
          visuelles.
        </p>
      </div>

      {/* Section des filtres */}
      <div className="flex flex-col gap-4 sm:gap-5 mb-6 sm:mb-8">
        {/* Filtre par niveau */}
        <LevelFilter
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
        />
        {/* Filtre par difficulté */}
        <DifficultyFilter
          selectedDifficulty={selectedDifficulty}
          onDifficultyChange={setSelectedDifficulty}
        />
      </div>

      {/* Liste des problèmes filtrée */}
      <ProblemList
        selectedLevel={selectedLevel}
        selectedDifficulty={selectedDifficulty}
      />
    </div>
  );
}
