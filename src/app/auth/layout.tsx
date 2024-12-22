/**
 * Layout spécifique pour les pages d'authentification
 * @module app/auth/layout
 */

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
      <footer className="flex justify-start gap-10 px-4 py-6 text-center text-sm text-muted-foreground leading-loose md:text-left border-t">
        <p>© {new Date().getFullYear()} Algorithm. Tous droits réservés.</p>
        <p className="">
          Developpée par{" "}
          <a
            href="https://github.com/Chermann-KING"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            Chermann KING
          </a>
          . Le code source est disponible sur{" "}
          <a
            href="https://github.com/Chermann-KING/algorithm"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            GitHub
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
