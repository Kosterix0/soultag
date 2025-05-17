"use client";
import ProductCard from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { getProducts } from "@/lib/actions/products";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const data = await getProducts();
      if (!data.error) {
        setProducts(data);
      } else {
        setError(data.error);
        console.error("Failed to fetch products:", data.error);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (error) {
    return <p className="text-center text-lg text-red-500">Error: {error}</p>;
  }
  if (loading) {
    return <LoadingSpinner />;
  }
  return (
    <main className="max-w-7xl mx-auto p-8 ">
      <h1 className="text-3xl font-bold mb-6 self-center ">Produkty</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {products.map((product) => (
          <Link href={`/products/${product._id}`} key={product._id}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </main>
  );
}
