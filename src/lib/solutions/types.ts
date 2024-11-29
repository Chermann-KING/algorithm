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

// Solution Flowgorithm avec support des images
export interface FlowgorithmSolution extends BaseSolution {
  code: string; // Description textuelle de l'algorithme
  diagram?: string; // Le diagramme Mermaid (optionnel)
  imagePath?: string; // Chemin vers l'image du flowchart (ex: "level1/exo01.png")
}

export type SolutionRecord<T> = Record<string, T>;
