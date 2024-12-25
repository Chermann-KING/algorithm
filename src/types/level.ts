export interface Problem {
  id: string;
  title: string;
  description: string;
  difficulty: "facile" | "moyen" | "dificile";
  completed?: boolean;
}

export interface Level {
  id: number;
  title: string;
  description: string;
  objectives: string[];
  problems: Problem[];
  progress: number;
}
