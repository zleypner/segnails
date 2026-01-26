import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { SOCIAL_CONFIG } from "@/config/booking";

export function InstagramSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Instagram className="w-10 h-10 sm:w-12 sm:h-12 text-rose mx-auto mb-4 sm:mb-6" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-3 sm:mb-4">
            Sígueme en Instagram
          </h2>

          <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base px-2">
            Descubre más diseños, inspiración y el detrás de cámaras de mi
            trabajo diario. ¡Únete a mi comunidad!
          </p>

          <p className="text-lg sm:text-xl font-semibold text-rose mb-6 sm:mb-8">
            {SOCIAL_CONFIG.instagram.handle}
          </p>

          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white rounded-full px-6 sm:px-8 h-11 sm:h-12 text-sm sm:text-base w-full sm:w-auto"
          >
            <a
              href={SOCIAL_CONFIG.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Seguir en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
