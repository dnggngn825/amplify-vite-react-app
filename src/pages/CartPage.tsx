import { ShoppingCart } from "lucide-react";

export default function CartPage() {
  return (
    <section className="page-placeholder">
      <ShoppingCart size={48} strokeWidth={1} />
      <h2 className="page-placeholder__heading">Shopping Cart</h2>
      <p className="page-placeholder__text">Your cart is empty.</p>
    </section>
  );
}
