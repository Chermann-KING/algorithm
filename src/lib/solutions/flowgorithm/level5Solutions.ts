import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level5Solutions: SolutionRecord<FlowgorithmSolution> = {
  "projet-juste-prix": {
    problemId: "projet-juste-prix",
    explanation: `Ce diagramme implémente un jeu du Juste Prix complet :

1. Configuration :
  - Trois niveaux de difficulté
  - Limite de 10 essais
  - Option de rejouer

2. Gameplay :
  - Validation des entrées
  - Compteur d'essais
  - Messages dynamiques
  - Intervalles adaptés au niveau

3. Fonctionnalités :
  - Génération nombre aléatoire selon niveau
  - Guidage du joueur (plus/moins)
  - Conditions de victoire/défaite`,
    code: "L'algorithme gère un jeu complet avec niveaux et rejeu.",
    imagePath: "level5/flowgorithm-projet-juste-prix.svg",
  },
};
