"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center">
      <div className="place-content-center">
        <div className="-mt-60">
          <span className="text-paletteText text-4xl">Hi mi name is</span>
        </div>
        <div className="mt-5">
          <span className="text-white text-7xl">Emanuele Manniti.</span>
        </div>
        <div className="mt-5">
          <span className="text-gray-400 text-7xl">I build things for the web.</span>
        </div>
        <div className="mt-5 max-w-[600px]">
          <span className="text-gray-400 text-4xl">
            I'm a full stack Web Developer from Naples (Italy). I work mainly in web development and in the creation of
            tailor-made websites.
          </span>
        </div>
        <div className="mt-8">
          <Link href="/works" legacyBehavior passHref>
            <Button
              variant="outline"
              className="text-paletteText border-paletteText text-2xl bg-transparent transition ease-in-out hover:-translate-y-1"
            >
              Check out my works.
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
