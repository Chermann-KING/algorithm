import React from "react";
import CodeExecutor from "./CodeExecutor";
import { getJavaScriptSolution } from "@/lib/solutions/getSolution";

interface JavaScriptSolutionProps {
  problemId: string;
}

export default function JavaScriptSolution({
  problemId,
}: JavaScriptSolutionProps) {
  const solution = getJavaScriptSolution(problemId);

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
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Code JavaScript
        </h3>

        <div className="relative">
          <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
            <code className="font-mono">{solution.code}</code>
          </pre>
        </div>
      </div>

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

      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Exécution du code
        </h3>
        <CodeExecutor code={solution.code} />
      </div>
    </div>
  );
}
