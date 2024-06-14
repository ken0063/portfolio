"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
              Featured Projects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-500">
              Check out my work
            </h2>
            <p className="max-w-full text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;ve had the opportunity to work on a variety of exciting
              projects, and I&apos;m proud to showcase some of my best work.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src="data:image/jpeg;base64,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"
                    width="400"
                    height="310"
                    alt="Project image"
                    className="mx-auto aspect-video overflow-hidden object-cover object-center"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-blue-500">
                      Project 1
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A modern web application built with React, Next.js, and
                      Tailwind CSS.
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className={buttonVariants()}
                        prefetch={false}
                      >
                        Live Demo
                      </Link>
                      <Link
                        href="#"
                        className={buttonVariants({
                          variant: "outline",
                          className: "text-blue-500",
                        })}
                        prefetch={false}
                      >
                        GitHub
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
