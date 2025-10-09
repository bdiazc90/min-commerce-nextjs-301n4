"use client";
import Link from 'next/link';
import type { Product } from "@/types";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export function ProductCard(product: Product) {
  const cartContext = useContext(CartContext);
  if (cartContext === undefined) {
    throw new Error("No hay contexto");
  }

  const { addToCart } = cartContext;

  function handleAddButton(product: Product) {
    addToCart(product);
  }

  return (
    <div className="p-6 border border-slate-300 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-lg font-semibold text-slate-900 mb-2">
        {product.name}
      </h2>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="rounded-md mb-3"
      />
      {product.onSale && (
        <span className="inline-block bg-amber-500 text-white font-bold text-sm px-3 py-1 rounded-full mb-2">
          Remate!
        </span>
      )}

      {product.salePrice ? (
        <p className="text-amber-600 text-2xl font-extrabold">
          ${product.salePrice}
        </p>
      ) : (
        <p className="text-emerald-600 text-2xl font-extrabold">
          ${product.price}
        </p>
      )}
      <hr className="my-3 border-slate-200" />
      <Link
        href={`/product/${product.id}`}
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Ver detalles
      </Link>
      <button
        onClick={() => handleAddButton(product)}
        className="w-full px-6 py-3 cursor-pointer text-base font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800"
      >
        Agregar
      </button>
    </div>
  );
}
