"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Book, Home } from "lucide-react";

const links = [
  { name: "Accueil", href: "/", icon: Home },
  { name: "Niveaux", href: "/levels", icon: Book },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`
              flex items-center space-x-2 text-sm font-medium transition-colors
              ${
                pathname === link.href
                  ? "text-foreground"
                  : "text-foreground/60 hover:text-foreground"
              }
            `}
          >
            <Icon className="h-4 w-4" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
