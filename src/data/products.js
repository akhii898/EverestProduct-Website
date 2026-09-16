// Home Care images
import dishwashLiquid from "../assets/images/homecare/dishwash-liquid.jpeg";
import dishwashGel from "../assets/images/homecare/dishwash-gel.jpeg";
import handWash from "../assets/images/homecare/hand-wash.jpeg";
import toiletBlue from "../assets/images/homecare/toilet-cleaner-blue.jpeg";
import toilet500 from "../assets/images/homecare/toilet-cleaner-500ml.jpeg";
import toilet5l from "../assets/images/homecare/toilet-cleaner-5l.jpeg";
import floorPhenyl from "../assets/images/homecare/floor-cleaner-phenyl.jpeg";
import glassHome from "../assets/images/homecare/glass-cleaner-home.jpeg";

// Car Care images
import glassCar from "../assets/images/carcare/glass-cleaner.jpeg";
import carShampoo from "../assets/images/carcare/car-shampoo.jpeg";
import dashboardPolish from "../assets/images/carcare/dashboard-polish.jpeg";
import interiorCleaner from "../assets/images/carcare/interior-cleaner.jpeg";
import tyrePolish from "../assets/images/carcare/tyre-polish.jpeg";

export const homeCareProducts = [
  {
    id: "h1",
    image: dishwashLiquid,
    title: "Everest Dishwash Liquid",
    tag: "99.9% Germ Protection",
    sizes: ["500 ml", "1 L", "5 L"],
    features: ["Cuts greasy stains", "Gentle on hands", "Extra foam, extra clean"],
  },
  {
    id: "h2",
    image: dishwashGel,
    title: "Everest Dish Wash Gel",
    tag: "Power of Lemons",
    sizes: ["Bottle", "5 L Jar"],
    features: ["Lemon power formula", "One bottle, whole family", "Long lasting shine"],
  },
  {
    id: "h3",
    image: handWash,
    title: "Everest Hand Wash",
    tag: "Antibacterial",
    sizes: ["250 ml", "500 ml"],
    features: ["Moisturizing formula", "Fresh fragrance", "Non-irritating"],
  },
  {
    id: "h4",
    image: floorPhenyl,
    title: "Everest Kapoor Phenyl",
    tag: "New Launch",
    sizes: ["500 ml", "1 L", "5 L"],
    features: ["Camphor fragrance", "Kills germs on every surface", "Safe on tiles, marble & granite"],
  },
  {
    id: "h5",
    image: toiletBlue,
    title: "Everest Toilet Cleaner Blue",
    tag: "New Formula",
    sizes: ["500 ml"],
    features: ["Kills all germs", "Removes tough stains", "Fights odour"],
  },
  {
    id: "h6",
    image: toilet500,
    title: "Everest Toilet Cleaner 500ml",
    tag: "Hygienic",
    sizes: ["500 ml"],
    features: ["Germ kill", "Removes stains", "Fresh fragrance"],
  },
  {
    id: "h7",
    image: toilet5l,
    title: "Everest Toilet Cleaner 5L",
    tag: "Bulk Pack",
    sizes: ["5 L"],
    features: ["Economical bulk pack", "Long lasting", "Strong formula"],
  },
  {
    id: "h8",
    image: glassHome,
    title: "Everest Glass Cleaner",
    tag: "Streak-Free",
    sizes: ["500 ml"],
    features: ["Streak-free shine", "Multi-surface", "Quick drying"],
  },
];

export const carCareProducts = [
  {
    id: "c1",
    image: glassCar,
    title: "Everest Car Glass Cleaner",
    tag: "5L Packing",
    sizes: ["5 L"],
    features: ["Streak-free shine", "Removes dust & grime", "Long lasting clarity"],
  },
  {
    id: "c2",
    image: carShampoo,
    title: "Everest Car Shampoo",
    tag: "Professional Solution",
    sizes: ["1 L", "5 L", "25 L", "50 L"],
    features: ["Thick, rich foam", "Safe for wax coating", "pH balanced & eco-friendly"],
  },
  {
    id: "c3",
    image: dashboardPolish,
    title: "Everest Dashboard Polish",
    tag: "UV Protection",
    sizes: ["500 ml"],
    features: ["Restores dashboard shine", "Anti-dust, non-greasy", "Protects from cracking"],
  },
  {
    id: "c4",
    image: interiorCleaner,
    title: "Everest Car Interior Cleaner",
    tag: "All Surfaces",
    sizes: ["500 ml", "5 L"],
    features: ["Deep cleans seats & dashboard", "Fresh fragrance", "Safe for every interior surface"],
  },
  {
    id: "c5",
    image: tyrePolish,
    title: "Everest Tyre Polish",
    tag: "Black Shine",
    sizes: ["1 L"],
    features: ["Deep black, long-lasting shine", "UV protection, anti-crack", "Repels dust & dirt"],
  },
];

export const bulkPricing = {
  product: "Dishwash Liquid",
  price: "₹40",
  unit: "per litre",
  condition: "on orders of 5 litres or more",
};
