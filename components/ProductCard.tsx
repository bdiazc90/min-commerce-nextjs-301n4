"use client";
import Link from 'next/link';
import type { Product } from "@/types";
// import { useContext } from "react";
// import { CartContext } from "@/contexts/CartContext";

import { useCartStore } from '@/lib/store/cart-store';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Badge } from './ui/badge';
import { cn } from '@/lib/utils';

export function ProductCard(product: Product) {
  // const cartContext = useContext(CartContext);
  // if (cartContext === undefined) {
  //   throw new Error("No hay contexto");
  // }

  // const { addToCart } = cartContext;

  const { addItem: addToCart } = useCartStore();

  function handleAddButton(product: Product) {
    addToCart(product);
  }

  return (

    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>
          {product.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="rounded-md mb-3"
        />

        <div className="flex justify-between">
          {product.onSale ? (
            <Badge variant="destructive">Remate</Badge>
          ) : (
            <Badge>Lanzamiento</Badge>
          )}

          {product.salePrice && (
            <p className="text-destructive text-xl font-extrabold">
              ${product.salePrice}
            </p>
          )}


          <p className={cn(
            "text-xl font-extrabold",
            (product.onSale) ? "text-gray-400 line-through" : "text-emerald-600 ml-auto"
          )}>
            ${product.price}
          </p>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between gap-2'>
        <Link
          href={`/product/${product.id}`}
        >
          <Button variant="outline">Ver detalles</Button>
        </Link>
        <Button onClick={() => handleAddButton(product)} className='flex-1'>
          Agregar
        </Button>

      </CardFooter>
    </Card>

  );
}
