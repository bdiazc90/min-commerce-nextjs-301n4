import { ProductCard } from "@/components/ProductCard"
import { products } from "@/products";
export function ProductList() {
    return (
        <div className="flex flex-wrap gap-4 p-6">
            {products.map(product => <ProductCard {...product} key={product.id} />)}
        </div>
    )
}