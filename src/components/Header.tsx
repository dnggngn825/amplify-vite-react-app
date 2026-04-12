import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Search, User, Heart, ShoppingCart, LogOut } from "lucide-react";
import { useAuth } from "../hooks/useAuth";

export default function Header() {
  const { isAuthenticated, signOut } = useAuth();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
      <Link to="/" className="site-header__brand">Oda</Link>
      <div className="site-header__actions">
        <button className="icon-button" aria-label="Search">
          <Search size={20} strokeWidth={1.5} />
        </button>
        <Link to="/account" className="icon-button" aria-label="Account">
          <User size={20} strokeWidth={1.5} />
        </Link>
        <Link to="/wishlist" className="icon-button" aria-label="Wishlist">
          <Heart size={20} strokeWidth={1.5} />
        </Link>
        <Link to="/cart" className="icon-button" aria-label="Cart">
          <ShoppingCart size={20} strokeWidth={1.5} />
          <span className="icon-button__badge">0</span>
        </Link>
        {isAuthenticated && (
          <button className="sign-out-button" onClick={signOut} aria-label="Sign out">
            <LogOut size={14} strokeWidth={1.5} />
            <span>Sign Out</span>
          </button>
        )}
      </div>
    </header>
  );
}
