"use client";

import { createContext, useContext, useState, ReactNode } from "react";

/**
 * Interface définissant la structure du contexte de recherche
 * @property searchTerm - Terme de recherche actuel
 * @property setSearchTerm - Fonction pour mettre à jour le terme de recherche
 */
interface SearchContextType {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

/**
 * Création du contexte avec une valeur initiale undefined
 * Le type est explicitement défini pour permettre la vérification de présence du Provider
 */
const SearchContext = createContext<SearchContextType | undefined>(undefined);

/**
 * Composant Provider pour le contexte de recherche
 * Fournit l'état de recherche et sa fonction de mise à jour à tous les composants enfants
 *
 * @param {Object} props - Les propriétés du composant
 * @param {ReactNode} props.children - Les composants enfants qui auront accès au contexte
 */
export function SearchProvider({ children }: { children: ReactNode }) {
  // État local pour le terme de recherche
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
}

/**
 * Hook personnalisé pour utiliser le contexte de recherche
 *
 * Avantages :
 * - Vérifie automatiquement la présence du Provider
 * - Fournit un message d'erreur explicite
 * - Offre un typage fort
 *
 * @throws {Error} Si utilisé en dehors d'un SearchProvider
 * @returns {SearchContextType} Le contexte de recherche
 */
export function useSearch() {
  const context = useContext(SearchContext);

  // Vérification de sécurité pour s'assurer que le hook est utilisé dans un Provider
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }

  return context;
}
