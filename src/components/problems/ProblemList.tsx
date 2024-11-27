import ProblemCard from "./ProblemCard";
import { problems } from "@/lib/problems/problemsData";
import { useSearch } from "@/context/search-context";

interface ProblemListProps {
  selectedLevel: number | null;
  selectedDifficulty: "facile" | "moyen" | "dificile" | null;
}

export default function ProblemList({
  selectedLevel,
  selectedDifficulty,
}: ProblemListProps) {
  const { searchTerm } = useSearch();

  const allProblems = problems
    .filter((level) => (selectedLevel ? level.id === selectedLevel : true))
    .flatMap((level) =>
      level.problems
        .filter((problem) => {
          const matchesDifficulty = selectedDifficulty
            ? problem.difficulty === selectedDifficulty
            : true;
          const matchesSearch =
            searchTerm.trim() === ""
              ? true
              : problem.title
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()) ||
                problem.description
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase());
          return matchesDifficulty && matchesSearch;
        })
        .map((problem) => ({
          ...problem,
          levelId: level.id,
        }))
    );

  if (allProblems.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Aucun problème trouvé.</p>
      </div>
    );
  }

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
