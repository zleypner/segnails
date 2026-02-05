import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  Sparkles,
  Gem,
  Heart,
  Star,
  Shield,
} from "lucide-react";

const luxuryServices = [
  {
    icon: Gem,
    title: "Gel X",
    description:
      "Extensiones de uñas con tips de gel que se adhieren a la uña natural. Son livianas, resistentes y dan un acabado natural y duradero.",
  },
  {
    icon: Sparkles,
    title: "Semipermanente en manos",
    description:
      "Esmaltado en gel que se seca en lámpara y dura hasta 2–3 semanas sin levantarse ni perder brillo.",
  },
  {
    icon: Star,
    title: "Semipermanente en pies",
    description:
      "Esmaltado en gel para pies, ideal para mantener las uñas prolijas, brillantes y sin retoques por varias semanas.",
  },
  {
    icon: Shield,
    title: "Luminary",
    description:
      "Sistema de gel fortalecedor que ayuda a nivelar, proteger y estimular el crecimiento de la uña natural. Perfecto para uñas frágiles.",
  },
  {
    icon: Heart,
    title: "Pedicura completa",
    description:
      "Incluye limpieza, corte y limado de uñas, cuidado de cutículas, exfoliación y esmaltado para pies suaves y bien arreglados.",
  },
];

export function LuxuryStyles() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-cream-dark overflow-hidden">
      <div className="container mx-auto">
        {/* Section divider with slogan */}
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-muted-foreground text-xs sm:text-sm tracking-widest uppercase px-2">
            Porque tus manos dicen más de lo que imaginás
          </p>
          <div className="w-12 sm:w-16 h-0.5 bg-rose mx-auto mt-3 sm:mt-4" />
        </div>

        {/* Featured Image */}
        <div className="mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto">
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-cream-dark shadow-lg">
            <Image
              src="/images/luxury-nails.jpg"
              alt="Nail art premium"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 768px"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {luxuryServices.map((service) => (
            <Card
              key={service.title}
              className="bg-white/80 backdrop-blur-sm border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-rose-light/20 flex-shrink-0">
                    <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-rose" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-serif font-semibold text-base sm:text-lg mb-1.5 sm:mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
