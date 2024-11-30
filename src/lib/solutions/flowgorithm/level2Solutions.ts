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
};
