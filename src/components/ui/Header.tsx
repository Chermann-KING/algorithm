"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { SearchBar } from "./SearchBar";

export function Header() {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between gap-4">
        <div className="flex items-center min-w-0">
          <Link href="/" className="flex-shrink-0">
            <span className="font-bold text-base sm:text-lg text-primary">
              Algorithm
            </span>
          </Link>
        </div>

        <div className="flex-1 max-w-md hidden sm:block">
          <SearchBar />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="inline-flex items-center justify-center rounded-md 
             h-8 w-8 sm:h-9 sm:w-9
             transition-colors 
             hover:bg-accent hover:text-accent-foreground 
             focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            <Sun className="h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-foreground" />
            <Moon className="absolute h-4 w-4 sm:h-[1.2rem] sm:w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-foreground" />
            <span className="sr-only">Changer le thème</span>
          </button>
        </div>
      </div>

      {/* Barre de recherche mobile */}
      <div className="sm:hidden px-4 pb-3">
        <SearchBar />
      </div>
    </header>
  );
}
