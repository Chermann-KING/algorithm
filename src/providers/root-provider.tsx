/**
 * Provider principal combinant tous les providers de l'application
 * @module providers/root-provider
 */

"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/providers/theme-provider";
import { SearchProvider } from "@/context/search-context";
import { SessionProvider } from "@/providers/session-provider";
import { ProgressProvider } from "@/context/progress-context";

interface RootProviderProps {
  children: ReactNode;
}

export function RootProvider({ children }: RootProviderProps) {
  return (
    <ThemeProvider>
      <SessionProvider>
        <ProgressProvider>
          <SearchProvider>{children}</SearchProvider>
        </ProgressProvider>
      </SessionProvider>
    </ThemeProvider>
  );
}
