'use client'

import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function CartPage() {
    const cartContext = useContext(CartContext);
    if (cartContext === undefined) {
        throw new Error("No hay contexto");
    }

    const { cart } = cartContext;

    return (
        <div className="w-full max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
                
                <h2 className="text-3xl text-slate-700 mb-4">Carrito</h2>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
                {cart.length === 0 ? (
                    <p className="text-slate-500 text-center py-8">Tu carrito está vacío</p>
                ) : (
                    <ul className="divide-y divide-slate-200">
                        {cart.map((cartItem, index) => (
                            <li key={index} className="py-4 flex justify-between items-center">
                                <span className="text-lg font-medium text-slate-900">{cartItem.product.name}</span>
                                <span className="text-slate-600">x {cartItem.quantity}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}