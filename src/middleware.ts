/**
 * Middleware d'authentification global
 * @module middleware
 *
 * Vérifie l'authentification des utilisateurs et protège les routes privées de l'application.
 * Ce middleware est exécuté avant chaque requête vers les routes protégées.
 */

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

/**
 * Middleware d'authentification NextAuth
 * Vérifie la présence et la validité du token JWT de session.
 *
 * @remarks
 * - Redirige automatiquement vers la page de connexion si l'authentification échoue
 * - Appliqué uniquement aux routes spécifiées dans la configuration 'matcher'
 * - Les routes non protégées restent accessibles sans authentification
 *
 * @example
 * // Routes protégées (nécessitent une authentification) :
 * // /levels/debutant
 * // /levels/intermediaire/1
 * // /profile
 * // /api/user/*
 * // /api/problems/*
 * // /api/solutions/*
 *
 * // Routes publiques (accessibles sans authentification) :
 * // /
 * // /auth/connexion
 * // /auth/inscription
 * // /api/auth/*
 */
export default withAuth(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function middleware(_req) {
    return NextResponse.next();
  },
  {
    callbacks: {
      /**
       * Vérifie l'autorisation d'accès à une route
       *
       * @param {Object} params - Paramètres de vérification
       * @param {Object} params.token - Token JWT de la session utilisateur
       * @returns {boolean} true si l'accès est autorisé, false sinon
       */
      authorized: ({ token }) => !!token,
    },
  }
);

/**
 * Configuration du middleware
 * Définit les patterns de routes qui nécessitent une authentification.
 *
 * @property {string[]} matcher - Patterns des routes à protéger
 *
 * @remarks
 * - Les routes /levels/* nécessitent une authentification
 * - La page d'accueil (/) est publique
 * - Les routes d'authentification (/auth/*) sont publiques
 * - Les routes API d'authentification (/api/auth/*) sont publiques
 *
 * @example
 * // Routes protégées :
 * - /levels/*          ✓ Nécessite une authentification
 * - /profile          ✓ Nécessite une authentification
 * - /api/user/*       ✓ Nécessite une authentification
 *
 * // Routes publiques :
 * - /                 ✗ Page d'accueil publique
 * - /auth/*          ✗ Pages d'authentification
 * - /api/auth/*      ✗ API d'authentification
 */
export const config = {
  matcher: [
    // Protège /levels/* et toutes ses sous-routes
    "/levels/:path*",
    // Protège les routes API sauf /api/auth/*
    "/api/:path*",
  ],
};
