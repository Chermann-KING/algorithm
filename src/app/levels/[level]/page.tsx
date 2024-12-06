import { notFound } from "next/navigation";
import ProblemCard from "@/components/problems/ProblemCard";
import { problems } from "@/lib/problems/problemsData";

/**
 * Interface pour les paramètres de la page de niveau
 * @property level - Identifiant du niveau à afficher
 */
interface LevelPageProps {
  params: {
    level: string;
  };
}

/**
 * Page de niveau
 * Affiche tous les problèmes d'un niveau spécifique
 *
 * Fonctionnalités :
 * - Affichage du titre et de la description du niveau
 * - Liste des problèmes en grille responsive
 * - Gestion des niveaux inexistants
 *
 * @param {LevelPageProps} props - Propriétés contenant l'identifiant du niveau
 */
export default function LevelPage({ params }: LevelPageProps) {
  // Conversion et recherche du niveau
  const levelNumber = parseInt(params.level);
  const levelData = problems.find((p) => p.id === levelNumber);

  // Redirection 404 si le niveau n'existe pas
  if (!levelData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* En-tête de la page */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
          Niveau {levelNumber}
        </h1>
        <h2 className="text-lg sm:text-xl text-muted-foreground">
          {levelData.title}
        </h2>
      </div>

      {/* Grille des problèmes
         - 1 colonne sur mobile
         - 2 colonnes sur tablette
         - 3 colonnes sur desktop */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {levelData.problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} level={levelNumber} />
        ))}
      </div>
    </div>
  );
}
