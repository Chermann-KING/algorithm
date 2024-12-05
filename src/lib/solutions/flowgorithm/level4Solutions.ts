import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level4Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo22: {
    problemId: "exo22",
    explanation: `Manipulation basique d'un tableau :
1. Remplissage : Saisie itérative de 6 entiers
2. Affichage : Parcours et présentation de tous les éléments
3. Utilisation : Deux boucles distinctes pour saisie/affichage`,
    code: "L'algorithme utilise un tableau pour stocker et afficher des valeurs.",
    imagePath: "level4/flowgorithm-level4-exo22.svg",
  },
  exo23: {
    problemId: "exo23",
    explanation: `Ce diagramme montre comment construire une suite géométrique :

1. Configuration :
  - Initialisation d'un tableau de taille 11
  - Valeur initiale de 1
  - Raison de 2 (multiplication)

2. Processus Itératif :
  - Stockage de la valeur courante
  - Calcul de la valeur suivante (×2)
  - Arrêt quand 1024 est atteint

3. Résultat :
  - Suite complète : 1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024`,
    code: "L'algorithme génère les puissances de 2 dans un tableau.",
    imagePath: "level3/flowgorithm-level3-exo23.svg",
  },
};
