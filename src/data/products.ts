import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    slug: "carrot",
    name: "Carrot",
    sinhalaName: "කැරට්",
    category: "Upcountry Vegetables",
    image: "/images/products/carrot.jpg",
    suitableFor: ["Both"],
    origin: "Local / Imported",
    uom: "KG",
    storage: "0–5°C",
    qualityNotes: [
      "Fresh, clean and firm",
      "Free from insect bites",
      "No black or white marks",
    ],
    nutritionHighlights: [
      "Rich in Vitamin A",
      "Good source of fibre",
      "Contains natural antioxidants",
    ],
    wellnessSupport: [
      "Supports eye health",
      "Supports digestive wellness",
      "Suitable for balanced diets",
    ],
    useWithCare: [
      "Consume as part of a balanced diet",
      "For special medical diets, follow professional dietary advice",
    ],
    bestFor: ["Salads", "Curries", "Stir-fries", "Retail packs", "HORECA bulk"],
  },
  {
    id: 2,
    slug: "green-beans",
    name: "Green Beans",
    category: "Upcountry Vegetables",
    image: "/images/products/green-beans.jpg",
    suitableFor: ["Both"],
    origin: "Local",
    uom: "KG",
    storage: "0–5°C",
    qualityNotes: [
      "Fresh, young, clean and firm",
      "Free from insect bites",
      "No black or white marks",
    ],
    nutritionHighlights: [
      "Good source of fibre",
      "Contains plant-based nutrients",
      "Low calorie vegetable option",
    ],
    wellnessSupport: [
      "Supports digestive wellness",
      "Suitable for balanced meals",
      "Useful for healthy meal planning",
    ],
    useWithCare: [
      "Consume as part of a balanced diet",
    ],
    bestFor: ["Curries", "Stir-fries", "Buffets", "Retail packs"],
  },
  {
    id: 3,
    slug: "banana",
    name: "Banana",
    sinhalaName: "කෙසෙල්",
    category: "Local Fruits",
    image: "/images/products/banana.jpg",
    suitableFor: ["Both"],
    origin: "Local",
    uom: "KG",
    storage: "12–14°C",
    qualityNotes: [
      "Fresh, mature, clean and firm",
      "Free from bruises and pest damage",
      "Colour depends on ripening stage",
    ],
    nutritionHighlights: [
      "Natural energy source",
      "Contains potassium",
      "Good source of dietary fibre",
    ],
    wellnessSupport: [
      "Suitable for healthy snacking",
      "Supports active lifestyles",
      "Suitable for balanced diets",
    ],
    useWithCare: [
      "Portion control is recommended for sugar-controlled diets",
      "For special medical diets, follow professional dietary advice",
    ],
    bestFor: ["Retail fruit displays", "Hotel breakfast buffets", "Desserts", "Smoothies"],
  },
];