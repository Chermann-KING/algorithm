"use client";

import { problems } from "@/lib/problems/problemsData";

/**
 * Interface définissant les propriétés du filtre de niveau
 * @property selectedLevel - Le niveau actuellement sélectionné (null pour tous les niveaux)
 * @property onLevelChange - Fonction callback appelée lors du changement de niveau
 */
interface LevelFilterProps {
  selectedLevel: number | null;
  onLevelChange: (level: number | null) => void;
}

/**
 * Composant LevelFilter
 * Barre de filtrage permettant de sélectionner un niveau spécifique ou tous les niveaux
 *
 * Caractéristiques :
 * - Boutons interactifs pour chaque niveau
 * - État actif/inactif visuellement distinct
 * - Support du mode responsive
 * - Feedback visuel au survol
 *
 * @param {LevelFilterProps} props - Les propriétés du composant
 */
export default function LevelFilter({
  selectedLevel,
  onLevelChange,
}: LevelFilterProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {/* Bouton "Tous les niveaux" */}
      <button
        onClick={() => onLevelChange(null)}
        className={`px-4 py-2 text-sm rounded-lg transition-colors ${
          // Styles conditionnels selon l'état de sélection
          selectedLevel === null
            ? "bg-primary text-primary-foreground" // État actif
            : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground" // État inactif
        }`}
      >
        <span>Tous les niveaux</span>
      </button>

      {/* Boutons pour chaque niveau disponible */}
      {problems.map((level) => (
        <button
          key={level.id}
          onClick={() => onLevelChange(level.id)}
          className={`px-4 py-2 text-sm rounded-lg transition-colors ${
            // Styles conditionnels selon l'état de sélection
            selectedLevel === level.id
              ? "bg-primary text-primary-foreground" // État actif
              : "bg-background hover:bg-muted text-muted-foreground hover:text-foreground" // État inactif
          }`}
        >
          <span>Niveau {level.id}</span>
        </button>
      ))}
    </div>
  );
}
