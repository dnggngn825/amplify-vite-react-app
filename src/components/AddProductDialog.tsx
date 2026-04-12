import { useState, useCallback } from "react";
import { Categories } from "../types/categories";
import type { AddProductDialogProps } from "../types/components";

const InitialForm = {
  name: "",
  price: "",
  description: "",
  category: Categories[0],
  imageUrl: "",
  rating: "5",
};

export default function AddProductDialog({
  open,
  onClose,
  onSubmit,
}: AddProductDialogProps) {
  const [form, setForm] = useState(InitialForm);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      const price = parseFloat(form.price);
      const rating = parseFloat(form.rating);
      if (!form.name || isNaN(price) || !form.imageUrl || !form.category) return;

      onSubmit({
        name: form.name,
        price,
        description: form.description || undefined,
        category: form.category,
        imageUrl: form.imageUrl,
        rating: isNaN(rating) ? 5 : Math.min(5, Math.max(1, rating)),
      });

      setForm(InitialForm);
    },
    [form, onSubmit]
  );

  const handleBackdropClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const stopPropagation = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  if (!open) return null;

  return (
    <div className="dialog-backdrop" onClick={handleBackdropClick}>
      <div className="dialog" onClick={stopPropagation}>
        <h2 className="dialog__title">Add Product</h2>
        <form className="dialog__form" onSubmit={handleSubmit}>
          <div className="dialog__field">
            <label className="dialog__label" htmlFor="add-name">
              Name *
            </label>
            <input
              className="dialog__input"
              id="add-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="dialog__field">
            <label className="dialog__label" htmlFor="add-price">
              Price *
            </label>
            <input
              className="dialog__input"
              id="add-price"
              name="price"
              type="number"
              step="0.01"
              min="0"
              value={form.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="dialog__field">
            <label className="dialog__label" htmlFor="add-description">
              Description
            </label>
            <textarea
              className="dialog__textarea"
              id="add-description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
            />
          </div>
          <div className="dialog__field">
            <label className="dialog__label" htmlFor="add-category">
              Category *
            </label>
            <select
              className="dialog__select"
              id="add-category"
              name="category"
              value={form.category}
              onChange={handleChange}
              required
            >
              {Categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="dialog__field">
            <label className="dialog__label" htmlFor="add-imageUrl">
              Image URL *
            </label>
            <input
              className="dialog__input"
              id="add-imageUrl"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div className="dialog__field">
            <label className="dialog__label" htmlFor="add-rating">
              Rating (1-5)
            </label>
            <input
              className="dialog__input"
              id="add-rating"
              name="rating"
              type="number"
              step="0.1"
              min="1"
              max="5"
              value={form.rating}
              onChange={handleChange}
            />
          </div>
          <div className="dialog__actions">
            <button
              className="dialog__button dialog__button--secondary"
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="dialog__button dialog__button--primary"
              type="submit"
            >
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
