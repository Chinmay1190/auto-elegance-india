
export type ProductCategory = "superbike" | "luxury-car" | "sports-car";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number; // Price in INR
  images: string[];
  brand: string;
  specifications: {
    [key: string]: string | number;
  };
  featured?: boolean;
  inStock: boolean;
  rating?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
