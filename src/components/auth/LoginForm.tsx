/**
 * Composant formulaire de connexion
 * @module components/auth/LoginForm
 */

"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await signIn("credentials", {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        redirect: false,
        callbackUrl: "/levels",
      });

      if (res?.error) {
        setError(res.error);
        return;
      }

      router.push("/levels"); // Redirection directe vers /levels après connexion
      router.refresh(); // Rafraîchit la session côté client
    } catch (error) {
      setError("Une erreur est survenue lors de la connexion.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Connexion</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Connectez-vous à votre compte pour continuer
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Adresse e-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="exemple@email.com"
            required
            disabled={isLoading}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            disabled={isLoading}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2"
          />
        </div>

        {error && (
          <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm">
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {isLoading ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
