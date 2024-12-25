import { ArrowRight, Lock } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Problem } from "@/types/problem";
import Link from "next/link";

interface ProblemRowProps {
  problem: Problem;
  isLocked: boolean;
  progress: number;
  levelId: number;
}

export function ProblemRow({ problem, isLocked, levelId }: ProblemRowProps) {
  return (
    <Link
      href={isLocked ? "#" : `/levels/${levelId}/${problem.id}`}
      className={`block transition-colors ${!isLocked && "hover:bg-muted"}`}
    >
      <div
        className={`flex items-center justify-between p-3 rounded-md bg-muted/50
        ${!isLocked && "cursor-pointer"}`}
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
    </Link>
  );
}
