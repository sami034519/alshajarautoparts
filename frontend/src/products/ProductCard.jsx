import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../pages/store/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);

  // 🛑 Safety check: skip broken products
  if (!product || !product.id) {
    console.warn("Product missing id or invalid:", product);
    return null;
  }

  // ✅ Add to Cart handler
  const handleAddToCart = (e) => {
    e.preventDefault(); // prevent link navigation
    e.stopPropagation(); // prevent bubbling

    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price || 0,
        image: product.image,
        quantity: 1,
      })
    );

    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition cursor-pointer relative">

      {/* TOAST */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-700 text-white px-4 py-2 rounded shadow-lg z-50">
          {product.title} added to cart!
        </div>
      )}

      {/* CLICKABLE LINK AREA */}
      <Link to={`/product/${product.id}`} className="block">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-3"
        />

        <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>

        <p className="text-xs text-gray-500 mt-1">{product.brand}</p>
        <p className="text-xs text-green-700 font-semibold mt-1">
          {product.category}
        </p>
      </Link>

      {/* BUTTONS OUTSIDE LINK */}
      <div className="mt-3 flex flex-col gap-2">
        <Link
          to={`/product/${product.id}`}
          className="flex-1 border border-green-700 text-green-700 py-2 rounded text-center slide-hover"
        >
          View Product
        </Link>

        <button
          onClick={handleAddToCart}
          className="flex-1 bg-green-700 text-white py-2 rounded hover:bg-green-800 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
