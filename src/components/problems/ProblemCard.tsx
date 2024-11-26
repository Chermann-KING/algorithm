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
    facile: "bg-green-100 text-green-800",
    moyen: "bg-yellow-100 text-yellow-800",
    dificile: "bg-red-100 text-red-800",
  };

  return (
    <Link href={`/levels/${level}/${problem.id}`}>
      <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">{problem.title}</h3>
          <span
            className={`px-2 py-1 rounded-full text-sm ${
              difficultyColor[problem.difficulty]
            }`}
          >
            {problem.difficulty}
          </span>
        </div>
        <p className="text-gray-600">{problem.description}</p>
      </div>
    </Link>
  );
}
