'use client';

import { useState, useEffect } from "react";
import { Search, ShoppingCart, Gift, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { cartStore } from "@/lib/cartStore";
import CartDrawer from "@/components/CartDrawer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    const unsubscribe = cartStore.subscribe(() => {
      setCartCount(cartStore.getItemCount());
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      unsubscribe();
    };
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/#products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return pathname === "/";
    return pathname === href;
  };

  return (
    <>
      {/* Promo Banner */}
      <div className="bg-navy text-white py-3 px-4 text-center text-sm font-medium">
        <span className="text-accent">❤️</span>
        <span className="ml-2 tracking-wide">
          VALENTINE'S DAY SPECIAL: FREE PERSONALIZATION ON ALL 3D MINIATURES - USE CODE: 
          <span className="font-bold text-primary ml-1 tracking-wider">HELLOHYD2026</span>
        </span>
      </div>

      {/* Main Navbar */}
      <header
        suppressHydrationWarning
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-lg shadow-soft"
            : "bg-white"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <img 
                src="/assests/logo-d.png" 
                alt="Deepthi Gifts Logo" 
                className="h-12 w-auto object-contain"
              />
              <span className="font-display text-2xl font-bold text-foreground hidden sm:block">
                Deepthi <span className="italic">gifts</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`font-medium transition-colors link-underline ${
                    isActive(item.href)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-xs">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search masterpieces..."
                  className="pl-10 pr-4 py-2 rounded-full border-border bg-secondary/30 focus:bg-white transition-all duration-300 focus:shadow-soft"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <Link href="/#products">
                <Button className="btn-gold hidden sm:flex items-center gap-2 px-4 py-2 h-auto" suppressHydrationWarning>
                  <Gift className="w-4 h-4" />
                  <span>SHOP</span>
                </Button>
              </Link>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-foreground hover:text-primary transition-colors"
                suppressHydrationWarning
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-white text-xs rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              {mounted && (
                <button
                  className="lg:hidden p-2 text-foreground"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mounted && (
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="lg:hidden bg-white border-t border-border overflow-hidden"
              >
                <div className="container mx-auto px-4 py-4">
                  <div className="flex flex-col gap-4">
                    {/* Mobile Search */}
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Search masterpieces..."
                        className="pl-10 pr-4 py-2 rounded-full"
                      />
                    </div>
                    {/* Mobile Nav Items */}
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`py-2 font-medium ${
                          isActive(item.href) ? "text-primary" : "text-muted-foreground"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </header>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
