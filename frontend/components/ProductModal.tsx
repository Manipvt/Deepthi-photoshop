'use client';

import { X, Star, Heart, Share2, ShoppingCart, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/lib/cartStore";
import { useToast } from "@/hooks/use-toast";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
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
  } | null;
}

const ProductModal = ({ isOpen, onClose, product }: ProductModalProps) => {
  const { toast } = useToast();
  
  if (!product) return null;

  const getCategoryClass = () => {
    switch (product.categoryColor) {
      case "green":
        return "bg-emerald-500";
      case "orange":
        return "bg-primary";
      case "pink":
        return "bg-accent";
      case "blue":
        return "bg-blue-500";
      default:
        return "bg-primary";
    }
  };

  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering: ${product.title} (₹${product.price}). Can you please provide more details?`;
    window.open(`https://wa.me/919951421111?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleAddToCart = () => {
    cartStore.addItem({
      id: product.title,
      title: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    });
    
    toast({
      title: "Added to cart!",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-4xl md:w-full bg-background rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="grid md:grid-cols-2 h-full max-h-[90vh] overflow-auto">
              {/* Image Section */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryClass()} text-white text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wide`}>
                    {product.category}
                  </span>
                </div>

                {/* Discount Badge */}
                {product.discount && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-white text-sm font-bold px-3 py-1.5 rounded-full">
                      {product.discount}% OFF
                    </span>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white hover:text-accent transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-8 flex flex-col">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Title */}
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {product.title}
                </h2>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Premium quality materials
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Handcrafted with care
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Free personalization included
                    </li>
                    <li className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Gift-ready packaging
                    </li>
                  </ul>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-xs text-muted-foreground block mb-1">STARTING FROM</span>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-foreground">₹{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                    )}
                    {product.discount && (
                      <span className="text-sm font-semibold text-success">Save ₹{product.originalPrice! - product.price}</span>
                    )}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="mt-auto space-y-3">
                  <Button 
                    onClick={handleWhatsAppOrder}
                    className="w-full btn-gold group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>Order via WhatsApp</span>
                  </Button>
                  <Button 
                    onClick={handleAddToCart}
                    variant="outline" 
                    className="w-full btn-outline-gold"
                    suppressHydrationWarning
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    <span>Add to Cart</span>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
