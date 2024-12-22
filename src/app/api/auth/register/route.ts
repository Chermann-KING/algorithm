/**
 * Route API pour l'enregistrement des utilisateurs
 * @module api/auth/register
 */

import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

// Schéma de validation
const userSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("L'adresse e-mail n'est pas valide"),
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre"
    ),
});

// Gestionnaire POST
export async function POST(request: Request) {
  try {
    // Récupération et validation des données
    const body = await request.json();
    const validatedData = userSchema.parse(body);

    // Vérification si l'email existe déjà
    const existingUser = await prisma.user.findUnique({
      where: { email: validatedData.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Cette adresse e-mail est déjà utilisée" },
        { status: 400 }
      );
    }

    // Hashage du mot de passe
    const hashedPassword = await hash(validatedData.password, 12);

    // Création de l'utilisateur
    const user = await prisma.user.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        password: hashedPassword,
      },
    });

    // Ne pas renvoyer le mot de passe
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: "Inscription réussie",
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur d'inscription:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    // Gestion des autres erreurs
    console.error("Erreur lors de l'inscription:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'inscription" },
      { status: 500 }
    );
  }
}

// Pour autoriser uniquement la méthode POST
export async function GET() {
  return new NextResponse("Method not allowed", { status: 405 });
}
