import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, decreaseQuantity, addToCart, clearCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems, totalPrice, totalQuantity } = useSelector(state => state.cart);

  const [showForm, setShowForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    address: "",
    contact: "",
  });

  if (cartItems.length === 0) {
    return <p className="text-center mt-10">Your cart is empty</p>;
  }

  // WhatsApp message generator
  const generateWhatsAppMessage = () => {
    let message = `*New Order*\n\n`;
    message += `*Customer Name:* ${customerInfo.name}\n`;
    message += `*Contact:* ${customerInfo.contact}\n`;
    message += `*Address:* ${customerInfo.address}\n\n`;
    message += `*Order Details:*\n`;
    cartItems.forEach(item => {
      message += `- ${item.title} x ${item.quantity} ($${item.price})\n`;
    });
    message += `\n*Total:* $${totalPrice.toFixed(2)}`;
    return encodeURIComponent(message);
  };

  const handleOrderNow = () => {
    if (!customerInfo.name || !customerInfo.contact || !customerInfo.address) {
      alert("Please fill all the fields.");
      return;
    }
    const whatsappUrl = `https://wa.me/923209465969?text=${generateWhatsAppMessage()}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between mb-4 border-b pb-2">
          <img src={item.image} alt={item.title} className="w-24 h-24 object-contain"/>
          <div className="flex-1 ml-4">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex items-center mt-2">
              <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 py-1 bg-gray-300 rounded">-</button>
              <span className="mx-2">{item.quantity}</span>
              <button onClick={() => dispatch(addToCart(item))} className="px-2 py-1 bg-gray-300 rounded">+</button>
            </div>
          </div>
          <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 font-bold">Remove</button>
        </div>
      ))}

      <div className="text-right mt-4">
        <p className="text-lg font-bold">Total ({totalQuantity} items): ${totalPrice.toFixed(2)}</p>
        <div className="flex justify-end gap-2 mt-2">
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Clear Cart
          </button>

          <button
            onClick={() => setShowForm(true)}
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Order Form Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 text-xl"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
            <h3 className="text-xl font-bold mb-4">Complete Your Order</h3>

            <div className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Full Name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Address"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                className="border px-3 py-2 rounded w-full"
              />
              <input
                type="text"
                placeholder="Contact Number"
                value={customerInfo.contact}
                onChange={(e) => setCustomerInfo({...customerInfo, contact: e.target.value})}
                className="border px-3 py-2 rounded w-full"
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleOrderNow}
                className="bg-green-700 px-4 py-2 rounded text-white hover:bg-green-800"
              >
                Send Order via WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
