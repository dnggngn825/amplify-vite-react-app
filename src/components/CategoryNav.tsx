import { useCallback } from "react";
import type { CategoryNavProps } from "../types/components";

export default function CategoryNav({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryNavProps) {
  const handleClick = useCallback(
    (category: string) => () => {
      onCategoryChange(category);
    },
    [onCategoryChange]
  );

  return (
    <nav className="category-nav" aria-label="Product categories">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-nav__link${
            activeCategory === category ? " category-nav__link--active" : ""
          }`}
          onClick={handleClick(category)}
          aria-current={activeCategory === category ? "page" : undefined}
        >
          {category}
        </button>
      ))}
    </nav>
  );
}
