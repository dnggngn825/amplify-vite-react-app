import { useEffect, useState, useCallback } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Plus } from "lucide-react";
import Hero from "../components/Hero";
import CategoryNav from "../components/CategoryNav";
import FeaturedProducts from "../components/FeaturedProducts";
import AddProductDialog from "../components/AddProductDialog";
import type { ProductFormData } from "../types/components";
import { useAuth } from "../hooks/useAuth";

const client = generateClient<Schema>();

const CATEGORIES = ["All", "Seating", "Tables", "Storage", "Lighting", "Accessories"];

export default function HomePage() {
  const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);
  const [showDialog, setShowDialog] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const sub = client.models.Product.observeQuery().subscribe({
      next: ({ items }) => setProducts([...items]),
    });
    return () => sub.unsubscribe();
  }, []);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleDeleteProduct = useCallback((id: string) => {
    client.models.Product.delete({ id });
  }, []);

  const handleAddProduct = useCallback(
    async (product: ProductFormData) => {
      await client.models.Product.create(product);
      setShowDialog(false);
    },
    []
  );

  const handleOpenDialog = useCallback(() => {
    setShowDialog(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setShowDialog(false);
  }, []);

  const handleCategoryChange = useCallback((category: string) => {
    setActiveCategory(category);
  }, []);

  return (
    <>
      <Hero />
      <CategoryNav
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />
      <section className="products-section">
        <h2 className="products-section__heading">Featured Products</h2>
        {isAuthenticated && (
          <div className="products-section__toolbar">
            <button className="add-product-button" onClick={handleOpenDialog}>
              <Plus size={16} strokeWidth={1.5} />
              <span>Add Product</span>
            </button>
          </div>
        )}
        <FeaturedProducts
          products={filteredProducts}
          onDeleteProduct={handleDeleteProduct}
        />
      </section>
      <AddProductDialog
        open={showDialog}
        onClose={handleCloseDialog}
        onSubmit={handleAddProduct}
      />
    </>
  );
}
