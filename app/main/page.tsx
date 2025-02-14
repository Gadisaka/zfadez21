"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "@/public/images/pexels-jibarofoto-1453005.jpg";
import img2 from "@/public/images/pexels-rdne-76976734.jpg";
import img3 from "@/public/images/pexels-ej-agumbay-698816-8552626.jpg";
import barber from "@/public/barber.png";
import { BookingButton } from "@/app/components/cal";
import pattern from "@/public/images/pattern.png";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  interface Slide {
    image: StaticImageData;
    text: string;
    description: string;
  }

  const slides: Slide[] = [
    {
      image: img1,
      text: "Experience breathtaking landscapes and vibrant cultures.",
      description:
        "Explore stunning landscapes and immerse yourself in diverse cultures. From mountains to beaches, every moment is a feast for the senses.",
    },
    {
      image: img2,
      text: "Discover hidden gems and immerse yourself in new adventures.",
      description:
        "Uncover secrets of lesser-known destinations and embark on thrilling adventures. Hike through forests or explore ancient ruins.",
    },
    {
      image: img3,
      text: "Unforgettable moments await—book your journey today.",
      description:
        "Create lasting memories with unique experiences. Connect with different cultures and start your adventure now.",
    },
  ];

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  const goToPrevious = (): void => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNext = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full lg:h-screen h-[500px] bg-[#543310] flex justify-center items-center overflow-hidden ">
      <Image
        src={pattern}
        alt="pattern"
        className="absolute top-0 right-0 w-full block lg:hidden opacity-50 h-full object-cover transition-opacity duration-2000"
      />
      <div className="absolute top-0 right-0 w-full h-full z-20 bg-gradient-to-l from-[#000000] opacity-60"></div>
      <h1 className="text-5xl font-bold block lg:hidden absolute top-20 z-30 ">
        ZFADEZ21
      </h1>
      <div className="absolute bottom-10 flex lg:hidden flex-col z-30 justify-center items-center">
        <p className="text-2xl font-semibold text-center">
          Choose your preferred date and time to book your appointment today!
        </p>
        {BookingButton()}
      </div>
      <Image
        src={barber}
        alt="barber"
        className="absolute left-0 bottom-0 scale-x-[-1] object-cover transition-opacity duration-2000"
      />
      <div className="absolute bottom-10 lg:right-10 mb-24 lg:mb-0 text-center hidden lg:flex flex-col justify-center items-center lg:justify-end lg:items-end lg:text-right z-30 w-full p-5 lg:w-1/2 lg:mr-10">
        <p className="text-2xl md:text-2xl font-semibold lg:text-6xl">
          {slides[currentIndex].text}
        </p>
        <p className="text-sm md:text-base lg:text-2xl mt-2 text-[#F8F4E1] w-3/4 lg:w-full bg-opacity-50 lg:bg-none ">
          {slides[currentIndex].description}
        </p>

        {BookingButton()}
      </div>
      {/* Navigation Buttons */}
      <button
        title="Previous Slide"
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 lg:block  hidden bg-black bg-opacity-50 z-40  p-2 rounded-full hover:bg-opacity-75 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        title="Next Slide"
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 lg:block  hidden bg-black bg-opacity-50 z-40  p-2 rounded-full hover:bg-opacity-75 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            title={`Go to slide ${index + 1}`}
            className={`lg:w-3 w-2 h-2 lg:h-3 rounded-full transition-colors duration-300 ${
              currentIndex === index ? "bg-[#543310]" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
