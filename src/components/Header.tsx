"use client";
import { FacebookIcon, FileIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-row justify-around items-center h-16 fixed top-0 text-teal-500 w-full">
      <div className="font-bold py-1 px-2 text-3xl">
        <a href="/">KEN</a>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="gap-10">
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg">
              <Link href="/">About</Link>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg">
              <>
                <Link href="/">Projects</Link>
              </>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="text-lg">
              <>
                <Link href="/">Contact</Link>
              </>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ul className="flex flex-row justify-between items-center gap-16">
        <li className="hover:text-black">
          <a href="/">
            <FacebookIcon />
          </a>
        </li>
        <li className="hover:text-black">
          <a href="/">
            <LinkedinIcon />
          </a>
        </li>
        <li className="hover:text-black">
          <a href="/">
            <GithubIcon />
          </a>
        </li>
        <li className="hover:text-black">
          <a href="/">
            <FileIcon />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
