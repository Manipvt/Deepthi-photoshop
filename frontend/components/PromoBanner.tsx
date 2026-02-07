'use client';

import { Copy, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const PromoBanner = () => {
  const [copied, setCopied] = useState(false);
  const couponCode = "HELLOHYD2026";

  const handleCopy = () => {
    navigator.clipboard.writeText(couponCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container px-3 sm:px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="bg-gradient-to-r from-[#ff1744] via-[#ff6b35] to-[#ff9100] rounded-2xl sm:rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-hover"
          suppressHydrationWarning
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-4 sm:mb-6">
                Valentine's Day
                <br />
                <span className="text-gradient-gold italic">Masterpiece Offer.</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-100 mt-2 sm:mt-4 leading-relaxed">
                Gift an emotion this February. Enjoy a special flat 10% discount and 
                free personalization on all handcrafted treasures.
              </p>
            </motion.div>

            {/* Coupon Card */}
            <div className="flex flex-col items-center lg:items-end gap-4 sm:gap-5">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-7 shadow-hover w-full sm:w-auto min-w-[280px] sm:min-w-[300px]"
                suppressHydrationWarning
              >
                {/* Coupon Code */}
                <div className="flex items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="text-accent text-xl sm:text-2xl">🎁</span>
                    <span className="font-bold text-base sm:text-lg lg:text-xl text-foreground tracking-wider break-all">
                      {couponCode}
                    </span>
                  </div>
                  <motion.button
                    onClick={handleCopy}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary transition-all duration-300 flex-shrink-0"
                    suppressHydrationWarning
                  >
                    <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.button>
                </div>

                {/* Valid on WhatsApp */}
                <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-muted-foreground">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                  <span className="break-words">{copied ? "✓ Copied!" : "VALID ON WHATSAPP"}</span>
                </div>
              </motion.div>

              {/* Social Proof */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-end gap-3 sm:gap-4"
              >
                <div className="avatar-stack">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
                    alt="Customer"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100"
                    alt="Customer"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100"
                    alt="Customer"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover border-2 border-white"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-white text-base sm:text-lg">450+</span>
                  <span className="text-primary text-xs font-semibold tracking-wide">CLAIMED TODAY</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;
