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
};
