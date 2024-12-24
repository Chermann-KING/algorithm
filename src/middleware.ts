/**
 * Middleware d'authentification global
 * @module middleware
 *
 * Protège les routes spécifiées en vérifiant la présence d'un token
 * d'authentification valide. Redirige vers la page de connexion si
 * l'accès n'est pas autorisé.
 */

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

/**
 * Configuration du middleware d'authentification avec NextAuth
 *
 * @param {Request} _req - Requête HTTP (non utilisée actuellement)
 * @returns {NextResponse} Réponse permettant ou non l'accès à la route
 *
 * @example
 * // Le middleware est automatiquement appliqué aux routes
 * // spécifiées dans la configuration matcher
 *
 * // Une route protégée :
 * // /levels/debutant -> vérifie l'authentification
 * // /levels/avance -> vérifie l'authentification
 *
 * // Une route non protégée :
 * // /auth/connexion -> pas de vérification
 */
export default withAuth(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function middleware(_req) {
    // Point d'extension pour des logiques de redirection personnalisées
    // Actuellement, utilise le comportement par défaut
    return NextResponse.next();
  },
  {
    // Définit la logique d'autorisation
    callbacks: {
      /**
       * Vérifie si l'utilisateur est autorisé à accéder à la route
       * @param {Object} params - Paramètres de vérification
       * @param {Object} params.token - Token JWT de l'utilisateur
       * @returns {boolean} true si l'accès est autorisé, false sinon
       */
      authorized: ({ token }) => !!token,
    },
  }
);

/**
 * Configuration des routes protégées
 * Définit les patterns d'URL qui nécessitent une authentification
 *
 * @property {string[]} matcher - Liste des patterns d'URL à protéger
 *
 * @example
 * matcher: [
 *   "/levels/:path*",  // Protège toutes les routes sous /levels
 *   "/profile/:path*", // Protège toutes les routes sous /profile
 * ]
 */
export const config = {
  matcher: [
    "/levels/:path*", // Protège toutes les routes sous /levels
    // Ajout d'autres patterns de routes à protéger ici...
  ],
};
