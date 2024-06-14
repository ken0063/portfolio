"use client";
import React from "react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Landing = () => {
  return (
    <section
      id="home"
      className="w-full py-12 md:py-24 lg:py-32 md:min-h-[100dvh] md:flex md:flex-col md:justify-center md:items-center"
    >
      <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-blue-500">
            Kenneth Olukotun
          </h1>
          <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-400">
            Frontend Engineer
          </h2>
          <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            I&apos;m a passionate frontend engineer with a strong focus on
            building high-performance, user-friendly web applications. I
            specialize in modern JavaScript frameworks and libraries, and
            I&apos;m always eager to learn new technologies and techniques.
          </p>
        </div>
        <div className="flex flex-col items-start space-y-4">
          <Link
            href="#projects"
            className={buttonVariants({ size: "lg" })}
            prefetch={false}
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className={buttonVariants({
              size: "lg",
              className: "px-9 text-blue-500",
              variant: "outline",
            })}
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
