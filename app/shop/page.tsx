"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import item2 from "@/public/shop/IMG-2813.jpg";
import item1 from "@/public/shop/IMG-2814.jpg";
import OrderDialog from "@/app/components/order";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Product {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
  description?: string;
}

const items: Product[] = [
  {
    id: 1,
    name: "Professional High Torque Trimmer",
    price: 100,
    image: item1,
    description:
      "A high-performance trimmer designed for professional use, offering superior torque and precision.",
  },
  {
    id: 2,
    name: "Cleaning Accessories, Hanging Hook and Strap",
    price: 200,
    image: item2,
    description: "A set of cleaning accessories, hanging hook, and strap.",
  },
];

const Shop: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const handleOrderClick = (product: Product): void => {
    setSelectedProduct(product);
    setQuantity(1); // Reset quantity when opening dialog
    setIsDialogOpen(true);
  };

  return (
    <div
      className="w-full min-h-fit flex flex-col bg-[#fff] gap-10 lg:p-10 justify-center items-center"
      id="shop"
    >
      <h1 className="text-4xl font-bold my-6 lg:my-0 text-[#543310]">Shop</h1>
      <div className="w-full p-4 flex flex-col lg:flex-row justify-center items-center gap-4">
        {items.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-[#543310] relative shadow-lg rounded-2xl flex flex-col items-center justify-around text-center w-[300px] md:[400px] h-[400px]"
          >
            <div className="absolute bottom-0 right-0 w-full h-full rounded-2xl z-10 bg-gradient-to-t from-[#000000] opacity-60"></div>
            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover rounded-2xl mb-4 z-30"
            />
            <div className="z-20">
              <h3 className="text-lg font-semibold text-white z-30">
                {product.name}
              </h3>
              <p className="text-sm mb-4 z-30">{product.description}</p>
            </div>
            <button
              onClick={() => handleOrderClick(product)}
              className="text-[#543310] p-1 px-3 rounded-lg bg-white font-bold flex items-center gap-2 z-30"
            >
              Order
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
      {isDialogOpen && selectedProduct && (
        <OrderDialog
          product={selectedProduct}
          onClose={() => setIsDialogOpen(false)}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
    </div>
  );
};

export default Shop;
