"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_CONFIG, SITE_CONFIG } from "@/config/booking";

const navLinks = [
  { label: "Galería", href: "#galeria" },
  { label: "Sobre Mí", href: "#sobre-mi" },
  { label: "Servicios", href: "#servicios" },
  { label: "Testimonios", href: "#testimonios" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col">
            <span className="text-lg sm:text-xl font-serif">
              <span className="text-rose font-medium italic">Segnini</span>{" "}
              <span className="font-bold text-foreground">Nails</span>
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.2em] text-rose uppercase">
              {SITE_CONFIG.tagline}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-rose hover:bg-rose-dark text-white rounded-full px-5 lg:px-6"
            >
              <a
                href={BOOKING_CONFIG.getBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Reservar cita
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button - larger touch target */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 rounded-lg active:bg-secondary/50 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Full screen overlay */}
        <div
          className={`md:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-background transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full px-4 pt-6 pb-8">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors py-4 px-3 rounded-lg active:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border">
              <Button
                asChild
                size="lg"
                className="bg-rose hover:bg-rose-dark text-white rounded-full w-full h-12 text-base"
              >
                <a
                  href={BOOKING_CONFIG.getBookingUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                >
                  Reservar cita
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
