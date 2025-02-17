"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const items = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Services", href: "#services" },
    { text: "Shop", href: "#shop" },
    { text: "Gallery", href: "#gallery" },
  ];

  return (
    <div className="top-0  fixed w-full z-50 flex justify-center">
      <nav className="flex w-full lg:w-[80%] bg-[#543310] lg:rounded-b-3xl justify-between items-center p-4 text-[#F8F4E1]">
        <Link
          href="/"
          className="text-xl md:text-3xl flex gap-3 justify-center items-center font-bold"
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
          </svg>
          Zfadez21
        </Link>

        {/* Desktop Menu */}
        <ul className="space-x-4 hidden lg:flex">
          {items.map((item, index) => (
            <li key={index} className="hover:bg-[#AF8F6F] p-2 rounded-lg">
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
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
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <ul className="absolute top-16 right-4 w-48 bg-opacity-50 backdrop-blur-md border  text-center bg-[#543310] border-[#AF8F6F] rounded-lg shadow-lg flex flex-col lg:hidden">
            {items.map((item, index) => (
              <li key={index} className="p-3">
                <Link href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
