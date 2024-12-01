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
};
