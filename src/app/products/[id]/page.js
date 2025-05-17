import { notFound } from "next/navigation";
import { getProduct } from "@/lib/actions/products";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Link from "next/link";

export default async function ProductPage({ params }) {
  const { id } = params;
  const product = await getProduct(id);
  if (product.error) notFound();

  return (
    <div className="bg-[#d4bfb0] min-h-screen py-8 px-4">
      <nav className="max-w-5xl mx-auto mb-6 text-sm text-[#3f2a1d]">
        <ul className="flex flex-wrap gap-x-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <Link href="/products" className="hover:underline">
              Back
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li>
            <a
              href={`/category/${product.category}`}
              className="hover:underline"
            >
              {product.category}
            </a>
          </li>
        </ul>
      </nav>

      {/* Główna sekcja */}
      <div className="max-w-full  mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-1 md:grid-cols-[2fr_1fr]">
        {/* LEWA KOLUMNA – GALERIA OBRAZKÓW */}
        <div className="bg-[#f5f2ef] flex items-center justify-center p-6">
          <Image
            src={`/products${product.imageUrl}`}
            alt={product.name}
            width={500}
            height={500}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-sm text-gray-500 uppercase mb-1">
              {product.brand || "Soultag"}
            </p>
            <h1 className="text-3xl font-bold text-[#714329] mb-3">
              {product.name}
            </h1>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`mr-1 ${
                    i < product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({product.reviewsCount || 0})
              </span>
            </div>

            <p className="text-gray-700 mb-6">{product.description}</p>
          </div>

          <div>
            <p className="text-2xl font-bold text-[#714329] mb-4">
              {product.price.toFixed(2)} $
            </p>
            <div className="flex items-center gap-4 mb-6">
              <label htmlFor="qty" className="text-gray-700">
                Quantity:
              </label>
              <input
                id="qty"
                type="number"
                defaultValue={1}
                min={1}
                className="w-16 px-2 py-1 border rounded-md text-center"
              />
            </div>
            <button className="w-full py-3 bg-[#714329] text-white font-semibold rounded-lg hover:bg-[#D0B9A7] transition cursor-pointer">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
