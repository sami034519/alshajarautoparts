import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux"; 
import { addToCart } from "../pages/store/cartSlice"; 
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../images/productlogo.png";
import oilproducts from "../products/OilProducts";

export default function TopCategoryProducts() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showToast, setShowToast] = useState(false); // ✅ toast state
  const [toastMessage, setToastMessage] = useState(""); 
  const sliderRef = useRef(null);
  const dispatch = useDispatch(); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const cardWidth = 320;
  const visibleCards = 3;
  const maxIndex = oilproducts.length - visibleCards;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // ✅ handle Add to Cart
  const handleAddToCart = (product) => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price, 
        image: product.image,
      })
    );

    // Show toast
    setToastMessage(`${product.title} added to cart! Open Cart Page to Order Through Whatsapp!`);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 6000); // hide after 2 seconds
  };

  return (
    <div className="bg-gray-200 py-16 relative">
      {/* TOAST NOTIFICATION */}
      {showToast && (
        <div className="fixed top-5 right-5 bg-green-700 text-white px-4 py-2 rounded shadow-lg animate-slide-down z-50">
          {toastMessage}
        </div>
      )}

      <div className="max-w-7xl mx-auto px-5">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="lg:text-3xl text-lg font-bold text-gray-700">
            <span className="text-green-700">Top</span> Category Products
          </h2>

          <div className="flex gap-2">
            <button
              onClick={prevSlide}
              className="slide-hover border border-green-700 text-green-700 w-10 h-10 rounded-full disabled:opacity-50"
              disabled={currentIndex === 0}
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="slide-hover border border-green-700 text-green-700 w-10 h-10 rounded-full disabled:opacity-50"
              disabled={currentIndex === maxIndex}
            >
              ❯
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
          >
            {oilproducts.map((item, index) => (
              <div
                key={index}
                className="min-w-[100px] max-w-[200px] flex-shrink-0 bg-white rounded-xl shadow p-5 text-center mx-2"
                data-aos="flip-right"
              >
                {/* IMAGE + LINK */}
                <Link to={`/product/${item.id}`} className="relative block">
                  <img
                    src={logo}
                    alt="logo"
                    className="absolute border border-green-700 z-30 top-2 left-2 h-10 w-10 bg-white object-contain rounded-full p-1 shadow-md"
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-40 cursor-pointer mx-auto object-contain transform z-10 transition-transform duration-500 ease-in-out hover:scale-125"
                  />
                </Link>

                <h3 className="mt-3 font-bold text-sm h-16">{item.title}</h3>

                <div className="flex flex-col gap-2">
                  <Link
                    to={`/product/${item.id}`}
                    className="slide-hover mt-3 border border-green-700 text-green-700 font-medium px-2 py-1 rounded-full inline-block"
                  >
                    View Product
                  </Link>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="mt-1 border  border-green-700 text-green-700 font-medium px-6 py-1 rounded-full slide-hover"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ANIMATION FOR TOAST */}
      <style>
        {`
          @keyframes slide-down {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slide-down {
            animation: slide-down 0.3s ease-out forwards;
          }
        `}
      </style>
    </div>
  );
}
