"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 py-2 flex items-center text-blue-500 fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-6">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <div className="font-bold py-1 px-2 text-3xl">KEN</div>
          <span className="sr-only">Kenneth Olukotun&apos;s Portfolio</span>
        </Link>
        <nav className="ml-auto flex flex-col sm:flex-row gap-8 sm:gap-6">
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:flex sm:items-center sm:ml-auto gap-6`}
          >
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4 block py-2 sm:inline-block sm:py-0"
              prefetch={false}
            >
              Home
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:underline underline-offset-4 block py-2 sm:inline-block sm:py-0"
              prefetch={false}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:underline underline-offset-4 block py-2 sm:inline-block sm:py-0"
              prefetch={false}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:underline underline-offset-4 block py-2 sm:inline-block sm:py-0"
              prefetch={false}
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
