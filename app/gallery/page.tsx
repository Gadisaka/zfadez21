"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import img1 from "@/public/gallery/IMG-2795-e1719339725454 (1).jpg";
import img2 from "@/public/gallery/IMG-2797-e1719339782480 (1).jpg";
import img3 from "@/public/gallery/IMG-2798.jpg";
import img4 from "@/public/gallery/IMG-2799.jpg";
import img5 from "@/public/gallery/IMG-2803-1-1.jpg";
import img6 from "@/public/gallery/IMG-2804.jpg";
import img7 from "@/public/images/IMG_20250211_102439_921.jpg";

const images = [img1, img2, img3, img4, img6, img7, img5, img2, img4];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide =
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center justify-center relative bg-[#fcf9f5]  py-5"
      id="gallery"
    >
      <h1 className="text-4xl font-bold my-6 text-[#543310]">Gallery</h1>
      <div className="w-full  flex gap-4 overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${(currentIndex * 100) / imagesPerSlide}%)`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-1/4 px-2">
              <Image
                src={image}
                alt="Gallery Slide"
                className="w-full h-[300px] object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-4 space-x-2">
        {Array.from({ length: Math.ceil(images.length / 4) }).map(
          (_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === Math.floor(currentIndex / 4)
                  ? "bg-white scale-125"
                  : "bg-gray-500"
              }`}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default Gallery;
