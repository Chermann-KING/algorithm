// Types de base pour toute solution
interface BaseSolution {
  problemId: string;
  explanation: string;
}

// Solution JavaScript
export interface JavaScriptSolution extends BaseSolution {
  code: string;
  testCases?: {
    input: unknown[];
    expected: unknown;
    description?: string;
  }[];
}

// Solution Flowgorithm (maintenant avec Mermaid)
export interface FlowgorithmSolution extends BaseSolution {
  code: string; // Description textuelle de l'algorithme
  diagram: string; // Le diagramme en syntaxe Mermaid
}

// Type utilitaire pour stocker les solutions
export type SolutionRecord<T> = Record<string, T>;
