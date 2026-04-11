import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "./amplify/data/resource";
import outputs from "./amplify_outputs.json";

Amplify.configure(outputs);
const client = generateClient<Schema>();

// Sample product data to seed the database
// run npx tsx seed.ts to execute this script

const products: Array<{
  name: string;
  price: number;
  description?: string;
  category?: string;
  imageUrl?: string;
}> = [
  {
    name: "Classic White T-Shirt",
    price: 24.99,
    description: "Soft cotton crew neck tee in classic white.",
    category: "Apparel",
  },
  {
    name: "Running Sneakers",
    price: 89.99,
    description: "Lightweight mesh sneakers with cushioned sole.",
    category: "Footwear",
  },
  {
    name: "Leather Backpack",
    price: 129.99,
    description: "Full-grain leather backpack with laptop compartment.",
    category: "Accessories",
  },
  {
    name: "Wireless Earbuds",
    price: 59.99,
    description: "Noise-cancelling earbuds with 8-hour battery life.",
    category: "Electronics",
  },
  {
    name: "Stainless Steel Water Bottle",
    price: 19.99,
    description: "Double-walled insulated bottle, keeps drinks cold for 24 hours.",
    category: "Accessories",
  },
  {
    name: "Denim Jacket",
    price: 74.99,
    description: "Vintage-wash denim jacket with button closure.",
    category: "Apparel",
  },
  {
    name: "Yoga Mat",
    price: 34.99,
    description: "Non-slip exercise mat, 6mm thick.",
    category: "Fitness",
  },
  {
    name: "Sunglasses",
    price: 45.00,
    description: "UV400 polarized lenses with lightweight frame.",
    category: "Accessories",
  },
  {
    name: "Portable Charger",
    price: 29.99,
    description: "10,000mAh power bank with dual USB output.",
    category: "Electronics",
  },
  {
    name: "Canvas Tote Bag",
    price: 15.99,
    description: "Reusable organic cotton tote bag.",
    category: "Accessories",
  },
];

async function seed() {
  console.log(`Seeding ${products.length} products...`);

  for (const product of products) {
    const { data, errors } = await client.models.Product.create(product);
    if (errors) {
      console.error(`Failed to create "${product.name}":`, errors);
    } else {
      console.log(`Created: ${data?.name} — $${data?.price}`);
    }
  }

  console.log("Done.");
}

seed();
