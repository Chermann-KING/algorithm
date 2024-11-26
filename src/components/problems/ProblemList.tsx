import ProblemCard from "./ProblemCard";
import { problems } from "@/lib/problems/problemsData";

export default function ProblemList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {problems.map((level) => (
        <div key={level.id} className="space-y-4">
          <h2 className="text-2xl font-semibold">Niveau {level.id}</h2>
          <div className="grid gap-4">
            {level.problems.map((problem) => (
              <ProblemCard
                key={problem.id}
                problem={problem}
                level={level.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
