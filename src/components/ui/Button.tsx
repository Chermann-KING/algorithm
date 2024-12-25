/**
 * @fileoverview Composant Button réutilisable
 * Fournit un bouton hautement personnalisable avec différentes variantes et tailles
 * Utilise les variables de couleur définies dans globals.css pour la cohérence visuelle
 */

import React from "react";

/**
 * Types de variants disponibles pour le bouton
 * - default: Style principal avec couleur primaire
 * - ghost: Style transparent avec effet hover
 * - outline: Style avec bordure et effet hover
 */
type ButtonVariant = "default" | "ghost" | "outline";

/**
 * Tailles disponibles pour le bouton
 * - default: Taille standard (h-10)
 * - sm: Petite taille (h-9)
 * - lg: Grande taille (h-11)
 */
type ButtonSize = "default" | "sm" | "lg";

/**
 * Props du composant Button
 * @interface ButtonProps
 * @property {string} [className] - Classes CSS additionnelles
 * @property {ButtonVariant} [variant='default'] - Style visuel du bouton
 * @property {ButtonSize} [size='default'] - Taille du bouton
 * @property {boolean} [disabled=false] - État désactivé du bouton
 * @property {any} [key: string] - Props HTML additionnelles
 */
interface ButtonProps {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/**
 * Composant Button :
 * Un bouton flexible et accessible avec support de plusieurs variantes et tailles.
 *
 * @component
 * @example
 * // Bouton par défaut
 * <Button>Cliquez-moi</Button>
 *
 * @example
 * // Bouton fantôme de petite taille
 * <Button variant="ghost" size="sm">Action secondaire</Button>
 *
 * @example
 * // Bouton avec bordure désactivé
 * <Button variant="outline" disabled>Action indisponible</Button>
 */
const Button = ({
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  ...props
}: ButtonProps) => {
  /**
   * Styles de base appliqués à tous les boutons
   * Inclut les styles d'accessibilité et d'interaction
   */
  const baseStyles =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors" +
    " focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" +
    " disabled:pointer-events-none disabled:opacity-50";

  /**
   * Styles spécifiques pour chaque variant
   * @property {string} default - Style principal avec couleur de fond
   * @property {string} ghost - Style transparent avec effet au survol
   * @property {string} outline - Style avec bordure
   */
  const variants: Record<ButtonVariant, string> = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    ghost: "hover:bg-accent hover:text-accent-foreground",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
  };

  /**
   * Styles spécifiques pour chaque taille
   * Définit la hauteur et le padding horizontal
   */
  const sizes: Record<ButtonSize, string> = {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    />
  );
};

/**
 * Notes d'utilisation :
 *
 * 1. Variants :
 *    - default: Utilisez pour les actions principales
 *    - ghost: Idéal pour les actions secondaires dans les barres d'outils
 *    - outline: Pour les actions alternatives ou contextuelles
 *
 * 2. Tailles :
 *    - default: Taille standard pour la plupart des cas
 *    - sm: Pour les interfaces denses ou les boutons groupés
 *    - lg: Pour les appels à l'action importants
 *
 * 3. Accessibilité :
 *    - Supporte le focus visible
 *    - État désactivé clairement indiqué
 *    - Compatible avec la navigation au clavier
 *
 * 4. Personnalisation :
 *    - Accepte des classes CSS additionnelles
 *    - Transmet les props HTML natives au bouton
 *    - Styles de base extensibles
 */
export { Button };
