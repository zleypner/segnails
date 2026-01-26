import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Gem,
  Palette,
  Crown,
  Heart,
  Star,
} from "lucide-react";

const luxuryServices = [
  {
    icon: Sparkles,
    title: "Natural Gel Enhancements",
    description:
      "Aplicación de gel sobre la uña natural para aportar mayor resistencia, durabilidad y un acabado elegante y brillante, manteniendo un aspecto natural.",
  },
  {
    icon: Gem,
    title: "Gel-X Extensions",
    description:
      "Extensiones Gel-X premium, ligeras y flexibles, con excelente duración y opción de personalizar largo y forma.",
  },
  {
    icon: Palette,
    title: "Signature Manicure",
    description:
      "Manicure personalizado con diseños exclusivos adaptados a tu estilo, detalles refinados y un acabado de lujo.",
  },
  {
    icon: Crown,
    title: "Luxury Nail Art",
    description:
      "Nail art de alto nivel que incluye French modernos, diseños minimalistas, efectos chrome, glazed y detalles artísticos.",
  },
  {
    icon: Heart,
    title: "Classic & Elegant",
    description:
      "Estilos atemporales como tonos nude, rosados suaves, milky nails y French clásico, para un look limpio y sofisticado.",
  },
  {
    icon: Star,
    title: "Luxury Pedicure",
    description:
      "Pedicure con esmaltado semipermanente, de larga duración y acabado pulido para unos pies impecables.",
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
