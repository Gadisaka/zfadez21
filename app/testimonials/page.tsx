"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import user1 from "@/public/images/pexels-gustavo-fring-7447151.jpg";

import { StaticImageData } from "next/image";

interface Testimonial {
  image: StaticImageData;
  name: string;
  body: string;
}

const testimonials: Testimonial[] = [
  {
    image: user1,
    name: "John Doe",
    body: "This is an amazing service! I was thoroughly impressed with the professionalism and quality of work. The team went above and beyond to ensure my satisfaction.",
  },
  {
    image: user1,
    name: "Jane Smith",
    body: "Highly recommended! The service was exceptional, and the staff was incredibly friendly and helpful. I will definitely be using this service again in the future.",
  },
  {
    image: user1,
    name: "Alice Johnson",
    body: "I loved it! The attention to detail and the level of care provided were outstanding. I couldn't have asked for a better experience.",
  },
  {
    image: user1,
    name: "Mark Brown",
    body: "A fantastic experience! From start to finish, everything was handled with the utmost professionalism. I am extremely satisfied with the results.",
  },
  {
    image: user1,
    name: "Sophia White",
    body: "Super easy and convenient. The process was seamless, and the team was very accommodating to my needs. I highly recommend this service to anyone looking for quality and convenience.",
  },
  {
    image: user1,
    name: "David Black",
    body: "Will definitely use again! The service exceeded my expectations in every way. The quality of work was top-notch, and the customer service was excellent.",
  },
  {
    image: user1,
    name: "Emily Green",
    body: "Top-notch quality! The team delivered exceptional results, and I couldn't be happier with the outcome. I will be recommending this service to all my friends and family.",
  },
  {
    image: user1,
    name: "Michael Blue",
    body: "Exceeded my expectations! The level of professionalism and attention to detail was impressive. I am extremely satisfied with the service provided.",
  },
  {
    image: user1,
    name: "Emma Purple",
    body: "Very professional service. The team was knowledgeable, efficient, and courteous. I am very pleased with the results and will definitely be using this service again.",
  },
  {
    image: user1,
    name: "Daniel Yellow",
    body: "Affordable and high-quality. The service provided was excellent, and the pricing was very reasonable. I highly recommend this service to anyone looking for quality work at an affordable price.",
  },
  {
    image: user1,
    name: "Olivia Pink",
    body: "Simply the best! The team went above and beyond to ensure my satisfaction. The quality of work was outstanding, and the customer service was exceptional.",
  },
  {
    image: user1,
    name: "Liam Gray",
    body: "Would recommend to anyone! The service was top-notch, and the team was very professional and friendly. I am extremely satisfied with the results and will be using this service again in the future.",
  },
  {
    image: user1,
    name: "Charlotte Cyan",
    body: "Great customer support! The team was very responsive and helpful throughout the entire process. I am very pleased with the service provided and will definitely be recommending it to others.",
  },
  {
    image: user1,
    name: "James Magenta",
    body: "Worth every penny! The quality of work and level of service provided were exceptional. I am extremely satisfied with the results and will be using this service again.",
  },
  {
    image: user1,
    name: "Ava Orange",
    body: "Amazing attention to detail. The team was very thorough and meticulous in their work. I am very pleased with the results and will definitely be recommending this service to others.",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-6 text-center relative  bg-[#543310]">
      <div className="absolute bottom-0 right-0 w-full h-full rounded-2xl  z-10 bg-gradient-to-t from-[#000000] opacity-60"></div>

      {/* Google 5-Star Rating */}
      <h1 className="text-4xl font-bold my-6  z-20">Testimonials</h1>
      <p className="z-20">Yiheys</p>
      <div className="flex items-center justify-center mb-4 z-20">
        <span className="text-lg font-bold mr-2">Rated 5 Stars on Google</span>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={20} />
          ))}
        </div>
      </div>

      {/* Testimonials Slider */}
      <div className="overflow-hidden relative z-20">
        <div
          className="flex transition-transform duration-500 ease-in-out  gap-5"
          style={{ transform: `translateX(-${currentIndex * 20}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[400px] flex-shrink-0 p-4 bg-white rounded-lg shadow-lg"
            >
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-3"
                width={64}
                height={64}
              />
              <p className="text-gray-700">{testimonial.body}</p>
              <h3 className="mt-2 font-semibold text-[#543310]">
                {testimonial.name}
              </h3>
              <div className="flex justify-center mt-2 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} size={16} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2 z-20">
        {Array(testimonials.length - 2)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                i === currentIndex ? "bg-gray-900" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(i)}
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Testimonials;
