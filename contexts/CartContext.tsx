'use client'

import { createContext, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '@/types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
}

// Objeto que contiene el Estado del contexto.
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Componente proveedor (debe envolver a todo el App, es decir, ser el super-padre):
export function CartProvider({ children }: { children: ReactNode }) {
  
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const value: CartContextType = {
    cart,
    addToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

