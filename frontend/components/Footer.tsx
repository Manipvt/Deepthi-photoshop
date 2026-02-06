'use client';

import { Gift, MapPin, Phone, Mail, Send, Instagram, Facebook, Twitter, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-footer text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            suppressHydrationWarning
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="/assests/logo-d.png" 
                alt="Deepthi Gifts Logo" 
                className="h-12 w-auto object-contain brightness-0 invert"
              />
              <span className="font-display text-2xl font-bold">
                Deepthi <span className="italic">gifts</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Curating emotions through handcrafted masterpieces. From personalized frames to 
              detailed 3D diorama boxes, we preserve your most cherished moments forever.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: MessageCircle, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 10, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-white transition-all duration-300 shadow-soft hover:shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Explore Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
            suppressHydrationWarning
          >            <h4 className="font-bold text-sm tracking-wider uppercase mb-6">Explore</h4>
            <ul className="space-y-3">
              {[
                { label: "Browse All Gifts", href: "/#products" },
                { label: "Customer Gallery", href: "/gallery" },
                { label: "Contact Us", href: "/contact" },
                { label: "Returns & Refunds", href: "/refund" },
                { label: "Admin", href: "/admin" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      className="text-gray-400 hover:text-primary transition-colors text-sm inline-block cursor-pointer"
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Reach Us Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            suppressHydrationWarning
          >
            <h4 className="font-bold text-sm tracking-wider uppercase mb-6">Reach Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Shop No 3, SJI Complex,
                  <br />
                  Dilsukhnagar, Hyderabad, 500060
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <motion.a
                  href="tel:+919951421111"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-gray-400 hover:text-white text-sm inline-block"
                >
                  +91 9951421111
                </motion.a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <motion.a
                  href="mailto:hellogiftshyd@gmail.com"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  className="text-gray-400 hover:text-white text-sm inline-block"
                >
                  hellogiftshyd@gmail.com
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            suppressHydrationWarning
          >
            <h4 className="font-bold text-sm tracking-wider uppercase mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to get special offers and first look at new designs.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 rounded-full flex-1 transition-all duration-300 focus:bg-white/20 focus:border-primary"
                suppressHydrationWarning
              />
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="btn-gold rounded-full px-5" suppressHydrationWarning>
                  <Send className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Hello Gifts. All rights reserved. Made with ❤️ in Hyderabad.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
