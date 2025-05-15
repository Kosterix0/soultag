export default function ProductCard({ product }) {
  return (
    <div className="border-1 border-[#d3c3b8] rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition p-4 flex flex-col cursor-pointer">
      <img
        src={`products/${product.imageUrl}`}
        alt={product.name}
        className="w-full h-48 object-fill mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700 mt-auto">${product.price.toFixed(2)}</p>
    </div>
  );
}
