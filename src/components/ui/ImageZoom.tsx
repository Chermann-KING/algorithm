"use client";

import { useState, useRef, MouseEvent, useEffect } from "react";
import NextImage from "next/image";
import { ZoomIn, ZoomOut } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
}

interface Position {
  x: number;
  y: number;
}

export default function ImageZoom({ src, alt }: ImageZoomProps) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<Position>({ x: 0, y: 0 });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  // Obtient les dimensions réelles de l'image
  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageDimensions({
        width: img.width,
        height: img.height,
      });
    };
  }, [src]);

  const handleZoom = (zoomIn: boolean) => {
    setScale((prevScale) => {
      const newScale = zoomIn ? prevScale + 0.5 : prevScale - 0.5;
      const finalScale = Math.max(1, Math.min(newScale, 4));

      // Réajuster la position si nécessaire avec le nouveau scale
      if (finalScale === 1) {
        setPosition({ x: 0, y: 0 });
      }

      return finalScale;
    });
  };

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

      // Calculer les limites basées sur les dimensions réelles
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

  return (
    <div className="relative w-full h-full group">
      <div
        ref={containerRef}
        className="relative w-full h-full overflow-hidden"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div
          className="relative w-full h-full transition-transform duration-200"
          style={{
            transform: `scale(${scale}) translate(${position.x / scale}px, ${
              position.y / scale
            }px)`,
            cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default",
          }}
        >
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
