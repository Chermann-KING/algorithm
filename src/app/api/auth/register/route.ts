/**
 * Route API pour l'inscription des utilisateurs
 * @module app/api/auth/register/route
 *
 * Cette route gère la création de nouveaux utilisateurs avec validation
 * des données et hashage du mot de passe.
 */

import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/db";

// Schéma de validation des données d'inscription
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
        { message: "Cette adresse e-mail est déjà utilisée" },
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

    // Retourne les données utilisateur (sans le mot de passe)
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
    // Gestion des erreurs de validation Zod
    if (error instanceof z.ZodError) {
      const errors = error.errors.map((err) => ({
        field: err.path.join("."),
        message: err.message,
      }));
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Gestion des autres erreurs
    console.error("Erreur lors de l'inscription:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue lors de l'inscription" },
      { status: 500 }
    );
  }
}
