import { PrismaClient } from "@prisma/client";

// Ajout du type global prisma
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Création d'une instance Prisma
const prisma =
  globalThis.prisma ||
  new PrismaClient({
    log: ["query"],
  });

// Assignation de l'instance Prisma à l'objet global pour l'env de développement
if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

export default prisma;
