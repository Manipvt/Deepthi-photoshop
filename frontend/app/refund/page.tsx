'use client';

import Refund from '../pages/Refund';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function RefundPage() {
  return (
    <>
      <Navbar />
      <Refund />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
