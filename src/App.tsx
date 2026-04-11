import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useAuthenticator } from '@aws-amplify/ui-react';

const client = generateClient<Schema>();

function AddProductDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
    imageUrl: "",
  });

  if (!open) return null;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const price = parseFloat(form.price);
    if (!form.name || isNaN(price)) return;

    await client.models.Product.create({
      name: form.name,
      price,
      description: form.description || undefined,
      category: form.category || undefined,
      imageUrl: form.imageUrl || undefined,
    });

    setForm({ name: "", price: "", description: "", category: "", imageUrl: "" });
    onClose();
  }

  return (
    <div className="dialog-backdrop" onClick={onClose}>
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name *
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Price *
            <input name="price" type="number" step="0.01" min="0" value={form.price} onChange={handleChange} required />
          </label>
          <label>
            Description
            <textarea name="description" value={form.description} onChange={handleChange} rows={3} />
          </label>
          <label>
            Category
            <input name="category" value={form.category} onChange={handleChange} />
          </label>
          <label>
            Image URL
            <input name="imageUrl" value={form.imageUrl} onChange={handleChange} />
          </label>
          <div className="dialog-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button type="submit">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState<Array<Schema["Product"]["type"]>>([]);
  const [showDialog, setShowDialog] = useState(false);
  const { signOut } = useAuthenticator();

  useEffect(() => {
    client.models.Product.observeQuery().subscribe({
      next: (data) => setProducts([...data.items]),
    });
  }, []);

  function deleteProduct(id: string) {
    client.models.Product.delete({ id });
  }

  return (
    <main>
      <h1>Products</h1>
      <button onClick={() => setShowDialog(true)}>+ new product</button>
      <AddProductDialog open={showDialog} onClose={() => setShowDialog(false)} />
      <ul>
        {products.map((product) => (
          <li onClick={() => deleteProduct(product.id)} key={product.id}>
            <strong>{product.name}</strong> — ${product.price?.toFixed(2)}
            {product.category && <span> [{product.category}]</span>}
            {product.description && <p>{product.description}</p>}
          </li>
        ))}
      </ul>
      <button onClick={signOut}>Sign Out</button>
    </main>
  );
}

export default App;
