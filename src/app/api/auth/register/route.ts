import { connectDB } from "@/lib/db";
import { User } from "@/models/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email et mot de passe requis" },
        { status: 400 }
      );
    }

    await connectDB();

    // Vérifie si l'utilisateur existe déjà
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "Cet email est déjà utilisé" },
        { status: 400 }
      );
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crée le nouvel utilisateur
    const newUser = await User.create({
      email,
      password: hashedPassword,
      name: null, // Champ optionnel
      image: null, // Champ optionnel
    });

    // Nettoye les données sensibles avant de les renvoyer
    const safeUser = {
      id: newUser._id.toString(),
      email: newUser.email,
      name: newUser.name,
      image: newUser.image,
    };

    return NextResponse.json(
      { user: safeUser, message: "Inscription réussie" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'inscription" },
      { status: 500 }
    );
  }
}
