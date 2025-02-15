"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import item1 from "@/public/images/klara-kulikova-0jOBJSU6tow-unsplash (1).jpg";
import item2 from "@/public/images/klara-kulikova-0jOBJSU6tow-unsplash (1).jpg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

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
    <div className="w-full min-h-fit flex flex-col bg-[#F8E1B7] text-[#543310] gap-10 lg:p-10 justify-center items-center ">
      Shop
      <div className="w-full max-w-4xl mx-auto p-4">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {items.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="p-4 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.description}
                </p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Shop;
