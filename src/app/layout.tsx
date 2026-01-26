import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Segnini Nails Studio | Nail Art Premium en Costa Rica",
  description:
    "Diseños personalizados que reflejan tu esencia, con técnicas premium y dedicación absoluta en cada cita. Reserva tu cita de nail art en Costa Rica.",
  keywords: [
    "nail art",
    "uñas",
    "manicure",
    "Costa Rica",
    "diseño de uñas",
    "nail artist",
    "Segnini Nails Studio",
  ],
  openGraph: {
    title: "Segnini Nails Studio | Nail Art Premium",
    description:
      "Uñas que hablan por ti, antes de que digas una palabra. Diseños personalizados con técnicas premium.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
