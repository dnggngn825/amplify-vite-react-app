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
  category: string;
  imageUrl: string;
  rating: number;
}> = [
  // ===== Seating (10) =====
  {
    name: "Nordic Lounge Chair",
    price: 649.99,
    description: "Scandinavian-inspired lounge chair with oak legs and soft linen upholstery.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Minimalist Dining Chair",
    price: 289.99,
    description: "Clean-lined dining chair in matte white with a contoured seat.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1503602642458-232111445657?w=600&q=80",
    rating: 4.5,
  },
  {
    name: "Velvet Accent Chair",
    price: 549.99,
    description: "Deep emerald velvet chair with brass-tipped legs.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    rating: 4.9,
  },
  {
    name: "Modern Rocking Chair",
    price: 479.99,
    description: "Contemporary rocking chair with curved ash wood frame.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    rating: 4.6,
  },
  {
    name: "Leather Lounge Chair",
    price: 799.99,
    description: "Full-grain leather lounger with walnut armrests.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&q=80",
    rating: 5.0,
  },
  {
    name: "Woven Armchair",
    price: 429.99,
    description: "Hand-woven natural fiber armchair with teak frame.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
    rating: 4.4,
  },
  {
    name: "Upholstered Bench",
    price: 349.99,
    description: "Linen-covered bench seat ideal for entryways and bedrooms.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    rating: 4.3,
  },
  {
    name: "Sculptural Side Chair",
    price: 399.99,
    description: "Molded plywood side chair with an organic silhouette.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80",
    rating: 4.7,
  },
  {
    name: "Mid-Century Armchair",
    price: 599.99,
    description: "Retro-inspired armchair with tapered legs and bouclé fabric.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Linen Slipper Chair",
    price: 319.99,
    description: "Armless slipper chair in natural linen, perfect for small spaces.",
    category: "Seating",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80",
    rating: 4.5,
  },

  // ===== Tables (10) =====
  {
    name: "Oak Coffee Table",
    price: 449.99,
    description: "Solid white oak coffee table with rounded edges and shelf.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=600&q=80",
    rating: 4.7,
  },
  {
    name: "Marble Side Table",
    price: 279.99,
    description: "Carrara marble top on a slender blackened steel base.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=600&q=80",
    rating: 4.9,
  },
  {
    name: "Walnut Dining Table",
    price: 1299.99,
    description: "Solid walnut dining table seating six with tapered legs.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80",
    rating: 5.0,
  },
  {
    name: "Glass Console Table",
    price: 389.99,
    description: "Tempered glass console with brushed brass frame.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&q=80",
    rating: 4.4,
  },
  {
    name: "Nesting Tables Set",
    price: 329.99,
    description: "Set of three nesting tables in matte black steel and oak veneer.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1611967164521-abae8fba4668?w=600&q=80",
    rating: 4.6,
  },
  {
    name: "Round Pedestal Table",
    price: 549.99,
    description: "Sculptural pedestal dining table with a smooth plaster finish.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Live Edge Desk",
    price: 899.99,
    description: "Natural live-edge walnut desk with hairpin steel legs.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80",
    rating: 4.7,
  },
  {
    name: "Terrazzo End Table",
    price: 199.99,
    description: "Compact terrazzo-top end table with a concrete base.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=600&q=80",
    rating: 4.3,
  },
  {
    name: "Teak Nightstand",
    price: 249.99,
    description: "Reclaimed teak nightstand with a single drawer and open shelf.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=600&q=80",
    rating: 4.5,
  },
  {
    name: "Floating Shelf Desk",
    price: 379.99,
    description: "Wall-mounted floating desk in white oak with hidden cable management.",
    category: "Tables",
    imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
    rating: 4.6,
  },

  // ===== Storage (10) =====
  {
    name: "Modular Bookshelf",
    price: 699.99,
    description: "Customizable modular bookshelf in powder-coated steel and oak.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Oak Credenza",
    price: 949.99,
    description: "Mid-century credenza with sliding doors and adjustable shelves.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
    rating: 4.9,
  },
  {
    name: "Floating Wall Cabinet",
    price: 349.99,
    description: "Wall-mounted cabinet with soft-close hinges and matte lacquer finish.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80",
    rating: 4.5,
  },
  {
    name: "Rattan Storage Basket",
    price: 79.99,
    description: "Handwoven rattan basket with lid, perfect for living room storage.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1616627577385-5c0c4dab10fa?w=600&q=80",
    rating: 4.4,
  },
  {
    name: "Media Console",
    price: 599.99,
    description: "Low-profile media console with slatted doors and cable routing.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=600&q=80",
    rating: 4.7,
  },
  {
    name: "Glass Display Cabinet",
    price: 849.99,
    description: "Iron-framed glass display cabinet with adjustable shelves.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?w=600&q=80",
    rating: 4.6,
  },
  {
    name: "Dresser",
    price: 799.99,
    description: "Six-drawer dresser in matte white with solid oak drawer fronts.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Coat Rack",
    price: 149.99,
    description: "Freestanding coat rack in natural beechwood with six hooks.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=600&q=80",
    rating: 4.2,
  },
  {
    name: "Entryway Organizer",
    price: 229.99,
    description: "Wall-mounted entryway shelf with hooks, tray, and mirror.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
    rating: 4.5,
  },
  {
    name: "Cube Storage Unit",
    price: 299.99,
    description: "Stackable cube storage in white lacquer with optional fabric bins.",
    category: "Storage",
    imageUrl: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80",
    rating: 4.3,
  },

  // ===== Lighting (10) =====
  {
    name: "Arc Floor Lamp",
    price: 349.99,
    description: "Sweeping arc floor lamp with a linen drum shade and marble base.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057ab219?w=600&q=80",
    rating: 4.7,
  },
  {
    name: "Pendant Globe Light",
    price: 189.99,
    description: "Opal glass globe pendant on a matte black cord.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Ceramic Table Lamp",
    price: 159.99,
    description: "Hand-thrown ceramic lamp base with natural linen shade.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    rating: 4.6,
  },
  {
    name: "Linear Chandelier",
    price: 579.99,
    description: "Minimalist linear chandelier in brushed brass with exposed bulbs.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&q=80",
    rating: 4.9,
  },
  {
    name: "Brass Wall Sconce",
    price: 129.99,
    description: "Pivoting brass wall sconce with frosted glass diffuser.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=600&q=80",
    rating: 4.5,
  },
  {
    name: "Paper Lantern Pendant",
    price: 99.99,
    description: "Japanese-inspired washi paper pendant light, warm ambient glow.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1530603907829-659dc1b3f567?w=600&q=80",
    rating: 4.4,
  },
  {
    name: "Tripod Floor Lamp",
    price: 289.99,
    description: "Walnut tripod floor lamp with a conical fabric shade.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057ab219?w=600&q=80",
    rating: 4.6,
  },
  {
    name: "Bubble Chandelier",
    price: 449.99,
    description: "Multi-globe bubble chandelier with clear and frosted glass.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Woven Rattan Pendant",
    price: 179.99,
    description: "Handwoven rattan pendant casting intricate shadow patterns.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1530603907829-659dc1b3f567?w=600&q=80",
    rating: 4.7,
  },
  {
    name: "Desk Task Lamp",
    price: 119.99,
    description: "Adjustable LED desk lamp with touch dimmer and USB charging port.",
    category: "Lighting",
    imageUrl: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&q=80",
    rating: 4.5,
  },

  // ===== Accessories (10) =====
  {
    name: "Ceramic Vase Set",
    price: 89.99,
    description: "Set of three ceramic vases in matte earth tones.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    rating: 4.6,
  },
  {
    name: "Woven Throw Blanket",
    price: 129.99,
    description: "Chunky hand-knit throw in undyed merino wool.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1616627577385-5c0c4dab10fa?w=600&q=80",
    rating: 4.8,
  },
  {
    name: "Linen Cushion Set",
    price: 99.99,
    description: "Set of two stonewashed linen cushions with hidden zippers.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    rating: 4.5,
  },
  {
    name: "Abstract Wall Art",
    price: 249.99,
    description: "Large-format abstract print on gallery-wrapped canvas.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=600&q=80",
    rating: 4.7,
  },
  {
    name: "Stone Bookends",
    price: 69.99,
    description: "Polished marble bookends with a geometric cut.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80",
    rating: 4.3,
  },
  {
    name: "Terrazzo Tray",
    price: 59.99,
    description: "Terrazzo serving tray with brass handles.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1634712282287-14ed57b9cc89?w=600&q=80",
    rating: 4.4,
  },
  {
    name: "Brass Candle Holders",
    price: 79.99,
    description: "Set of three tapered brass candle holders in ascending heights.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=600&q=80",
    rating: 4.6,
  },
  {
    name: "Cotton Area Rug",
    price: 199.99,
    description: "Flatweave cotton rug in a neutral geometric pattern.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80",
    rating: 4.5,
  },
  {
    name: "Wall Mirror",
    price: 179.99,
    description: "Round wall mirror with a thin brass frame, 24-inch diameter.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80",
    rating: 4.9,
  },
  {
    name: "Scented Candle Set",
    price: 49.99,
    description: "Trio of soy wax candles in cedarwood, lavender, and bergamot.",
    category: "Accessories",
    imageUrl: "https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?w=600&q=80",
    rating: 4.7,
  },
];

async function seed() {
  // Delete all existing products first, use when update schema
  // console.log("Deleting existing products...");
  // const { data: listData } = await client.graphql({
  //   query: `query { listProducts(limit: 1000) { items { id } } }`,
  // }) as { data: { listProducts: { items: { id: string }[] } } };
  // const ids = listData.listProducts.items.map((item) => item.id);
  // for (const id of ids) {
  //   await client.models.Product.delete({ id });
  // }
  // console.log(`Deleted ${ids.length} products.`);

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
