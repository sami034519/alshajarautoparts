import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice"; // adjust path
import allProducts from "../../products/OilProducts";

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = allProducts.find((p) => p.id.toString() === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2 className="text-center text-xl mt-20">Product Not Found</h2>;
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // ✅ ADD TO CART FUNCTION
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price || 0,
        image: product.image,
        quantity: quantity, // IMPORTANT
      })
    );
    alert(`${quantity} item(s) added to cart`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">

      {/* LEFT IMAGE */}
      <div className="border rounded-lg p-5 flex justify-center">
        <img src={product.image} alt={product.title} className="max-h-[350px] object-contain" />
      </div>

      {/* RIGHT INFO */}
      <div>
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-500 mb-2">Brand: {product.brand}</p>

        <p className="text-gray-700 mb-6">
          {product.description || "High quality original automotive product."}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3 mb-4">
          <button onClick={decreaseQuantity} className="border px-3 py-1 slide-hover">-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity} className="border px-3 py-1 slide-hover">+</button>
        </div>

        {/* ADD TO CART BUTTON */}
        <button
          onClick={handleAddToCart}
          className="text-green-700 px-6 py-3 rounded border border-green-700 slide-hover"
        >
          Add {quantity} to Cart
        </button>
      </div>
    </div>
  );
}
