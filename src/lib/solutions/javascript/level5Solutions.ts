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
};
