'use client';

import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

// Import hero slide images
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import heroSlide5 from "@/assets/hero-slide-5.jpg";

const slides = [
  {
    image: heroSlide1.src,
    title: "3D Diorama",
    subtitle: "Magical Miniatures",
  },
  {
    image: heroSlide2.src,
    title: "Mosaic Frames",
    subtitle: "Family Memories",
  },
  {
    image: heroSlide3.src,
    title: "Digital Paintings",
    subtitle: "Artistic Portraits",
  },
  {
    image: heroSlide4.src,
    title: "LED Photo Lamps",
    subtitle: "Glow with Love",
  },
  {
    image: heroSlide5.src,
    title: "Acrylic Frames",
    subtitle: "Crystal Elegance",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container py-8 sm:py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center lg:text-left px-3 sm:px-0"
            suppressHydrationWarning
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-[#ff6b35]/10 to-[#ff9100]/10 text-[#ff6b35] px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold mb-4 sm:mb-8 shadow-sm border border-[#ff6b35]/20"
            >
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff6b35]" />
              <span className="tracking-wide">⭐ HYDERABAD'S FINEST STUDIO ⭐</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-4 sm:mb-6"
            >
              <span className="text-gradient-gold italic">Personalized Gifts</span> That Tell A{" "}
              <span className="text-gradient-gold italic">Story</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-6 sm:mb-10 leading-relaxed"
            >
              Customized 3D Miniatures for your loved ones. Preserve your most cherished 
              moments with handcrafted keepsakes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Button
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="btn-gold group text-sm sm:text-base shadow-lg shadow-[#ff6b35]/40 hover:shadow-xl hover:shadow-[#ff6b35]/60 cursor-pointer"
                suppressHydrationWarning
              >
                <span>🛍️ Shop Now</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  className="btn-outline-gold text-sm sm:text-base border-2 hover:border-[#ff9100] w-full sm:w-auto"
                  suppressHydrationWarning
                >
                  📖 View Catalog
                </Button>
              </Link>
            </motion.div>

            {/* Slide Indicator */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="hidden lg:flex items-center gap-4 mt-14"
            >
              <span className="text-5xl font-display font-bold text-foreground">
                {String(currentSlide + 1).padStart(2, '0')}
              </span>
              <div className="flex items-center gap-2.5">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                      index === currentSlide 
                        ? "w-16 bg-primary shadow-md" 
                        : "w-8 bg-border hover:bg-primary/50 hover:w-10"
                    }`}
                    suppressHydrationWarning
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-muted-foreground tracking-wider">OF 05</span>
            </motion.div>
          </motion.div>

          {/* Hero Image Carousel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="relative px-3 sm:px-0"
            suppressHydrationWarning
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-hover aspect-square min-h-[280px] sm:min-h-[400px] lg:min-h-[550px] w-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide}
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  initial={{ opacity: 0, scale: 1.08 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Floating elements - No unmount to prevent blinking */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3 sm:top-6 right-3 sm:right-6 bg-white/95 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 sm:py-3 shadow-soft text-xs sm:text-sm"
              >
                <motion.span
                  key={`subtitle-${currentSlide}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="font-semibold text-foreground inline-block"
                >
                  ✨ {slides[currentSlide].subtitle}
                </motion.span>
              </motion.div>

              {/* Slide Title Badge - Smooth content transition without unmounting */}
              <motion.div
                className="absolute bottom-12 sm:bottom-20 left-3 sm:left-6 bg-foreground/90 backdrop-blur-md rounded-lg sm:rounded-xl px-3 sm:px-5 py-2 sm:py-3 shadow-lg text-xs sm:text-sm"
              >
                <motion.span
                  key={`title-${currentSlide}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="font-bold text-background inline-block tracking-wide"
                >
                  {slides[currentSlide].title}
                </motion.span>
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-3 sm:bottom-6 right-3 sm:right-6 flex gap-2 sm:gap-3">
              <motion.button
                onClick={prevSlide}
                whileHover={{ scale: 1.15, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-foreground hover:bg-white transition-all duration-300 shadow-soft hover:shadow-lg"
                suppressHydrationWarning
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 rotate-180" />
              </motion.button>
              <motion.button
                onClick={nextSlide}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-all duration-300 shadow-soft hover:shadow-lg"
                suppressHydrationWarning
              >
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </div>

            {/* Mobile Slide Indicators */}
            <div className="flex lg:hidden items-center justify-center gap-2 sm:gap-2.5 mt-4 sm:mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ease-out ${
                    index === currentSlide 
                      ? "w-8 sm:w-10 bg-primary shadow-md" 
                      : "w-1.5 sm:w-2 bg-border hover:bg-primary/50"
                  }`}
                  suppressHydrationWarning
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
