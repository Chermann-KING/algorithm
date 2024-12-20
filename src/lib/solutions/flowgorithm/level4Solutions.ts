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
  exo27: {
    problemId: "exo27",
    explanation: `Ce diagramme recherche la plus petite valeur :

1. Phase de Saisie :
  - Tableau de 10 entiers
  - Remplissage séquentiel
  - Validation des entrées

2. Recherche du Minimum :
  - Initialisation avec premier élément
  - Parcours comparatif du tableau
  - Mémorisation position et valeur

3. Résultat :
  - Affichage du minimum trouvé
  - Indication de sa position
  - Format: valeur et indice + 1`,
    code: "L'algorithme trouve le plus petit élément et sa position.",
    imagePath: "level4/flowgorithm-level4-exo27.svg",
  },
  exo28: {
    problemId: "exo28",
    explanation: `Ce diagramme implémente une recherche séquentielle :

1. Préparation :
  - Saisie taille dynamique du tableau
  - Remplissage des valeurs
  - Demande de la valeur à chercher

2. Recherche :
  - Parcours séquentiel du tableau
  - Comparaison avec la valeur cherchée
  - Mémorisation de la position si trouvée

3. Résultat :
  - Message si valeur trouvée avec sa position
  - Message si valeur absente du tableau`,
    code: "L'algorithme recherche une valeur et indique sa position.",
    imagePath: "level4/flowgorithm-level4-exo28.svg",
  },
  exo29: {
    problemId: "exo29",
    explanation: `Ce diagramme simule un pion mobile :

1. Initialisation :
  - Tableau de 10 cases avec '-'
  - Position initiale à 0
  - Pion représenté par 'O'

2. Boucle de Jeu :
  - Affichage état actuel
  - Lecture commande (g/d/q)
  - Validation des mouvements
  - Mise à jour position

3. Contrôles :
  - Limites du tableau (0-9)
  - Commandes valides
  - Option de sortie`,
    code: "L'algorithme permet de déplacer un pion dans un tableau.",
    imagePath: "level4/flowgorithm-level4-exo29.svg",
  },
  exo30: {
    problemId: "exo30",
    explanation: `Ce diagramme implémente l'insertion ordonnée :

1. Préparation :
  - Saisie tableau initial trié
  - Réservation d'une case supplémentaire
  - Validation de l'ordre croissant

2. Recherche Position :
  - Parcours jusqu'à trouver la position
  - Comparaison avec la valeur à insérer
  - Arrêt au bon emplacement

3. Insertion :
  - Décalage des éléments
  - Insertion à la position trouvée
  - Maintien de l'ordre croissant`,
    code: "L'algorithme insère une valeur en conservant le tri.",
    imagePath: "level4/flowgorithm-level4-exo30.svg",
  },
  exo31: {
    problemId: "exo31",
    explanation: `Ce diagramme implémente une recherche dichotomique :

1. Initialisation :
  - Saisie tableau trié
  - Définition des bornes de recherche
  - Valeur à rechercher

2. Recherche Dichotomique :
  - Calcul du milieu de l'intervalle
  - Comparaison avec la valeur recherchée
  - Réduction de moitié de l'intervalle
  
3. Résultat :
  - Position si trouvée
  - Message si absente`,
    code: "L'algorithme utilise la recherche dichotomique pour plus d'efficacité.",
    imagePath: "level4/flowgorithm-level4-exo31.svg",
  },
  exo32: {
    problemId: "exo32",
    explanation: `Ce diagramme fusionne deux tableaux en version triée :

1. Saisie des données :
  - Deux tableaux de tailles différentes
  - Validation des entrées
  - Création tableau résultat

2. Processus de fusion :
  - Tri initial des tableaux sources
  - Fusion en ordre croissant
  - Gestion des éléments restants

3. Optimisations :
  - Comparaison élément par élément
  - Un seul parcours des tableaux
  - Maintien de l'ordre dans la fusion`,
    code: "L'algorithme fusionne deux tableaux en les triant.",
    imagePath: "level4/flowgorithm-level4-exo32.svg",
  },
};
