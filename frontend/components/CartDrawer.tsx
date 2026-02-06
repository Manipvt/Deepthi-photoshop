'use client';

import { useState, useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingCart, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cartStore } from "@/lib/cartStore";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const [cart, setCart] = useState(cartStore.getCart());

  useEffect(() => {
    const unsubscribe = cartStore.subscribe(() => {
      setCart(cartStore.getCart());
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleCheckout = () => {
    const items = cart.map(item => 
      `${item.title} x${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');
    
    const total = cartStore.getTotalPrice();
    const message = `Hi! I want to order the following items:\n\n${items}\n\n*Total: ₹${total}*\n\nPlease confirm availability and delivery details.`;
    
    window.open(`https://wa.me/919951421111?text=${encodeURIComponent(message)}`, '_blank');
    cartStore.clearCart();
    onClose();
  };

  const totalPrice = cartStore.getTotalPrice();
  const itemCount = cartStore.getItemCount();

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

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-6 h-6 text-primary" />
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Your Cart
                </h2>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-secondary/80 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-auto p-6">
              {cart.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground text-lg">Your cart is empty</p>
                  <p className="text-sm text-muted-foreground mt-2">Add some products to get started!</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="flex gap-4 bg-secondary/30 rounded-xl p-4"
                    >
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* Product Details */}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1 line-clamp-2 text-sm">
                          {item.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg font-bold text-foreground">₹{item.price}</span>
                          {item.originalPrice && (
                            <span className="text-xs text-muted-foreground line-through">
                              ₹{item.originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2 bg-white rounded-lg p-1">
                            <button
                              onClick={() => cartStore.updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-md bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center font-semibold text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => cartStore.updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-md bg-secondary hover:bg-secondary/80 flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <button
                            onClick={() => cartStore.removeItem(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                {/* Total */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">Total</p>
                    <p className="text-sm text-muted-foreground">{itemCount} item{itemCount !== 1 ? 's' : ''}</p>
                  </div>
                  <p className="text-3xl font-bold text-foreground">₹{totalPrice}</p>
                </div>

                {/* Checkout Button */}
                <Button
                  onClick={handleCheckout}
                  className="w-full btn-gold h-14 text-base group"
                  suppressHydrationWarning
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Checkout via WhatsApp
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  You'll be redirected to WhatsApp to complete your order
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
