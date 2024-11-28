import { JavaScriptSolution, FlowgorithmSolution } from "./types";
import { level1Solutions as jsLevel1 } from "./javascript/level1Solutions";
import { level1Solutions as flowLevel1 } from "./flowgorithm/level1Solutions";

// Type pour les maps de solutions
type SolutionsMap<T> = Record<number, Record<string, T>>;

// Map de toutes les solutions JavaScript par niveau
const javascriptSolutions: SolutionsMap<JavaScriptSolution> = {
  1: jsLevel1,
  // On ajoutera les autres niveaux au fur et à mesure
  // 2: jsLevel2,
  // 3: jsLevel3,
  // etc.
};

// Map de toutes les solutions Flowgorithm par niveau
const flowgorithmSolutions: SolutionsMap<FlowgorithmSolution> = {
  1: flowLevel1,
  // On ajoutera les autres niveaux au fur et à mesure
  // 2: flowLevel2,
  // 3: flowLevel3,
  // etc.
};

// Helper pour obtenir le niveau à partir de l'ID du problème
function getLevelFromProblemId(problemId: string): number {
  const num = parseInt(problemId.replace("exo", ""));
  return Math.ceil(num / 6); // 6 problèmes par niveau
}

// Récupère la solution JavaScript pour un problème donné
export function getJavaScriptSolution(
  problemId: string
): JavaScriptSolution | undefined {
  const level = getLevelFromProblemId(problemId);
  return javascriptSolutions[level]?.[problemId];
}

// Récupère la solution Flowgorithm pour un problème donné
export function getFlowgorithmSolution(
  problemId: string
): FlowgorithmSolution | undefined {
  const level = getLevelFromProblemId(problemId);
  return flowgorithmSolutions[level]?.[problemId];
}
