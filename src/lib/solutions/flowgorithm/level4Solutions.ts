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
    imagePath: "level4/flowgorithm-level4-exo23.svg",
  },
  exo24: {
    problemId: "exo24",
    explanation: `Ce diagramme calcule une moyenne dynamique :

1. Initialisation :
  - Demande du nombre de joueurs
  - Création du tableau adapté
  - Variables pour somme et moyenne

2. Saisie et Calcul :
  - Collecte des scores
  - Accumulation dans la somme
  - Calcul de la moyenne

3. Affichage :
  - Liste détaillée des scores
  - Présentation de la moyenne finale`,
    code: "L'algorithme gère un nombre variable de scores et calcule leur moyenne.",
    imagePath: "level4/flowgorithm-level4-exo24.svg",
  },
  exo25: {
    problemId: "exo25",
    explanation: `Ce diagramme montre l'inversion d'un tableau :

1. Préparation :
  - Demande de la taille du tableau
  - Saisie des éléments un par un
  - Stockage dans le tableau initial

2. Processus d'inversion :
  - Utilisation de deux indices (début et fin)
  - Échange des éléments symétriques
  - Progression vers le centre

3. Résultat :
  - Affichage du tableau inversé
  - Vérification de la symétrie`,
    code: "L'algorithme inverse l'ordre des éléments d'un tableau.",
    imagePath: "level4/flowgorithm-level4-exo25.svg",
  },
  exo26: {
    problemId: "exo26",
    explanation: `Ce diagramme implémente le tri à bulles :

1. Saisie des Données :
  - Taille dynamique du tableau
  - Remplissage des valeurs

2. Processus de Tri :
  - Deux boucles imbriquées
  - Comparaison deux à deux
  - Échange si nécessaire
  - Remontée des plus grandes valeurs

3. Affichage :
  - Tableau trié en ordre croissant
  - Vérification de l'ordre`,
    code: "L'algorithme trie les éléments par ordre croissant.",
    imagePath: "level4/flowgorithm-level4-exo26.svg",
  },
};
