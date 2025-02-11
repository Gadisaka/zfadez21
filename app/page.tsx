import React from "react";
import Home from "./main/page";
import Service from "./services/page";
import About from "./about/page";
// import BookingPage from "./booking/page";
import Shop from "./shop/page";

const Page = () => {
  return (
    <div className="text-[#F8F4E1]">
      <Home />
      <About />
      <Service />
      {/* <BookingPage /> */}
      <Shop />
    </div>
  );
};

export default Page;
