/**
 * Importation des dépendances et composants nécessaires
 */
import ProblemCard from "./ProblemCard";
import { problems } from "@/lib/problems/problemsData";
import { useSearch } from "@/context/search-context";

/**
 * Interface définissant les propriétés du composant ProblemList
 * @property selectedLevel - Niveau sélectionné pour le filtrage (optionnel)
 * @property selectedDifficulty - Difficulté sélectionnée pour le filtrage (optionnel)
 */
interface ProblemListProps {
  selectedLevel: number | null;
  selectedDifficulty: "facile" | "moyen" | "dificile" | null;
}

/**
 * Composant ProblemList
 * Affiche une liste filtrée de problèmes d'algorithmes
 *
 * Fonctionnalités :
 * - Filtrage par niveau
 * - Filtrage par difficulté
 * - Recherche textuelle
 * - Affichage responsive en grid
 *
 * @param {ProblemListProps} props - Les propriétés du composant
 */
export default function ProblemList({
  selectedLevel,
  selectedDifficulty,
}: ProblemListProps) {
  // Récupération du terme de recherche depuis le contexte
  const { searchTerm } = useSearch();

  /**
   * Filtrage des problèmes selon les critères :
   * 1. Filtre par niveau sélectionné
   * 2. Transformation en liste plate
   * 3. Filtre par difficulté et terme de recherche
   * 4. Ajout de l'ID du niveau à chaque problème
   */
  const allProblems = problems
    // Filtre par niveau
    .filter((level) => (selectedLevel ? level.id === selectedLevel : true))
    // Aplatissement et filtrage détaillé
    .flatMap((level) =>
      level.problems
        .filter((problem) => {
          // Vérification de la difficulté
          const matchesDifficulty = selectedDifficulty
            ? problem.difficulty === selectedDifficulty
            : true;

          // Recherche dans le titre et la description
          const matchesSearch =
            searchTerm.trim() === ""
              ? true
              : problem.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                problem.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());

          // Combine les critères
          return matchesDifficulty && matchesSearch;
        })
        // Ajout de l'ID du niveau
        .map((problem) => ({
          ...problem,
          levelId: level.id,
        }))
    );

  /**
   * Affichage d'un message si aucun problème ne correspond aux critères
   */
  if (allProblems.length === 0) {
    return (
      <div className="text-center py-6 sm:py-8">
        <p className="text-muted-foreground text-sm sm:text-base">
          Aucun problème trouvé.
        </p>
      </div>
    );
  }

  /**
   * Rendu de la grille de problèmes
   * - Responsive : 1 colonne (mobile) -> 3 colonnes (desktop)
   * - Espacement adaptatif
   */
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
      {allProblems.map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          level={problem.levelId}
        />
      ))}
    </div>
  );
}
