import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 md:flex md:flex-col md:justify-center md:items-center md:min-h-[100dvh]"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-700">
              Get in Touch
            </div>
            <h2 className="text-blue-500 text-3xl font-bold tracking-tighter sm:text-5xl">
              Contact Me
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              I&apos;m always open to new opportunities and would love to hear
              from you. Feel free to reach out with any questions or inquiries.
            </p>
          </div>
        </div>
        <div className="mx-auto w-full max-w-md space-y-4 py-12">
          <form className="grid gap-4">
            <Input
              type="text"
              placeholder="Name"
              className="w-full"
            />
            <Input
              type="email"
              placeholder="Email"
              className="w-full"
            />
            <Textarea
              placeholder="Message"
              className="w-full"
              rows={5}
            />
            <Button
              type="submit"
              className="w-full"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
