/**
 * Configuration et initialisation du client Prisma
 * @module lib/db
 *
 * Ce fichier configure et exporte une instance unique de PrismaClient pour toute l'application.
 * Il implémente un pattern singleton pour éviter la création de multiples connexions à la base de données,
 * particulièrement important en mode développement avec le hot reloading.
 *
 * @requires @prisma/client - Client Prisma généré
 */

import { PrismaClient } from "@prisma/client";

/**
 * Extension des types globaux pour inclure l'instance Prisma
 * Ceci permet de stocker l'instance dans l'objet global en développement
 */
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

/**
 * Création d'une instance unique de PrismaClient
 * Réutilise l'instance existante si disponible dans l'objet global,
 * sinon en crée une nouvelle avec le logging des requêtes activé
 */
export const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query"], // Active le logging des requêtes SQL
  });

/**
 * En développement uniquement :
 * Stocke l'instance Prisma dans l'objet global pour persister
 * la connexion à travers les rechargements du module
 */
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
