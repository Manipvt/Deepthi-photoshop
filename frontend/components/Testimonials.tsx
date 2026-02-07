'use client';

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    rating: 5,
    text: "Absolutely loved the personalized photo frame I ordered for my parents' anniversary. The quality is exceptional and it brought tears to their eyes!",
    product: "Mosaic Photo Frame",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Dilsukhnagar",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
    rating: 5,
    text: "The 3D diorama box I got for my girlfriend was absolutely magical. The attention to detail and craftsmanship is outstanding. Highly recommend!",
    product: "3D Diorama Box",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    location: "Secunderabad",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200",
    rating: 5,
    text: "Best gift shop in Hyderabad! The digital painting of our family photo looks like a masterpiece. Will definitely order again.",
    product: "Digital Oil Painting",
  },
  {
    id: 4,
    name: "Mohammed Irfan",
    location: "Hyderabad",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
    rating: 5,
    text: "The LED photo lamp was the perfect birthday surprise for my wife. She absolutely adores it! Great service and quick delivery.",
    product: "Heart LED Lamp",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-28 bg-gradient-to-b from-secondary/20 to-background">
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
          <span className="text-[#ff6b35] font-bold text-xs sm:text-sm tracking-widest uppercase inline-block bg-[#ff6b35]/10 px-4 py-2 rounded-full border border-[#ff6b35]/20">
            💬 Happy Customers 💬
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 sm:mt-3">
            What Our <span className="text-gradient-gold italic">Customers</span> Say
          </h2>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -60, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="testimonial-card bg-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-hover border-l-4 border-l-[#ff6b35]"
                suppressHydrationWarning
              >
              <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start">
                {/* Avatar */}
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow-soft shrink-0 ring-3 sm:ring-4 ring-[#ff6b35]"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Rating */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex gap-1 mb-3 sm:mb-4 lg:mb-5"
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-all ${
                          i < testimonials[currentIndex].rating
                            ? "text-[#ff9100] fill-[#ff9100]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-base sm:text-lg lg:text-xl text-foreground italic mb-4 sm:mb-5 lg:mb-6 leading-relaxed font-medium break-words"
                  >
                    “{testimonials[currentIndex].text}”
                  </motion.p>

                  {/* Author */}
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-border"
                  >
                    <div>
                      <h4 className="font-display font-bold text-base sm:text-lg text-foreground">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                        {testimonials[currentIndex].location}
                      </p>
                    </div>
                    <span className="text-xs sm:text-sm text-white font-semibold bg-gradient-to-r from-[#ff6b35] to-[#ff9100] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full whitespace-nowrap shadow-lg shadow-[#ff6b35]/30">
                      {testimonials[currentIndex].product}
                    </span>
                  </motion.div>
                </div>
              </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.15, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-[#ff6b35] hover:text-white transition-all duration-300 shadow-soft hover:shadow-lg hover:shadow-[#ff6b35]/40 flex-shrink-0"
              suppressHydrationWarning
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2 sm:gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-500 ${
                    index === currentIndex ? "w-8 sm:w-12 bg-[#ff6b35] shadow-md shadow-[#ff6b35]/40" : "w-2 sm:w-3 bg-border hover:bg-[#ff6b35]/50"
                  }`}
                  suppressHydrationWarning
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-white flex items-center justify-center text-foreground hover:bg-[#ff6b35] hover:text-white transition-all duration-300 shadow-soft hover:shadow-lg hover:shadow-[#ff6b35]/40 flex-shrink-0"
              suppressHydrationWarning
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
