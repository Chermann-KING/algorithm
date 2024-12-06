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
  exo26: {
    problemId: "exo26",
    explanation:
      "Cette solution implémente le tri à bulles pour ordonner un tableau d'entiers.",
    code: `function trierTableau() {
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
       const valeur = parseInt(prompt(\`Élément n°\${i + 1} : \`));
       if (isNaN(valeur)) {
           console.log("Valeur invalide");
           return;
       }
       tableau[i] = valeur;
   }

   // Affichage tableau initial
   console.log("\\n=== Tableau initial ===");
   console.log(tableau.join(" - "));

   // Tri à bulles
   for (let i = 0; i < taille - 1; i++) {
       for (let j = i + 1; j < taille; j++) {
           if (tableau[i] > tableau[j]) {
               // Échange des éléments
               let temp = tableau[i];
               tableau[i] = tableau[j];
               tableau[j] = temp;
           }
       }
       // Afficher l'état après chaque passage
       console.log(\`Passage \${i + 1} : \${tableau.join(" - ")}\`);
   }

   // Affichage final
   console.log("\\n=== Tableau trié ===");
   console.log(tableau.join(" - "));
   
   return tableau;
}

trierTableau();`,
    testCases: [
      {
        input: [5, 64, 34, 25, 12, 22],
        expected: [12, 22, 25, 34, 64],
        description: "Tri de 5 nombres",
      },
      {
        input: [4, 5, 2, 8, 1],
        expected: [1, 2, 5, 8],
        description: "Tri avec valeurs désordonnées",
      },
      {
        input: [3, 1, 1, 1],
        expected: [1, 1, 1],
        description: "Tri avec valeurs identiques",
      },
    ],
  },
  exo27: {
    problemId: "exo27",
    explanation:
      "Cette solution recherche le minimum parmi 10 entiers et indique sa position dans le tableau.",
    code: `function trouverMinimum() {
   // Initialisation
   let nombres = new Array(10);
   
   // Saisie des nombres
   console.log("=== Saisie des 10 nombres ===");
   for (let i = 0; i < 10; i++) {
       const valeur = parseInt(prompt(\`Entrez le nombre n°\${i + 1} : \`));
       if (isNaN(valeur)) {
           console.log("Nombre invalide !");
           return;
       }
       nombres[i] = valeur;
   }

   // Affichage des nombres saisis
   console.log("\\n=== Nombres saisis ===");
   console.log(nombres.join(" - "));

   // Recherche du minimum
   let minimum = nombres[0];
   let position = 0;

   for (let i = 1; i < nombres.length; i++) {
       if (nombres[i] < minimum) {
           minimum = nombres[i];
           position = i;
       }
   }

   // Affichage du résultat
   console.log("\\n=== Résultat ===");
   console.log(\`Le minimum est \${minimum}\`);
   console.log(\`Il se trouve à la position \${position + 1}\`);
   
   return { minimum, position: position + 1 };
}

trouverMinimum();`,
    testCases: [
      {
        input: [5, 3, 8, 1, 9, 4, 7, 2, 6, 0],
        expected: { minimum: 0, position: 10 },
        description: "Minimum en dernière position",
      },
      {
        input: [0, 3, 8, 1, 9, 4, 7, 2, 6, 5],
        expected: { minimum: 0, position: 1 },
        description: "Minimum en première position",
      },
      {
        input: [5, 3, 8, 0, 9, 4, 7, 2, 6, 1],
        expected: { minimum: 0, position: 4 },
        description: "Minimum au milieu",
      },
    ],
  },
  exo28: {
    problemId: "exo28",
    explanation:
      "Cette solution implémente une recherche séquentielle dans un tableau.",
    code: `function rechercherValeur() {
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
       tableau[i] = parseInt(prompt(\`Élément n°\${i + 1} : \`));
       if (isNaN(tableau[i])) {
           console.log("Valeur invalide");
           return;
       }
   }

   // Affichage du tableau
   console.log("\\n=== Contenu du tableau ===");
   console.log(tableau.join(" - "));

   // Valeur recherchée
   const valeur = parseInt(prompt("\\nValeur à rechercher : "));
   if (isNaN(valeur)) {
       console.log("Valeur de recherche invalide");
       return;
   }

   // Recherche
   let trouve = false;
   let position = -1;

   for (let i = 0; i < taille; i++) {
       if (tableau[i] === valeur) {
           trouve = true;
           position = i;
           break;
       }
   }

   // Affichage du résultat
   console.log("\\n=== Résultat de la recherche ===");
   if (trouve) {
       console.log(\`La valeur \${valeur} a été trouvée à la position \${position + 1}\`);
   } else {
       console.log(\`La valeur \${valeur} n'est pas présente dans le tableau\`);
   }

   return { trouve, position: trouve ? position + 1 : -1 };
}

rechercherValeur();`,
    testCases: [
      {
        input: [5, 1, 2, 3, 4, 5, 3],
        expected: { trouve: true, position: 3 },
        description: "Valeur présente",
      },
      {
        input: [3, 1, 2, 3, 4],
        expected: { trouve: false, position: -1 },
        description: "Valeur absente",
      },
      {
        input: [4, 5, 5, 5, 5, 5],
        expected: { trouve: true, position: 1 },
        description: "Première occurrence",
      },
    ],
  },
  exo29: {
    problemId: "exo29",
    explanation:
      "Cette solution simule le déplacement d'un pion dans un tableau avec commandes gauche/droite.",
    code: `function deplacerPion() {
   // Initialisation
   let tableau = Array(10).fill('-');
   let position = 0;
   tableau[position] = 'O';
   let continuer = true;

   function afficherTableau() {
       console.log('\\n' + tableau.join(' '));
       console.log(\`Position: \${position + 1}/10\`);
   }

   console.log("=== Jeu du Pion Mobile ===");
   console.log("Commandes: 'g' (gauche), 'd' (droite), 'q' (quitter)");

   // Boucle principale
   while (continuer) {
       afficherTableau();
       
       const commande = prompt("\\nVotre commande : ").toLowerCase();
       
       switch(commande) {
           case 'q':
               console.log("\\nFin du jeu !");
               continuer = false;
               break;
               
           case 'g':
               if (position > 0) {
                   tableau[position] = '-';
                   position--;
                   tableau[position] = 'O';
               } else {
                   console.log("\\nImpossible d'aller à gauche !");
               }
               break;
               
           case 'd':
               if (position < 9) {
                   tableau[position] = '-';
                   position++;
                   tableau[position] = 'O';
               } else {
                   console.log("\\nImpossible d'aller à droite !");
               }
               break;
               
           default:
               console.log("\\nCommande invalide !");
       }
   }
}

deplacerPion();`,
    testCases: [
      {
        input: ["d", "d", "g", "q"],
        expected: "Position finale: 1",
        description: "Déplacements simples",
      },
      {
        input: ["g", "q"],
        expected: "Mouvement impossible",
        description: "Test limite gauche",
      },
      {
        input: ["d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "q"],
        expected: "Mouvement impossible",
        description: "Test limite droite",
      },
    ],
  },
  exo30: {
    problemId: "exo30",
    explanation:
      "Cette solution permet d'insérer une valeur dans un tableau trié tout en maintenant l'ordre croissant.",
    code: `function insertionTriee() {
    // Saisie de la taille
    let tailleTableau = parseInt(prompt("Entrez la taille initiale du tableau : ") || "0");
    if (isNaN(tailleTableau) || tailleTableau <= 0) {
        console.log("Taille invalide");
        return [];
    }

    // Création et remplissage du tableau
    let tableau = new Array(tailleTableau + 1); // +1 pour la future insertion
    console.log("\\n=== Saisie des éléments triés ===");
    
    // Premier élément
    const premierNombre = parseInt(prompt("Premier nombre : ") || "0");
    if (isNaN(premierNombre)) {
        console.log("Nombre invalide");
        return [];
    }
    tableau[0] = premierNombre;

    // Reste des éléments avec vérification du tri
    for (let i = 1; i < tailleTableau; i++) {
        const nombre = parseInt(prompt(\`Nombre suivant (\${i + 1}/\${tailleTableau}) : \`) || "0");
        if (isNaN(nombre) || nombre < tableau[i-1]) {
            console.log("Nombre invalide ou non trié");
            return [];
        }
        tableau[i] = nombre;
    }

    // Affichage tableau initial
    console.log("\\n=== Tableau initial ===");
    console.log(tableau.slice(0, tailleTableau).join(" - "));

    // Valeur à insérer
    const valeur = parseInt(prompt("\\nValeur à insérer : ") || "0");
    if (isNaN(valeur)) {
        console.log("Valeur invalide");
        return [];
    }

    // Recherche de la position d'insertion
    let position = 0;
    while (position < tailleTableau && tableau[position] < valeur) {
        position++;
    }

    // Décalage des éléments
    for (let j = tailleTableau; j > position; j--) {
        tableau[j] = tableau[j-1];
    }

    // Insertion de la valeur
    tableau[position] = valeur;
    tailleTableau++; // Augmentation de la taille

    // Affichage du résultat
    console.log("\\n=== Tableau après insertion ===");
    console.log(tableau.slice(0, tailleTableau).join(" - "));
    
    return tableau.slice(0, tailleTableau);
}

insertionTriee();`,
    testCases: [
      {
        input: [3, 1, 3, 5, 4],
        expected: [1, 3, 4, 5],
        description: "Insertion au milieu",
      },
      {
        input: [3, 2, 4, 6, 1],
        expected: [1, 2, 4, 6],
        description: "Insertion au début",
      },
      {
        input: [3, 1, 3, 5, 7],
        expected: [1, 3, 5, 7],
        description: "Insertion à la fin",
      },
    ],
  },
  exo31: {
    problemId: "exo31",
    explanation:
      "Cette solution implémente une recherche dichotomique dans un tableau trié.",
    code: `function rechercheDichotomique() {
   // Saisie de la taille
   let taille = parseInt(prompt("Entrez la taille du tableau : ") || "0");
   if (isNaN(taille) || taille <= 0) {
       console.log("Taille invalide");
       return;
   }

   // Création et remplissage du tableau
   let tableau = new Array(taille);
   console.log("\\n=== Saisie des éléments (triés) ===");
   
   // Premier élément
   tableau[0] = parseInt(prompt("Premier nombre : ") || "0");
   if (isNaN(tableau[0])) {
       console.log("Nombre invalide");
       return;
   }

   // Reste des éléments (vérification tri)
   for (let i = 1; i < taille; i++) {
       let nombre = parseInt(prompt(\`Nombre suivant (\${i + 1}/\${taille}) : \`) || "0");
       if (isNaN(nombre) || nombre < tableau[i-1]) {
           console.log("Nombre invalide ou non trié");
           return;
       }
       tableau[i] = nombre;
   }

   // Affichage tableau
   console.log("\\n=== Tableau ===");
   console.log(tableau.join(" - "));

   // Valeur à rechercher
   let valeur = parseInt(prompt("\\nValeur à rechercher : ") || "0");
   if (isNaN(valeur)) {
       console.log("Valeur invalide");
       return;
   }

   // Recherche dichotomique
   let debut = 0;
   let fin = taille - 1;
   let trouve = false;
   let position = -1;

   while (debut <= fin && !trouve) {
       let milieu = Math.floor((debut + fin) / 2);
       
       if (tableau[milieu] === valeur) {
           trouve = true;
           position = milieu;
       } else if (tableau[milieu] > valeur) {
           fin = milieu - 1;
       } else {
           debut = milieu + 1;
       }
   }

   // Affichage résultat
   console.log("\\n=== Résultat ===");
   if (trouve) {
       console.log(\`Valeur \${valeur} trouvée à la position \${position + 1}\`);
   } else {
       console.log(\`Valeur \${valeur} non trouvée\`);
   }
   
   return { trouve, position: trouve ? position + 1 : -1 };
}

rechercheDichotomique();`,
    testCases: [
      {
        input: [5, 1, 3, 5, 7, 9, 5],
        expected: { trouve: true, position: 3 },
        description: "Recherche d'une valeur existante",
      },
      {
        input: [4, 2, 4, 6, 8, 5],
        expected: { trouve: false, position: -1 },
        description: "Recherche d'une valeur absente",
      },
      {
        input: [3, 1, 2, 3, 1],
        expected: { trouve: true, position: 1 },
        description: "Recherche au début",
      },
    ],
  },
  exo32: {
    problemId: "exo32",
    explanation:
      "Cette solution fusionne deux tableaux non triés en un tableau trié.",
    code: `function fusionTableaux() {
   // Saisie des tailles
   let taille1 = parseInt(prompt("Taille du premier tableau : ") || "0");
   let taille2 = parseInt(prompt("Taille du deuxième tableau : ") || "0");
   
   if (isNaN(taille1) || isNaN(taille2) || taille1 <= 0 || taille2 <= 0) {
       console.log("Tailles invalides");
       return [];
   }

   // Création des tableaux
   let tableau1 = new Array(taille1);
   let tableau2 = new Array(taille2);

   // Remplissage premier tableau
   console.log("\\n=== Premier tableau ===");
   for (let i = 0; i < taille1; i++) {
       tableau1[i] = parseInt(prompt(\`Élément \${i + 1}/\${taille1} : \`) || "0");
       if (isNaN(tableau1[i])) {
           console.log("Nombre invalide");
           return [];
       }
   }

   // Remplissage deuxième tableau
   console.log("\\n=== Deuxième tableau ===");
   for (let i = 0; i < taille2; i++) {
       tableau2[i] = parseInt(prompt(\`Élément \${i + 1}/\${taille2} : \`) || "0");
       if (isNaN(tableau2[i])) {
           console.log("Nombre invalide");
           return [];
       }
   }

   // Tri des tableaux sources
   tableau1.sort((a, b) => a - b);
   tableau2.sort((a, b) => a - b);

   // Fusion des tableaux
   let resultat = new Array(taille1 + taille2);
   let i = 0, j = 0, k = 0;

   // Fusion tant qu'il reste des éléments dans les deux tableaux
   while (i < taille1 && j < taille2) {
       if (tableau1[i] <= tableau2[j]) {
           resultat[k] = tableau1[i];
           i++;
       } else {
           resultat[k] = tableau2[j];
           j++;
       }
       k++;
   }

   // Ajout des éléments restants du tableau1
   while (i < taille1) {
       resultat[k] = tableau1[i];
       i++;
       k++;
   }

   // Ajout des éléments restants du tableau2
   while (j < taille2) {
       resultat[k] = tableau2[j];
       j++;
       k++;
   }

   // Affichage des résultats
   console.log("\\n=== Résultat ===");
   console.log("Tableau 1 :", tableau1.join(" - "));
   console.log("Tableau 2 :", tableau2.join(" - "));
   console.log("Fusion triée :", resultat.join(" - "));
   
   return resultat;
}

fusionTableaux();`,
    testCases: [
      {
        input: [
          [3, 1, 2],
          [2, 4, 1],
        ],
        expected: [1, 1, 2, 2, 3, 4],
        description: "Fusion avec doublons",
      },
      {
        input: [
          [5, 3],
          [2, 4, 6],
        ],
        expected: [2, 3, 4, 5, 6],
        description: "Fusion tableaux différentes tailles",
      },
      {
        input: [
          [1, 3, 5],
          [2, 4, 6],
        ],
        expected: [1, 2, 3, 4, 5, 6],
        description: "Fusion alternée",
      },
    ],
  },
};
