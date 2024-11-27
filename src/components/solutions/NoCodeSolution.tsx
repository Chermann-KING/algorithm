import React from "react";

interface NoCodeSolutionProps {
  problemId: string;
}

export default function NoCodeSolution({ problemId }: NoCodeSolutionProps) {
  return (
    <div className="space-y-4">
      <div className="bg-card p-6 rounded-lg border border-border">
        <h3 className="text-lg font-semibold text-card-foreground mb-4">
          Algorithme en Flowgorithm
        </h3>

        {/* Zone pour afficher le diagramme de flux */}
        <div className="relative aspect-video w-full bg-background border border-border shadow-sm rounded-lg flex items-center justify-center">
          {/* Pour le moment, affichons un placeholder */}
          <div className="text-muted-foreground text-center">
            <p>Diagramme Flowgorithm pour {problemId}</p>
            <p className="text-sm">Le diagramme sera bientôt disponible</p>
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold text-card-foreground">
          Explication de l&apos;algorithme
        </h3>
        <div className="bg-card p-6 rounded-lg border border-border">
          <p className="text-muted-foreground">
            L&apos;explication détaillée de l&apos;algorithme sera affichée ici,
            étape par étape.
          </p>
        </div>
      </div>
    </div>
  );
}
