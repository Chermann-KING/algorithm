import { ArrowRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Problem } from "@/types/problem";

interface ProblemRowProps {
  problem: Problem;
  isLocked: boolean;
  progress: number;
}

export function ProblemRow({ problem, isLocked }: ProblemRowProps) {
  return (
    <div
      className={`flex items-center justify-between p-3 rounded-md bg-muted/50
      ${!isLocked && "hover:bg-muted cursor-pointer"}`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`w-2 h-2 rounded-full ${
            problem.completed ? "bg-green-500" : "bg-muted-foreground"
          }`}
        />
        <span
          className={
            problem.completed ? "line-through text-muted-foreground" : ""
          }
        >
          {problem.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Badge variant={problem.difficulty}>{problem.difficulty}</Badge>
        {isLocked ? (
          <Lock className="w-4 h-4" />
        ) : (
          <ArrowRight className="w-4 h-4" />
        )}
      </div>
    </div>
  );
}
