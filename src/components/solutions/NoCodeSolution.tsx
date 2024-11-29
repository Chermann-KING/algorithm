import dynamic from "next/dynamic";
import Image from "next/image";
import { findFlowgorithmSolution } from "@/lib/solutions/getSolution";

const MermaidDiagram = dynamic(() => import("@/components/ui/Mermaid"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center p-8">
      <p className="text-muted-foreground">Chargement du diagramme...</p>
    </div>
  ),
});

interface NoCodeSolutionProps {
  problemId: string;
}

export default function NoCodeSolution({ problemId }: NoCodeSolutionProps) {
  const solution = findFlowgorithmSolution(problemId);

  if (!solution) {
    return (
      <div className="text-center py-4">
        <p className="text-muted-foreground">
          Diagramme de solution en cours de développement
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">
          Diagramme de l&apos;algorithme
        </h3>

        <div className="bg-background rounded-lg p-4">
          {solution.imagePath ? (
            <div className="relative h-[600px] w-full">
              <Image
                src={`/flowcharts/${solution.imagePath}`}
                alt={`Diagramme pour ${problemId}`}
                fill
                className="object-contain dark:invert"
                priority
              />
            </div>
          ) : solution.diagram ? (
            <MermaidDiagram chart={solution.diagram} />
          ) : (
            <p className="text-muted-foreground text-center py-4">
              Diagramme non disponible
            </p>
          )}
        </div>
      </div>

      <div className="prose max-w-none">
        <h3 className="text-base sm:text-lg font-semibold text-card-foreground">
          Explication de l&apos;algorithme
        </h3>
        <div className="bg-card p-4 sm:p-6 rounded-lg border border-border">
          <p className="text-sm sm:text-base text-muted-foreground whitespace-pre-line">
            {solution.explanation}
          </p>
        </div>
      </div>
    </div>
  );
}
