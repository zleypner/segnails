export const BOOKING_CONFIG = {
  phone: "+50662387407",
  whatsappUrl: "https://wa.me/50662387407",
  message: "Hola Fio, quiero reservar una cita. ¿Qué disponibilidad tenés esta semana?",
  getBookingUrl: () => {
    const encodedMessage = encodeURIComponent(BOOKING_CONFIG.message);
    return `${BOOKING_CONFIG.whatsappUrl}?text=${encodedMessage}`;
  },
} as const;

export const SOCIAL_CONFIG = {
  instagram: {
    handle: "@fio_nails_space",
    url: "https://www.instagram.com/fio_nails_space/",
  },
  location: "Mall Internacional",
  schedule: "9:00 am – 6:00 pm",
} as const;

export const SITE_CONFIG = {
  name: "Segnini Nails Studio",
  tagline: "NAIL ART PREMIUM",
  description: "Diseños personalizados que reflejan tu esencia, con técnicas premium y dedicación absoluta en cada cita.",
} as const;
