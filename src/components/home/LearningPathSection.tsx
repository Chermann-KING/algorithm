import { Code2, GitBranch, Layers, Table2, Workflow } from "lucide-react";
import { problems } from "@/lib/problems/problemsData";

export function LearningPathSection() {
  const learningPath = [
    {
      id: 1,
      title: "Les Variables et Opérations de Base",
      description:
        "Commencez par les fondamentaux : variables, types de données et opérations essentielles",
      icon: <Code2 className="w-6 h-6 text-primary" />,
      exercises: problems[0].problems.length,
    },
    {
      id: 2,
      title: "Structures Conditionnelles",
      description:
        "Apprenez à créer des programmes qui prennent des décisions intelligentes",
      icon: <GitBranch className="w-6 h-6 text-primary" />,
      exercises: problems[1].problems.length,
    },
    {
      id: 3,
      title: "Structures Itératives",
      description:
        "Maîtrisez les boucles pour automatiser les tâches répétitives",
      icon: <Workflow className="w-6 h-6 text-primary" />,
      exercises: problems[2].problems.length,
    },
    {
      id: 4,
      title: "Tableaux",
      description:
        "Découvrez comment manipuler des collections de données efficacement",
      icon: <Table2 className="w-6 h-6 text-primary" />,
      exercises: problems[3].problems.length,
    },
    {
      id: 5,
      title: "Projets Avancés",
      description:
        "Mettez en pratique vos compétences sur des projets du monde réel",
      icon: <Layers className="w-6 h-6 text-primary" />,
      exercises: problems[4].problems.length,
    },
  ];

  return (
    <section className="container px-4 py-16 md:py-24 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Un parcours structuré vers la maîtrise
        </h2>
        <p className="text-muted-foreground px-4">
          De débutant à avancé, notre programme vous guide pas à pas
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/20 hidden sm:block" />

        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {learningPath.map((level, index) => (
          <div key={level.id} className="relative mb-8 last:mb-0 pl-8 md:pl-24">
            <div className="absolute left-3 md:left-7 top-6 w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary hidden sm:block" />

            <div className="bg-card rounded-xl p-4 md:p-6">
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                  {level.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {level.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {level.description}
                  </p>
                  <div className="text-sm text-primary">
                    {level.exercises} exercices
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
