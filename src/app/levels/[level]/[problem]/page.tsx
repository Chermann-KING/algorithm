import { notFound } from "next/navigation";
import { problems } from "@/lib/problems/problemsData";
import NoCodeSolution from "@/components/solutions/NoCodeSolution";
import JavaScriptSolution from "@/components/solutions/JavaScriptSolution";

interface PageProps {
  params: {
    level: string;
    problem: string;
  };
}

export default async function ProblemPage({ params }: PageProps) {
  const levelNumber = parseInt(params.level);
  const levelData = problems.find((p) => p.id === levelNumber);
  const problemData = levelData?.problems.find((p) => p.id === params.problem);

  if (!levelData || !problemData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
          <span>Niveau {levelNumber}</span>
          <span>•</span>
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              problemData.difficulty === "facile"
                ? "bg-green-100 text-green-800"
                : problemData.difficulty === "moyen"
                ? "bg-yellow-100 text-yellow-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {problemData.difficulty}
          </span>
        </div>
        <h1 className="text-3xl font-bold mb-4">{problemData.title}</h1>
        <p className="text-lg text-gray-700">{problemData.description}</p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Solution NOCODE</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <NoCodeSolution problemId={problemData.id} />
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Solution JavaScript</h2>
          <div className="bg-white rounded-lg shadow-md p-6">
            <JavaScriptSolution problemId={problemData.id} />
          </div>
        </section>
      </div>
    </div>
  );
}

// Générer les chemins statiques
export async function generateStaticParams() {
  const paths: { level: string; problem: string }[] = [];

  problems.forEach((level) => {
    level.problems.forEach((problem) => {
      paths.push({
        level: level.id.toString(),
        problem: problem.id,
      });
    });
  });

  return paths;
}
