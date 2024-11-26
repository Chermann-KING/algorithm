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
    <div className="space-y-4">
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Code JavaScript</h3>

        <div className="relative">
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-lg font-semibold">Explication du code</h3>
        <div className="bg-gray-50 p-6 rounded-lg">
          <p className="text-gray-600">
            L&apos;explication détaillée du code JavaScript sera affichée ici,
            avec les concepts clés utilisés.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">Exécution du code</h3>
        <CodeExecutor code={code} />
      </div>
    </div>
  );
}
