import ProductCard from "./ProductCard";
import type { FeaturedProductsProps } from "../types/components";

export default function FeaturedProducts({
  products,
  onDeleteProduct,
}: FeaturedProductsProps) {
  if (products.length === 0) {
    return (
      <div className="products-grid products-grid--empty">
        <p>No products found in this category.</p>
      </div>
    );
  }

  return (
    <div className="products-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          rating={product.rating ?? 5}
          category={product.category}
          onDelete={onDeleteProduct}
        />
      ))}
    </div>
  );
}
