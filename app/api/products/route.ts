import { products } from "@/products";

export async function GET() {
  return Response.json(products);
}

