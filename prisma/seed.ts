import { PrismaClient } from "@prisma/client";
import { hash } from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  // Création d'un utilisateur de test
  const password = await hash("test123", 12);

  const user = await prisma.user.upsert({
    where: { email: "test@algorithm.com" },
    update: {},
    create: {
      email: "test@algorithm.com",
      name: "Utilisateur Test",
      password,
      // Ajout d'un problème de test dans le progrès
      progress: {
        create: {
          problemId: "problem-1",
          completed: false,
        },
      },
    },
  });

  console.log({ user });
  console.log("Base de données initialisée avec les données de test");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
