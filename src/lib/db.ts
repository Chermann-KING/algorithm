import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error(
    "Veuillez définir l'URI MongoDB dans les variables d'environnement"
  );
}

export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 1) {
      return mongoose.connection;
    }

    return await mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    console.error("Erreur de connexion MongoDB:", error);
    throw error;
  }
}

export default connectDB;
