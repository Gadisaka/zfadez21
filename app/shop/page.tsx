import Image from "next/image";
import React from "react";
import item1 from "@/public/images/klara-kulikova-0jOBJSU6tow-unsplash (1).jpg";
import item2 from "@/public/images/klara-kulikova-0jOBJSU6tow-unsplash (1).jpg";

const items = [
  {
    id: 1,
    name: "item1",
    price: 100,
    image: item1,
  },
  {
    id: 2,
    name: "item2",
    price: 200,
    image: item2,
  },
];

const Shop = () => {
  return (
    <div className="w-full min-h-fit flex flex-col bg-[#F8E1B7] text-[#543310] gap-10 lg:p-10 justify-center items-center ">
      Shop
      {items.map((item) => (
        <div
          key={item.id}
          className=" h-[300px] w-[300px] flex flex-col justify-center items-center bg-[#F8E1B7] text-[#543310] gap-10 lg:p-10 "
        >
          <Image src={item.image} alt={item.name} />
        </div>
      ))}
    </div>
  );
};

export default Shop;
