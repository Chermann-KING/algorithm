/**
 * Page de connexion
 * @module app/auth/connexion/page
 */

import { Metadata } from "next";
import LoginForm from "@/components/auth/LoginForm";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Connexion | Algorithm",
  description: "Connectez-vous à votre compte Algorithm",
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { success?: string };
}) {
  return (
    <>
      {/* Colonne gauche (formulaire) */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm px-8">
          {searchParams?.success === "inscription" && (
            <div className="mb-6 bg-green-50 text-green-600 p-3 rounded-md text-sm">
              Inscription réussie ! Vous pouvez maintenant vous connecter.
            </div>
          )}

          <LoginForm />

          <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
            Pas encore de compte ?{" "}
            <Link
              href="/auth/inscription"
              className="text-purple-500 hover:text-purple-600 underline-offset-4 hover:underline"
            >
              Créez-en un gratuitement
            </Link>
          </p>
        </div>
      </div>

      {/* Colonne droite (décoration) */}
      <div className="hidden lg:flex flex-1 bg-purple-700 relative overflow-hidden">
        {/* SVG en arrière-plan */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <Image
            src="/undraw-programming.svg"
            alt="Construction Algorithmique"
            width={800}
            height={600}
            className="w-full h-full object-contain"
            priority
          />
        </div>

        {/* Contenu au premier plan */}
        <div className="relative z-10 w-full flex flex-col p-8">
          <Link href="/" className="text-white text-3xl font-bold">
            Algorithm
          </Link>
          <div className="mt-auto ">
            <p className="text-xl text-white/90">
              Apprenez la programmation et les algorithmes pas à pas.
            </p>
            <p className="mt-2 text-white/80">
              Construisez vos connaissances bloc par bloc, du concept à la
              solution.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
