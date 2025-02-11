import Link from "next/link";
import React from "react";

const Navbar = () => {
  const items = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "Services",
      href: "/services",
    },
    {
      text: "Booking",
      href: "/booking",
    },
    {
      text: "Shop",
      href: "/shop",
    },
    {
      text: "About",
      href: "/about",
    },
  ];

  return (
    <div className="top-0 fixed  w-full z-50 flex justify-center">
      <nav className="flex w-full lg:w-[80%] bg-[#543310] lg:rounded-b-3xl justify-between items-center p-4 text-[#F8F4E1]">
        <Link
          href="/"
          className="text-xl flex gap-3 justify-center items-center font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.121 14.121a3 3 0 11-4.242-4.242m4.242 4.242a3 3 0 004.242-4.242m-4.242 4.242L4.929 4.929m0 0a3 3 0 014.242-4.242m0 0a3 3 0 014.242 4.242m-4.242-4.242L19.071 19.071"
            />
          </svg>{" "}
          ZCHOPZ21
        </Link>

        <ul className=" space-x-4 hidden lg:flex">
          {items.map((item, index) => (
            <li key={index} className="hover:bg-[#AF8F6F] p-2 rounded-lg">
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
