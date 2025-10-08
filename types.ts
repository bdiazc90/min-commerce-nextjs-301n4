export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  onSale?: boolean; // opcional
  salePrice?: number; // opcional
}

export interface CartItem {
  product: Product;
  quantity: number;
}
