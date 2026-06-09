export const SITE = {
  name: "Dreams Family Salon & Tattoo Studio",
  shortName: "Dreams Salon",
  phone: "+91 9849007058",
  phoneRaw: "+919849007058",
  whatsapp: "919849007058",
  whatsappMessage: "Hello Dreams Family Salon & Tattoo Studio, I would like to book an appointment.",
  address: "ECIL, Hyderabad, Telangana, India",
  area: "ECIL, Hyderabad",
  hours: "8:00 AM – 10:00 PM",
  hoursMachine: "Mo-Su 08:00-22:00",
  mapsUrl: "https://share.google/TqCg2pwV9vYKJPYUV",
  mapsEmbed:
    "https://www.google.com/maps?q=Dreams+Family+Salon+Tattoo+Studio+ECIL+Hyderabad&output=embed",
  directions:
    "https://www.google.com/maps/dir/?api=1&destination=Dreams+Family+Salon+and+Tattoo+Studio+ECIL+Hyderabad",
  tagline: "Hair • Skin • Tattoo • Makeup • Piercing",
  description:
    "Dreams Family Salon & Tattoo Studio provides premium hair styling, beard grooming, beauty services, facials, makeup, tattoos, piercing, and grooming in ECIL, Hyderabad.",
};

export const waLink = (msg: string = SITE.whatsappMessage) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

export const telLink = `tel:${SITE.phoneRaw}`;
