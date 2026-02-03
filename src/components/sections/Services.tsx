import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Gem, Flower, Crown, Heart, Star } from "lucide-react";
import { BOOKING_CONFIG } from "@/config/booking";

const services = [
  {
    icon: Sparkles,
    title: "Manicure Premium",
    description: "Cuidado completo con esmaltado de larga duración y acabado impecable.",
    features: ["Limado y forma", "Cutículas", "Esmaltado gel", "Hidratación"],
    popular: false,
  },
  {
    icon: Gem,
    title: "Nail Art Personalizado",
    description: "Diseños únicos creados especialmente para ti, desde minimal hasta elaborate.",
    features: ["Diseño exclusivo", "Piedras y detalles", "Foil y chrome", "Larga duración"],
    popular: true,
  },
  {
    icon: Flower,
    title: "Uñas Acrílicas",
    description: "Extensiones perfectas con forma y largo a tu medida.",
    features: ["Aplicación experta", "Forma personalizada", "Diseño incluido", "Retoque disponible"],
    popular: false,
  },
  {
    icon: Crown,
    title: "Experiencia VIP",
    description: "El paquete completo para ocasiones especiales o cuando quieres consentirte.",
    features: ["Spa de manos", "Nail art premium", "Tratamiento intensivo", "Bebida de cortesía"],
    popular: false,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-background overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="text-rose text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
              SERVICIOS
            </span>
          </div>
          <div className="w-10 sm:w-12 h-0.5 bg-rose mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4">
            Diseñados para vos
          </h2>
          <p className="text-rose font-medium italic mb-3 sm:mb-4 text-sm sm:text-base">
            Elegancia que se nota. Cuidado que se siente.
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            Cada servicio incluye productos premium, técnicas profesionales y
            toda mi atención durante tu cita.
          </p>
        </div>

        {/* Services Grid - Single column on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`relative ${
                service.popular
                  ? "border-rose shadow-lg ring-2 ring-rose/20"
                  : "border-border"
              }`}
            >
              {service.popular && (
                <Badge className="absolute -top-2.5 sm:-top-3 left-1/2 -translate-x-1/2 bg-rose text-white text-xs px-2 py-0.5 sm:px-3 sm:py-1">
                  <Star className="w-3 h-3 mr-1" />
                  Más popular
                </Badge>
              )}
              <CardContent className="p-4 sm:p-5 md:p-6 pt-6 sm:pt-7 md:pt-8">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-rose-light/20 w-fit mb-3 sm:mb-4">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-rose" />
                </div>

                <h3 className="font-serif font-bold text-lg sm:text-xl mb-2 text-foreground">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-xs sm:text-sm text-foreground"
                    >
                      <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={service.popular ? "default" : "outline"}
                  className={`w-full rounded-full h-10 sm:h-11 text-sm ${
                    service.popular
                      ? "bg-rose hover:bg-rose-dark text-white"
                      : "border-foreground/20 hover:bg-secondary"
                  }`}
                >
                  <a
                    href={BOOKING_CONFIG.getBookingUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
