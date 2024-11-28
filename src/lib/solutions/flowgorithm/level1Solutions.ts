import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level1Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo01: {
    problemId: "exo01",
    explanation: `Le diagramme illustre la déclaration et l'initialisation de 20 variables réparties en 4 types :
1. Variables de type chaîne dit "String" (5) : représentant des informations textuelles
2. Variables de type entier dit "Integer" (5) : pour des valeurs numériques entières
3. Variables de type réel dit "Real" (5) : pour des valeurs numériques avec décimales
4. Variables de type booléen dit "Boolean" (5) : pour des états vrai/faux

Les variables sont déclarées et initialisées séquentiellement, puis affichées par groupe selon leur type.`,
    code: "L'algorithme commence par la déclaration des variables de chaque type, les initialise avec des valeurs appropriées, puis les affiche de manière organisée en sections.",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 800 1200" preserveAspectRatio="xMidYMid meet">
  <!-- DEBUT -->
  <path d="M 350,30 L 450,30 L 400,80 Z" fill="#4CAF50" />
  <text x="400" y="60" text-anchor="middle" fill="white" font-size="16">Début</text>

  <!-- Chaînes -->
  <rect x="150" y="100" width="500" height="160" rx="10" fill="#2196F3" />
  <text x="400" y="140" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
    Déclaration & Initialisation des variables de type "String"
  </text>
  <text x="400" y="180" text-anchor="middle" fill="white" font-size="14">
    prenom = "Thomas"
  </text>
  <text x="400" y="200" text-anchor="middle" fill="white" font-size="14">
    ville = "Paris"
  </text>
  <text x="400" y="220" text-anchor="middle" fill="white" font-size="14">
    metier = "Développeur"
  </text>

  <!-- Entiers -->
  <rect x="150" y="300" width="500" height="160" rx="10" fill="#2196F3" />
  <text x="400" y="340" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
    Déclaration & Initialisation des variables de type "Integer"
  </text>
  <text x="400" y="380" text-anchor="middle" fill="white" font-size="14">
    age = 25
  </text>
  <text x="400" y="400" text-anchor="middle" fill="white" font-size="14">
    etage = 3
  </text>
  <text x="400" y="420" text-anchor="middle" fill="white" font-size="14">
    annee = 2024
  </text>

  <!-- Réels -->
  <rect x="150" y="500" width="500" height="160" rx="10" fill="#2196F3" />
  <text x="400" y="540" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
    Déclaration & Initialisation des variables de type "Real"
  </text>
  <text x="400" y="580" text-anchor="middle" fill="white" font-size="14">
    taille = 1.75
  </text>
  <text x="400" y="600" text-anchor="middle" fill="white" font-size="14">
    poids = 70.5
  </text>
  <text x="400" y="620" text-anchor="middle" fill="white" font-size="14">
    prix = 19.99
  </text>

  <!-- Booléens -->
  <rect x="150" y="700" width="500" height="160" rx="10" fill="#2196F3" />
  <text x="400" y="740" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
    Déclaration & Initialisation des variables de type "Boolean"
  </text>
  <text x="400" y="780" text-anchor="middle" fill="white" font-size="14">
    estEtudiant = VRAI
  </text>
  <text x="400" y="800" text-anchor="middle" fill="white" font-size="14">
    aPermis = FAUX
  </text>
  <text x="400" y="820" text-anchor="middle" fill="white" font-size="14">
    estDisponible = FAUX
  </text>

  <!-- Affichage -->
  <rect x="150" y="900" width="500" height="120" rx="10" fill="#FFC107" />
  <text x="400" y="940" text-anchor="middle" fill="white" font-size="16" font-weight="bold">
    Affichage des variables déclarées
  </text>
  <text x="400" y="980" text-anchor="middle" fill="white" font-size="14">
    Afficher toutes les variables déclarées par catégorie
  </text>

  <!-- Fin -->
  <path d="M 350,1060 L 450,1060 L 400,1110 Z" fill="#F44336" />
  <text x="400" y="1090" text-anchor="middle" fill="white" font-size="16">FIN</text>

  <!-- Lignes de connexion -->
  <g stroke="black" stroke-width="2">
    <line x1="400" y1="80" x2="400" y2="100" />
    <line x1="400" y1="260" x2="400" y2="300" />
    <line x1="400" y1="460" x2="400" y2="500" />
    <line x1="400" y1="660" x2="400" y2="700" />
    <line x1="400" y1="860" x2="400" y2="900" />
    <line x1="400" y1="1020" x2="400" y2="1060" />
  </g>
</svg>`,
  },
};
