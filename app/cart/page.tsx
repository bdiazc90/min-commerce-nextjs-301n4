'use client';

import { useCartStore } from '@/lib/store/cart-store';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { items: cart, removeItem, updateQuantity } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Carrito de Compras
          </CardTitle>
        </CardHeader>
        <CardContent>
          {cart.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Tu carrito está vacío
            </p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((cartItem) => (
                  <div key={cartItem.product.id}>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-medium">{cartItem.product.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          ${cartItem.product.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(
                              cartItem.product.id,
                              Math.max(1, cartItem.quantity - 1)
                            )
                          }
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">
                          {cartItem.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() =>
                            updateQuantity(
                              cartItem.product.id,
                              cartItem.quantity + 1
                            )
                          }
                        >
                          +
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => removeItem(cartItem.product.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Separator className="mt-4" />
                  </div>
                ))}
              </div>
              <div className="mt-6 flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold">
                  ${total.toFixed(2)}
                </span>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}