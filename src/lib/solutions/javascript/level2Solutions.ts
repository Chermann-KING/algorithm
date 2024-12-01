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
  exo09: {
    problemId: "exo09",
    explanation:
      "Cette solution simule un distributeur de boissons avec une gestion de stock et des interactions utilisateur. Elle montre comment gérer des choix multiples et maintenir un état cohérent.",
    code: `// Initialisation des stocks
let stocks = {
  coca: 5,
  eau: 3,
  orangina: 4
};

// Fonction pour afficher le menu
function afficherMenu() {
  console.log("=== Distributeur de Boissons ===");
  console.log("1. Coca (" + stocks.coca + " en stock)");
  console.log("2. Eau (" + stocks.eau + " en stock)");
  console.log("3. Orangina (" + stocks.orangina + " en stock)");
  console.log("4. Quitter");
  console.log("==============================");
}

// Fonction pour servir une boisson
function servirBoisson(choix) {
  let boisson = "";
  let stock = 0;

  switch(choix) {
    case 1:
      boisson = "Coca";
      stock = stocks.coca;
      if (stock > 0) stocks.coca--;
      break;
    case 2:
      boisson = "Eau";
      stock = stocks.eau;
      if (stock > 0) stocks.eau--;
      break;
    case 3:
      boisson = "Orangina";
      stock = stocks.orangina;
      if (stock > 0) stocks.orangina--;
      break;
  }

  if (stock > 0) {
    console.log("Voici votre " + boisson + "!");
  } else {
    console.log("Désolé, plus de " + boisson + " en stock.");
  }
}

// Simulation du distributeur
afficherMenu();
console.log("\\nTest avec Coca (choix 1):");
servirBoisson(1);
afficherMenu();

console.log("\\nTest avec Eau (choix 2):");
servirBoisson(2);
afficherMenu();`,
    testCases: [
      {
        input: [1],
        expected: "Service de Coca réussi",
        description: "Test de service Coca",
      },
      {
        input: [2],
        expected: "Service d'Eau réussi",
        description: "Test de service Eau",
      },
    ],
  },
  exo10: {
    problemId: "exo10",
    explanation:
      "Cette solution implémente une calculatrice basique qui gère les quatre opérations fondamentales et protège contre la division par zéro.",
    code: `// Les deux nombres à calculer
const nombre1 = 10;
const nombre2 = 5;

// Fonction de calcul
function calculer(operation) {
  console.log("\\nCalcul : " + nombre1 + " " + operation + " " + nombre2);

  let resultat;
  
  switch(operation) {
    case "+":
      resultat = nombre1 + nombre2;
      break;
    case "-":
      resultat = nombre1 - nombre2;
      break;
    case "*":
      resultat = nombre1 * nombre2;
      break;
    case "/":
      if (nombre2 === 0) {
        return "Erreur : Division par zéro impossible";
      }
      resultat = nombre1 / nombre2;
      break;
    default:
      return "Opération non reconnue";
  }

  return "Résultat = " + resultat;
}

// Tests des différentes opérations
console.log("=== Tests de la calculatrice ===");
console.log(calculer("+"));  // Addition
console.log(calculer("-"));  // Soustraction
console.log(calculer("*"));  // Multiplication
console.log(calculer("/")); // Division
console.log(calculer("/")); // Test avec nombre2 = 0 pour la division`,
    testCases: [
      {
        input: ["+"],
        expected: 15,
        description: "Test addition",
      },
      {
        input: ["*"],
        expected: 50,
        description: "Test multiplication",
      },
    ],
  },
  exo11: {
    problemId: "exo11",
    explanation:
      "Cette solution convertit une note sur 20 en une appréciation textuelle en utilisant une série de conditions.",
    code: `// Fonction de conversion note -> appréciation
function convertirNote(note) {
  // Vérification de la validité de la note
  if (note < 0 || note > 20) {
    return "Note invalide ! La note doit être entre 0 et 20";
  }

  // Conversion en appréciation
  if (note >= 18) {
    return "Excellent !";
  } else if (note >= 16) {
    return "Très Bien !";
  } else if (note >= 14) {
    return "Bien !";
  } else if (note >= 12) {
    return "Satisfaisant !";
  } else if (note >= 10) {
    return "Suffisant !";
  } else {
    return "Insuffisant !";
  }
}

// Tests avec différentes notes
console.log("=== Tests du système de notes ===");
const notes = [20, 17, 15, 13, 11, 8, -1, 25];

notes.forEach(note => {
  console.log("Note : " + note + "/20");
  console.log("Appréciation : " + convertirNote(note));
  console.log("---");
});`,
    testCases: [
      {
        input: [19],
        expected: "Excellent !",
        description: "Test note excellente",
      },
      {
        input: [8],
        expected: "Insuffisant !",
        description: "Test note insuffisante",
      },
      {
        input: [25],
        expected: "Note invalide !",
        description: "Test note invalide",
      },
    ],
  },
  exo12: {
    problemId: "exo12",
    explanation:
      "Cette solution montre comment calculer une différence entre deux durées en passant par une conversion en secondes pour simplifier les calculs.",
    code: `// Première durée
const temps1 = {
  jours: 1,
  heures: 12,
  minutes: 30,
  secondes: 45
};

// Deuxième durée
const temps2 = {
  jours: 0,
  heures: 8,
  minutes: 45,
  secondes: 20
};

// Fonction de conversion en secondes
function convertirEnSecondes(temps) {
  return temps.secondes +
         temps.minutes * 60 +
         temps.heures * 3600 +
         temps.jours * 86400;
}

// Fonction de conversion des secondes en durée
function convertirSecondesEnDuree(totalSecondes) {
  const duree = {
    jours: Math.floor(totalSecondes / 86400),
    heures: 0,
    minutes: 0,
    secondes: 0
  };
  
  let reste = totalSecondes % 86400;
  duree.heures = Math.floor(reste / 3600);
  
  reste = reste % 3600;
  duree.minutes = Math.floor(reste / 60);
  
  duree.secondes = reste % 60;
  
  return duree;
}

// Calcul de la différence
console.log("Première durée :");
console.log("Jours :", temps1.jours);
console.log("Heures :", temps1.heures);
console.log("Minutes :", temps1.minutes);
console.log("Secondes :", temps1.secondes);

console.log("\\nDeuxième durée :");
console.log("Jours :", temps2.jours);
console.log("Heures :", temps2.heures);
console.log("Minutes :", temps2.minutes);
console.log("Secondes :", temps2.secondes);

const secondes1 = convertirEnSecondes(temps1);
const secondes2 = convertirEnSecondes(temps2);
const difference = secondes1 - secondes2;

const resultat = convertirSecondesEnDuree(difference);

console.log("\\nDifférence :");
console.log(resultat.jours + " jour(s)");
console.log(resultat.heures + " heure(s)");
console.log(resultat.minutes + " minute(s)");
console.log(resultat.secondes + " seconde(s)");`,
    testCases: [
      {
        input: [
          { jours: 1, heures: 12, minutes: 30, secondes: 45 },
          { jours: 0, heures: 8, minutes: 45, secondes: 20 },
        ],
        expected: "1j 3h 45m 25s",
        description: "Test avec les durées de l'exemple",
      },
    ],
  },
};
