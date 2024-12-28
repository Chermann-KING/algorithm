/**
 * Page des niveaux du parcours d'apprentissage
 * @module app/(main)/levels/page
 *
 * Composant serveur (Server Component) qui gère le chargement initial
 * des données des niveaux et les transmet au composant client.
 *
 * Ce composant suit le pattern de séparation des responsabilités de Next.js 14 :
 * - Chargement des données côté serveur pour de meilleures performances
 * - Transmission des données au composant client pour l'interactivité
 */

import { getProblemLevels } from "@/lib/actions/problems";
import { LevelsClient } from "./levels-client";

/**
 * Composant page des niveaux
 *
 * Charge les données des niveaux côté serveur en utilisant Server Components
 * pour optimiser le chargement initial et le SEO.
 *
 * @returns {Promise<JSX.Element>} Le composant client avec les données initiales
 *
 * @example Route standard Next.js :
 * // app/(main)/levels/page.tsx
 * // Accessible via /levels
 */
export default async function LevelsPage() {
  // Récupération des données via une action serveur
  const levels = await getProblemLevels();

  // Rendu du composant client avec les données initiales
  return <LevelsClient initialLevels={levels} />;
}
