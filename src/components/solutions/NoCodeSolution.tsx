/**
 * Importation des dépendances nécessaires pour le composant
 * - dynamic : Pour le chargement dynamique du composant Mermaid
 * - ImageZoom : Composant personnalisé de visualisation d'image
 * - findFlowgorithmSolution : Fonction de recherche de solution dans notre base de données
 */
import dynamic from "next/dynamic";
import ImageZoom from "@/components/ui/ImageZoom";
import { findFlowgorithmSolution } from "@/lib/solutions/getSolution";

/**
 * Chargement dynamique du composant MermaidDiagram
 * - ssr: false -> Désactive le rendu côté serveur pour éviter les problèmes de compatibilité
 * - loading -> Composant de fallback pendant le chargement
 */
const MermaidDiagram = dynamic(() => import("@/components/ui/Mermaid"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center p-8">
      <p className="text-muted-foreground">Chargement du diagramme...</p>
    </div>
  ),
});

/**
 * Interface définissant les propriétés du composant NoCodeSolution
 * @property problemId - Identifiant unique du problème à afficher
 */
interface NoCodeSolutionProps {
  problemId: string;
}

/**
 * Composant NoCodeSolution
 * Affiche la solution NOCODE d'un problème algorithmique avec :
 * - Un diagramme (image SVG ou Mermaid)
 * - Une explication textuelle de l'algorithme
 *
 * Gère trois cas possibles :
 * 1. Solution avec image SVG -> Utilise ImageZoom
 * 2. Solution avec diagramme Mermaid -> Utilise MermaidDiagram
 * 3. Pas de solution -> Affiche un message approprié
 */
export default function NoCodeSolution({ problemId }: NoCodeSolutionProps) {
  // Recherche de la solution correspondant à l'ID du problème
  const solution = findFlowgorithmSolution(problemId);

  // Affichage d'un message si aucune solution n'est trouvée
  if (!solution) {
    return (
      <div className="text-center py-4">
        <p className="text-muted-foreground">
          Diagramme de solution en cours de développement
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {/* Section du diagramme */}
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Diagramme de l&apos;algorithme
        </h3>

        <div className="bg-background rounded-lg p-4">
          {/* Affichage conditionnel selon le type de diagramme disponible */}
          {solution.imagePath ? (
            // Cas 1: Image SVG avec zoom
            <div className="relative h-[600px] w-full">
              <ImageZoom
                src={`/flowcharts/${solution.imagePath}`}
                alt={`Diagramme pour ${problemId}`}
              />
            </div>
          ) : solution.diagram ? (
            // Cas 2: Diagramme Mermaid
            <MermaidDiagram chart={solution.diagram} />
          ) : (
            // Cas 3: Aucun diagramme disponible
            <p className="text-muted-foreground text-center py-4">
              Diagramme non disponible
            </p>
          )}
        </div>
      </div>

      {/* Section des explications */}
      <div className="prose max-w-none">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
          Explication de l&apos;algorithme
        </h3>
        <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
          <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line">
            {solution.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}
