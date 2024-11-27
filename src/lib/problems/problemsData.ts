export type Difficulty = "facile" | "moyen" | "dificile";

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
}

export interface ProblemLevel {
  id: number;
  title: string;
  problems: Problem[];
}

export const problems: ProblemLevel[] = [
  {
    id: 1,
    title: "Les Variables et Opérations de Base",
    problems: [
      {
        id: "exo01",
        title: "Déclaration de Variables",
        description:
          "Déclarez et initialisez 5 variables de chaque type (chaîne, entier, réel, booléen) représentant des éléments de la vie quotidienne.",
        difficulty: "facile",
      },
      {
        id: "exo02",
        title: "Message de Bienvenue",
        description:
          "Stockez dans une variable nommée message la chaîne 'Bienvenue' et affichez son contenu à l'écran.",
        difficulty: "facile",
      },
      {
        id: "exo03",
        title: "Inversion Simple",
        description:
          "Inversez le contenu de deux variables du même type (si nb1 = 5 et nb2 = 7, obtenir nb1 = 7 et nb2 = 5).",
        difficulty: "moyen",
      },
      {
        id: "exo04",
        title: "Inversion de Chaînes",
        description:
          "Inversez le contenu de deux variables de type chaîne de caractères.",
        difficulty: "moyen",
      },
      {
        id: "exo05",
        title: "Convertisseur de Secondes",
        description:
          "Créez un convertisseur qui transforme un nombre de secondes en jours, heures, minutes et secondes.",
        difficulty: "moyen",
      },
      {
        id: "exo06",
        title: "Opérations Logiques",
        description:
          "Évaluez une série d'expressions logiques avec les variables A=3, B=9, C=Faux, D=NON(C), E=9.",
        difficulty: "moyen",
      },
    ],
  },
  {
    id: 2,
    title: "Structures Conditionnelles",
    problems: [
      {
        id: "exo07",
        title: "Année Bissextile",
        description:
          "Déterminez si une année est bissextile (divisible par 4 mais pas par 100, ou divisible par 400).",
        difficulty: "moyen",
      },
      {
        id: "exo08",
        title: "Lanceur de Balles",
        description:
          "Simulez un lanceur de balles de tennis avec états 'prêt' et 'panierVide'.",
        difficulty: "facile",
      },
      {
        id: "exo09",
        title: "Distributeur de Boissons",
        description: "Créez un distributeur de boissons avec gestion du stock.",
        difficulty: "moyen",
      },
      {
        id: "exo10",
        title: "Calculatrice Simple",
        description:
          "Développez une calculatrice basique avec les 4 opérations et gestion de la division par zéro.",
        difficulty: "moyen",
      },
      {
        id: "exo11",
        title: "Système de Notes",
        description:
          "Convertissez une note sur 20 en appréciation (I, S, B, TB, Excellent).",
        difficulty: "facile",
      },
      {
        id: "exo12",
        title: "Différence de Durées",
        description:
          "Calculez la différence entre deux durées exprimées en jours, heures, minutes et secondes.",
        difficulty: "dificile",
      },
    ],
  },
  {
    id: 3,
    title: "Structures Itératives",
    problems: [
      {
        id: "exo13",
        title: "Table de Multiplication",
        description: "Affichez la table de multiplication par 2.",
        difficulty: "facile",
      },
      {
        id: "exo14",
        title: "Lanceur de Balles Avancé",
        description:
          "Améliorez le lanceur de balles pour qu'il lance jusqu'à épuisement du stock.",
        difficulty: "moyen",
      },
      {
        id: "exo15",
        title: "Tables de Multiplication 1-9",
        description: "Affichez toutes les tables de multiplication de 1 à 9.",
        difficulty: "moyen",
      },
      {
        id: "exo16",
        title: "Jeu du Plus ou Moins - Base",
        description:
          "Créez le jeu du Plus ou Moins avec feedback à l'utilisateur.",
        difficulty: "moyen",
      },
      {
        id: "exo17",
        title: "Distributeur en Boucle",
        description:
          "Améliorez le distributeur de boissons pour servir plusieurs clients.",
        difficulty: "moyen",
      },
      {
        id: "exo18",
        title: "Calculatrice en Boucle",
        description:
          "Modifiez la calculatrice pour permettre plusieurs calculs successifs.",
        difficulty: "moyen",
      },
      {
        id: "exo19",
        title: "Calcul de Puissance N^10",
        description: "Calculez la puissance 10 d'un nombre N avec une boucle.",
        difficulty: "moyen",
      },
      {
        id: "exo20",
        title: "Calcul de Puissance N^M",
        description:
          "Calculez N élevé à la puissance M, avec N et M saisis par l'utilisateur.",
        difficulty: "moyen",
      },
      {
        id: "exo21",
        title: "Plus ou Moins Amélioré",
        description:
          "Version évoluée avec compteur de tentatives et nombre aléatoire.",
        difficulty: "dificile",
      },
    ],
  },
  {
    id: 4,
    title: "Tableaux",
    problems: [
      {
        id: "exo22",
        title: "Saisie et Affichage",
        description: "Saisissez 6 entiers dans un tableau et affichez-les.",
        difficulty: "facile",
      },
      {
        id: "exo23",
        title: "Suite Géométrique",
        description:
          "Initialisez un tableau avec les puissances de 2 jusqu'à 1024.",
        difficulty: "moyen",
      },
      {
        id: "exo24",
        title: "Moyenne des Scores",
        description:
          "Calculez la moyenne des scores d'un nombre variable de joueurs.",
        difficulty: "moyen",
      },
      {
        id: "exo25",
        title: "Inversion de Tableau",
        description: "Créez un miroir d'un tableau en inversant ses éléments.",
        difficulty: "moyen",
      },
      {
        id: "exo26",
        title: "Tri Croissant",
        description: "Triez un tableau d'entiers dans l'ordre croissant.",
        difficulty: "dificile",
      },
      {
        id: "exo27",
        title: "Recherche du Minimum",
        description: "Trouvez le plus petit élément parmi 10 entiers saisis.",
        difficulty: "moyen",
      },
      {
        id: "exo28",
        title: "Recherche de Valeur",
        description:
          "Recherchez une valeur dans un tableau et affichez sa position.",
        difficulty: "moyen",
      },
      {
        id: "exo29",
        title: "Déplacement de Pion",
        description:
          "Déplacez un pion dans un tableau avec les commandes gauche/droite.",
        difficulty: "dificile",
      },
      {
        id: "exo30",
        title: "Insertion Triée",
        description:
          "Insérez une valeur dans un tableau trié en maintenant l'ordre.",
        difficulty: "dificile",
      },
      {
        id: "exo31",
        title: "Recherche d'Élément",
        description: "Implémentez un algorithme de recherche dans un tableau.",
        difficulty: "moyen",
      },
      {
        id: "exo32",
        title: "Fusion de Tableaux",
        description: "Fusionnez deux tableaux non triés en un tableau trié.",
        difficulty: "dificile",
      },
    ],
  },
  {
    id: 5,
    title: "Projets Avancés",
    problems: [
      {
        id: "projet-juste-prix",
        title: "Juste Prix Complet",
        description:
          "Créez un jeu du Juste Prix complet avec : limite de 10 essais, trois niveaux de difficulté (1-10, 1-100, 1-1000), option de rejouer, et validation des entrées.",
        difficulty: "dificile",
      },
      {
        id: "systeme-connexion",
        title: "Système de Connexion",
        description:
          "Implémentez un système de connexion avec mot de passe et blocage après 3 tentatives échouées.",
        difficulty: "dificile",
      },
      {
        id: "pattern-etoiles",
        title: "Pattern d'Étoiles",
        description:
          "Générez un motif d'étoiles croissant basé sur un nombre donné par l'utilisateur.",
        difficulty: "moyen",
      },
      {
        id: "format-tirets",
        title: "Formatage avec Tirets",
        description:
          "Créez un motif de tirets et d'espaces basé sur trois paramètres (nbRep, nbTiret, nbEspace).",
        difficulty: "moyen",
      },
    ],
  },
];
