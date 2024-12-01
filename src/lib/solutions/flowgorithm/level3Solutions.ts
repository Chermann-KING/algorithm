import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level3Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo13: {
    problemId: "exo13",
    explanation: `Ce diagramme montre comment construire une table de multiplication :

1. Initialisation :
   - On choisit le nombre pour lequel on veut la table (ici 2)
   - On utilise un compteur qui va de 0 à 10

2. La boucle :
   - Elle permet de répéter le même calcul plusieurs fois
   - À chaque tour, on multiplie 2 par un nouveau nombre
   - On s'arrête quand on arrive à 10

3. Le calcul :
   - À chaque étape, on multiplie 2 par le compteur
   - Par exemple : 2 × 5 = 10

4. L'affichage :
   - On montre l'opération complète à chaque fois
   - L'utilisateur voit ainsi la progression de la table`,
    code: "L'algorithme utilise une boucle pour générer la table de multiplication de 2.",
    imagePath: "level3/flowgorithm-level3-exo13.svg",
  },
};
