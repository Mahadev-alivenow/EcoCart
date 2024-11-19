import { motion } from 'framer-motion';
import { useCartStore } from '@/lib/store';
import { ProductCard } from '@/components/ProductCard';
import { Cart } from '@/components/Cart';
import { Toaster } from '@/components/ui/toaster';

const products = [
  {
    id: 1,
    name: 'Premium Water Bottle',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&auto=format',
    description: 'Stay hydrated in style with our premium insulated water bottle.',
  },
  {
    id: 2,
    name: 'Classic T-Shirt',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format',
    description: 'Comfortable cotton t-shirt perfect for everyday wear.',
  },
  {
    id: 3,
    name: 'Wireless Earbuds',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&auto=format',
    description: 'High-quality wireless earbuds with noise cancellation.',
  },
  {
    id: 4,
    name: 'Leather Wallet',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&auto=format',
    description: 'Genuine leather wallet with multiple card slots.',
  },
  {
    id: 5,
    name: 'Smart Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&auto=format',
    description: 'Feature-packed smartwatch for fitness and notifications.',
  },
  {
    id: 6,
    name: 'Backpack',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format',
    description: 'Durable and stylish backpack for everyday use.',
  },
];

export function App() {
  const { addItem } = useCartStore();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-emerald-600"
          >
            EcoShop
          </motion.h1>
          <Cart />
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <p className="mt-2 text-gray-600">
            Discover our curated selection of premium products.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addItem}
            />
          ))}
        </div>
      </main>

      <footer className="mt-16 border-t bg-white py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-gray-600">
          <p>© 2024 EcoShop. All rights reserved.</p>
        </div>
      </footer>

      <Toaster />
    </div>
  );
}

export default App;