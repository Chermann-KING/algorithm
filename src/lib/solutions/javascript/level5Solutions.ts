import { JavaScriptSolution, SolutionRecord } from "../types";

export const level5Solutions: SolutionRecord<JavaScriptSolution> = {
  "projet-juste-prix": {
    problemId: "projet-juste-prix",
    explanation:
      "Cette solution implémente un jeu du Juste Prix complet avec plusieurs niveaux de difficulté.",
    code: `function justePrix() {
   let continuerJeu = true;
   
   function getMaxFromLevel(niveau) {
       switch(niveau) {
           case 1: return 10;    // Facile
           case 2: return 100;   // Moyen
           case 3: return 1000;  // Difficile
           default: return 100;
       }
   }

   while (continuerJeu) {
       // Choix du niveau
       console.log("\\n=== JUSTE PRIX ===");
       console.log("1. Facile (1-10)");
       console.log("2. Moyen (1-100)");
       console.log("3. Difficile (1-1000)\\n");

       const niveau = parseInt(prompt("Choisissez votre niveau (1-3) : ") || "0");
       if (niveau < 1 || niveau > 3) {
           console.log("Niveau invalide !");
           continue;
       }

       const max = getMaxFromLevel(niveau);
       const nombreSecret = Math.floor(Math.random() * max) + 1;
       let essais = 0;
       let trouve = false;

       console.log(\`\\nTrouvez le nombre entre 1 et \${max} !\`);

       while (essais < 10 && !trouve) {
           console.log(\`\\nIl vous reste \${10 - essais} essais.\`);
           const proposition = parseInt(prompt("Votre proposition : ") || "0");
           
           if (isNaN(proposition) || proposition < 1 || proposition > max) {
               console.log(\`Entrez un nombre entre 1 et \${max} !\`);
               continue;
           }

           essais++;

           if (proposition === nombreSecret) {
               console.log(\`\\nBravo ! Nombre trouvé en \${essais} essais !\`);
               trouve = true;
           } else {
               console.log(proposition > nombreSecret ? "C'est moins !" : "C'est plus !");
           }
       }

       if (!trouve) {
           console.log(\`\\nPerdu ! Le nombre était \${nombreSecret}\`);
       }

       const rejouer = prompt("\\nVoulez-vous rejouer ? (oui/non) : ");
       continuerJeu = rejouer.toLowerCase() === 'oui';
   }

   console.log("\\nMerci d'avoir joué !");
}

justePrix();`,
    testCases: [
      {
        input: [1, 5, "non"],
        expected: "Niveau facile",
        description: "Test niveau facile",
      },
      {
        input: [2, Array(10).fill(50), "non"],
        expected: "Nombre d'essais épuisé",
        description: "Test limite essais",
      },
      {
        input: [3, 500, "oui", 1, 5, "non"],
        expected: "Rejouer fonctionne",
        description: "Test option rejouer",
      },
    ],
  },
  "systeme-connexion": {
    problemId: "systeme-connexion",
    explanation:
      "Cette solution implémente un système de connexion avec blocage après 3 échecs.",
    code: `function systemeConnexion() {
   const MOT_DE_PASSE = 'secret';
   let tentatives = 0;
   let compteBloque = false;
   
   console.log("=== SYSTÈME DE CONNEXION ===\\n");

   while (tentatives < 3 && !compteBloque) {
       console.log(\`Tentatives restantes : \${3 - tentatives}\`);
       const motDePasse = prompt("Entrez votre mot de passe : ");
       
       if (!motDePasse) {
           console.log("\\nErreur : Mot de passe vide\\n");
           continue;
       }

       tentatives++;

       if (motDePasse === MOT_DE_PASSE) {
           console.log("\\nBienvenue ! Connexion réussie.\\n");
           return true;
       } else {
           if (tentatives >= 3) {
               compteBloque = true;
               console.log("\\n!!! COMPTE BLOQUÉ !!!");
               console.log("Trop de tentatives échouées.");
               console.log("Veuillez contacter l'administrateur.\\n");
               return false;
           }
           console.log("\\nMot de passe incorrect !\\n");
       }
   }
}

systemeConnexion();`,
    testCases: [
      {
        input: ["secret"],
        expected: true,
        description: "Connexion réussie premier essai",
      },
      {
        input: ["wrong", "wrong", "wrong"],
        expected: false,
        description: "Compte bloqué après 3 échecs",
      },
      {
        input: ["wrong", "secret"],
        expected: true,
        description: "Connexion réussie deuxième essai",
      },
    ],
  },
  "pattern-etoiles": {
    problemId: "pattern-etoiles",
    explanation:
      "Cette solution génère un pattern d'étoiles en forme de triangle.",
    code: `function patternEtoiles() {
   // Saisie et validation
   let nombre;
   do {
       nombre = parseInt(prompt("Entrez un nombre (> 0) : ") || "0");
       if (isNaN(nombre) || nombre <= 0) {
           console.log("Veuillez entrer un nombre positif valide.");
       }
   } while (nombre <= 0);

   console.log("\\n=== Pattern d'étoiles ===\\n");

   // Génération du pattern
   for (let ligne = 1; ligne <= nombre; ligne++) {
       let patternLigne = '';
       
       // Ajout des étoiles
       for (let colonne = 1; colonne <= ligne; colonne++) {
           patternLigne += '* ';
       }
       
       console.log(patternLigne);
   }

   // Exemple de sortie pour nombre = 4:
   // *
   // * *
   // * * *
   // * * * *
}

patternEtoiles();`,
    testCases: [
      {
        input: [4],
        expected: ["*", "* *", "* * *", "* * * *"],
        description: "Pattern 4 lignes",
      },
      {
        input: [1],
        expected: ["*"],
        description: "Pattern minimal",
      },
      {
        input: [0, 3],
        expected: ["*", "* *", "* * *"],
        description: "Validation entrée et pattern 3 lignes",
      },
    ],
  },
  "format-tirets": {
    problemId: "format-tirets",
    explanation:
      "Cette solution génère un motif répétitif de tirets et d'espaces selon des paramètres définis.",
    code: `function formatTirets() {
   // Saisie des paramètres
   const nbRep = parseInt(prompt("Nombre de répétitions : ") || "0");
   const nbTiret = parseInt(prompt("Nombre de tirets par groupe : ") || "0");
   const nbEspace = parseInt(prompt("Nombre d'espaces entre les groupes : ") || "0");

   // Validation des entrées
   if (isNaN(nbRep) || isNaN(nbTiret) || isNaN(nbEspace) ||
       nbRep <= 0 || nbTiret <= 0 || nbEspace < 0) {
       console.log("Paramètres invalides !");
       return;
   }

   console.log("\\n=== Motif Généré ===\\n");

   let motif = "";

   // Génération du motif
   for (let rep = 1; rep <= nbRep; rep++) {
       // Ajout des tirets
       for (let t = 1; t <= nbTiret; t++) {
           motif += "-";
       }
       
       // Ajout des espaces (sauf après la dernière répétition)
       if (rep < nbRep) {
           for (let e = 1; e <= nbEspace; e++) {
               motif += " ";
           }
       }
   }

   console.log(motif);
   return motif;
}

formatTirets();`,
    testCases: [
      {
        input: [2, 1, 3],
        expected: "- - ",
        description: "Motif simple",
      },
      {
        input: [3, 2, 1],
        expected: "--,--,--",
        description: "Tirets multiples",
      },
      {
        input: [1, 4, 0],
        expected: "----",
        description: "Sans espace",
      },
    ],
  },
};
