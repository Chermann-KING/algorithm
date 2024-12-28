/**
 * Context et Provider pour la gestion de la progression utilisateur
 * @module context/progress-context
 *
 * Fournit un context React pour gérer l'état global de la progression
 * des utilisateurs à travers l'application, incluant les niveaux,
 * les problèmes et leur état d'avancement.
 */

"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Level } from "@/types/level";
import { IProgress } from "@/models/progress";

/**
 * Interface définissant la structure du contexte de progression
 * @interface ProgressContextType
 */
type ProgressContextType = {
  /** Liste des niveaux avec leurs problèmes */
  levels: Level[];
  /** Progression de l'utilisateur pour chaque problème */
  userProgress: IProgress[];
  /** État de chargement des données */
  loading: boolean;
  /** Message d'erreur éventuel */
  error: string | null;
  /** Fonction pour rafraîchir les données de progression */
  refreshProgress: () => Promise<void>;
};

/**
 * Contexte React pour la progression
 * Initialisé avec des valeurs par défaut pour éviter les undefined
 */
const ProgressContext = createContext<ProgressContextType>({
  levels: [],
  userProgress: [],
  loading: true,
  error: null,
  refreshProgress: async () => {},
});

/**
 * Hook personnalisé pour accéder au contexte de progression
 *
 * @returns {ProgressContextType} Le contexte de progression
 *
 * @example
 * function MyComponent() {
 *   const { levels, loading, error } = useProgress();
 *   if (loading) return <div>Chargement...</div>;
 *   return <div>{levels.length} niveaux disponibles</div>;
 * }
 */
function useProgress() {
  return useContext(ProgressContext);
}

/**
 * Provider React pour la progression
 * Gère l'état global de la progression et fournit des méthodes pour le mettre à jour
 *
 * @param {Object} props - Propriétés du composant
 * @param {ReactNode} props.children - Composants enfants
 *
 * @example
 * function App() {
 *   return (
 *     <ProgressProvider>
 *       <MyComponents />
 *     </ProgressProvider>
 *   );
 * }
 */
function ProgressProvider({ children }: { children: ReactNode }) {
  // États pour gérer les données et leur chargement
  const [levels, setLevels] = useState<Level[]>([]);
  const [userProgress, setUserProgress] = useState<IProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Rafraîchit les données de progression depuis le serveur
   * Charge en parallèle les niveaux et la progression utilisateur
   */
  const refreshProgress = async () => {
    try {
      setLoading(true);
      // Chargement parallèle des données
      const [levelsData, progressData] = await Promise.all([
        fetch("/api/levels").then((res) => res.json()),
        fetch("/api/progress").then((res) => res.json()),
      ]);
      setLevels(levelsData);
      setUserProgress(progressData);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  // Chargement initial des données
  useEffect(() => {
    refreshProgress();
  }, []);

  return (
    <ProgressContext.Provider
      value={{
        levels,
        userProgress,
        loading,
        error,
        refreshProgress,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

// Export des composants et hooks
export { ProgressProvider, useProgress, ProgressContext };
