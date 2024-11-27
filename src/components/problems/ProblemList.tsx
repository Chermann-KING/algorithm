import ProblemCard from "./ProblemCard";
import { problems } from "@/lib/problems/problemsData";

interface ProblemListProps {
  selectedLevel: number | null;
}

export default function ProblemList({ selectedLevel }: ProblemListProps) {
  const allProblems = selectedLevel
    ? problems
        .filter((level) => level.id === selectedLevel)
        .flatMap((level) =>
          level.problems.map((problem) => ({
            ...problem,
            levelId: level.id,
          }))
        )
    : problems.flatMap((level) =>
        level.problems.map((problem) => ({
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
