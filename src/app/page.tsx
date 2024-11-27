import ProblemList from "@/components/problems/ProblemList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Bienvenue sur Algorithm</h1>
      <p className="text-lg text-gray-700">
        Apprenez l&apos;algorithme étape par étape avec des solutions visuelles.
      </p>
      <ProblemList />
    </div>
  );
}
