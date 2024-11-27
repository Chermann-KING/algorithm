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
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">
          Niveau {levelNumber}
        </h1>
        <h2 className="text-lg sm:text-xl text-muted-foreground">
          {levelData.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {levelData.problems.map((problem) => (
          <ProblemCard key={problem.id} problem={problem} level={levelNumber} />
        ))}
      </div>
    </div>
  );
}
