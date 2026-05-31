import type { ProductCategory } from "../types/product";

export type CategoryItem = {
  id: number;
  title: ProductCategory;
  description: string;
  image: string;
};

export const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Upcountry Vegetables",
    description: "Premium high-elevation vegetables ideal for retail and food service.",
    image: "/images/categories/upcountry.jpg",
  },
  {
    id: 2,
    title: "Low Country Vegetables",
    description: "Fresh local vegetables widely used in Sri Lankan cuisine.",
    image: "/images/categories/low-country.jpg",
  },
  {
    id: 3,
    title: "Leafy Greens",
    description: "Fresh greens, lettuce varieties, and hydroponic produce.",
    image: "/images/categories/leafy-greens.jpg",
  },
  {
    id: 4,
    title: "Roots & Tubers",
    description: "Nutritious root vegetables for retail, HORECA, and bulk supply.",
    image: "/images/categories/roots-tubers.jpg",
  },
  {
    id: 5,
    title: "Local Fruits",
    description: "Seasonal Sri Lankan fruits sourced for freshness and quality.",
    image: "/images/categories/local-fruits.jpg",
  },
  {
    id: 6,
    title: "Imported Fruits",
    description: "Premium imported fruits for high-end retail and HORECA needs.",
    image: "/images/categories/imported-fruits.jpg",
  },
  {
    id: 7,
    title: "Herbs",
    description: "Fresh culinary herbs for hotels, restaurants, and premium kitchens.",
    image: "/images/categories/herbs.jpg",
  },
  {
    id: 8,
    title: "Exotic & Specialty Produce",
    description: "Specialty items including zucchini, cherry tomato, mushrooms, and salad produce.",
    image: "/images/categories/exotic.jpg",
  },
  {
    id: 9,
    title: "Value-added HORECA Packs",
    description: "Pre-cut, washed, peeled, and ready-to-cook packs for food service.",
    image: "/images/categories/horeca-packs.jpg",
  },
];