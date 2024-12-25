import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container px-4 py-32 mx-auto">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center gap-8">
          <h1 className="text-4xl font-bold sm:text-6xl lg:text-7xl">
            Apprenez l&apos;algorithmique pas à pas
          </h1>
          <p className="text-xl text-muted-foreground sm:text-2xl">
            De la visualisation au code : maîtrisez les algorithmes à votre
            rythme
          </p>
          <div className="flex gap-4">
            <Button variant="default" size="lg">
              Commencer gratuitement
            </Button>
            <Button variant="outline" size="lg">
              En savoir plus
            </Button>
          </div>
        </div>
      </section>

      {/* Points forts uniques */}
      <section className="container px-4 py-24 mx-auto">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="text-2xl font-semibold">
              Visualisez avant de coder
            </h3>
            <p className="text-muted-foreground">
              Comprenez les concepts avec des diagrammes interactifs
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="text-2xl font-semibold">
              Plusieurs langages, une logique
            </h3>
            <p className="text-muted-foreground">
              Apprenez la logique une fois, appliquez-la partout
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <h3 className="text-2xl font-semibold">Progression structurée</h3>
            <p className="text-muted-foreground">
              Évoluez à votre rythme avec des niveaux adaptés
            </p>
          </div>
        </div>
      </section>

      {/* Parcours d'apprentissage */}
      <section className="container px-4 py-24 mx-auto bg-muted">
        <h2 className="text-3xl font-bold text-center mb-16">
          Votre parcours d&apos;apprentissage
        </h2>
        <div className="grid gap-8 md:grid-cols-4">
          {/* À compléter avec les niveaux */}
        </div>
      </section>

      {/* Démo interactive */}
      <section className="container px-4 py-24 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Essayez par vous-même
        </h2>
        <div className="max-w-4xl mx-auto">
          {/* Intégrer votre composant de démonstration ici */}
        </div>
      </section>

      {/* Stats */}
      <section className="container px-4 py-24 mx-auto bg-primary text-primary-foreground">
        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div>
            <div className="text-4xl font-bold">1000+</div>
            <div>Problèmes résolus</div>
          </div>
          <div>
            <div className="text-4xl font-bold">500+</div>
            <div>Apprenants actifs</div>
          </div>
          <div>
            <div className="text-4xl font-bold">95%</div>
            <div>Taux de réussite</div>
          </div>
        </div>
      </section>
    </>
  );
}
