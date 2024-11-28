// "use client";

// import { useEffect } from "react";
// import mermaid from "mermaid";

// mermaid.initialize({
//   startOnLoad: true,
//   theme: "default",
//   securityLevel: "loose",
// });

// export default function MermaidDiagram({ chart }: { chart: string }) {
//   useEffect(() => {
//     mermaid.contentLoaded();
//   }, []);

//   return (
//     <div className="flex justify-center">
//       <pre className="mermaid">{chart}</pre>
//     </div>
//   );
// }

"use client";

import mermaid from "mermaid";
import { useEffect, useRef } from "react";

mermaid.initialize({
  startOnLoad: true,
  theme: "default",
  logLevel: "error",
  securityLevel: "loose",
  themeVariables: {
    fontFamily: "inherit",
  },
});

interface MermaidProps {
  chart: string;
}

export default function Mermaid({ chart }: MermaidProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderChart = async () => {
      if (elementRef.current) {
        elementRef.current.innerHTML = "";
        const { svg } = await mermaid.render("mermaid-svg", chart);
        elementRef.current.innerHTML = svg;
      }
    };

    renderChart();
  }, [chart]);

  return (
    <div
      className="mermaid min-h-[200px] flex items-center justify-center"
      ref={elementRef}
    >
      {/* Le SVG sera injecté ici */}
    </div>
  );
}
