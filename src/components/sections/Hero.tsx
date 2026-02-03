"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BOOKING_CONFIG } from "@/config/booking";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-5 sm:space-y-6 md:space-y-8 order-2 md:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-rose text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
                NAIL ART PREMIUM
              </span>
              <div className="w-8 sm:w-12 h-0.5 bg-rose" />
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
              <span className="text-foreground">Cuidado, detalle</span>
              <br />
              <span className="text-foreground">y </span>
              <span className="text-rose italic">uñas que</span>
              <br />
              <span className="text-rose italic">hablan </span>
              <span className="text-foreground">por vos</span>
            </h1>

            {/* Description */}
            <p className="text-muted-foreground text-base sm:text-lg max-w-lg leading-relaxed">
              Cada detalle cuenta. Tus uñas también. Diseños personalizados que
              reflejan tu esencia, porque tus manos dicen más de lo que imaginás.
            </p>

            {/* Buttons - Full width on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-rose hover:bg-rose-dark text-white rounded-full px-6 sm:px-8 h-12 sm:h-11 text-base w-full sm:w-auto"
              >
                <a
                  href={BOOKING_CONFIG.getBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Reserva tu cita
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 h-12 sm:h-11 text-base border-foreground/20 hover:bg-secondary w-full sm:w-auto"
              >
                <Link href="#galeria">Ver mis trabajos</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
              <p className="text-xs sm:text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">+10000</span>{" "}
                clientas felices
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 md:order-2">
            <div className="relative z-10 max-w-sm sm:max-w-md mx-auto md:max-w-none">
              {/* Decorative background shape - hidden on mobile for cleaner look */}
              <div className="absolute -inset-3 sm:-inset-4 bg-rose-light/20 rounded-2xl sm:rounded-3xl -rotate-2 sm:-rotate-3" />
              <div className="absolute -inset-3 sm:-inset-4 bg-cream-dark rounded-2xl sm:rounded-3xl rotate-1 sm:rotate-2" />

              {/* Main image container */}
              <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-cream-dark">
                <Image
                  src="/images/hero-model.jpg"
                  alt="Nail art profesional"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 50vw"
                />

                {/* Badge overlay - smaller on mobile */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                  <p className="text-[10px] sm:text-xs text-muted-foreground">Especialista en</p>
                  <p className="font-serif font-bold text-foreground text-sm sm:text-base">
                    Nail Art Premium
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
