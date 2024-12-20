import { JavaScriptSolution, SolutionRecord } from "../types";

export const level1Solutions: SolutionRecord<JavaScriptSolution> = {
  exo01: {
    problemId: "exo01",
    explanation: `Dans cette solution, nous allons :
1. Déclarer 5 variables de type chaîne (string) représentant des éléments du quotidien
2. Déclarer 5 variables de type nombre entier (number) pour des quantités
3. Déclarer 5 variables de type nombre décimal (real) pour des mesures
4. Déclarer 5 variables de type booléen (boolean) pour des états`,
    code: `// Variables de type chaîne (string)
const prenom = "Thomas";           // Prénom d'une personne
const ville = "Paris";             // Nom d'une ville
const marqueVoiture = "Renault";   // Marque de voiture
const fruit = "Pomme";             // Nom d'un fruit
const metier = "Développeur";      // Profession

// Variables de type nombre entier (number)
const age = 25;                    // Âge d'une personne
const etage = 3;                   // Étage d'un immeuble
const nbLivres = 42;               // Nombre de livres
const temperature = 20;            // Température en degrés
const annee = 2024;                // Année en cours

// Variables de type nombre décimal (real)
const taille = 1.75;               // Taille en mètres
const poids = 70.5;                // Poids en kg
const prix = 19.99;                // Prix d'un article
const distance = 5.5;              // Distance en km
const note = 16.5;                 // Note sur 20

// Variables de type booléen (boolean)
const estEtudiant = true;          // Est étudiant ou non
const aPermis = false;             // A le permis ou non
const estMarie = true;             // Est marié ou non
const estDisponible = false;       // Est disponible ou non
const aVoiture = true;             // Possède une voiture ou non

// Affichage des valeurs
console.log("=== Chaînes de caractères ===");
console.log("Prénom:", prenom);
console.log("Ville:", ville);
console.log("Marque de voiture:", marqueVoiture);
console.log("Fruit:", fruit);
console.log("Métier:", metier);

console.log("\\n=== Nombres entiers ===");
console.log("Âge:", age);
console.log("Étage:", etage);
console.log("Nombre de livres:", nbLivres);
console.log("Température:", temperature);
console.log("Année:", annee);

console.log("\\n=== Nombres décimaux ===");
console.log("Taille:", taille);
console.log("Poids:", poids);
console.log("Prix:", prix);
console.log("Distance:", distance);
console.log("Note:", note);

console.log("\\n=== Booléens ===");
console.log("Est étudiant:", estEtudiant);
console.log("A le permis:", aPermis);
console.log("Est marié:", estMarie);
console.log("Est disponible:", estDisponible);
console.log("A une voiture:", aVoiture);`,
    testCases: [
      {
        input: [],
        expected: "Les variables sont correctement déclarées et affichées",
        description:
          "Vérification de la déclaration et de l'affichage des variables",
      },
    ],
  },
  exo02: {
    problemId: "exo02",
    code: `// Déclarer et initialiser la variable message
const message = "Bienvenue";

// Afficher le contenu de la variable
console.log(message);`,
    explanation:
      "La solution consiste simplement à stocker une chaîne de caractères dans une variable nommée 'message', puis à l'afficher avec console.log.",
    testCases: [
      {
        input: [],
        expected: "Bienvenue",
        description: "Vérification de l'affichage du message",
      },
    ],
  },
  exo03: {
    problemId: "exo03",
    explanation:
      "Cette solution montre comment inverser deux variables en utilisant une variable temporaire. Cette technique est fondamentale en programmation car elle permet d'échanger des valeurs sans en perdre.",
    code: `// Déclaration et initialisation des variables
let nb1 = 5;
let nb2 = 7;

// Affichage des valeurs initiales
console.log("Avant inversion :");
console.log("nb1 contient :", nb1);
console.log("nb2 contient :", nb2);

// Processus d'inversion avec variable temporaire
let temp = nb1;   // On sauvegarde la valeur de nb1
nb1 = nb2;        // nb1 prend la valeur de nb2
nb2 = temp;       // nb2 prend l'ancienne valeur de nb1

// Affichage après inversion
console.log("\\nAprès inversion :");
console.log("nb1 contient :", nb1);
console.log("nb2 contient :", nb2);`,
    testCases: [
      {
        input: [],
        expected: "Les valeurs ont été inversées",
        description: "Vérification de l'inversion des variables",
      },
    ],
  },
  exo04: {
    problemId: "exo04",
    explanation:
      "Cette solution montre que la technique d'inversion avec variable temporaire s'applique aussi aux chaînes de caractères. C'est un concept universel en programmation qui fonctionne quel que soit le type de données.",
    code: `// Déclaration et initialisation des chaînes
let mot1 = "Bonjour";
let mot2 = "Hello";

// Affichage de l'état initial
console.log("Avant inversion :");
console.log("La variable mot1 contient :", mot1);
console.log("La variable mot2 contient :", mot2);

// Processus d'inversion avec variable temporaire
let temp = mot1;    // Sauvegarde de la première chaîne
mot1 = mot2;        // Remplacement par la seconde chaîne
mot2 = temp;        // Transfert de la chaîne sauvegardée

// Affichage du résultat
console.log("\\nAprès inversion :");
console.log("La variable mot1 contient :", mot1);
console.log("La variable mot2 contient :", mot2);`,
    testCases: [
      {
        input: [],
        expected: "Les chaînes ont été inversées",
        description: "Vérification de l'inversion des chaînes de caractères",
      },
    ],
  },
  exo05: {
    problemId: "exo05",
    explanation:
      "Cette solution montre comment convertir des secondes en utilisant les opérations de division (/) et modulo (%). La division donne le nombre d'unités, le modulo donne le reste à convertir.",
    code: `// Nombre de secondes à convertir
const secondesInitiales = 90061;

// Constantes de conversion
const SECONDES_PAR_MINUTE = 60;
const SECONDES_PAR_HEURE = SECONDES_PAR_MINUTE * 60;     // 3600
const SECONDES_PAR_JOUR = SECONDES_PAR_HEURE * 24;       // 86400

// Calcul des jours
const jours = Math.floor(secondesInitiales / SECONDES_PAR_JOUR);
let reste = secondesInitiales % SECONDES_PAR_JOUR;

// Calcul des heures
const heures = Math.floor(reste / SECONDES_PAR_HEURE);
reste = reste % SECONDES_PAR_HEURE;

// Calcul des minutes
const minutes = Math.floor(reste / SECONDES_PAR_MINUTE);
const secondes = reste % SECONDES_PAR_MINUTE;

// Affichage des résultats
console.log(\`\${secondesInitiales} secondes équivalent à :\`);
console.log(\`\${jours} jour(s)\`);
console.log(\`\${heures} heure(s)\`);
console.log(\`\${minutes} minute(s)\`);
console.log(\`\${secondes} seconde(s)\`);`,
    testCases: [
      {
        input: [90061],
        expected: "1j 1h 1m 1s",
        description: "Test avec 90061 secondes",
      },
    ],
  },
  exo06: {
    problemId: "exo06",
    explanation:
      "Cette solution démontre l'utilisation des opérateurs logiques et de comparaison en JavaScript. Les résultats sont affichés avec des explications pour chaque opération.",
    code: `// Initialisation des variables
const A = 3;
const B = 9;
const C = false;
const D = !C;  // NON(C)
const E = 9;

console.log("Valeurs initiales :");
console.log("A =", A);
console.log("B =", B);
console.log("C =", C);
console.log("D =", D);
console.log("E =", E);

console.log("\\nOpérations de comparaison :");
console.log("B = E ?", B === E, "(car 9 = 9)");
console.log("B > A ?", B > A, "(car 9 > 3)");
console.log("A < E ?", A < E, "(car 3 < 9)");

console.log("\\nOpérations logiques :");
console.log("NON(C) ?", !C, "(car NON(false) donne true)");
console.log("A < B ET B = E ?", A < B && B === E, "(car true ET true donne true)");
console.log("C OU D ?", C || D, "(car false OU true donne true)");
console.log("NON(B > A) ?", !(B > A), "(car NON(true) donne false)");`,
    testCases: [
      {
        input: [],
        expected: "Toutes les opérations logiques sont correctes",
        description: "Vérification des opérations logiques",
      },
    ],
  },
};
