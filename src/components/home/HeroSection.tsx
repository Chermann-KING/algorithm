import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Code2, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] relative overflow-hidden bg-gradient-to-b from-background to-background/50">
      {/* Éléments de design d'arrière-plan */}
      <div className="absolute inset-0 w-full h-full dark:opacity-20 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/50 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
      </div>

      <div className="container relative flex flex-col lg:flex-row items-center justify-between gap-12 px-4 py-16 md:py-32 mx-auto">
        {/* Contenu texte */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-6">
            Apprenez l&apos;algorithmique{" "}
            <span className="text-primary inline-block">pas à pas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            De la visualisation au code : maîtrisez les algorithmes à votre
            rythme
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/auth/inscription">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <Play className="w-4 h-4" />
                Commencer gratuitement
              </Button>
            </Link>
            <Link href="#features">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2"
              >
                <Code2 className="w-4 h-4" />
                Découvrir la méthode
              </Button>
            </Link>
          </div>
        </div>

        {/* Visualisation interactive */}
        <div className="relative w-full lg:w-1/2 aspect-square max-w-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg backdrop-blur-sm">
            <div className="p-6">
              {/* Exemple de visualisation d'algorithme simple */}
              <div className="bg-background/80 rounded-lg p-4 mb-4">
                <pre className="text-sm  whitespace-pre-wrap break-words font-mono">
                  <code className="text-primary">
                    {`function tri(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Échange
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }`}
                  </code>
                </pre>
              </div>
              {/* Visualisation animée */}
              <div className="flex justify-center items-center gap-4">
                {[4, 2, 7, 1, 3].map((num, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground rounded-lg transition-all duration-500"
                    style={{
                      transform: `translateY(${Math.sin(i) * 10}px)`,
                      animation: `bounce 2s infinite ${i * 0.2}s`,
                    }}
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
