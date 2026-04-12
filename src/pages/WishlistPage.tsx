import { Heart } from "lucide-react";
import RequireAuth from "../components/RequireAuth";

function WishlistContent() {
  return (
    <section className="page-placeholder">
      <Heart size={48} strokeWidth={1} />
      <h2 className="page-placeholder__heading">Wishlist</h2>
      <p className="page-placeholder__text">You haven't saved any items yet.</p>
    </section>
  );
}

export default function WishlistPage() {
  return (
    <RequireAuth>
      <WishlistContent />
    </RequireAuth>
  );
}
