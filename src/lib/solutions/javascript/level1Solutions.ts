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
};
