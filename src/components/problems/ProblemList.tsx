import ProblemCard from "./ProblemCard";
import { problems } from "@/lib/problems/problemsData";

interface ProblemListProps {
  selectedLevel: number | null;
  selectedDifficulty: "facile" | "moyen" | "dificile" | null;
}

export default function ProblemList({
  selectedLevel,
  selectedDifficulty,
}: ProblemListProps) {
  const allProblems = problems
    .filter((level) => (selectedLevel ? level.id === selectedLevel : true))
    .flatMap((level) =>
      level.problems
        .filter((problem) =>
          selectedDifficulty ? problem.difficulty === selectedDifficulty : true
        )
        .map((problem) => ({
          ...problem,
          levelId: level.id,
        }))
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allProblems.map((problem) => (
        <ProblemCard
          key={problem.id}
          problem={problem}
          level={problem.levelId}
        />
      ))}
    </div>
  );
}
