'use client';

import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const AdminButton = () => {
  return (
    <Link href="/admin">
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-linear-to-br from-primary to-accent shadow-lg hover:shadow-xl flex items-center justify-center text-white group"
        title="Admin Login"
      >
        <ShieldCheck className="w-6 h-6 group-hover:rotate-12 transition-transform" />
      </motion.button>
    </Link>
  );
};

export default AdminButton;
