/**
 * Layout spécifique pour les pages d'authentification
 * @module app/auth/layout
 */

import { Footer } from "@/components/ui/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Authentification | Algorithm",
  description: "Connectez-vous ou inscrivez-vous pour accéder à Algorithm",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Contenu principal */}
      <main className="flex-1 flex">{children}</main>

      {/* Pied de page minimal */}
      <Footer />
    </div>
  );
}
