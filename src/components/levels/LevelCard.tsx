import { ProblemRow } from "@/components/levels/ProblemRow";
import { Lock } from "lucide-react";
import { type Level } from "@/types/level";
import { type Problem } from "@/types/problem";

interface LevelCardProps {
  level: Level;
  isUnlocked: boolean;
  previousProgress: number;
}

export function LevelCard({
  level,
  isUnlocked,
  previousProgress,
}: LevelCardProps) {
  return (
    <div
      className={`bg-card rounded-lg border ${
        isUnlocked ? "hover:border-primary" : "opacity-75"
      }`}
    >
      <div className="p-6">
        {/* En-tête du niveau */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              Niveau {level.id}
            </span>
            <h2 className="text-xl font-semibold">{level.title}</h2>
          </div>
          {!isUnlocked && (
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              <span className="text-sm text-muted-foreground">
                Complétez le niveau précédent à {previousProgress}%
              </span>
            </div>
          )}
        </div>

        {/* Description et objectifs */}
        <div className="space-y-4 mb-6">
          <p className="text-muted-foreground">{level.description}</p>
          <div className="space-y-2">
            {level.objectives.map((objective, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span className="text-muted-foreground text-sm">
                  {objective}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Liste des exercices */}
        <div className="space-y-3">
          {level.problems.map((problem: Problem) => (
            <ProblemRow
              key={problem.id}
              problem={problem}
              isLocked={!isUnlocked}
              progress={level.progress}
            />
          ))}
        </div>
      </div>

      {/* Barre de progression du niveau */}
      <div className="border-t p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${level.progress}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {level.progress}%
          </span>
        </div>
        {isUnlocked && level.progress < 100 && (
          <button className="ml-4 px-4 py-2 rounded-md bg-primary text-primary-foreground">
            Continuer
          </button>
        )}
      </div>
    </div>
  );
}
