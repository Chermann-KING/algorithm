/**
 * Importation des dépendances nécessaires
 * - React : Pour la création du composant
 * - CodeExecutor : Composant d'exécution de code JavaScript
 * - findJavaScriptSolution : Fonction de recherche de solution JavaScript
 */
import React from "react";
import CodeExecutor from "./CodeExecutor";
import { findJavaScriptSolution } from "@/lib/solutions/getSolution";

/**
 * Interface définissant les propriétés du composant JavaScriptSolution
 * @property problemId - Identifiant unique du problème dont on veut afficher la solution JavaScript
 */
interface JavaScriptSolutionProps {
  problemId: string;
}

/**
 * Composant JavaScriptSolution
 * Affiche la solution JavaScript d'un problème algorithmique avec :
 * - Le code source JavaScript
 * - Une explication détaillée du code
 * - Un exécuteur de code interactif
 *
 * @param problemId - L'identifiant du problème à afficher
 * @returns Un composant React structuré en trois sections
 */
export default function JavaScriptSolution({
  problemId,
}: JavaScriptSolutionProps) {
  // Recherche la solution JavaScript correspondant à l'ID du problème
  const solution = findJavaScriptSolution(problemId);

  // Affiche un message si aucune solution n'est trouvée
  if (!solution) {
    return (
      <div className="text-center py-4">
        <p className="text-muted-foreground">
          Solution en cours de développement
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Section du code source */}
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Code JavaScript
        </h3>

        {/* Affichage du code avec coloration syntaxique */}
        <div className="relative">
          <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
            <code className="font-mono">{solution.code}</code>
          </pre>
        </div>
      </div>

      {/* Section des explications */}
      <div className="prose max-w-none">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
          Explication du code
        </h3>
        <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
          <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line">
            {solution.explanation}
          </p>
        </div>
      </div>

      {/* Section d'exécution interactive */}
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Exécution du code
        </h3>
        <CodeExecutor code={solution.code} />
      </div>
    </div>
  );
}
