'use client';

import { Star, ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  discount?: number;
  isNew?: boolean;
  onViewProduct?: () => void;
}

const ProductCard = ({
  image,
  category,
  categoryColor,
  title,
  description,
  rating,
  reviews,
  price,
  originalPrice,
  discount,
  isNew,
  onViewProduct,
}: ProductCardProps) => {
  const getCategoryClass = () => {
    switch (categoryColor) {
      case "green":
        return "bg-[#00c853] shadow-lg shadow-[#00c853]/30";
      case "orange":
        return "bg-[#ff6b35] shadow-lg shadow-[#ff6b35]/30";
      case "pink":
        return "bg-[#ff1744] shadow-lg shadow-[#ff1744]/30";
      case "blue":
        return "bg-[#0066ff] shadow-lg shadow-[#0066ff]/30";
      default:
        return "bg-[#ff6b35] shadow-lg shadow-[#ff6b35]/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="product-card group"
      suppressHydrationWarning
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted/30 rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
        />
        
        {/* Category Badge */}
        <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
          <span className={`${getCategoryClass()} text-white text-xs font-semibold px-2 sm:px-3 py-1 sm:py-1.5 rounded-full uppercase tracking-wide`}>
            {category}
          </span>
        </div>

        {/* Discount Badge */}
        {discount && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
            <span className="bg-gradient-to-r from-[#ff1744] to-[#ff5722] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#ff1744]/40 animate-bounce-slow">
              {discount}% OFF
            </span>
          </div>
        )}

        {/* New Badge */}
        {isNew && !discount && (
          <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
            <span className="bg-gradient-to-r from-[#00c853] to-[#76ff03] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-[#00c853]/40">
              +1 MORE
            </span>
          </div>
        )}

        {/* View Button Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500"
          suppressHydrationWarning
        >
          <motion.button
            onClick={onViewProduct}
            whileHover={{ scale: 1.1, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="flex items-center gap-2 bg-white text-foreground px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-primary hover:text-white transition-all duration-300 shadow-lg"
            suppressHydrationWarning
          >
            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>View</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* Rating */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-all ${
                  i < Math.floor(rating)
                    ? "text-amber-400 fill-amber-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-xs sm:text-sm font-medium text-muted-foreground">({reviews})</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-base sm:text-lg font-semibold text-foreground mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 mb-3 sm:mb-4">
          {description}
        </p>

        {/* Price & CTA */}
        <div className="flex items-end justify-between gap-2">
          <div className="flex-1">
            <span className="text-xs text-muted-foreground font-medium block mb-0.5">FROM</span>
            <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
              <span className="text-lg sm:text-2xl font-bold text-foreground">₹{price}</span>
              {originalPrice && (
                <span className="text-xs sm:text-sm text-muted-foreground line-through">₹{originalPrice}</span>
              )}
            </div>
          </div>
          <button 
            onClick={onViewProduct}
            className="flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all duration-300 group/btn text-xs sm:text-sm whitespace-nowrap"
            suppressHydrationWarning
          >
            <span>SHOP</span>
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
