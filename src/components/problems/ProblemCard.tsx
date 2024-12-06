import Link from "next/link";

/**
 * Interface définissant la structure d'un problème
 * @property id - Identifiant unique du problème
 * @property title - Titre du problème
 * @property description - Description détaillée du problème
 * @property difficulty - Niveau de difficulté (facile/moyen/difficile)
 */
interface ProblemCardProps {
  problem: {
    id: string;
    title: string;
    description: string;
    difficulty: "facile" | "moyen" | "dificile";
  };
  level: number;
}

/**
 * Composant ProblemCard
 * Carte cliquable affichant les informations d'un problème d'algorithme
 *
 * Caractéristiques :
 * - Lien vers la page détaillée du problème
 * - Indication visuelle de la difficulté
 * - Support du mode sombre
 * - Design responsive
 *
 * @param {ProblemCardProps} props - Les propriétés du composant
 */
export default function ProblemCard({ problem, level }: ProblemCardProps) {
  /**
   * Configuration des couleurs selon la difficulté
   * Inclut des variantes pour le mode sombre
   */
  const difficultyColor = {
    facile:
      "bg-green-100/80 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    moyen:
      "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    dificile: "bg-red-100/80 text-red-800 dark:bg-red-800/20 dark:text-red-300",
  };

  return (
    <Link href={`/levels/${level}/${problem.id}`}>
      <div className="p-4 sm:p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
        {/* En-tête avec titre et badge de difficulté */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
          {/* Titre et niveau */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base sm:text-lg font-semibold text-card-foreground truncate">
              {problem.title}{" "}
              <span className="text-muted-foreground text-sm">• n{level}</span>
            </h3>
          </div>

          {/* Badge de difficulté */}
          <span
            className={`self-start px-2 py-1 rounded-full text-xs sm:text-sm whitespace-nowrap ${
              difficultyColor[problem.difficulty]
            }`}
          >
            {problem.difficulty}
          </span>
        </div>

        {/* Description du problème */}
        <p className="text-sm text-muted-foreground line-clamp-2 sm:line-clamp-none">
          {problem.description}
        </p>
      </div>
    </Link>
  );
}
