/**
 * Page d'inscription
 * @module app/auth/inscription/page
 */

import { Metadata } from "next";
import RegisterForm from "@/components/auth/RegisterForm";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Inscription | Algorithm",
  description: "Créez votre compte Algorithm pour commencer à apprendre",
};

export default function RegisterPage() {
  return (
    <>
      {/* Colonne gauche (formulaire) */}
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-sm px-8">
          <RegisterForm />

          <p className="mt-6 text-sm text-center text-gray-500 dark:text-gray-400">
            Déjà un compte ?{" "}
            <Link
              href="/auth/connexion"
              className="text-purple-500 hover:text-purple-600 underline-offset-4 hover:underline"
            >
              Connectez-vous
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
