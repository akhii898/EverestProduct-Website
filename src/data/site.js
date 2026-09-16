export const site = {
  nameEn: "Everest Home Products",
  tagline: "सफाई का नया शिखर",
  phone: "7229823831",
  phoneDisplay: "+91 72298 23831",
  owner: "Paramveer Singh",
  address: "Rooppura, Kuchaman City, Nagaur, Rajasthan – 341508",
  instagram: "https://www.instagram.com/everest_home_products/",
};

export function waLink(message = "Hello, I visited your website and I'm interested in your products.") {
  return `https://wa.me/91${site.phone}?text=${encodeURIComponent(message)}`;
}
