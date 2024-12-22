/**
 * Menu utilisateur pour l'état connecté
 * @module components/auth/UserMenu
 */

"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { User, LogOut, Settings } from "lucide-react";
import Image from "next/image";

interface UserMenuProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const UserMenu = ({ user }: UserMenuProps) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Gère la fermeture du menu au clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Obtient les initiales pour l'avatar
  const getInitials = (name: string | null | undefined) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  // Gérer la déconnexion
  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/auth/connexion");
    router.refresh();
  };

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar/Bouton trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center h-8 w-8 rounded-full overflow-hidden border border-gray-200 hover:border-gray-300 focus:outline-none focus:border-primary transition-colors"
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "Avatar"}
            width={32}
            height={32}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
            {getInitials(user.name)}
          </div>
        )}
      </button>

      {/* Menu déroulant */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          {/* En-tête avec infos utilisateur */}
          <div className="px-4 py-3 border-b border-gray-100 dark:border-gray-700">
            {user.name && (
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.name}
              </p>
            )}
            {user.email && (
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {user.email}
              </p>
            )}
          </div>

          {/* Options du menu */}
          <div className="py-1">
            <button
              onClick={() => {
                router.push("/profile");
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <User className="mr-2 h-4 w-4" />
              Profil
            </button>
            <button
              onClick={() => {
                router.push("/settings");
                setIsOpen(false);
              }}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Settings className="mr-2 h-4 w-4" />
              Paramètres
            </button>
            <div className="border-t border-gray-100 dark:border-gray-700" />
            <button
              onClick={handleSignOut}
              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Se déconnecter
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
