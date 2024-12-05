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
  exo25: {
    problemId: "exo25",
    explanation:
      "Cette solution permet d'inverser les éléments d'un tableau en utilisant deux pointeurs.",
    code: `function inverserTableau() {
   // Saisie de la taille
   const taille = parseInt(prompt("Entrez la taille du tableau : "));
   if (isNaN(taille) || taille <= 0) {
       console.log("Taille invalide");
       return;
   }

   // Création et remplissage du tableau
   let tableau = new Array(taille);
   console.log("\\n=== Saisie des éléments ===");
   for (let i = 0; i < taille; i++) {
       tableau[i] = prompt(\`Élément n°\${i + 1} : \`);
   }

   // Affichage tableau initial
   console.log("\\n=== Tableau initial ===");
   console.log(tableau.join(" - "));

   // Inversion du tableau
   for (let debut = 0, fin = taille - 1; debut < fin; debut++, fin--) {
       // Échange des éléments
       let temp = tableau[debut];
       tableau[debut] = tableau[fin];
       tableau[fin] = temp;
   }

   // Affichage tableau inversé
   console.log("\\n=== Tableau inversé ===");
   console.log(tableau.join(" - "));
   
   return tableau;
}

inverserTableau();`,
    testCases: [
      {
        input: [3, "A", "B", "C"],
        expected: ["C", "B", "A"],
        description: "Inversion de 3 lettres",
      },
      {
        input: [4, 1, 2, 3, 4],
        expected: [4, 3, 2, 1],
        description: "Inversion de 4 nombres",
      },
      {
        input: [2, "début", "fin"],
        expected: ["fin", "début"],
        description: "Inversion de 2 mots",
      },
    ],
  },
};
