// src/middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function middleware(_req) {
    // Permet de gérer des redirections ou logiques spécifiques si nécessaire
    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

// Protège toutes les routes sous (main)
export const config = {
  matcher: [
    "/levels/:path*",
    // Autres routes protégées...
  ],
};
