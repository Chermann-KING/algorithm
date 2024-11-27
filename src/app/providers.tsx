"use client";

import { ThemeProvider } from "next-themes";
import { SearchProvider } from "@/context/search-context";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SearchProvider>{children}</SearchProvider>
    </ThemeProvider>
  );
}
