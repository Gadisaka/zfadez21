import React from "react";
import Booking from "../components/cal";

const BookingPage = () => {
  return (
    <div className="w-full h-full bg-[#F8F4E1] flex flex-col justify-center text-[#543310] items-center gap-10 lg:p-10">
      <h1 className="text-4xl font-bold my-3 lg:my-0">Book an Appointment</h1>
      <Booking />
    </div>
  );
};

export default BookingPage;
