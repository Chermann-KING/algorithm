import Link from "next/link";

interface ProblemCardProps {
  problem: {
    id: string;
    title: string;
    description: string;
    difficulty: "facile" | "moyen" | "dificile";
  };
  level: number;
}

export default function ProblemCard({ problem, level }: ProblemCardProps) {
  const difficultyColor = {
    facile:
      "bg-green-100/80 text-green-800 dark:bg-green-800/20 dark:text-green-300",
    moyen:
      "bg-yellow-100/80 text-yellow-800 dark:bg-yellow-800/20 dark:text-yellow-300",
    dificile: "bg-red-100/80 text-red-800 dark:bg-red-800/20 dark:text-red-300",
  };

  return (
    <Link href={`/levels/${level}/${problem.id}`}>
      <div className="p-6 bg-card rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-card-foreground">
            {problem.title}{" "}
            <span className="text-muted-foreground">• n{level}</span>
          </h3>
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              difficultyColor[problem.difficulty]
            }`}
          >
            {problem.difficulty}
          </span>
        </div>
        <p className="text-muted-foreground">{problem.description}</p>
      </div>
    </Link>
  );
}
