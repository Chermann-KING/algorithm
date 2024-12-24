// src/app/api/auth/[...nextauth]/route.ts
/**
 * Route d'authentification NextAuth
 * @module api/auth/route
 *
 * Cette route gère les requêtes d'authentification via NextAuth.
 * Elle utilise la configuration définie dans options.ts pour gérer
 * l'authentification et les sessions utilisateur.
 */

import NextAuth from "next-auth";
import { authOptions } from "./options";

/**
 * Handler NextAuth pour gérer les requêtes GET et POST
 * Utilise les options de configuration définies dans authOptions
 */
const handler = NextAuth(authOptions);

/**
 * Export des handlers pour les méthodes GET et POST
 * Nécessaire pour le fonctionnement des routes API dans Next.js 13+
 */
export { handler as GET, handler as POST };
