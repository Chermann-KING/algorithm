import { JavaScriptSolution, FlowgorithmSolution } from "./types";
import { level1Solutions as jsLevel1 } from "./javascript/level1Solutions";
import { level2Solutions as jsLevel2 } from "./javascript/level2Solutions";
import { level3Solutions as jsLevel3 } from "./javascript/level3Solutions";
import { level4Solutions as jsLevel4 } from "./javascript/level4Solutions";
import { level1Solutions as flowLevel1 } from "./flowgorithm/level1Solutions";
import { level2Solutions as flowLevel2 } from "./flowgorithm/level2Solutions";
import { level3Solutions as flowLevel3 } from "./flowgorithm/level3Solutions";
import { level4Solutions as flowLevel4 } from "./flowgorithm/level4Solutions";
import { problems } from "@/lib/problems/problemsData";

/** Type définissant la structure des solutions par niveau */
type SolutionsMap<T> = Record<number, Record<string, T>>;

/** Solutions JavaScript disponibles, indexées par niveau */
const javascriptSolutions: SolutionsMap<JavaScriptSolution> = {
  1: jsLevel1,
  2: jsLevel2,
  3: jsLevel3,
  4: jsLevel4,
  // Autres niveaux à ajouter
};

/** Solutions Flowgorithm disponibles, indexées par niveau */
const flowgorithmSolutions: SolutionsMap<FlowgorithmSolution> = {
  1: flowLevel1,
  2: flowLevel2,
  3: flowLevel3,
  4: flowLevel4,
  // Autres niveaux à ajouter
};

/**
 * Trouve le niveau correspondant à un ID de problème.
 * @param problemId - L'identifiant du problème (ex: "exo01")
 * @returns Le numéro du niveau contenant le problème, ou undefined si non trouvé
 */
function findLevelById(problemId: string): number | undefined {
  const level = problems.find((level) =>
    level.problems.some((problem) => problem.id === problemId)
  );
  return level?.id;
}

/**
 * Recherche la solution JavaScript pour un problème donné.
 * @param problemId - L'identifiant du problème
 * @returns La solution JavaScript ou undefined si non trouvée
 */
export function findJavaScriptSolution(
  problemId: string
): JavaScriptSolution | undefined {
  const level = findLevelById(problemId);
  return level ? javascriptSolutions[level]?.[problemId] : undefined;
}

/**
 * Recherche la solution Flowgorithm pour un problème donné.
 * @param problemId - L'identifiant du problème
 * @returns La solution Flowgorithm ou undefined si non trouvée
 */
export function findFlowgorithmSolution(
  problemId: string
): FlowgorithmSolution | undefined {
  const level = findLevelById(problemId);
  return level ? flowgorithmSolutions[level]?.[problemId] : undefined;
}
