import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level2Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo07: {
    problemId: "exo07",
    explanation: `Ce diagramme illustre les règles qui définissent une année bissextile :

1. Une année est bissextile si :
   - Elle est divisible par 4 (règle principale) ET non divisible par 100
   - OU si elle est divisible par 400 (exception à la règle)

2. L'opérateur modulo (%) est utilisé pour tester la divisibilité :
   - Si nombre % diviseur = 0, alors le nombre est divisible
   - Sinon, le reste nous indique qu'il n'est pas divisible

3. La logique combinée utilise ET/OU pour prendre la décision finale

Cette logique permet d'avoir des années bissextiles tous les 4 ans, sauf les années séculaires (sauf si divisibles par 400).`,
    code: "L'algorithme vérifie les conditions de divisibilité pour déterminer si une année est bissextile.",
    imagePath: "level2/flowgorithm-level2-exo07.svg",
  },
};
