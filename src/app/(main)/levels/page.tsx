import { LevelCard } from "@/components/levels/LevelCard";
import { problems } from "@/lib/problems/problemsData";
import { Level } from "@/types/level";

export default function LevelsPage() {
  // Convertit les données de problems en format Level[]
  const levels: Level[] = problems.map((level) => {
    const levelDescriptions = {
      1: {
        intro:
          "Maîtrisez les concepts fondamentaux de la programmation. À la fin de ce niveau, vous serez capable de :",
        objectives: [
          "Comprendre et utiliser différents types de variables",
          "Effectuer des opérations de base",
          "Manipuler des chaînes de caractères",
          "Gérer les entrées/sorties de base",
        ],
      },
      2: {
        intro:
          "Apprenez à créer des programmes qui prennent des décisions intelligentes. À la fin de ce niveau, vous pourrez :",
        objectives: [
          "Utiliser les structures conditionnelles if/else",
          "Évaluer des conditions complexes",
          "Implémenter des systèmes de validation",
          "Créer des programmes interactifs avec prise de décision",
        ],
      },
      3: {
        intro:
          "Explorez la puissance des boucles pour automatiser les tâches répétitives. À la fin de ce niveau, vous pourrez :",
        objectives: [
          "Maîtriser les différents types de boucles",
          "Contrôler le flux d'exécution",
          "Créer des programmes plus sophistiqués",
          "Optimiser vos solutions avec les itérations",
        ],
      },
      4: {
        intro:
          "Découvrez comment organiser et manipuler efficacement les données. À la fin de ce niveau, vous saurez :",
        objectives: [
          "Créer et gérer des tableaux",
          "Rechercher et trier des données",
          "Manipuler des collections d'éléments",
          "Implémenter des algorithmes classiques",
        ],
      },
      5: {
        intro:
          "Mettez en pratique toutes vos compétences sur des projets réels. Ce niveau final vous permettra de :",
        objectives: [
          "Combiner tous les concepts appris",
          "Créer des applications complètes",
          "Résoudre des problèmes complexes",
          "Développer votre propre style de programmation",
        ],
      },
    };

    const levelInfo =
      levelDescriptions[level.id as keyof typeof levelDescriptions];

    return {
      id: level.id,
      title: level.title,
      description: levelInfo.intro,
      objectives: levelInfo.objectives,
      problems: level.problems.map((problem) => ({
        ...problem,
        completed: false,
      })),
      progress: 0,
    };
  });

  // Calcule le nombre total d'exercices et les exercices complétés
  const totalExercises = levels.reduce(
    (sum, level) => sum + level.problems.length,
    0
  );
  const completedExercises = levels.reduce(
    (sum, level) =>
      sum + level.problems.filter((problem) => problem.completed).length,
    0
  );

  // Calcule le pourcentage global de progression
  const globalProgress = (completedExercises / totalExercises) * 100;

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      {/* En-tête avec progression globale */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Parcours d&apos;apprentissage
        </h1>
        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-lg font-medium">Progression globale</span>
            <span className="text-sm text-muted-foreground">
              {completedExercises}/{totalExercises} exercices complétés
            </span>
          </div>
          <div className="w-full bg-background rounded-full h-3">
            <div
              className="bg-primary h-3 rounded-full transition-all"
              style={{ width: `${globalProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Liste des niveaux */}
      <div className="grid gap-6">
        {levels.map((level, index) => (
          <LevelCard
            key={level.id}
            level={level}
            isUnlocked={index === 0 || levels[index - 1].progress === 100}
            previousProgress={index > 0 ? levels[index - 1].progress : 100}
          />
        ))}
      </div>
    </div>
  );
}
