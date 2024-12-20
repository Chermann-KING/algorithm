import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level2Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo07: {
    problemId: "exo07",
    explanation: `Ce diagramme illustre les règles qui définissent une année bissextile :

1. Une année est bissextile si :
   - Elle est divisible par 4 (règle principale) ET non divisible par 100
   - OU si elle est divisible par 400 (exception à la règle)

2. L'opérateur modulo (%) est utilisé pour tester la divisibilité :
   - Si nombre % diviseur = 0, alors le nombre est divisible
   - Sinon, le reste nous indique qu'il n'est pas divisible

3. La logique combinée utilise ET/OU pour prendre la décision finale

Cette logique permet d'avoir des années bissextiles tous les 4 ans, sauf les années séculaires (sauf si divisibles par 400).`,
    code: "L'algorithme vérifie les conditions de divisibilité pour déterminer si une année est bissextile.",
    imagePath: "level2/flowgorithm-level2-exo07.svg",
  },
  exo08: {
    problemId: "exo08",
    explanation: `Ce diagramme simule un lanceur de balles de tennis simple :

1. Le lanceur gère deux états :
   - État "prêt" : le lanceur peut lancer une balle
   - État "panier vide" : plus aucune balle disponible

2. Le système vérifie avant chaque lancer :
   - S'il reste des balles, on peut lancer
   - Sinon, on signale que le panier est vide

3. À chaque lancer :
   - Le nombre de balles diminue de 1
   - Les états sont mis à jour en conséquence`,
    code: "L'algorithme simule le fonctionnement d'un lanceur de balles avec gestion d'état.",
    imagePath: "level2/flowgorithm-level2-exo08.svg",
  },
  exo09: {
    problemId: "exo09",
    explanation: `Ce diagramme illustre le fonctionnement d'un distributeur de boissons simple :

1. Initialisation du stock :
   - Chaque type de boisson a son propre compteur
   - Les stocks sont limités et diminuent à chaque service

2. Interface utilisateur :
   - Un menu numéroté pour faciliter le choix
   - Option pour quitter le programme
   - Retour au menu après chaque action

3. Gestion des stocks :
   - Vérification avant de servir
   - Mise à jour après chaque service
   - Message d'erreur si rupture de stock`,
    code: "L'algorithme simule un distributeur de boissons avec gestion de stock et interface utilisateur.",
    imagePath: "level2/flowgorithm-level2-exo09.svg",
  },
  exo10: {
    problemId: "exo10",
    explanation: `Ce diagramme montre le fonctionnement d'une calculatrice simple :

1. Étapes principales :
   - Saisie des deux nombres à calculer
   - Choix de l'opération parmi les 4 disponibles
   - Vérification spéciale pour la division
   - Calcul et affichage du résultat

2. Gestion des erreurs :
   - Vérification de la division par zéro
   - Retour au menu en cas d'erreur
   - Messages clairs pour l'utilisateur

3. Chaque opération est clairement identifiée avec son symbole correspondant`,
    code: "L'algorithme simule une calculatrice simple avec gestion des erreurs.",
    imagePath: "level2/flowgorithm-level2-exo10.svg",
  },
  exo11: {
    problemId: "exo11",
    explanation: `Ce diagramme montre la conversion d'une note en appréciation textuelle :

1. Validation de la note :
   - Vérification que la note est entre 0 et 20
   - Message d'erreur si la note est invalide

2. Système d'appréciation :
   - Excellent : 18-20
   - Très Bien : 16-17
   - Bien : 14-15
   - Satisfaisant : 12-13
   - Suffisant : 10-11
   - Insuffisant : < 10

3. Les conditions sont vérifiées dans l'ordre décroissant pour plus d'efficacité`,
    code: "L'algorithme convertit une note numérique en appréciation textuelle.",
    imagePath: "level2/flowgorithm-level2-exo11.svg",
  },
  exo12: {
    problemId: "exo12",
    explanation: `Ce diagramme montre comment calculer une différence entre deux durées :

1. ÉTAPE 1 - Saisie de la première durée :
   - On décompose le temps en unités : jours, heures, minutes, secondes
   - Chaque unité a son importance pour le calcul final
   - Exemple : 1j 12h 30m 45s

2. ÉTAPE 2 - Saisie de la deuxième durée :
   - Même décomposition que la première durée
   - Ces valeurs seront soustraites de la première durée
   - Exemple : 0j 8h 45m 20s

3. ÉTAPE 3 - Conversion de la première durée en secondes :
   - Pour pouvoir comparer, on doit tout convertir en une seule unité
   - 1 jour = 24h = 1440min = 86400s
   - 1 heure = 60min = 3600s
   - 1 minute = 60s
   - On additionne toutes les conversions

4. ÉTAPE 4 - Conversion de la deuxième durée :
   - Même processus de conversion que l'étape 3
   - Chaque unité est convertie en secondes
   - On obtient un total en secondes

5. ÉTAPE 5 - Calcul de la différence :
   - On soustrait les deux totaux en secondes
   - Ce résultat sera plus facile à reconvertir

Le résultat final est reconverti du total de secondes vers un format lisible en jours, heures, minutes et secondes.`,
    code: "L'algorithme convertit des durées en secondes pour faciliter la comparaison, puis reconvertit le résultat en format lisible.",
    imagePath: "level2/flowgorithm-level2-exo12.svg",
  },
};
