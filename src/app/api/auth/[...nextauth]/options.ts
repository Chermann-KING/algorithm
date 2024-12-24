// src/app/api/auth/[...nextauth]/options.ts
/**
 * Configuration des options d'authentification pour NextAuth
 * @module api/auth/options
 */

import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectDB } from "@/lib/db";
import { User } from "@/models/user";
import bcrypt from "bcrypt";

/**
 * Options de configuration pour NextAuth
 * Définit les providers, la stratégie de session, les pages personnalisées et les callbacks
 */
export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      /**
       * Fonction d'autorisation pour valider les credentials
       * @param credentials - Les credentials fournis par l'utilisateur
       * @returns L'utilisateur authentifié ou null
       */
      async authorize(credentials) {
        try {
          // Vérification des credentials
          if (!credentials?.email || !credentials?.password) {
            return null;
          }

          // Connexion à la base de données
          await connectDB();

          // Recherche de l'utilisateur
          const user = await User.findOne({ email: credentials.email });
          if (!user) {
            return null;
          }

          // Vérification du mot de passe
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            return null;
          }

          // Retourne l'utilisateur authentifié
          return {
            id: user._id.toString(),
            name: null,
            email: user.email,
            image: null,
          };
        } catch (error) {
          console.error("Erreur d'authentification:", error);
          return null;
        }
      },
    }),
  ],

  // Configuration de la session
  session: {
    strategy: "jwt",
  },

  // Pages personnalisées
  pages: {
    signIn: "/auth/connexion",
  },

  // Callbacks pour personnaliser les tokens et sessions
  callbacks: {
    /**
     * Personnalisation du JWT token
     */
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.picture = user.image;
      }
      return token;
    },

    /**
     * Personnalisation de la session utilisateur
     */
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.picture;
      }
      return session;
    },
  },
};
