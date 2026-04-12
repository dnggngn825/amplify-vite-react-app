import type { Schema } from "../../amplify/data/resource";

export interface ProductFormData {
  name: string;
  price: number;
  description?: string;
  category: string;
  imageUrl: string;
  rating: number;
}

export interface AddProductDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (product: ProductFormData) => void;
}

export interface CategoryNavProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface FeaturedProductsProps {
  products: Array<Schema["Product"]["type"]>;
  onDeleteProduct: (id: string) => void;
}

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  category: string;
  onDelete: (id: string) => void;
}
