"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { GALLERY_IMAGES } from "@/config/gallery";

// Default number of rows to show
const DEFAULT_VISIBLE_ROWS = 4;

// Items per row at different breakpoints
const ITEMS_PER_ROW = {
  mobile: 2,   // grid-cols-2 (< 768px)
  tablet: 3,   // md:grid-cols-3 (768px - 1023px)
  desktop: 4,  // lg:grid-cols-4 (>= 1024px)
};

export function Gallery() {
  const [visibleRows, setVisibleRows] = useState(DEFAULT_VISIBLE_ROWS);
  const [itemsPerRow, setItemsPerRow] = useState(ITEMS_PER_ROW.desktop);
  const galleryRef = useRef<HTMLDivElement>(null);

  // All images (no filtering)
  const allImages = GALLERY_IMAGES;

  // Calculate items per row based on window width
  const updateItemsPerRow = useCallback(() => {
    if (typeof window === "undefined") return;

    const width = window.innerWidth;
    if (width >= 1024) {
      setItemsPerRow(ITEMS_PER_ROW.desktop);
    } else if (width >= 768) {
      setItemsPerRow(ITEMS_PER_ROW.tablet);
    } else {
      setItemsPerRow(ITEMS_PER_ROW.mobile);
    }
  }, []);

  // Update items per row on mount and resize
  useEffect(() => {
    updateItemsPerRow();
    window.addEventListener("resize", updateItemsPerRow);
    return () => window.removeEventListener("resize", updateItemsPerRow);
  }, [updateItemsPerRow]);

  // Calculate visible items based on rows and items per row
  const visibleItemsCount = visibleRows * itemsPerRow;
  const visibleImages = allImages.slice(0, visibleItemsCount);
  const isExpanded = visibleItemsCount >= allImages.length;
  const totalRows = Math.ceil(allImages.length / itemsPerRow);

  // Show more rows
  const handleShowMore = () => {
    setVisibleRows(totalRows);
  };

  // Show less rows (collapse back to default)
  const handleShowLess = () => {
    setVisibleRows(DEFAULT_VISIBLE_ROWS);

    // Smooth scroll to gallery top after collapsing
    if (galleryRef.current) {
      setTimeout(() => {
        galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  return (
    <section
      id="galeria"
      ref={galleryRef}
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-background overflow-hidden scroll-mt-16"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="text-rose text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
              GALERÍA
            </span>
          </div>
          <div className="w-10 sm:w-12 h-0.5 bg-rose mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4">
            <span className="italic">Cada diseño cuenta una</span>
            <br />
            <span className="italic">historia</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Diseños únicos creados con dedicación y amor por el detalle. Cada
            trabajo es una obra de arte personalizada.
          </p>
        </div>

        {/* Gallery Grid - With smooth height transition */}
        <div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 transition-all duration-500 ease-in-out"
        >
          {visibleImages.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="group relative aspect-square rounded-lg sm:rounded-xl overflow-hidden bg-cream-dark cursor-pointer animate-in fade-in duration-300"
              style={{ animationDelay: `${(index % itemsPerRow) * 50}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 480px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Always visible overlay on mobile (touch devices), hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent sm:from-black/50 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4 text-white sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs sm:text-sm font-medium line-clamp-2">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Ver más / Ver menos Button */}
        {allImages.length > DEFAULT_VISIBLE_ROWS * itemsPerRow && (
          <div className="flex justify-center mt-8 sm:mt-10 md:mt-12">
            {!isExpanded ? (
              <Button
                onClick={handleShowMore}
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base border-rose/30 text-rose hover:bg-rose hover:text-white transition-all duration-300"
                aria-expanded={false}
                aria-controls="galeria-grid"
              >
                Ver más
                <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleShowLess}
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base border-rose/30 text-rose hover:bg-rose hover:text-white transition-all duration-300"
                aria-expanded={true}
                aria-controls="galeria-grid"
              >
                Ver menos
                <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
