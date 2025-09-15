"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        setVisible(false); // hide on scroll down
      } else {
        setVisible(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between px-8 md:px-20 py-4
        bg-neutral-950/70 backdrop-blur-lg border-b border-white/10
        text-white z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* 🔥 Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        <span className="text-orange-500">FITNESS</span> GYM
      </div>

      {/* 📌 Navigation Links */}
      {/* <div className="hidden md:flex gap-8 font-medium text-neutral-300">
        <Link
          href="/"
          className="hover:text-orange-500 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          href="/programs"
          className="hover:text-orange-500 transition-colors duration-200"
        >
          Programs
        </Link>
        <Link
          href="/about"
          className="hover:text-orange-500 transition-colors duration-200"
        >
          About
        </Link>
      </div> */}

      {/* 🎯 Contact Button */}
      <Link
        href="/contact"
        className="px-5 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-lg
        hover:bg-orange-600 transition"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
