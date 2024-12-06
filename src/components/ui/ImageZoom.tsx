"use client";

import { useState, useRef, MouseEvent, TouchEvent, useEffect } from "react";
import NextImage from "next/image";
import { ZoomIn, ZoomOut } from "lucide-react";

/**
 * Interface définissant les propriétés requises pour le composant ImageZoom.
 * @property src - URL source de l'image à afficher
 * @property alt - Texte alternatif pour l'accessibilité
 */
interface ImageZoomProps {
  src: string;
  alt: string;
}

/**
 * Interface pour la gestion des coordonnées de position.
 * Utilisée pour le suivi des positions de déplacement de l'image.
 * @property x - Coordonnée horizontale
 * @property y - Coordonnée verticale
 */
interface Position {
  x: number;
  y: number;
}

/**
 * Composant ImageZoom
 * Permet d'afficher une image avec des fonctionnalités de zoom et de déplacement.
 *
 * Fonctionnalités :
 * - Zoom avant/arrière via boutons
 * - Déplacement de l'image quand zoomée (drag & drop)
 * - Support tactile pour appareils mobiles
 * - Compatibilité mode sombre
 * - Limitation du zoom (1x à 4x)
 * - Contraintes de déplacement dans les limites du conteneur
 */
export default function ImageZoom({ src, alt }: ImageZoomProps) {
  // États pour la gestion du zoom et du déplacement
  const [scale, setScale] = useState(1); // Niveau de zoom actuel
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 }); // Position actuelle de l'image
  const [isDragging, setIsDragging] = useState(false); // État du drag & drop
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 }); // Point de départ du drag
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  // Référence vers l'élément conteneur pour les calculs de position
  const containerRef = useRef<HTMLDivElement>(null);

  /**
   * Effet pour charger et stocker les dimensions réelles de l'image
   * Utilisé pour les calculs de contraintes de déplacement
   */
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageDimensions({
        width: img.width,
        height: img.height,
      });
    };
  }, [src]);

  /**
   * Gère le zoom avant/arrière de l'image
   * @param zoomIn - true pour zoom avant, false pour zoom arrière
   */
  const handleZoom = (zoomIn: boolean) => {
    setScale((prevScale) => {
      const newScale = zoomIn ? prevScale + 0.5 : prevScale - 0.5;
      const finalScale = Math.max(1, Math.min(newScale, 4));

      // Réinitialise la position si on revient à l'échelle normale
      if (finalScale === 1) {
        setPosition({ x: 0, y: 0 });
      }

      return finalScale;
    });
  };

  /**
   * Gestionnaires d'événements pour la souris
   */
  const handleDragStart = (e: MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  };

  const handleDragMove = (e: MouseEvent) => {
    if (isDragging && scale > 1 && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;

      // Calcul des limites de déplacement basé sur les dimensions du conteneur
      const maxOffsetX = (container.width * scale - container.width) / 2;
      const maxOffsetY = (container.height * scale - container.height) / 2;

      setPosition({
        x: Math.max(Math.min(newX, maxOffsetX), -maxOffsetX),
        y: Math.max(Math.min(newY, maxOffsetY), -maxOffsetY),
      });
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  /**
   * Gestionnaires d'événements pour le tactile
   */
  const handleTouchStart = (e: TouchEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      const touch = e.touches[0];
      setDragStart({
        x: touch.clientX - position.x,
        y: touch.clientY - position.y,
      });
    }
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && scale > 1 && containerRef.current) {
      const container = containerRef.current.getBoundingClientRect();
      const touch = e.touches[0];

      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;

      const maxOffsetX = (container.width * scale - container.width) / 2;
      const maxOffsetY = (container.height * scale - container.height) / 2;

      setPosition({
        x: Math.max(Math.min(newX, maxOffsetX), -maxOffsetX),
        y: Math.max(Math.min(newY, maxOffsetY), -maxOffsetY),
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-full group">
      {/* Conteneur de l'image avec gestion des événements */}
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Conteneur de transformation pour le zoom et le déplacement */}
        <div
          className="relative w-full h-full transition-transform duration-200"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${
              position.y / scale
            }px)`,
            cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
        >
          {/* Image avec support du mode sombre */}
          <NextImage
            src={src}
            alt={alt}
            fill
            className="object-contain dark:invert"
            quality={100}
            priority
            draggable={false}
          />
        </div>
      </div>

      {/* Contrôles de zoom */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <button
          onClick={() => handleZoom(true)}
          className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          disabled={scale >= 4}
        >
          <ZoomIn size={20} />
        </button>
        <button
          onClick={() => handleZoom(false)}
          className="p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
          disabled={scale <= 1}
        >
          <ZoomOut size={20} />
        </button>
      </div>
    </div>
  );
}
