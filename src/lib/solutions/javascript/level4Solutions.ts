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
  exo23: {
    problemId: "exo23",
    explanation:
      "Cette solution crée un tableau contenant les puissances de 2 de manière itérative.",
    code: `// Initialisation
let puissances = new Array(11);
let valeur = 1;

console.log("=== Génération des puissances de 2 ===\\n");

// Remplissage du tableau
for (let i = 0; i < puissances.length; i++) {
   puissances[i] = valeur;
   console.log(\`2^\${i} = \${valeur}\`);
   valeur *= 2;
}

// Affichage formaté
console.log("\\n=== Contenu du tableau ===");
console.log(puissances.join(" - "));`,
    testCases: [
      {
        input: [],
        expected: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
        description: "Génération de toutes les puissances",
      },
    ],
  },
  exo24: {
    problemId: "exo24",
    explanation:
      "Cette solution permet de gérer un nombre variable de scores et de calculer leur moyenne.",
    code: `function calculerMoyenneScores() {
   // Demande du nombre de joueurs
   const nbJoueurs = parseInt(prompt("Combien de joueurs ? "));
   if (isNaN(nbJoueurs) || nbJoueurs <= 0) {
       console.log("Nombre de joueurs invalide");
       return;
   }

   // Initialisation
   let scores = new Array(nbJoueurs);
   let somme = 0;

   console.log("\\n=== Saisie des scores ===");
   
   // Saisie des scores
   for (let i = 0; i < nbJoueurs; i++) {
       const score = parseFloat(prompt(\`Score du joueur \${i + 1} : \`));
       if (isNaN(score)) {
           console.log("Score invalide");
           return;
       }
       scores[i] = score;
       somme += score;
   }

   // Calcul de la moyenne
   const moyenne = somme / nbJoueurs;

   // Affichage des résultats
   console.log("\\n=== Récapitulatif ===");
   scores.forEach((score, index) => {
       console.log(\`Joueur \${index + 1} : \${score}\`);
   });
   console.log(\`\\nMoyenne des scores : \${moyenne.toFixed(2)}\`);
}

calculerMoyenneScores();`,
    testCases: [
      {
        input: [3, 15, 12, 18],
        expected: 15,
        description: "Moyenne de trois scores",
      },
      {
        input: [2, 20, 20],
        expected: 20,
        description: "Scores identiques",
      },
      {
        input: [4, 0, 20, 10, 10],
        expected: 10,
        description: "Scores avec valeurs extrêmes",
      },
    ],
  },
};
