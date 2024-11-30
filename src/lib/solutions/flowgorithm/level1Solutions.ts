import { FlowgorithmSolution, SolutionRecord } from "../types";

export const level1Solutions: SolutionRecord<FlowgorithmSolution> = {
  exo01: {
    problemId: "exo01",
    explanation: `Le diagramme illustre la déclaration et l'initialisation de nos 20 variables réparties en 4 types...`,
    code: "L'algorithme déclare et initialise les variables...",
    imagePath: "level1/flowgorithm-level1-exo01.svg",
  },
  exo02: {
    problemId: "exo02",
    explanation: `Ce diagramme illustre les deux étapes fondamentales de notre algorithme :

1. La Déclaration et l'Assignation :
   - Nous créons une variable nommée 'message' de type chaîne de caractères
   - Nous lui assignons immédiatement la valeur 'Bienvenue'
   
2. L'Affichage :
   - Nous utilisons une instruction de sortie pour afficher le contenu de notre variable à l'écran
   - L'utilisateur pourra voir le texte 'Bienvenue' s'afficher`,
    code: "L'algorithme crée une variable, y stocke un message et l'affiche à l'écran.",
    imagePath: "level1/flowgorithm-level1-exo02.svg",
  },
  exo03: {
    problemId: "exo03",
    explanation: `Ce diagramme illustre le concept fondamental d'inversion de valeurs à l'aide d'une variable temporaire :

1. Nous commençons par déclarer et initialiser deux variables nb1 et nb2
2. Nous avons besoin d'une variable temporaire (temp) pour stocker une des valeurs pendant l'échange
3. Le processus d'inversion se fait en trois étapes :
   - Sauvegarde de la première valeur
   - Copie de la seconde valeur dans la première variable
   - Récupération de la valeur sauvegardée dans la seconde variable
4. Les affichages avant/après permettent de vérifier que l'inversion a bien fonctionné`,
    code: "L'algorithme utilise une variable temporaire pour échanger les valeurs de deux variables.",
    imagePath: "level1/flowgorithm-level1-exo03.svg",
  },
  exo04: {
    problemId: "exo04",
    explanation: `Ce diagramme illustre l'inversion de deux chaînes de caractères :

1. Il démontre que la technique de la variable temporaire fonctionne aussi avec du texte
2. Les variables de type chaîne peuvent contenir n'importe quel texte (mots, phrases, etc.)
3. Le processus d'inversion est le même que pour les nombres :
   - On sauvegarde temporairement la première valeur
   - On écrase la première valeur par la seconde
   - On récupère la valeur sauvegardée pour l'assigner à la seconde variable

Cette technique universelle d'inversion fonctionne pour tous les types de données.`,
    code: "L'algorithme utilise une variable temporaire pour échanger le contenu de deux variables textuelles.",
    imagePath: "level1/flowgorithm-level1-exo04.svg",
  },
};
