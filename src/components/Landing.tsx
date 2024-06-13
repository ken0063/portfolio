import Link from "next/link";
import React from "react";

const Landing = () => {
  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-teal-500">
            Kenneth Olukotun
          </h1>
          <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400">
            Frontend Engineer
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I'm a passionate frontend engineer with a strong focus on building
            high-performance, user-friendly web applications. I specialize in
            modern JavaScript frameworks and libraries, and I'm always eager to
            learn new technologies and techniques.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            View Projects
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Landing;
