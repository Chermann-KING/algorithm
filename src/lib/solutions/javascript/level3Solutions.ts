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
  exo16: {
    problemId: "exo16",
    explanation:
      "Cette solution simule un jeu du Plus ou Moins où le joueur doit deviner un nombre avec des indices.",
    code: `// Configuration initiale
const nombreSecret = 42;  // À remplacer par un nombre aléatoire
let nombreEssais = 0;
let trouve = false;

// Affichage des règles
console.log("=== Jeu du Plus ou Moins ===");
console.log("Devinez le nombre entre 1 et 100");

// Simulation de quelques essais
function faireProposition(proposition) {
    nombreEssais++;
    
    console.log("\\nProposition:", proposition);
    console.log("Essai numéro:", nombreEssais);
    
    if (proposition === nombreSecret) {
        console.log("Bravo ! Nombre trouvé en", nombreEssais, "essais !");
        return true;
    } else if (proposition > nombreSecret) {
        console.log("C'est plus petit !");
    } else {
        console.log("C'est plus grand !");
    }
    return false;
}

// Test du jeu avec quelques propositions
console.log("\\n--- Début de la partie ---");
faireProposition(50);  // Trop grand
faireProposition(25);  // Trop petit
faireProposition(42);  // Trouvé !`,
    testCases: [
      {
        input: [50],
        expected: "C'est plus petit !",
        description: "Test proposition trop grande",
      },
      {
        input: [42],
        expected: "Bravo !",
        description: "Test nombre trouvé",
      },
    ],
  },
  exo17: {
    problemId: "exo17",
    explanation:
      "Cette solution implémente un distributeur de boissons interactif qui peut servir plusieurs clients successivement, avec gestion de stock et option de quitter.",
    code: `// Initialisation des stocks
let stockBoissons = {
    coca: 5,
    fanta: 5,
    eau: 5
};

// État du distributeur
let continuerService = true;

// Fonction d'affichage du menu
function afficherMenu() {
    console.log("\\n=== DISTRIBUTEUR DE BOISSONS ===");
    console.log("1. Coca Cola (Stock:", stockBoissons.coca, ")");
    console.log("2. Fanta    (Stock:", stockBoissons.fanta, ")");
    console.log("3. Eau      (Stock:", stockBoissons.eau, ")");
    console.log("4. Quitter");
    console.log("==============================\\n");
}

// Fonction de distribution
function distribuerBoisson(choix) {
    let boisson;
    switch(choix) {
        case 1:
            if (stockBoissons.coca > 0) {
                stockBoissons.coca--;
                boisson = "Coca Cola";
                return true;
            }
            break;
        case 2:
            if (stockBoissons.fanta > 0) {
                stockBoissons.fanta--;
                boisson = "Fanta";
                return true;
            }
            break;
        case 3:
            if (stockBoissons.eau > 0) {
                stockBoissons.eau--;
                boisson = "Eau";
                return true;
            }
            break;
    }
    return false;
}

// Simulation du distributeur
while (continuerService) {
    afficherMenu();
    const choix = parseInt(prompt("Votre choix : "));
    
    if (choix === 4) {
        console.log("\\nMerci de votre visite ! Au revoir !");
        continuerService = false;
        continue;
    }
    
    if (choix < 1 || choix > 3) {
        console.log("\\nChoix invalide ! Veuillez réessayer.");
        continue;
    }
    
    if (distribuerBoisson(choix)) {
        console.log("\\nVoici votre boisson ! Bonne dégustation !");
    } else {
        console.log("\\nDésolé, cette boisson n'est plus disponible.");
    }
    
    const reponse = prompt("\\nSouhaitez-vous commander une autre boisson ? (oui/non) : ");
    if (reponse.toLowerCase() !== "oui") {
        console.log("\\nMerci de votre visite ! Au revoir !");
        continuerService = false;
    }
}`,
    testCases: [
      {
        input: [1, "oui", 2, "non"],
        expected: "Distribution de Coca puis Fanta, puis arrêt",
        description: "Test de distribution multiple avec arrêt",
      },
      {
        input: [4],
        expected: "Sortie immédiate",
        description: "Test de l'option quitter",
      },
      {
        input: [1, "oui", 1, "oui", 1, "oui", 1, "oui", 1, "oui", 1],
        expected: "Rupture de stock Coca",
        description: "Test de la gestion des stocks",
      },
    ],
  },
  exo18: {
    problemId: "exo18",
    explanation:
      "Cette solution implémente une calculatrice interactive permettant d'effectuer des calculs en continu avec gestion des erreurs et option de sortie.",
    code: `// Fonction de calcul
function calculer(a, operateur, b) {
    switch(operateur) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': 
            if (b === 0) throw new Error("Division par zéro impossible");
            return a / b;
        default:
            throw new Error("Opérateur non valide");
    }
}

// Fonction de validation de l'opérateur
function estOperateurValide(operateur) {
    return ['+', '-', '*', '/'].includes(operateur);
}

// Initialisation
let continuer = true;
console.log("=== Calculatrice Interactive ===");

// Boucle principale
while (continuer) {
    try {
        // Saisie des valeurs
        const nombre1 = parseFloat(prompt("Premier nombre :"));
        if (isNaN(nombre1)) throw new Error("Nombre invalide");
        
        const operateur = prompt("Opérateur (+, -, *, /) :");
        if (!estOperateurValide(operateur)) throw new Error("Opérateur invalide");
        
        const nombre2 = parseFloat(prompt("Deuxième nombre :"));
        if (isNaN(nombre2)) throw new Error("Nombre invalide");
        
        // Calcul et affichage
        const resultat = calculer(nombre1, operateur, nombre2);
        console.log("\\nOpération:", nombre1, operateur, nombre2);
        console.log("Résultat :", resultat);
        
    } catch (erreur) {
        console.log("\\nErreur :", erreur.message);
        continue;
    }
    
    // Demande de continuation
    const reponse = prompt("\\nVoulez-vous faire un autre calcul ? (oui/non) :");
    continuer = reponse.toLowerCase() === 'oui';
}

console.log("\\nMerci d'avoir utilisé la calculatrice !");`,
    testCases: [
      {
        input: ["5", "+", "3", "non"],
        expected: "8",
        description: "Addition simple puis sortie",
      },
      {
        input: ["10", "/", "0"],
        expected: "Division par zéro impossible",
        description: "Test de la division par zéro",
      },
      {
        input: ["4", "*", "3", "oui", "15", "-", "7", "non"],
        expected: "12 puis 8",
        description: "Test de plusieurs calculs successifs",
      },
    ],
  },
};
