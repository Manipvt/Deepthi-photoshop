'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Clock, ExternalLink, Send, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const occasions = [
  "Anniversary Special",
  "Wedding (Shubh Vivah) Special",
  "Birthday Celebration",
  "Housewarming Gift",
  "Graduation Gift",
  "Valentine's Day Special",
  "Corporate / Bulk Order",
  "Other Occasion",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    whatsappNo: "",
    occasion: "",
    vision: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate occasion is selected
    if (!formData.occasion) {
      toast({
        title: "Please select an occasion",
        description: "Choose the occasion for your gift.",
        variant: "destructive",
      });
      return;
    }
    
    // Create WhatsApp message
    const message = `Hello! I'm ${formData.fullName}.\n\nOccasion: ${formData.occasion}\n\nMy Gift Vision:\n${formData.vision}\n\nContact: ${formData.whatsappNo}`;
    
    window.open(`https://wa.me/919951421111?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Our team will respond within 30 minutes.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      whatsappNo: "",
      occasion: "",
      vision: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative bg-navy py-20 lg:py-32 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,83,0.3),transparent_50%)]" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Gift className="w-4 h-4" />
                <span>PAN-INDIA GIFTING EXCELLENCE</span>
              </div>
              
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Shubh<br />
                <span className="text-gradient-gold italic">Gifting.</span>
              </h1>
              
              <p className="text-white/70 text-lg">
                Crafting the finest handcrafted frames and 3D miniature boxes for Bharat's most cherished occasions. 
                Reach out to our Hyderabad studio for personalized assistance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                suppressHydrationWarning
              >
                <span className="text-primary font-medium text-sm tracking-wider uppercase flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-primary" />
                  STUDIO DIRECT
                </span>
                
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-4 leading-tight">
                  The Gifting<br />
                  <span className="text-gradient-gold italic">Suite.</span>
                </h2>
                
                <p className="text-muted-foreground mt-6 text-lg">
                  Our artisans are available to help you design the perfect "Uphaar" for your loved ones.
                </p>

                {/* Contact Cards */}
                <div className="mt-10 space-y-4">
                  {/* WhatsApp Support */}
                  <motion.a
                    href="https://wa.me/919951421111"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex items-start gap-4 p-5 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors group"
                    suppressHydrationWarning
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wide">
                          WhatsApp Support
                        </span>
                        <span className="flex items-center gap-1 text-xs text-emerald-600">
                          <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                          />
                          Fast Reply
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        Gifting Expert
                      </h3>
                      <p className="text-muted-foreground text-sm">+91 9951421111</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href="mailto:hellogiftshyd@gmail.com"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="flex items-start gap-4 p-5 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors group"
                    suppressHydrationWarning
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                        Corporate & Bulk
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        Bulk Gifting Inquiries
                      </h3>
                      <p className="text-muted-foreground text-sm">hellogiftshyd@gmail.com</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.a>

                  {/* Studio Timings */}
                  <div className="flex items-start gap-4 p-5 bg-secondary/50 rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-amber-600" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-amber-600 uppercase tracking-wide">
                        Studio Timings
                      </span>
                      <h3 className="font-display text-xl font-semibold text-foreground mt-1">
                        Open All Week
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Monday — Sunday • <span className="text-foreground font-medium">10:00 AM — 08:30 PM</span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                suppressHydrationWarning
              >
                <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                  Design Your<br />
                  <span className="text-gradient-gold italic">Custom Gift.</span>
                </h3>
                
                <p className="text-muted-foreground mb-8">
                  Tell us about the memory you want to preserve, and our artisans will bring it to life.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & WhatsApp */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Your Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="h-12 bg-secondary/50 border-0 focus:ring-2 focus:ring-primary"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                        WhatsApp No.
                      </label>
                      <Input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.whatsappNo}
                        onChange={(e) => setFormData({ ...formData, whatsappNo: e.target.value })}
                        className="h-12 bg-secondary/50 border-0 focus:ring-2 focus:ring-primary"
                        pattern="[+]?[0-9]{10,15}"
                        title="Please enter a valid phone number (10-15 digits)"
                        required
                        suppressHydrationWarning
                      />
                    </div>
                  </div>

                  {/* Occasion */}
                  <div className="relative z-10">
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                      Gift Occasion
                    </label>
                    <Select
                      value={formData.occasion}
                      onValueChange={(value) => setFormData({ ...formData, occasion: value })}
                      required
                    >
                      <SelectTrigger className="h-12 bg-secondary/50 border-0 focus:ring-2 focus:ring-primary" suppressHydrationWarning>
                        <SelectValue placeholder="Select an occasion" />
                      </SelectTrigger>
                      <SelectContent className="z-50 bg-white border border-border shadow-xl">
                        {occasions.map((occasion) => (
                          <SelectItem key={occasion} value={occasion} className="cursor-pointer">
                            {occasion}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Vision */}
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 block">
                      The Gifting Vision
                    </label>
                    <Textarea
                      placeholder="Describe the customization details..."
                      value={formData.vision}
                      onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                      className="min-h-35 bg-secondary/50 border-0 focus:ring-2 focus:ring-primary resize-none"
                      required
                      suppressHydrationWarning
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" className="w-full h-14 btn-gold text-base font-semibold group" suppressHydrationWarning>
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    We typically respond within <span className="text-primary font-medium">30 minutes</span> during business hours.
                  </p>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
