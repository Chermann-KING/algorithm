"use client";

import React, { useState } from "react";

/**
 * Interface définissant les propriétés du composant CodeExecutor
 * @property {string} code - Le code JavaScript à exécuter
 */
interface CodeExecutorProps {
  code: string;
}

/**
 * Composant CodeExecutor
 * Permet l'exécution sécurisée de code JavaScript et l'affichage de sa sortie.
 *
 * Fonctionnalités :
 * - Exécution de code JavaScript
 * - Capture des sorties console.log
 * - Gestion des erreurs
 * - Interface utilisateur interactive
 *
 * @param {CodeExecutorProps} props - Les propriétés du composant
 */
export default function CodeExecutor({ code }: CodeExecutorProps) {
  // État pour stocker la sortie d'exécution
  const [output, setOutput] = useState<string>(
    "// La sortie du code s'affichera ici"
  );

  /**
   * Exécute le code JavaScript fourni
   *
   * Processus :
   * 1. Capture les appels à console.log
   * 2. Exécute le code dans un environnement contrôlé
   * 3. Gère les erreurs potentielles
   * 4. Affiche les résultats
   */
  const executeCode = () => {
    try {
      // Système de capture des console.log
      const logs: string[] = [];
      const originalConsoleLog = console.log;
      console.log = (...args) => {
        logs.push(args.join(" "));
      };

      // Préparation et exécution sécurisée du code
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

      // Restauration de console.log et affichage des résultats
      console.log = originalConsoleLog;
      setOutput(logs.join("\n") || "// Aucune sortie générée");
    } catch (error) {
      // Gestion et affichage des erreurs
      setOutput(
        `Erreur: ${error instanceof Error ? error.message : String(error)}`
      );
    }
  };

  return (
    <div className="space-y-2 sm:space-y-4">
      {/* Bouton d'exécution */}
      <button
        className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-3 sm:px-4 py-2 text-sm sm:text-base rounded-lg transition-colors"
        onClick={executeCode}
      >
        Exécuter le code
      </button>

      {/* Zone d'affichage des résultats */}
      <div className="bg-card text-primary font-mono text-xs sm:text-sm p-3 sm:p-4 rounded-lg min-h-[80px] sm:min-h-[100px] whitespace-pre-wrap overflow-x-auto border border-border">
        {output}
      </div>
    </div>
  );
}
