import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Sparkles,
    value: "5+",
    label: "años",
    sublabel: "como artista de uñas",
  },
  {
    icon: Heart,
    value: "+500",
    label: "clientas",
    sublabel: "satisfechas",
  },
  {
    icon: Clock,
    value: "2",
    label: "horas",
    sublabel: "de dedicación por cita",
  },
  {
    icon: Award,
    value: "Certificada",
    label: "",
    sublabel: "en técnicas premium",
  },
];

export function About() {
  return (
    <section id="sobre-mi" className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 bg-background overflow-hidden">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative z-10 max-w-xs sm:max-w-sm mx-auto md:max-w-none">
              {/* Decorative background shapes */}
              <div className="absolute -inset-3 sm:-inset-4 bg-rose-light/30 rounded-2xl sm:rounded-3xl -rotate-2" />
              <div className="absolute -inset-3 sm:-inset-4 bg-rose-light/20 rounded-2xl sm:rounded-3xl rotate-1" />

              {/* Main image container */}
              <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden bg-cream-dark">
                <Image
                  src="/images/about-fio.jpg"
                  alt="Fio Segnini - Nail Artist"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 80vw, 50vw"
                />

                {/* Years badge - smaller on mobile */}
                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 bg-white/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-lg">
                  <p className="text-xl sm:text-2xl font-bold text-foreground">5+</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    años creando sonrisas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-4 sm:space-y-5 md:space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-rose text-xs sm:text-sm font-medium tracking-[0.15em] uppercase">
                  SOBRE MÍ
                </span>
              </div>
              <div className="w-10 sm:w-12 h-0.5 bg-rose mb-4 sm:mb-6" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif">
              Hola, soy{" "}
              <span className="text-rose">Fio Segnini</span>
            </h2>

            <p className="text-rose font-medium italic text-sm sm:text-base">
              Elegancia que empieza en tus manos.
            </p>

            <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Desde pequeña supe que quería crear belleza con mis manos. Hoy,
                cada cita es una oportunidad para hacer que una mujer se sienta
                especial, segura y radiante.
              </p>
              <p>
                No solo hago uñas — creo experiencias. Cada diseño es único,
                pensado especialmente para vos, tu personalidad y tu estilo de
                vida. Es cómo te presentás al mundo.
              </p>
              <p className="hidden sm:block">
                Mi compromiso es darte la atención que merecés, con productos de
                primera calidad y técnicas que cuidan la salud de tus uñas
                mientras las hacen lucir espectaculares.
              </p>
            </div>

            {/* Stats Grid - 2 columns on all mobile, 4 on larger screens */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 pt-4 sm:pt-6">
              {stats.map((stat) => (
                <Card
                  key={stat.label || stat.value}
                  className="bg-cream-dark border-0"
                >
                  <CardContent className="p-3 sm:p-4 text-center">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-rose mx-auto mb-1 sm:mb-2" />
                    <p className="font-bold text-foreground text-base sm:text-lg">
                      {stat.value}
                    </p>
                    {stat.label && (
                      <p className="text-xs sm:text-sm text-foreground">{stat.label}</p>
                    )}
                    <p className="text-[10px] sm:text-xs text-muted-foreground">
                      {stat.sublabel}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
