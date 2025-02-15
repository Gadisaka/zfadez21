import React from "react";
import Home from "./main/page";
import Service from "./services/page";
import About from "./about/page";
// import BookingPage from "./booking/page";
import Shop from "./shop/page";
import Footer from "./footer/page";
import Gallery from "./gallery/page";

const Page = () => {
  return (
    <div className="text-[#F8F4E1]">
      <Home />
      <About />
      <Service />
      {/* <BookingPage /> */}
      <Shop />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Page;
