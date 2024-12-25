export type Difficulty = "facile" | "moyen" | "dificile";

export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  completed?: boolean;
}
