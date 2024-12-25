import { Users, Award, TrendingUp } from "lucide-react";

export function StatsSection() {
  const stats = [
    {
      value: 1000,
      label: "Problèmes résolus",
      icon: <TrendingUp className="w-6 h-6" />,
      suffix: "+",
    },
    {
      value: 500,
      label: "Apprenants actifs",
      icon: <Users className="w-6 h-6" />,
      suffix: "+",
    },
    {
      value: 95,
      label: "Taux de réussite",
      icon: <Award className="w-6 h-6" />,
      suffix: "%",
    },
  ];

  return (
    <section className="container px-4 py-16 md:py-24 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          La plateforme en chiffres
        </h2>
        <p className="text-muted-foreground px-4">
          Rejoignez une communauté active d&apos;apprenants
        </p>
      </div>

      <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl blur-xl" />
            <div className="relative bg-card rounded-xl p-6 md:p-8 flex flex-col items-center">
              <div className="bg-primary/10 p-3 rounded-lg mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
