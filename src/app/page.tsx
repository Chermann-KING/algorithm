import ProblemList from "@/components/problems/ProblemList";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Apprendre les algorithmes étape par étape
      </h1>
      <ProblemList />
    </div>
  );
}
