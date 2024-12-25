import { Code2, BookOpen, BarChart } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Visualisez avant de coder",
      description:
        "Comprenez les concepts avec des diagrammes interactifs qui vous permettent de voir l'algorithme en action avant de le coder.",
      icon: <Code2 className="w-12 h-12 mb-4 text-primary" />,
    },
    {
      title: "Plusieurs langages, une logique",
      description:
        "Maîtrisez la logique algorithmique et appliquez-la dans le langage de votre choix : Python, JavaScript, Java et plus encore.",
      icon: <BookOpen className="w-12 h-12 mb-4 text-primary" />,
    },
    {
      title: "Progression structurée",
      description:
        "Suivez un parcours pédagogique soigneusement conçu, des bases jusqu'aux concepts avancés, avec des exercices pratiques à chaque étape.",
      icon: <BarChart className="w-12 h-12 mb-4 text-primary" />,
    },
  ];

  return (
    <section className="container px-4 py-16 md:py-24 mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Une approche unique de l&apos;apprentissage
      </h2>
      <div className="grid gap-8 md:gap-12 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center px-4"
          >
            <div className="mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-muted-foreground text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
