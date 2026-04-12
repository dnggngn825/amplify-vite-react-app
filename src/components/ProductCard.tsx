import { motion } from "framer-motion";
import { Heart, Star, Trash2 } from "lucide-react";
import type { ProductCardProps } from "../types/components";

function StarRating({ rating }: { rating: number }) {
  const stars = [];
  const rounded = Math.round(rating);

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={i <= rounded ? "product-card__rating" : "product-card__rating--empty"}
      >
        <Star size={12} strokeWidth={1.5} fill={i <= rounded ? "currentColor" : "none"} />
      </span>
    );
  }

  return <div className="product-card__rating">{stars}</div>;
}

export default function ProductCard({
  id,
  name,
  price,
  imageUrl,
  rating,
  category,
  onDelete,
}: ProductCardProps) {
  return (
    <motion.article
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="product-card__image-wrapper">
        <img
          className="product-card__image"
          src={imageUrl}
          alt={name}
          loading="lazy"
        />
        <button
          className="product-card__delete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(id);
          }}
          aria-label={`Delete ${name}`}
        >
          <Trash2 size={14} strokeWidth={1.5} />
        </button>
      </div>
      <div className="product-card__info">
        <div className="product-card__header">
          <span className="product-card__name">{name}</span>
          <button className="product-card__wishlist" aria-label={`Add ${name} to wishlist`}>
            <Heart size={16} strokeWidth={1.5} />
          </button>
        </div>
        <StarRating rating={rating} />
        <span className="product-card__price">${price.toFixed(2)}</span>
        <span className="product-card__category">{category}</span>
      </div>
    </motion.article>
  );
}
