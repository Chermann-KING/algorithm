// src/components/ui/Badge.tsx
import { type Difficulty } from "@/types/problem";

interface BadgeProps {
  children: React.ReactNode;
  variant: Difficulty;
}

export function Badge({ children, variant }: BadgeProps) {
  const variants: Record<Difficulty, string> = {
    facile: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
    moyen:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
    dificile: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
  };

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
