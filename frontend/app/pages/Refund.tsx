'use client';

import { motion } from "framer-motion";
import { ArrowLeft, Package, RefreshCw, Shield, Clock, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Refund = () => {
  const policies = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "7-Day Return Window",
      description: "Returns accepted within 7 days of delivery for eligible items."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Original Condition",
      description: "Items must be unused, undamaged, and in original packaging."
    },
    {
      icon: <RefreshCw className="w-6 h-6" />,
      title: "Easy Process",
      description: "Simple return process with prepaid shipping labels provided."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Guarantee",
      description: "We stand behind the quality of all our handcrafted products."
    }
  ];

  const eligibleItems = [
    "Damaged or defective products",
    "Items received in wrong specification",
    "Manufacturing defects",
    "Products significantly different from description"
  ];

  const nonEligibleItems = [
    "Customized or personalized products",
    "Items damaged due to misuse",
    "Products without original packaging",
    "Items returned after 7-day window"
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-sm"
          >
            <RefreshCw className="w-4 h-4 text-primary" />
            <span className="tracking-wide">CUSTOMER SATISFACTION FIRST</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4"
          >
            <span className="text-gradient-gold italic">Refund</span> &{" "}
            <span className="text-gradient-gold italic">Return</span> Policy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            We want you to love your purchase. If you're not completely satisfied, 
            we're here to help with our hassle-free return policy.
          </motion.p>
        </div>
      </motion.div>

      {/* Policy Cards */}
      <div className="container mx-auto px-4 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                {policy.icon}
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-2">
                {policy.title}
              </h3>
              <p className="text-muted-foreground">
                {policy.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Eligible & Non-Eligible Items */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Eligible Items */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Eligible for Return
              </h2>
            </div>
            <ul className="space-y-3">
              {eligibleItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Non-Eligible Items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-soft"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="w-6 h-6 text-red-600" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground">
                Not Eligible for Return
              </h2>
            </div>
            <ul className="space-y-3">
              {nonEligibleItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Return Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-white rounded-2xl p-8 shadow-soft mb-16"
        >
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">
            How to <span className="text-gradient-gold italic">Return</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Contact Us",
                description: "Reach out to our customer service team within 7 days of receiving your order."
              },
              {
                step: "02",
                title: "Get Approval",
                description: "Receive return authorization and prepaid shipping label via email."
              },
              {
                step: "03",
                title: "Ship & Refund",
                description: "Pack and ship the item. Refund processed within 5-7 business days of receipt."
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-gold text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-soft">
                  {step.step}
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
        >
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">
            Have Questions About Returns?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our customer service team is here to help you with any questions about 
            our return policy or to process your return request.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-gold group">
              <span>Contact Support</span>
              <ArrowLeft className="ml-2 w-5 h-5 rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button variant="outline" className="btn-outline-gold">
              Email Us
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Refund;