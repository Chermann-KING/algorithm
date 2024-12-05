import { JavaScriptSolution, SolutionRecord } from "../types";

export const level4Solutions: SolutionRecord<JavaScriptSolution> = {
  exo22: {
    problemId: "exo22",
    explanation:
      "Démonstration des opérations basiques sur un tableau en JavaScript.",
    code: `// Création du tableau
let nombres = new Array(6);

// Saisie des valeurs
console.log("=== Saisie des valeurs ===");
for (let i = 0; i < 6; i++) {
   const valeur = parseInt(prompt(\`Entrez le nombre n°\${i + 1} :\`));
   nombres[i] = valeur;
}

// Affichage du tableau
console.log("\\n=== Contenu du tableau ===");
for (let i = 0; i < nombres.length; i++) {
   console.log(\`Position \${i + 1}: \${nombres[i]}\`);
}`,
    testCases: [
      {
        input: [1, 2, 3, 4, 5, 6],
        expected: "Tableau complet de 1 à 6",
        description: "Test saisie séquentielle",
      },
      {
        input: [10, -5, 8, 3, 0, 12],
        expected: "Tableau avec valeurs variées",
        description: "Test valeurs diverses",
      },
    ],
  },
};
