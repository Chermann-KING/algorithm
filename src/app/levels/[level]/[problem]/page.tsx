import { problems } from "@/lib/problems/problemsData";
import NoCodeSolution from "@/components/solutions/NoCodeSolution";
import JavaScriptSolution from "@/components/solutions/JavaScriptSolution";
import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: {
    level: string;
    problem: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Problème ${params.problem} - Niveau ${params.level}`,
  };
}

export default function Page({ params }: Props) {
  if (!params.level || !params.problem) {
    notFound();
  }

  const levelNumber = parseInt(params.level);
  const levelData = problems.find((p) => p.id === levelNumber);
  const problemData = levelData?.problems.find((p) => p.id === params.problem);

  if (!levelData || !problemData) {
    notFound();
  }

  const difficultyStyles = {
    facile:
      "bg-green-100/80 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    moyen:
      "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    dificile: "bg-red-100/80 text-red-800 dark:bg-red-800/20 dark:text-red-300",
  };

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-muted-foreground mb-2">
          <span>Niveau {levelNumber}</span>
          <span className="hidden sm:inline">•</span>
          <span
            className={`px-2 py-1 rounded-full ${
              difficultyStyles[problemData.difficulty]
            }`}
          >
            {problemData.difficulty}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-foreground">
          {problemData.title}
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          {problemData.description}
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">
            Solution NOCODE
          </h2>
          <div className="bg-card rounded-lg shadow-sm p-4 sm:p-6 border border-border">
            <NoCodeSolution problemId={problemData.id} />
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-foreground">
            Solution JavaScript
          </h2>
          <div className="bg-card rounded-lg shadow-sm p-4 sm:p-6 border border-border">
            <JavaScriptSolution problemId={problemData.id} />
          </div>
        </section>
      </div>
    </div>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return problems.flatMap((level) =>
    level.problems.map((problem) => ({
      level: level.id.toString(),
      problem: problem.id,
    }))
  );
}
