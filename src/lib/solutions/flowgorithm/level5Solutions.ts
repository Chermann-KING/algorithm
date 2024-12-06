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
  "pattern-etoiles": {
    problemId: "pattern-etoiles",
    explanation: `Ce diagramme crée un pattern triangulaire d'étoiles :

1. Validation :
  - Vérification nombre positif
  - Demande jusqu'à validité

2. Construction :
  - Boucle externe pour les lignes
  - Boucle interne pour les étoiles
  - Nombre croissant d'étoiles par ligne

3. Affichage :
  - Gestion des sauts de ligne
  - Formation progressive du triangle
  - Alignement automatique`,
    code: "L'algorithme génère un triangle d'étoiles.",
    imagePath: "level5/flowgorithm-pattern-etoiles.svg",
  },
  "format-tirets": {
    problemId: "format-tirets",
    explanation: `Ce diagramme crée un motif personnalisé :

1. Paramètres :
  - nbRep : nombre de répétitions du motif
  - nbTiret : nombre de tirets par groupe
  - nbEspace : nombre d'espaces entre les groupes

2. Génération :
  - Boucle principale pour les répétitions
  - Sous-boucle pour les tirets
  - Sous-boucle pour les espaces

3. Exemple :
  Si nbRep = 2, nbTiret = 1, nbEspace = 3
  Résultat : |- - |`,
    code: "L'algorithme génère un motif avec tirets et espaces.",
    imagePath: "level5/flowgorithm-format-tirets.svg",
  },
};
