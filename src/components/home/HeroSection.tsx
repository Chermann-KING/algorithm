import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="h-lvh container flex items-center px-4 py-16 md:py-32 mx-auto">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center gap-6 md:gap-8">
        <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          Apprenez l&apos;algorithmique pas à pas
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          De la visualisation au code : maîtrisez les algorithmes à votre rythme
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/auth/inscription">
            <Button size="lg" className="w-full sm:w-auto">
              Commencer gratuitement
            </Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              En savoir plus
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
