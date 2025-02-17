"use client";

import React, { useState } from "react";

interface OrderDialogProps {
  product: { id: number; name: string; price: number };
  onClose: () => void;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

const OrderDialog: React.FC<OrderDialogProps> = ({
  product,
  onClose,
  quantity,
  setQuantity,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!product) return null;

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Function to format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value: string) => {
    let cleaned = value.replace(/\D/g, ""); // Remove all non-numeric characters
    if (cleaned.length > 10) cleaned = cleaned.slice(0, 10); // Limit to 10 digits
    if (cleaned.length > 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
        6
      )}`;
    } else if (cleaned.length > 3) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else if (cleaned.length > 0) {
      return `(${cleaned}`;
    }
    return cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      product: product.name,
      quantity,
      totalPrice: product.price * quantity,
    };

    setIsLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        onClose();
      } else {
        alert("Error placing order.");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center text-[#543310] bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Order {product.name}</h2>
        <p className="mb-4">Price: ${product.price * quantity}</p>

        <div className="flex items-center gap-4 mb-4">
          <button
            onClick={handleDecrease}
            className="bg-gray-200 px-3 py-1 rounded font-bold"
          >
            -
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            onClick={handleIncrease}
            className="bg-gray-200 px-3 py-1 rounded font-bold"
          >
            +
          </button>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number (e.g., (123) 456-7890)"
            className="border p-2 rounded"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={14}
            required
          />
          <button
            type="submit"
            className="bg-[#543310] text-white p-2 rounded"
            disabled={isLoading}
          >
            {isLoading ? "Placing Order..." : "Place Order"}
          </button>
        </form>

        <button onClick={onClose} className="mt-4 text-red-500">
          Close
        </button>
      </div>
    </div>
  );
};

export default OrderDialog;
