/**
 * Layout principal de l'application nécessitant une authentification
 * @module app/(main)/layout
 *
 * Ce layout sert de conteneur pour toutes les pages nécessitant une authentification.
 * Il vérifie la présence d'une session active et redirige vers la page de connexion si nécessaire.
 * Il fournit également une structure commune avec header et footer pour toutes les pages protégées.
 */

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";

/**
 * Composant layout principal avec vérification d'authentification
 *
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu de la page à afficher
 * @returns {Promise<JSX.Element>} Layout avec header, contenu principal et footer
 *
 * @throws {Redirect} Redirige vers la page de connexion si aucune session n'est active
 *
 * @example
 * // Utilisation dans une page protégée
 * export default function ProtectedPage() {
 *   return <div>Contenu protégé</div>;
 * }
 * // La page sera automatiquement encapsulée dans ce layout
 */
export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Vérifie l'existence d'une session utilisateur active
  const session = await getServerSession(authOptions);

  // Redirige vers la page de connexion si aucune session n'est trouvée
  if (!session) {
    redirect("/auth/connexion");
  }

  // Rendu du layout avec la structure commune
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
