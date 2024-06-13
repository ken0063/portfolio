import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center text-teal-500">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <div className="font-bold py-1 px-2 text-3xl">KEN</div>
        <span className="sr-only">Kenneth Olukotun&apos;s Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          About
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Projects
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Skills
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
