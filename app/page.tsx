import React from "react";
import Home from "./main/page";
import Service from "./services/page";
import About from "./about/page";

const Page = () => {
  return (
    <div className="text-[#F8F4E1]">
      <Home />
      <About />
      <Service />
    </div>
  );
};

export default Page;
