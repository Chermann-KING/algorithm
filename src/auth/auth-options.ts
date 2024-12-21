/**
 * Configuration de l'authentification avec NextAuth.js
 * @module auth/auth-options
 *
 * Ce fichier définit la configuration de l'authentification pour l'application en utilisant NextAuth.js.
 * Il gère l'authentification par email/mot de passe via un système de credentials.
 *
 * @requires next-auth - Framework d'authentification
 * @requires @auth/prisma-adapter - Adaptateur Prisma pour NextAuth
 * @requires bcrypt - Bibliothèque pour le hashage des mots de passe
 */

import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { prisma } from "@/lib/db";

/**
 * Configuration principale de NextAuth
 * @constant {NextAuthConfig}
 */
export const authConfig = {
  // Configuration de l'adaptateur Prisma pour la persistance des données
  adapter: PrismaAdapter(prisma),

  // Configuration de la session avec stratégie JWT
  session: { strategy: "jwt" },

  // Définition des routes de pages personnalisées
  pages: {
    signIn: "/auth/connexion", // Page de connexion
    newUser: "/auth/inscription", // Page d'inscription
  },

  // Configuration des providers d'authentification
  providers: [
    CredentialsProvider({
      name: "credentials",
      // Définition des champs du formulaire d'authentification
      credentials: {
        email: {
          label: "Adresse e-mail",
          type: "email",
          placeholder: "exemple@email.com",
        },
        password: {
          label: "Mot de passe",
          type: "password",
          placeholder: "Votre mot de passe",
        },
      },

      /**
       * Fonction d'autorisation pour la validation des credentials
       * @async
       * @param {Object} credentials - Les identifiants fournis par l'utilisateur
       * @returns {Promise<User|null>} Les données utilisateur si authentifié, null sinon
       */
      async authorize(credentials) {
        try {
          // Vérification de la présence des credentials
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Identifiants manquants");
          }

          // Recherche de l'utilisateur dans la base de données
          const user = await prisma.user.findUnique({
            where: {
              email: credentials.email as string,
            },
          });

          // Vérification de l'existence de l'utilisateur
          if (!user || !user.password) {
            throw new Error("Utilisateur introuvable");
          }

          // Vérification du mot de passe
          const isValid = await compare(
            credentials.password as string,
            user.password
          );

          if (!isValid) {
            throw new Error("Mot de passe incorrect");
          }

          // Retourne les données utilisateur pour la session
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            image: user.image,
          };
        } catch (error) {
          console.error("Erreur d'authentification:", error);
          return null;
        }
      },
    }),
  ],

  // Callbacks pour personnaliser le comportement de l'authentification
  callbacks: {
    /**
     * Callback de session pour personnaliser les données de session
     * @param {Object} params - Paramètres de la session
     * @returns {Promise<Session>} Session mise à jour
     */
    async session({ session }) {
      return session;
    },

    /**
     * Callback JWT pour personnaliser le token
     * @param {Object} params - Paramètres du token
     * @returns {Promise<JWT>} Token mis à jour
     */
    async jwt({ token }) {
      return token;
    },
  },
} satisfies NextAuthConfig;

/**
 * Export des fonctions d'authentification nécessaires
 */
export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);
