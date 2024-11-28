import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level1Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo01: {
    problemId: "exo01",
    explanation: `Le diagramme illustre la déclaration et l'initialisation de nos 20 variables réparties en 4 types :
1. Variables de type chaîne : Représentent des informations textuelles comme le prénom, la ville, etc.
2. Variables de type entier : Pour stocker des nombres entiers comme l'âge, l'année, etc.
3. Variables de type réel : Pour les nombres avec décimales comme la taille, le prix, etc.
4. Variables de type booléen : Pour les états vrai/faux comme le statut étudiant, etc.

Chaque bloc montre quelques exemples concrets de variables pour mieux comprendre leur utilisation.`,
    code: "L'algorithme déclare et initialise les variables de chaque type puis les affiche de manière organisée.",
    diagram: `graph TD
    A(["Début"])
    B["Variables de type Chaînes (String)
    =================
    prenom = 'Thomas'
    ville = 'Paris'
    metier = 'Développeur'
    fruit = 'Pomme'
    pays = 'France'"]
    
    C["Variables de type Entières (Integer)
    ================
    age = 25
    etage = 3
    annee = 2024
    quantite = 42
    code_postal = 75000"]
    
    D["Variables de type Réelles (Real)
    ==============
    taille = 1.75
    poids = 70.5
    prix = 19.99
    temperature = 22.5
    distance = 5.7"]
    
    E["Variables de type Booléennes (Boolean)
    ==================
    estEtudiant = VRAI
    aPermis = FAUX
    estDisponible = VRAI
    estMarie = FAUX
    estActif = VRAI"]
    
    F[/"Affichage
    ========
    Afficher toutes les variables
    par catégorie"/]
    
    G(["Fin"])

    A --> B
    B --> C
    C --> D
    D --> E
    E --> F
    F --> G

    classDef defaultStyle fill:#f0f0ff,stroke:#9333ea,stroke-width:2px;
    classDef terminator fill:#d1f5d3,stroke:#4CAF50,stroke-width:2px;
    classDef process fill:#e3f2fd,stroke:#2196F3,stroke-width:2px;
    classDef io fill:#fff8e1,stroke:#FFC107,stroke-width:2px;

    class A,G terminator;
    class B,C,D,E process;
    class F io;`,
  },
};
