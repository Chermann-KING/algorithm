/**
 * Configuration des options d'authentification pour NextAuth
 * @module api/auth/options
 *
 * Ce fichier contient la configuration complète du système d'authentification,
 * incluant les providers, les callbacks, les pages personnalisées et la
 * stratégie de session.
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
  /**
   * Configuration des providers d'authentification
   * Actuellement utilise uniquement le provider Credentials pour l'authentification par email/mot de passe
   */
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
       * @returns L'utilisateur authentifié ou null si l'authentification échoue
       *
       * @example
       * // Succès d'authentification
       * authorize({
       *   email: "user@example.com",
       *   password: "password123"
       * }) // Retourne l'objet utilisateur
       *
       * // Échec d'authentification
       * authorize({
       *   email: "invalid@example.com",
       *   password: "wrongpass"
       * }) // Retourne null
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

  /**
   * Configuration de la session
   * Utilise la stratégie JWT pour la gestion des sessions
   */
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60, // 24 heures
  },

  /**
   * Configuration des pages personnalisées
   * Définit les URLs des pages d'authentification personnalisées
   */
  pages: {
    signIn: "/auth/connexion", // Page de connexion personnalisée
    signOut: "/", // Redirection après déconnexion
    error: "/auth/error", // Page d'erreur d'authentification
  },

  /**
   * Configuration des callbacks
   * Personnalise le comportement de l'authentification
   */
  callbacks: {
    /**
     * Personnalisation du JWT token
     * @param token - Token JWT actuel
     * @param user - Données de l'utilisateur (seulement pendant la connexion)
     * @returns Token JWT modifié
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
     * @param session - Session actuelle
     * @param token - Token JWT
     * @returns Session modifiée
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

    /**
     * Gestion des redirections après authentification
     * @param url - URL de redirection demandée
     * @param baseUrl - URL de base de l'application
     * @returns URL de redirection finale
     *
     * @example
     * // Redirection vers une page interne
     * redirect("/dashboard") // Retourne "http://example.com/dashboard"
     *
     * // Tentative de redirection externe
     * redirect("https://external.com") // Retourne l'URL de base
     */
    async redirect({ url, baseUrl }) {
      // Si l'URL est relative, on la combine avec l'URL de base
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Si l'URL est déjà absolue et du même domaine
      else if (new URL(url).origin === baseUrl) return url;
      // Sinon, redirection vers la page principale après connexion
      return baseUrl + "/levels";
    },
  },

  /**
   * Configuration des secrets
   * Utilise la variable d'environnement NEXTAUTH_SECRET
   */
  secret: process.env.NEXTAUTH_SECRET,
};
