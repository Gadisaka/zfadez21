"use client";

import { motion } from "framer-motion";
import React from "react";
import icon1 from "@/public/services/barber-accessories.png";
import icon2 from "@/public/services/hair-color (1).png";
import Image from "next/image";
import img1 from "@/public/images/IMG_20250211_110208_426.jpg";
import img2 from "@/public/images/IMG_20250211_102439_921.jpg";
import img3 from "@/public/images/pexels-gustavo-fring-7447151.jpg";

const services = [
  {
    title: "Trim Your Beard",
    description:
      "Get a professional beard trim to keep your beard looking sharp and well-groomed.",
    icon: icon1,
  },
  {
    title: "Haircut",
    description: "Experience a stylish haircut tailored to your preferences.",
    icon: icon1,
  },
  {
    title: "Hair Color",
    description: "Transform your look with our expert hair coloring services.",
    icon: icon2,
  },
  {
    title: "Kids Haircut",
    description: "Fun and friendly haircuts for kids of all ages.",
    icon: icon2,
  },
  {
    title: "Haircut & Beard",
    description: "Get a complete makeover with a haircut and beard trim.",
    icon: icon2,
  },
  {
    title: "Facial",
    description: "Rejuvenate your skin with our relaxing facial treatments.",
    icon: icon2,
  },
];

const Service = () => {
  return (
    <div className="w-full min-h-fit flex flex-col bg-[#FCE7C8] text-[#543310] gap-10 lg:p-10 justify-center items-center ">
      <h1 className="text-4xl font-bold my-3 lg:my-0">Our Services</h1>
      <div className="w-full h-full flex">
        <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2">
          {services.map((service, index) => (
            <div key={index} className="w-fit gap-5 p-4 mb-4 flex  rounded-lg">
              <div className="relative lg:w-[100px] w-[70px] flex justify-center items-center  h-[70-px] lg:h-[100px] ">
                <div className="absolute border-2 bg-none border-[#543310] top-0 left-0 w-full h-full rounded-lg"></div>
                <Image
                  src={service.icon}
                  alt={service.title}
                  className=" lg:w-[100px] w-[50px] h-[50px] lg:h-[100px] "
                />
              </div>
              <div className="flec flex-col gap-3">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="lg:w-[500px] w-[250px]">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* right side */}
        <div className="w-1/2 lg:flex flex-col  items-center hidden justify-center">
          <div className="relative w-[500px] h-[350px] mx-auto">
            {/* First Image (Base) */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-36 right-0 w-[250px]  shadow-lg z-20"
            >
              <Image src={img1} alt="Base Image" className="rounded-lg" />
            </motion.div>

            {/* Second Image (Middle) */}
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute top-[-60px] left-[80px] w-[250px] shadow-lg z-10"
            >
              <Image src={img2} alt="Middle Image" className="rounded-lg" />
            </motion.div>

            {/* Third Image (Top) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="absolute -top-28 left-0 w-[250px] shadow-lg"
            >
              <Image src={img3} alt="Top Image" className="rounded-lg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
