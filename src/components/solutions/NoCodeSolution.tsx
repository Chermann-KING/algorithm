import React from "react";
import { getFlowgorithmSolution } from "@/lib/solutions/getSolution";

interface NoCodeSolutionProps {
  problemId: string;
}

export default function NoCodeSolution({ problemId }: NoCodeSolutionProps) {
  const solution = getFlowgorithmSolution(problemId);

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
    <div className="space-y-3 sm:space-y-4">
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Diagramme Flowgorithm
        </h3>

        <div className="bg-background rounded-lg p-4 overflow-auto">
          <div
            className="min-w-[800px] h-auto"
            dangerouslySetInnerHTML={{ __html: solution.svg }}
          />
        </div>
      </div>

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
