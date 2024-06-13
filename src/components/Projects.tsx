"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Check out my work
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;ve had the opportunity to work on a variety of exciting
              projects, and I&apos;m proud to showcase some of my best work.
            </p>
          </div>
        </div>
        <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
          {Array(6)
            .fill(0)
            .map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <Image
                    src="/placeholder.svg"
                    width="550"
                    height="310"
                    alt="Project 1"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                  />
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Project 1</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      A modern web application built with React, Next.js, and
                      Tailwind CSS.
                    </p>
                    <div className="flex gap-2">
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                      >
                        Live Demo
                      </Link>
                      <Link
                        href="#"
                        className="inline-flex h-8 items-center justify-center rounded-md border border-gray-200 bg-white px-4 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
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
