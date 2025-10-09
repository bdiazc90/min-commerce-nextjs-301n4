import { products } from "@/products";

export async function GET(req: Request, context: { params: { id: string } }) {
  const { id } = context.params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) {
    return Response.json({ error: "Producto no encontrado" }, { status: 404 });
  }
  return Response.json(product);
}