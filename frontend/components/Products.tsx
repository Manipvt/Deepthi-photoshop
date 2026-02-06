'use client';

import { useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";
import { motion } from "framer-motion";

// Import product images
import mosaicFrame from "@/assets/product-mosaic-frame.jpg";
import digitalPainting from "@/assets/product-digital-painting.jpg";
import calendar from "@/assets/product-calendar.jpg";
import acrylicFrame from "@/assets/product-acrylic-frame.jpg";
import diorama from "@/assets/product-3d-diorama.jpg";
import ledLamp from "@/assets/product-led-lamp.jpg";

const products = [
  {
    image: mosaicFrame.src,
    category: "Customized Frames",
    categoryColor: "green",
    title: "Customized Mosaic Photo Frame",
    description: "Surprise your loved ones with a personalized mosaic photo frame made with premium materials.",
    rating: 4,
    reviews: 347,
    price: 599,
    originalPrice: 899,
    isNew: true,
  },
  {
    image: digitalPainting.src,
    category: "Digital Painting",
    categoryColor: "orange",
    title: "Customized Digital Oil Painting",
    description: "Turn your favorite memory into a timeless digital artwork. Our Customized Digital Oil Painting brings your cherished moments to life.",
    rating: 4.5,
    reviews: 153,
    price: 899,
    originalPrice: 1299,
    isNew: true,
  },
  {
    image: calendar.src,
    category: "Calendars",
    categoryColor: "pink",
    title: "Photo Calendar - 12 Months",
    description: "Turn every month into a memory with our customized photo calendar. Perfect for home décor and thoughtful gifting.",
    rating: 5,
    reviews: 1456,
    price: 599,
    originalPrice: 899,
    discount: 33,
  },
  {
    image: acrylicFrame.src,
    category: "Acrylic Frames",
    categoryColor: "blue",
    title: "Premium Customized Acrylic Frame",
    description: "Turn your memories into elegant decor with our personalized acrylic photo frames. Crystal clear and modern.",
    rating: 5,
    reviews: 89,
    price: 899,
    originalPrice: 1299,
    discount: 31,
  },
  {
    image: diorama.src,
    category: "3D Diorama",
    categoryColor: "green",
    title: "Romantic 3D Diorama Box",
    description: "A magical handcrafted 3D scene with LED lights. Perfect for anniversaries and special occasions.",
    rating: 5,
    reviews: 234,
    price: 1499,
    originalPrice: 2199,
    discount: 32,
  },
  {
    image: ledLamp.src,
    category: "LED Gifts",
    categoryColor: "pink",
    title: "Heart LED Photo Lamp",
    description: "Illuminate your love with our personalized heart-shaped LED lamp featuring your favorite photo.",
    rating: 4.5,
    reviews: 412,
    price: 799,
    originalPrice: 1199,
    discount: 33,
  },
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const INITIAL_DISPLAY_COUNT = 4;
  const displayedProducts = showAll ? products : products.slice(0, INITIAL_DISPLAY_COUNT);

  const handleViewProduct = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const toggleShowAll = () => {
    if (showAll) {
      // Scroll to products section when collapsing
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowAll(!showAll);
  };

  return (
    <section id="products" className="py-12 sm:py-16 lg:py-28 bg-background">
      <div className="container px-3 sm:px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
          suppressHydrationWarning
        >
          <span className="text-primary font-semibold text-xs sm:text-sm tracking-widest uppercase">
            Our Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3">
            Handcrafted with <span className="text-gradient-gold italic">Love</span>
          </h2>
          <p className="text-muted-foreground mt-3 sm:mt-4 lg:mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Explore our curated collection of personalized gifts that capture your most cherished memories.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {displayedProducts.map((product, index) => (
            <ProductCard 
              key={index} 
              {...product} 
              onViewProduct={() => handleViewProduct(product)}
            />
          ))}
        </div>

        {/* View All Button */}
        {products.length > INITIAL_DISPLAY_COUNT && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mt-10 sm:mt-12 lg:mt-14"
            suppressHydrationWarning
          >
            <button 
              onClick={toggleShowAll}
              className="btn-outline-gold text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3" 
              suppressHydrationWarning
            >
              {showAll ? 'Show Less Products' : `View All Products (${products.length - INITIAL_DISPLAY_COUNT} more)`}
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default Products;
