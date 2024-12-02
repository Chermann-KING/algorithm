import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level3Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo13: {
    problemId: "exo13",
    explanation: `Ce diagramme montre comment construire une table de multiplication :

1. Initialisation :
   - On choisit le nombre pour lequel on veut la table (ici 2)
   - On utilise un compteur qui va de 0 à 10

2. La boucle :
   - Elle permet de répéter le même calcul plusieurs fois
   - À chaque tour, on multiplie 2 par un nouveau nombre
   - On s'arrête quand on arrive à 10

3. Le calcul :
   - À chaque étape, on multiplie 2 par le compteur
   - Par exemple : 2 × 5 = 10

4. L'affichage :
   - On montre l'opération complète à chaque fois
   - L'utilisateur voit ainsi la progression de la table`,
    code: "L'algorithme utilise une boucle pour générer la table de multiplication de 2.",
    imagePath: "level3/flowgorithm-level3-exo13.svg",
  },
  exo14: {
    problemId: "exo14",
    explanation: `Ce diagramme montre l'évolution du lanceur de balles avec comptage :

1. Initialisation :
   - On définit le stock total de balles
   - On prépare un compteur de balles lancées
   - Le lanceur est mis en état prêt

2. Boucle de lancement :
   - À chaque tour, on vérifie s'il reste des balles
   - Le stock diminue à chaque lancer
   - Le compteur de balles lancées augmente

3. Affichages :
   - Message à chaque lancer avec état du stock
   - Message final quand le stock est épuisé

Cette version avancée permet de suivre l'utilisation du lanceur.`,
    code: "L'algorithme utilise une boucle pour gérer les lancers successifs jusqu'à épuisement du stock.",
    imagePath: "level3/flowgorithm-level3-exo14.svg",
  },
  exo15: {
    problemId: "exo15",
    explanation: `Ce diagramme illustre le principe des boucles imbriquées :

1. Boucle Externe (Tables) :
   - Contrôle quelle table on calcule (1 à 9)
   - Gère l'affichage des titres
   - Passe à la table suivante

2. Boucle Interne (Multiplications) :
   - Calcule chaque multiplication (0 à 10)
   - Affiche le résultat
   - Continue jusqu'à 10 avant de revenir à la boucle externe

3. Les avantages des boucles imbriquées :
   - Permet de faire des calculs systématiques
   - Évite la répétition de code
   - Structure claire et organisée`,
    code: "L'algorithme utilise des boucles imbriquées pour générer toutes les tables de multiplication.",
    imagePath: "level3/flowgorithm-level3-exo15.svg",
  },
  exo16: {
    problemId: "exo16",
    explanation: `Ce diagramme montre la logique d'un jeu de devinette :

1. Configuration :
   - Un nombre secret est défini
   - Un compteur d'essais est initialisé
   - Des messages guident le joueur

2. Boucle de jeu :
   - Le joueur fait une proposition
   - Le jeu compte les essais
   - Le programme compare et donne un indice

3. Feedback intelligent :
   - "Plus grand" si la proposition est trop petite
   - "Plus petit" si la proposition est trop grande
   - Message de victoire avec nombre d'essais`,
    code: "L'algorithme guide le joueur vers le nombre secret avec des indices.",
    imagePath: "level3/flowgorithm-level3-exo16.svg",
  },
  exo17: {
    problemId: "exo17",
    explanation: `Ce diagramme illustre un distributeur de boissons en boucle :

1. Initialisation :
   - Configuration des stocks pour chaque boisson
   - Mise en place d'une structure de menu répétitive
   - Gestion de l'état 'continuer' pour le service

2. Menu et Sélection :
   - Affichage clair des choix disponibles
   - Validation des entrées utilisateur
   - Option de sortie explicite

3. Gestion des Stocks :
   - Vérification de la disponibilité avant distribution
   - Mise à jour automatique après chaque service
   - Messages d'erreur si rupture de stock

4. Boucle de Service :
   - Possibilité de servir plusieurs clients
   - Option de continuer ou terminer après chaque service
   - Gestion propre de la fin du programme`,
    code: "L'algorithme utilise une boucle principale pour servir plusieurs clients successivement.",
    imagePath: "level3/flowgorithm-level3-exo17.svg",
  },
};
