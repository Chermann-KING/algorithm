/**
 * Composant formulaire d'inscription avec gestion des erreurs de validation
 * @module components/auth/RegisterForm
 */

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ValidationErrors {
  [key: string]: string;
}

const RegisterForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [globalError, setGlobalError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrors({});
    setGlobalError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          password: formData.get("password"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.errors) {
          // Gestion des erreurs de validation
          const validationErrors: ValidationErrors = {};
          data.errors.forEach((err: { field: string; message: string }) => {
            validationErrors[err.field] = err.message;
          });
          setErrors(validationErrors);
        } else {
          // Erreur générale
          setGlobalError(
            data.message || "Une erreur est survenue lors de l'inscription"
          );
        }
        return;
      }

      // Succès - redirection vers la page de connexion
      router.push("/auth/connexion?success=inscription");
    } catch (error) {
      setGlobalError("Une erreur est survenue lors de l'inscription.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Inscription</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Créez votre compte pour commencer
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Doe"
            required
            disabled={isLoading}
            className={`flex h-10 w-full rounded-md border ${
              errors.name ? "border-red-500" : "border-input"
            } bg-background px-3 py-2`}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

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
            className={`flex h-10 w-full rounded-md border ${
              errors.email ? "border-red-500" : "border-input"
            } bg-background px-3 py-2`}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
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
            className={`flex h-10 w-full rounded-md border ${
              errors.password ? "border-red-500" : "border-input"
            } bg-background px-3 py-2`}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
          <p className="text-sm text-gray-500">
            Le mot de passe doit contenir au moins 8 caractères, une majuscule,
            une minuscule et un chiffre.
          </p>
        </div>

        {globalError && (
          <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm">
            {globalError}
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
        >
          {isLoading ? "Inscription en cours..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
