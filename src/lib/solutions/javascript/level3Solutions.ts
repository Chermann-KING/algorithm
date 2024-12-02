import { JavaScriptSolution, SolutionRecord } from "../types";

export const level3Solutions: SolutionRecord<JavaScriptSolution> = {
  exo13: {
    problemId: "exo13",
    explanation:
      "Cette solution montre comment utiliser une boucle pour générer une table de multiplication de manière claire et organisée.",
    code: `// Le nombre dont on veut la table
const nombre = 2;

// Titre de la table
console.log("Table de multiplication de " + nombre + " :");
console.log("==============================");

// Boucle pour générer la table
for (let i = 0; i <= 10; i++) {
    // Calcul du résultat
    const resultat = nombre * i;
    
    // Affichage formaté
    console.log(nombre + " × " + i + " = " + resultat);
}

console.log("==============================");`,
    testCases: [
      {
        input: [],
        expected: "Table complète de 2",
        description: "Vérification de la table de multiplication par 2",
      },
    ],
  },
  exo14: {
    problemId: "exo14",
    explanation:
      "Cette solution implémente un lanceur de balles qui fonctionne jusqu'à épuisement du stock, avec comptage des balles lancées.",
    code: `// Initialisation du lanceur
let stockTotal = 5;
let ballesLancees = 0;
let estPret = true;

console.log("=== Début de session ===");
console.log("Stock initial:", stockTotal, "balles\\n");

// Boucle de lancement
while (stockTotal > 0) {
    // Lancer une balle
    stockTotal--;
    ballesLancees++;
    
    // Afficher l'état actuel
    console.log("Balle lancée !");
    console.log("Balles restantes:", stockTotal);
    console.log("Balles lancées:", ballesLancees);
    console.log("---");
}

// Affichage final
console.log("\\n=== Fin de session ===");
console.log("Stock épuisé !");
console.log("Total de balles lancées:", ballesLancees);
console.log("Veuillez recharger le lanceur");`,
    testCases: [
      {
        input: [],
        expected: "5 balles lancées",
        description: "Test d'épuisement complet du stock",
      },
    ],
  },
  exo15: {
    problemId: "exo15",
    explanation:
      "Cette solution utilise des boucles imbriquées pour générer toutes les tables de multiplication de manière organisée et lisible.",
    code: `// Limites des tables
const tableMin = 1;
const tableMax = 9;

// Boucle pour chaque table
for (let table = tableMin; table <= tableMax; table++) {
    // En-tête de la table
    console.log("\\nTable de " + table + " :");
    console.log("================");
    
    // Boucle pour les multiplications
    for (let multiplicateur = 0; multiplicateur <= 10; multiplicateur++) {
        // Calcul et affichage
        const resultat = table * multiplicateur;
        console.log(table + " × " + multiplicateur + " = " + resultat);
    }
    
    console.log("================");
}`,
    testCases: [
      {
        input: [],
        expected: "Tables de 1 à 9 complètes",
        description: "Vérification de toutes les tables",
      },
    ],
  },
};
