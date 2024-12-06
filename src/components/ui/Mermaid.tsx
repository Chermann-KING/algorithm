"use client";

import mermaid from "mermaid";
import { useEffect, useRef } from "react";

/**
 * Configuration initiale de Mermaid
 * - startOnLoad: Démarre le rendu automatiquement
 * - theme: Thème graphique par défaut
 * - logLevel: Niveau de logs minimal pour la production
 * - securityLevel: Paramètres de sécurité assouplis pour plus de flexibilité
 * - themeVariables: Personnalisation des styles
 */
mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  logLevel: "error",
  securityLevel: "loose",
  themeVariables: {
    fontFamily: "inherit",
  },
});

/**
 * Interface définissant les propriétés du composant Mermaid
 * @property chart - Chaîne de caractères contenant la définition du diagramme en syntaxe Mermaid
 */
interface MermaidProps {
  chart: string;
}

/**
 * Composant Mermaid
 * Transforme une définition de diagramme Mermaid en SVG
 *
 * Fonctionnalités :
 * - Rendu dynamique des diagrammes
 * - Mise à jour automatique lors des changements
 * - Hauteur minimale garantie pendant le chargement
 * - Support du centrage vertical et horizontal
 *
 * @param {MermaidProps} props - Les propriétés du composant
 */
export default function Mermaid({ chart }: MermaidProps) {
  // Référence vers l'élément DOM qui contiendra le SVG
  const elementRef = useRef<HTMLDivElement>(null);

  /**
   * Effet pour gérer le rendu du diagramme
   * Se déclenche à chaque changement de la prop 'chart'
   */
  useEffect(() => {
    /**
     * Fonction asynchrone pour le rendu du diagramme
     * - Nettoie le contenu existant
     * - Génère le nouveau SVG
     * - Injecte le SVG dans le DOM
     */
    const renderChart = async () => {
      if (elementRef.current) {
        // Nettoyage du contenu précédent
        elementRef.current.innerHTML = "";

        // Génération du nouveau SVG
        const { svg } = await mermaid.render("mermaid-svg", chart);

        // Injection du SVG dans le DOM
        elementRef.current.innerHTML = svg;
      }
    };

    // Exécution du rendu
    renderChart();
  }, [chart]); // Dépendance à la prop chart

  return (
    <div
      className="mermaid min-h-[200px] flex items-center justify-center"
      ref={elementRef}
    >
      {/* Le SVG sera injecté dynamiquement ici */}
    </div>
  );
}
