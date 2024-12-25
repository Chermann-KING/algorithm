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
 * @property {string[]} matcher - Expression régulière qui capture les routes à protéger
 *
 * @remarks
 * Le pattern actuel protège toutes les routes SAUF :
 * - /api/auth/* : Routes d'authentification uniquement
 * - /auth/* : Pages d'authentification
 * - /public/* : Pages publiques
 * - Les ressources statiques (_next, favicon, etc.)
 *
 * @example
 * // Routes protégées :
 * - /levels/*          ✓ Nécessite une authentification
 * - /profile          ✓ Nécessite une authentification
 * - /api/user/*       ✓ Nécessite une authentification
 * - /api/problems/*   ✓ Nécessite une authentification
 * - /api/solutions/*  ✓ Nécessite une authentification
 *
 * // Routes publiques :
 * - /                 ✗ Accessible sans authentification
 * - /auth/*          ✗ Accessible sans authentification
 * - /api/auth/*      ✗ Accessible sans authentification (nécessaire pour l'authentification)
 */
export const config = {
  matcher: [
    // Protège toutes les routes SAUF :
    // - Les routes d'authentification (/api/auth/*, /auth/*)
    // - Les pages publiques (/public/*)
    // - Les ressources statiques
    "/((?!api/auth|_next/static|_next/image|favicon.ico|public|auth).*)",
  ],
};
