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
    <div className="space-y-2 sm:space-y-4">
      <button
        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg transition-colors"
        onClick={executeCode}
      >
        Exécuter le code
      </button>
      <div className="bg-card text-primary font-mono text-xs sm:text-sm p-3 sm:p-4 rounded-lg min-h-[80px] sm:min-h-[100px] whitespace-pre-wrap overflow-x-auto border border-border">
        {output}
      </div>
    </div>
  );
}
