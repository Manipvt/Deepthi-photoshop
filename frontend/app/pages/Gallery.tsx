'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import mosaicFrame from "@/assets/product-mosaic-frame.jpg";
import digitalPainting from "@/assets/product-digital-painting.jpg";
import acrylicFrame from "@/assets/product-acrylic-frame.jpg";
import diorama from "@/assets/product-3d-diorama.jpg";
import ledLamp from "@/assets/product-led-lamp.jpg";
import calendar from "@/assets/product-calendar.jpg";

const categories = [
  "All",
  "Anniversary",
  "Wedding",
  "Birthday",
  "Housewarming",
  "Graduation",
];

const galleryItems = [
  { id: 1, image: mosaicFrame.src, name: "Ananya Sharma", category: "Anniversary", verified: true },
  { id: 2, image: digitalPainting.src, name: "Rahul Verma", category: "Wedding", verified: true },
  { id: 3, image: gallery1.src, name: "Priya Patel", category: "Birthday", verified: true },
  { id: 4, image: acrylicFrame.src, name: "Vikram Singh", category: "Anniversary", verified: false },
  { id: 5, image: diorama.src, name: "Sneha Reddy", category: "Wedding", verified: true },
  { id: 6, image: ledLamp.src, name: "Arjun Kumar", category: "Birthday", verified: true },
  { id: 7, image: gallery2.src, name: "Meera Iyer", category: "Graduation", verified: true },
  { id: 8, image: gallery3.src, name: "Karthik Nair", category: "Birthday", verified: false },
  { id: 9, image: gallery4.src, name: "Divya Sharma", category: "Housewarming", verified: true },
  { id: 10, image: gallery5.src, name: "Rohit Mehta", category: "Anniversary", verified: true },
  { id: 11, image: gallery6.src, name: "Sanya Gupta", category: "Wedding", verified: true },
  { id: 12, image: calendar.src, name: "Aditya Rao", category: "Housewarming", verified: false },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-display text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                  The<br />
                  People's<br />
                  <span className="text-gradient-gold italic">Portrait.</span>
                </h1>
                <p className="text-muted-foreground mt-6 max-w-md text-lg">
                  Every milestone has a story. Filter our archive by the occasions that matter to you.
                </p>
              </motion.div>

              {/* Right - Filter Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-secondary/50 rounded-2xl p-4"
              >
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-6 py-3 rounded-lg font-medium text-sm transition-all ${
                        activeCategory === category
                          ? "bg-foreground text-background"
                          : "bg-background text-foreground hover:bg-secondary"
                      }`}
                    >
                      {category.toUpperCase()}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <motion.div 
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="group cursor-pointer"
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-secondary/30">
                      {/* Customer Info */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="text-sm font-medium text-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                          {item.name}
                        </span>
                        {item.verified && (
                          <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </span>
                        )}
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-14 left-4 z-10">
                        <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full uppercase">
                          {item.category}
                        </span>
                      </div>

                      {/* Image */}
                      <div className="aspect-[4/5] overflow-hidden">
                        <img
                          src={item.image}
                          alt={`Gift for ${item.name}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-3xl md:w-full bg-background rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.image}
                alt={`Gift for ${selectedImage.name}`}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-background">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xl font-semibold text-foreground">
                    {selectedImage.name}
                  </span>
                  {selectedImage.verified && (
                    <span className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </span>
                  )}
                </div>
                <span className="text-sm text-muted-foreground uppercase tracking-wide">
                  {selectedImage.category}
                </span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Gallery;
