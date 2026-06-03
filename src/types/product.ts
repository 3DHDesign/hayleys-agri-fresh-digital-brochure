export type ProductCategory =
  | "Upcountry Vegetables"
  | "Low Country Vegetables"
  | "Leafy Greens"
  | "Roots & Tubers"
  | "Local Fruits"
  | "Imported Fruits"
  | "Herbs"
  | "Exotic & Specialty Produce"
  | "Value-added HORECA Packs";

export type ProductSuitability = "Retail" | "HORECA" | "Both";

export type ProductOrigin = "Local" | "Imported" | "Local / Imported";

export type ProductUom = "KG" | "NO" | "Pack";

export type Product = {
  id: number;
  slug: string;
  name: string;
  sinhalaName?: string;
  category: ProductCategory;
  image?: string;
  suitableFor: string[];
  origin?: string;
  uom: string;
  storage?: string;
  qualityNotes: string[];
  nutritionHighlights: string[];
  wellnessSupport: string[];
  useWithCare?: string[];
  bestFor?: string[];

  videoUrl?: string;
};