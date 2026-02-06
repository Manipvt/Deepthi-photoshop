'use client';

import { motion, AnimatePresence } from "framer-motion";
import { 
  LogOut, 
  Package, 
  Edit3, 
  Trash2, 
  Plus,
  Search,
  Filter,
  X,
  Save,
  Upload,
  Eye,
  EyeOff
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

// Import product images (same as Products component)
import mosaicFrame from "@/assets/product-mosaic-frame.jpg";
import digitalPainting from "@/assets/product-digital-painting.jpg";
import calendar from "@/assets/product-calendar.jpg";
import acrylicFrame from "@/assets/product-acrylic-frame.jpg";
import diorama from "@/assets/product-3d-diorama.jpg";
import ledLamp from "@/assets/product-led-lamp.jpg";

interface Product {
  id: number;
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  description: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice: number;
  isNew?: boolean;
  discount?: number;
  stock: number;
  isActive: boolean;
}

const initialProducts: Product[] = [
  {
    id: 1,
    image: mosaicFrame.src,
    category: "Customized Frames",
    categoryColor: "green",
    title: "Customized Mosaic Photo Frame",
    description: "Surprise your loved ones with a personalized mosaic photo frame made with premium materials.",
    rating: 4,
    reviews: 347,
    price: 599,
    originalPrice: 899,
    isNew: true,
    stock: 45,
    isActive: true,
  },
  {
    id: 2,
    image: digitalPainting.src,
    category: "Digital Painting",
    categoryColor: "orange",
    title: "Customized Digital Oil Painting",
    description: "Turn your favorite memory into a timeless digital artwork. Our Customized Digital Oil Painting brings your cherished moments to life.",
    rating: 4.5,
    reviews: 153,
    price: 899,
    originalPrice: 1299,
    isNew: true,
    stock: 28,
    isActive: true,
  },
  {
    id: 3,
    image: calendar.src,
    category: "Calendars",
    categoryColor: "pink",
    title: "Photo Calendar - 12 Months",
    description: "Turn every month into a memory with our customized photo calendar. Perfect for home décor and thoughtful gifting.",
    rating: 5,
    reviews: 1456,
    price: 599,
    originalPrice: 899,
    discount: 33,
    stock: 120,
    isActive: true,
  },
  {
    id: 4,
    image: acrylicFrame.src,
    category: "Acrylic Frames",
    categoryColor: "blue",
    title: "Premium Customized Acrylic Frame",
    description: "Turn your memories into elegant decor with our personalized acrylic photo frames. Crystal clear and modern.",
    rating: 5,
    reviews: 89,
    price: 899,
    originalPrice: 1299,
    discount: 31,
    stock: 32,
    isActive: true,
  },
  {
    id: 5,
    image: diorama.src,
    category: "3D Diorama",
    categoryColor: "green",
    title: "Romantic 3D Diorama Box",
    description: "A magical handcrafted 3D scene with LED lights. Perfect for anniversaries and special occasions.",
    rating: 5,
    reviews: 234,
    price: 1499,
    originalPrice: 2199,
    discount: 32,
    stock: 15,
    isActive: true,
  },
  {
    id: 6,
    image: ledLamp.src,
    category: "LED Gifts",
    categoryColor: "pink",
    title: "Heart LED Photo Lamp",
    description: "Illuminate your love with our personalized heart-shaped LED lamp featuring your favorite photo.",
    rating: 4.5,
    reviews: 412,
    price: 799,
    originalPrice: 1199,
    discount: 33,
    stock: 67,
    isActive: true,
  },
];

const Dashboard = () => {
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Stats calculation
  const totalProducts = products.length;
  const activeProducts = products.filter(p => p.isActive).length;

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const handleLogout = () => {
    // Add logout logic here
    router.push('/login');
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct({ ...product });
    setIsEditModalOpen(true);
  };

  const handleDeleteProduct = (productId: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  const handleToggleActive = (productId: number) => {
    setProducts(products.map(p => 
      p.id === productId ? { ...p, isActive: !p.isActive } : p
    ));
  };

  const handleSaveProduct = () => {
    if (editingProduct) {
      setProducts(products.map(p => 
        p.id === editingProduct.id ? editingProduct : p
      ));
      setIsEditModalOpen(false);
      setEditingProduct(null);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === "All" || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-soft border-b border-border"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                Admin <span className="text-gradient-gold italic">Dashboard</span>
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Manage your products and inventory
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="btn-outline-gold"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
        >
          {[
            {
              icon: <Package className="w-6 h-6" />,
              label: "Total Products",
              value: totalProducts,
              color: "blue",
            },
            {
              icon: <Eye className="w-6 h-6" />,
              label: "Active Products",
              value: activeProducts,
              color: "green",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-hover transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-full bg-${stat.color}-100 flex items-center justify-center text-${stat.color}-600`}>
                  {stat.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white rounded-2xl p-6 shadow-soft mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search products by name or category..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl border-2 border-border focus:border-primary transition-colors duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-3">
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="pl-12 pr-8 h-12 rounded-xl border-2 border-border focus:border-primary transition-colors duration-300 bg-white appearance-none cursor-pointer min-w-[200px]"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Add Product Button */}
              <Button
                onClick={() => setIsAddModalOpen(true)}
                className="btn-gold h-12 px-6"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Product
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Products Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-white rounded-2xl shadow-soft overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product, index) => (
                  <motion.tr
                    key={product.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.4 }}
                    className="border-b border-border hover:bg-secondary/20 transition-colors duration-200"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">
                            {product.title}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {product.reviews} reviews
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-${product.categoryColor}-100 text-${product.categoryColor}-700`}>
                        {product.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-bold text-foreground">₹{product.price}</p>
                        <p className="text-sm text-muted-foreground line-through">
                          ₹{product.originalPrice}
                        </p>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`font-semibold ${product.stock < 20 ? 'text-red-600' : 'text-green-600'}`}>
                        {product.stock} units
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleActive(product.id)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${
                          product.isActive
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-red-100 text-red-700 hover:bg-red-200'
                        }`}
                      >
                        {product.isActive ? (
                          <>
                            <Eye className="w-3.5 h-3.5" />
                            Active
                          </>
                        ) : (
                          <>
                            <EyeOff className="w-3.5 h-3.5" />
                            Inactive
                          </>
                        )}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleEditProduct(product)}
                          className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors duration-200"
                        >
                          <Edit3 className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors duration-200"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-muted-foreground text-lg">No products found</p>
            </div>
          )}
        </motion.div>
      </div>

      {/* Edit Product Modal */}
      <AnimatePresence>
        {isEditModalOpen && editingProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsEditModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-white border-b border-border px-8 py-6 flex items-center justify-between rounded-t-3xl">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Edit <span className="text-gradient-gold italic">Product</span>
                </h3>
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="p-2 rounded-full hover:bg-secondary/50 transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-foreground" />
                </button>
              </div>

              <div className="p-8 space-y-6">
                {/* Product Image Preview */}
                <div className="w-full h-48 rounded-xl overflow-hidden bg-secondary/20">
                  <img
                    src={editingProduct.image}
                    alt={editingProduct.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Title */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Product Title
                    </label>
                    <Input
                      type="text"
                      value={editingProduct.title}
                      onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Price (₹)
                    </label>
                    <Input
                      type="number"
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct({ ...editingProduct, price: Number(e.target.value) })}
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* Original Price */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Original Price (₹)
                    </label>
                    <Input
                      type="number"
                      value={editingProduct.originalPrice}
                      onChange={(e) => setEditingProduct({ ...editingProduct, originalPrice: Number(e.target.value) })}
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* Stock */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Stock Quantity
                    </label>
                    <Input
                      type="number"
                      value={editingProduct.stock}
                      onChange={(e) => setEditingProduct({ ...editingProduct, stock: Number(e.target.value) })}
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* Category */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Category
                    </label>
                    <Input
                      type="text"
                      value={editingProduct.category}
                      onChange={(e) => setEditingProduct({ ...editingProduct, category: e.target.value })}
                      className="h-12 rounded-xl border-2 border-border focus:border-primary"
                    />
                  </div>

                  {/* Description */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      value={editingProduct.description}
                      onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-border focus:border-primary transition-colors duration-300 resize-none"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={handleSaveProduct}
                    className="flex-1 btn-gold h-12"
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Changes
                  </Button>
                  <Button
                    onClick={() => setIsEditModalOpen(false)}
                    variant="outline"
                    className="flex-1 btn-outline-gold h-12"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dashboard;