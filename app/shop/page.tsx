"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import item1 from "@/public/images/klara-kulikova-0jOBJSU6tow-unsplash (1).jpg";
import item2 from "@/public/images/klara-kulikova-0jOBJSU6tow-unsplash (1).jpg";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = [
  {
    id: 1,
    name: "item1",
    price: 100,
    image: item1,
    description: "This is item 1",
  },
  {
    id: 2,
    name: "item2",
    price: 200,
    image: item2,
    description: "This is item 2",
  },
  {
    id: 3,
    name: "item1",
    price: 100,
    image: item1,
    description: "This is item 1",
  },
  {
    id: 4,
    name: "item2",
    price: 200,
    image: item2,
    description: "This is item 2",
  },
];

const Shop = () => {
  const [cart, setCart] = useState<Product[]>([]);

  interface Product {
    id: number;
    name: string;
    price: number;
    image: StaticImageData;
    description?: string;
  }

  const addToCart = (product: Product): void => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="w-full min-h-fit flex flex-col bg-[#fff]  gap-10 lg:p-10 justify-center items-center ">
      <h1 className="text-4xl font-bold my-6 lg:my-0 text-[#543310]">Shop</h1>
      <div className="w-full p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-4">
        {items.map((product) => (
          <div
            key={product.id}
            className="p-4 bg-[#543310] relative  shadow-lg rounded-2xl flex flex-col items-center justify-around text-center w-[300px] md:[400px] h-[400px] "
          >
            <div className="absolute bottom-0 right-0 w-full h-full rounded-2xl z-10 bg-gradient-to-t from-[#000000] opacity-60"></div>

            <Image
              src={product.image}
              alt={product.name}
              className="w-full h-[200px] object-cover rounded-2xl mb-4 z-30"
            />
            <div>
              <h3 className="text-lg font-semibold text-white z-30">
                {product.name}
              </h3>
              <p className=" text-sm mb-4 z-30">{product.description}</p>
            </div>
            <button
              onClick={() => addToCart(product)}
              className="text-[#543310] p-3 rounded-lg bg-white font-bold  z-30"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
