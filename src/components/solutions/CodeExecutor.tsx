"use client";

import React, { useState } from "react";

interface CodeExecutorProps {
  code: string;
}

export default function CodeExecutor({ code }: CodeExecutorProps) {
  const [output, setOutput] = useState<string>(
    "// La sortie du code s'affichera ici"
  );

  const executeCode = () => {
    try {
      // Capture console.log
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      // Exécute le code
      // eslint-disable-next-line no-new-func
      const wrappedCode = `
        try {
          ${code}
          if (typeof exemple === 'function') {
            exemple();
          }
        } catch (error) {
          throw error;
        }
      `;
      new Function(wrappedCode)();

      // Restaure console.log et affiche les résultats
      console.log = originalConsoleLog;
      setOutput(logs.join("\n") || "// Aucune sortie générée");
    } catch (error) {
      setOutput(
        `Erreur: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  return (
    <div className="space-y-4">
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        onClick={executeCode}
      >
        Exécuter le code
      </button>
      <div className="bg-black text-green-400 p-4 rounded-lg min-h-[100px] font-mono whitespace-pre-wrap">
        {output}
      </div>
    </div>
  );
}
