import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: 'Zapatillas Urbanas',
    price: 179.99,
    imageUrl: 'https://placehold.co/300',
    category: 'Calzado',
    onSale: true,
    salePrice: 129.99,
  },
  {
    id: 2,
    name: 'Casaca Unisex',
    price: 136.99,
    imageUrl: 'https://placehold.co/300',
    category: 'Ropa',
    onSale: false
  },
  {
    id: 3,
    name: 'Medias Unisex',
    price: 19.99,
    imageUrl: 'https://placehold.co/300',
    category: 'Ropa',
    onSale: false
  },
  // ...otros productos
];