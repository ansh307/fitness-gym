"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setVisible(false);
      } else {
        // scrolling up → show
        setVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full flex items-center justify-between px-20 py-4
        text-white z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      {/* left - Logo Text */}
      <div className="text-xl font-bold tracking-wide">FITNESS GYM</div>

      {/* right - Contact Button */}
      <Link
        href="/contact"
        className="px-4 py-2 border border-white/30 rounded-lg text-white
        hover:bg-white/10 hover:text-gray-200 transition"
      >
        Contact Us
      </Link>
    </nav>
  );
};

export default Navbar;
