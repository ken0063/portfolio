import React from "react";
import { ReactIcon } from "./icons/ReactIcon";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
              Technical Skills
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-500">
              What I Can Do
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I have a diverse set of skills that allow me to tackle a wide
              range of frontend development challenges.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col items-center justify-center space-y-2">
            <ReactIcon className="h-10 w-10" />
            <span className="text-sm font-medium">React</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
