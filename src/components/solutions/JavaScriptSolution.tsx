import React from "react";
import CodeExecutor from "./CodeExecutor";

interface JavaScriptSolutionProps {
  problemId: string;
}

export default function JavaScriptSolution({
  problemId,
}: JavaScriptSolutionProps) {
  const code = `// Solution pour ${problemId}
function exemple() {
 // Le code de la solution sera affiché ici
 console.log("Solution en cours de développement");
}`;

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Code JavaScript
        </h3>

        <div className="relative">
          <pre className="bg-muted text-foreground p-3 sm:p-4 rounded-lg overflow-x-auto text-xs sm:text-sm">
            <code className="font-mono">{code}</code>
          </pre>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
          Explication du code
        </h3>
        <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
          <p className="text-sm sm:text-base text-muted-foreground">
            L&apos;explication détaillée du code JavaScript sera affichée ici,
            avec les concepts clés utilisés.
          </p>
        </div>
      </div>

      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Exécution du code
        </h3>
        <CodeExecutor code={code} />
      </div>
    </div>
  );
}
