import Link from "next/link";
import { Instagram, MessageCircle, Heart, MapPin, Clock } from "lucide-react";
import { BOOKING_CONFIG, SOCIAL_CONFIG, SITE_CONFIG } from "@/config/booking";

const navLinks = [
  { label: "Galería", href: "#galeria" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/80">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col mb-3 sm:mb-4">
              <span className="text-lg sm:text-xl font-serif">
                <span className="text-rose-light font-medium italic">Segnini</span>{" "}
                <span className="font-bold text-white">Nails</span>
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-rose-light uppercase">
                {SITE_CONFIG.tagline}
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-white/60 max-w-xs">
              Diseños personalizados que reflejan tu esencia, con técnicas
              premium y dedicación absoluta.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs sm:text-sm hover:text-rose-light transition-colors py-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a
                  href={BOOKING_CONFIG.getBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm hover:text-rose-light transition-colors py-1"
                >
                  <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="truncate">WhatsApp: {BOOKING_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL_CONFIG.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs sm:text-sm hover:text-rose-light transition-colors py-1"
                >
                  <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                  {SOCIAL_CONFIG.instagram.handle}
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm py-1">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                <span className="truncate">{SOCIAL_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2 text-xs sm:text-sm py-1">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                {SOCIAL_CONFIG.schedule}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-white/60 text-center sm:text-left">
              © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
            </p>
            <p className="text-xs sm:text-sm text-white/60 flex items-center gap-1">
              Hecho con <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose fill-rose" /> para mujeres que brillan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
