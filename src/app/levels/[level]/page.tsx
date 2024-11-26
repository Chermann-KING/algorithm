import { notFound } from "next/navigation";
import ProblemCard from "@/components/problems/ProblemCard";
import { problems } from "@/lib/problems/problemsData";

export default function LevelPage({ params }: { params: { level: string } }) {
  const levelNumber = parseInt(params.level);
  const levelData = problems.find((p) => p.id === levelNumber);

  if (!levelData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Niveau {levelNumber}</h1>
        <h2 className="text-xl text-gray-600">{levelData.title}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {levelData.problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} level={levelNumber} />
        ))}
      </div>
    </div>
  );
}
