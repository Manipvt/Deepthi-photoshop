'use client';

type CartItem = {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  quantity: number;
};

class CartStore {
  private listeners: Set<() => void> = new Set();
  private cart: CartItem[] = [];

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  getCart() {
    return [...this.cart];
  }

  getItemCount() {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  addItem(item: Omit<CartItem, 'quantity'>) {
    const existingItem = this.cart.find(i => i.id === item.id);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    
    this.notifyListeners();
  }

  removeItem(id: string) {
    this.cart = this.cart.filter(item => item.id !== id);
    this.notifyListeners();
  }

  updateQuantity(id: string, quantity: number) {
    const item = this.cart.find(i => i.id === id);
    if (item) {
      item.quantity = Math.max(0, quantity);
      if (item.quantity === 0) {
        this.removeItem(id);
      }
    }
    this.notifyListeners();
  }

  clearCart() {
    this.cart = [];
    this.notifyListeners();
  }

  getTotalPrice() {
    return this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  private notifyListeners() {
    this.listeners.forEach(listener => listener());
  }
}

export const cartStore = new CartStore();
