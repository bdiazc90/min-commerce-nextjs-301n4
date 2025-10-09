import React, { useContext } from 'react';
import { notFound } from 'next/navigation';
// Tipo para los parámetros de la página
type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  
  // Ejemplo de validación simple
  if (!id || isNaN(Number(id))) {
    notFound();
  }

  const response = await fetch(`http://localhost:3000/api/products/${id}` as string);
  if (!response.ok) {
    notFound();
  }
  
  //Obtener el producto seleccionado
  const product = await response.json();
  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Detalle del Producto</h1>
      <p className="mb-2">ID del producto: {id}</p>
      
      {/* Detalles del producto */}
      <div className="border p-4 rounded-md">
        <h2 className="text-xl font-semibold">Nombre del Producto #{product.name}</h2>
        <p className="text-gray-600">Descripción del producto</p>
        <p className="text-lg font-bold mt-2">
          ${product.salePrice || product.price}
        </p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}