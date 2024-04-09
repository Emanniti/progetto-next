"use client";
import Link from "next/link";
import React from "react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { FaCircleInfo } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { GoHomeFill } from "react-icons/go";

export default function Header() {
  return (
    <div>
      <div className="bg-paletteText2 !h-16 content-center">
        <div className="flex justify-between">
          <div className="">
            <span className="text-xl text-white">(っ◔◡◔)っ Emanuele Manniti </span>
          </div>
          <div className=""></div>
          <div className="flex flex-wrap gap-2">
            <Link href="/" legacyBehavior passHref>
              <Button variant="default" className="text-paletteText border-paletteText text-2xl bg-transparent ">
                <GoHomeFill className="mr-1" />
                Home
              </Button>
            </Link>
            <Link href="/about" legacyBehavior passHref>
              <Button variant="default" className="text-paletteText border-paletteText text-2xl bg-transparent ">
                <FaCircleInfo className="mr-1" />
                About
              </Button>
            </Link>
            <Link href="/works" legacyBehavior passHref>
              <Button variant="default" className="text-paletteText border-paletteText text-2xl bg-transparent ">
                <MdWork className="mr-1" />
                Works
              </Button>
            </Link>
            <Link href="/" legacyBehavior passHref>
              <Button variant="default" className="text-paletteText border-paletteText text-2xl bg-transparent ">
                <RiContactsFill className="mr-1" />
                Contacts
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}
