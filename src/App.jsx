import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import OurStory from './components/OurStory';
import Community from './components/Community';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppButton from './components/WhatsAppButton';
import CartDrawer from './components/CartDrawer';
import ProductModal from './components/ProductModal';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [produitsAjoutes, setProduitsAjoutes] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });

    setIsCartOpen(true);

    setProduitsAjoutes(prev => [...prev, product.id]);
    setTimeout(() => {
      setProduitsAjoutes(prev => prev.filter(id => id !== product.id));
    }, 2000);
  };

  const updateQuantity = (productId, delta) => {
    setCartItems(prev => prev.map(item => {
      if (item.product.id === productId) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="font-sans antialiased relative">
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />

      <ProductModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <Navigation
        panier={totalItems}
        toggleMenu={() => setMenuOuvert(!menuOuvert)}
        menuOuvert={menuOuvert}
        onOpenCart={() => setIsCartOpen(true)}
      />

      <main id="main-content">
        <Hero />
        <ProductList
          onAjouter={addToCart}
          onQuickView={(product) => setSelectedProduct(product)}
          produitsAjoutes={produitsAjoutes}
        />
        <OurStory />
        <Community />
        <Benefits />
        <Testimonials />
        <FAQ />
        <ContactForm />
      </main>

      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
