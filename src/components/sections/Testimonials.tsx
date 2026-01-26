import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María José",
    role: "Clienta frecuente",
    content:
      "Fio es increíble. Siempre me sorprende con diseños únicos y la atención es de primera. Mis uñas nunca habían durado tanto ni lucido tan bien.",
    rating: 5,
  },
  {
    name: "Carolina",
    role: "Novia feliz",
    content:
      "Me hizo las uñas para mi boda y quedé enamorada. Entendió exactamente lo que quería y el resultado superó mis expectativas. Todas me preguntaban dónde me las había hecho.",
    rating: 5,
  },
  {
    name: "Valeria",
    role: "Amante del nail art",
    content:
      "La mejor nail artist que he conocido. Cada cita es una experiencia relajante y los diseños siempre quedan perfectos. Ya no voy con nadie más.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-cream-dark overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3 sm:mb-4">
            <span className="text-rose text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
              TESTIMONIOS
            </span>
          </div>
          <div className="w-10 sm:w-12 h-0.5 bg-rose mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-3 sm:mb-4">
            Lo que dicen mis clientas
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-2">
            La satisfacción de mis clientas es mi mayor orgullo.
          </p>
        </div>

        {/* Testimonials Grid - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="p-4 sm:p-5 md:p-6">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-rose-light mb-3 sm:mb-4" />

                <p className="text-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Rating */}
                <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-rose text-rose"
                    />
                  ))}
                </div>

                <div>
                  <p className="font-semibold text-foreground text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
