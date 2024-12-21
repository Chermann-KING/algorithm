/**
 * Extension des types pour Next-Auth
 * @module types/next-auth
 *
 * Ce fichier étend les types par défaut de Next-Auth pour ajouter des propriétés
 * personnalisées aux objets Session, User et JWT.
 * Ces extensions permettent d'assurer un typage correct à travers l'application.
 *
 * @requires next-auth - Types de base de Next-Auth
 */

import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Extension de l'interface Session
   * Ajoute des propriétés personnalisées à l'objet user de la session
   */
  interface Session {
    user: {
      id: string; // Identifiant unique de l'utilisateur
      name: string | null; // Nom de l'utilisateur (optionnel)
      email: string; // Email de l'utilisateur (requis)
      image: string | null; // URL de l'avatar (optionnel)
    } & DefaultSession["user"]; // Inclut les propriétés par défaut de Session
  }

  /**
   * Extension de l'interface User
   * Définit la structure des données utilisateur stockées en base
   */
  interface User {
    id: string; // Identifiant unique de l'utilisateur
    name: string | null; // Nom de l'utilisateur (optionnel)
    email: string; // Email de l'utilisateur (requis)
    image: string | null; // URL de l'avatar (optionnel)
  }
}

declare module "next-auth/jwt" {
  /**
   * Extension de l'interface JWT
   * Définit les données supplémentaires stockées dans le token
   */
  interface JWT {
    id: string; // Identifiant unique de l'utilisateur
    name: string | null; // Nom de l'utilisateur (optionnel)
    email: string; // Email de l'utilisateur (requis)
    picture: string | null; // URL de l'avatar (optionnel)
  }
}
