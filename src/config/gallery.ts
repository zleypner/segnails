export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

// Categories derived from folder names
export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: "todos", label: "Todos" },
  { id: "natural", label: "Natural" },
  { id: "glam", label: "Glam" },
  { id: "eventos", label: "Eventos" },
  { id: "arte", label: "Arte" },
];

// Gallery images - add your images here
// Format: { src: "/gallery/[category]/image.jpg", alt: "description", category: "category-id" }
export const GALLERY_IMAGES: GalleryImage[] = [
  // Natural category
  { src: "/gallery/Natural/natural-1.jpg", alt: "French tips rojo elegante", category: "natural" },
  { src: "/gallery/Natural/natural-2.jpg", alt: "Diseño natural sofisticado", category: "natural" },
  { src: "/gallery/Natural/natural-3.jpg", alt: "Nude minimalista", category: "natural" },
  { src: "/gallery/Natural/natural-4.jpg", alt: "Milky nails delicado", category: "natural" },
  { src: "/gallery/Natural/natural-5.jpg", alt: "French clásico", category: "natural" },
  { src: "/gallery/Natural/natural-6.jpg", alt: "Nude con brillo", category: "natural" },
  { src: "/gallery/Natural/natural-7.jpg", alt: "Rosa suave natural", category: "natural" },
  { src: "/gallery/Natural/natural-8.jpg", alt: "Tono piel elegante", category: "natural" },
  { src: "/gallery/Natural/natural-9.jpg", alt: "Natural con detalle", category: "natural" },
  { src: "/gallery/Natural/natural-10.jpg", alt: "Nude perfecto", category: "natural" },

  // Glam category
  { src: "/gallery/Glam/glam-1.jpg", alt: "Chrome brillante", category: "glam" },
  { src: "/gallery/Glam/glam-2.jpg", alt: "Glitter dorado", category: "glam" },
  { src: "/gallery/Glam/glam-3.jpg", alt: "Glazed efecto espejo", category: "glam" },
  { src: "/gallery/Glam/glam-4.jpg", alt: "Piedras y cristales", category: "glam" },
  { src: "/gallery/Glam/glam-5.jpg", alt: "Glam con detalles", category: "glam" },
  { src: "/gallery/Glam/glam-6.jpg", alt: "Brillo intenso", category: "glam" },
  { src: "/gallery/Glam/glam-7.jpg", alt: "Naranja vibrante", category: "glam" },
  { src: "/gallery/Glam/glam-8.jpg", alt: "Efecto espejo", category: "glam" },
  { src: "/gallery/Glam/glam-9.jpg", alt: "Glamour nocturno", category: "glam" },
  { src: "/gallery/Glam/glam-10.jpg", alt: "Extra brillante", category: "glam" },

  // Eventos category
  { src: "/gallery/Eventos/eventos-1.jpg", alt: "Diseño para boda", category: "eventos" },
  { src: "/gallery/Eventos/eventos-2.jpg", alt: "Uñas de quinceañera", category: "eventos" },
  { src: "/gallery/Eventos/eventos-3.jpg", alt: "Diseño para graduación", category: "eventos" },
  { src: "/gallery/Eventos/eventos-4.jpg", alt: "Uñas de fiesta", category: "eventos" },
  { src: "/gallery/Eventos/eventos-5.jpg", alt: "Ocasión especial", category: "eventos" },
  { src: "/gallery/Eventos/eventos-6.jpg", alt: "Celebración elegante", category: "eventos" },
  { src: "/gallery/Eventos/eventos-7.jpg", alt: "Flores con cristales", category: "eventos" },
  { src: "/gallery/Eventos/eventos-8.jpg", alt: "Evento formal", category: "eventos" },
  { src: "/gallery/Eventos/eventos-9.jpg", alt: "Noche especial", category: "eventos" },
  { src: "/gallery/Eventos/eventos-10.jpg", alt: "Diseño festivo", category: "eventos" },

  // Arte category
  { src: "/gallery/Arte/arte-1.jpg", alt: "Nail art abstracto", category: "arte" },
  { src: "/gallery/Arte/arte-2.jpg", alt: "Diseño floral artístico", category: "arte" },
  { src: "/gallery/Arte/arte-3.jpg", alt: "Arte geométrico", category: "arte" },
  { src: "/gallery/Arte/arte-4.jpg", alt: "French tips con flores", category: "arte" },
  { src: "/gallery/Arte/arte-5.jpg", alt: "Diseño personalizado", category: "arte" },
  { src: "/gallery/Arte/arte-6.jpg", alt: "Arte minimalista", category: "arte" },
  { src: "/gallery/Arte/arte-7.jpg", alt: "Creación artística", category: "arte" },
];

export const getImagesByCategory = (categoryId: string): GalleryImage[] => {
  if (categoryId === "todos") {
    return GALLERY_IMAGES;
  }
  return GALLERY_IMAGES.filter((img) => img.category === categoryId);
};
