import React from "react";

interface NoCodeSolutionProps {
  problemId: string;
}

export default function NoCodeSolution({ problemId }: NoCodeSolutionProps) {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Algorithme en Flowgorithm
        </h3>

        {/* Zone pour afficher le diagramme de flux */}
        <div className="relative aspect-video w-full bg-white shadow-inner rounded-lg flex items-center justify-center">
          {/* Pour le moment, affichons un placeholder */}
          <div className="text-gray-400 text-center">
            <p>Diagramme Flowgorithm pour {problemId}</p>
            <p className="text-sm">Le diagramme sera bientôt disponible</p>
          </div>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold">
          Explication de l&apos;algorithme
        </h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600">
            L&apos;explication détaillée de l&apos;algorithme sera affichée ici,
            étape par étape.
          </p>
        </div>
      </div>
    </div>
  );
}
