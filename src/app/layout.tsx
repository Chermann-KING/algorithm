/**
 * Layout racine de l'application
 * @module app/layout
 *
 * Ce layout est le point d'entrée principal de l'application.
 * Il configure les polices, les métadonnées globales et le provider racine.
 * Il s'applique à toutes les pages de l'application.
 */

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { RootProvider } from "@/providers/root-provider";

/**
 * Configuration de la police Geist Sans
 * Police variable personnalisée pour le texte général
 */
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans", // Variable CSS pour utilisation dans les styles
  weight: "100 900", // Plage de poids disponible
});

/**
 * Configuration de la police Geist Mono
 * Police variable personnalisée pour le code et les contenus monospace
 */
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono", // Variable CSS pour utilisation dans les styles
  weight: "100 900", // Plage de poids disponible
});

/**
 * Métadonnées globales de l'application
 * Utilisées pour le SEO et le partage social
 */
export const metadata: Metadata = {
  title: "Algorithme - Apprendre l'algorithme étape par étape",
  description:
    "Une plateforme pour apprendre et pratiquer les algorithmes avec des solutions visuelles NOCODE et des langages de programmations comme JavaScript, Python, Java et plus encore.",
};

/**
 * Composant layout racine
 * Configure la structure HTML de base et applique les providers globaux
 *
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Contenu de l'application
 * @returns {JSX.Element} Structure HTML de base avec les configurations globales
 *
 * @example
 * // Ce layout est automatiquement appliqué à toutes les pages
 * // Il n'a pas besoin d'être importé explicitement
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background font-sans`}
      >
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
