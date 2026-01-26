import { Button } from "@/components/ui/button";
import { MessageCircle, Clock } from "lucide-react";
import { BOOKING_CONFIG } from "@/config/booking";

export function FinalCTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-rose overflow-hidden">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4 sm:mb-6">
            Tus uñas. Tu sello.
          </h2>

          <p className="text-white/90 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 px-2">
            El detalle que no pasa desapercibido. Reservá tu cita y descubrí
            por qué mis clientas no van con nadie más.
          </p>

          <div className="flex items-center justify-center gap-2 text-white/80 mb-6 sm:mb-8">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <p className="text-xs sm:text-sm">
              Cupos limitados disponibles esta semana
            </p>
          </div>

          <Button
            asChild
            size="lg"
            className="bg-white hover:bg-cream text-rose hover:text-rose-dark rounded-full px-6 sm:px-8 md:px-10 h-12 sm:h-14 md:py-6 text-sm sm:text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
          >
            <a
              href={BOOKING_CONFIG.getBookingUrl()}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Reservar por WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
