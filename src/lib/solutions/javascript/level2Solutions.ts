import { JavaScriptSolution, SolutionRecord } from "../types";

export const level2Solutions: SolutionRecord<JavaScriptSolution> = {
  exo07: {
    problemId: "exo07",
    explanation:
      "Cette solution implémente les règles de détermination d'une année bissextile en utilisant les opérateurs modulo et logiques.",
    code: `// Année à tester
const annee = 2024;

// Test de divisibilité par 4
const divisiblePar4 = annee % 4 === 0;

// Test de non-divisibilité par 100
const nonDivisiblePar100 = annee % 100 !== 0;

// Test de divisibilité par 400
const divisiblePar400 = annee % 400 === 0;

// Combinaison des règles pour la décision finale
const estBissextile = (divisiblePar4 && nonDivisiblePar100) || divisiblePar400;

// Affichage du résultat avec explications
console.log('Analyse de l\\'année ' + annee + ' :');
console.log('Divisible par 4 ? ' + (divisiblePar4 ? 'Oui' : 'Non'));
console.log('Non divisible par 100 ? ' + (nonDivisiblePar100 ? 'Oui' : 'Non'));
console.log('Divisible par 400 ? ' + (divisiblePar400 ? 'Oui' : 'Non'));
console.log('\\nConclusion : ' + annee + (estBissextile ? ' est' : ' n\\'est pas') + ' une année bissextile.');`,
    testCases: [
      {
        input: [2024],
        expected: true,
        description: "Test avec 2024 (bissextile)",
      },
      {
        input: [2100],
        expected: false,
        description:
          "Test avec 2100 (non bissextile car divisible par 100 mais pas par 400)",
      },
      {
        input: [2000],
        expected: true,
        description: "Test avec 2000 (bissextile car divisible par 400)",
      },
    ],
  },
  exo08: {
    problemId: "exo08",
    explanation:
      "Cette solution montre comment simuler un système simple avec états et conditions. Le nombre de balles détermine l'état du lanceur.",
    code: `// Initialisation du lanceur
let balles = 5;
let estPret = true;
let panierVide = false;

// Fonction pour afficher l'état actuel
function afficherEtat() {
  if (estPret) {
    console.log("Prêt à lancer");
    console.log("Il reste " + balles + " balle(s)");
  }
  if (panierVide) {
    console.log("Le panier est vide");
    console.log("Veuillez le remplir");
  }
}

// Simulation de plusieurs lancers
console.log("=== État initial ===");
afficherEtat();

console.log("\\n=== Premier lancer ===");
if (balles > 0) {
  balles--;
  afficherEtat();
}

console.log("\\n=== Lancer jusqu'à vide ===");
while (balles > 0) {
  balles--;
}
estPret = false;
panierVide = true;
afficherEtat();`,
    testCases: [
      {
        input: [],
        expected: "Simulation complète du lanceur",
        description: "Vérification du comportement du lanceur",
      },
    ],
  },
};
