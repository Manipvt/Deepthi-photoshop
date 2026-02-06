'use client';

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "919951421111";
  const message = "Hi! I'm interested in your customized gifts. Can you help me?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: 1.2, 
        type: "spring", 
        stiffness: 200,
        damping: 15 
      }}
      whileHover={{ scale: 1.15, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white" />
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" style={{ animationDelay: '0.5s' }} />
    </motion.a>
  );
};

export default WhatsAppButton;
