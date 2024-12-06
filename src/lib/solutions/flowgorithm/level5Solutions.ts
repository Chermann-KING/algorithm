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
  "systeme-connexion": {
    problemId: "systeme-connexion",
    explanation: `Ce diagramme implémente un système de connexion sécurisé :

1. Configuration :
  - Mot de passe prédéfini
  - Compteur de tentatives
  - État de blocage du compte

2. Sécurité :
  - Maximum 3 tentatives
  - Blocage automatique
  - Messages adaptés

3. Utilisateur :
  - Suivi des tentatives restantes
  - Messages d'erreur clairs
  - Indication de blocage`,
    code: "L'algorithme gère les tentatives et le blocage du compte.",
    imagePath: "level5/flowgorithm-systeme-connexion.svg",
  },
};
