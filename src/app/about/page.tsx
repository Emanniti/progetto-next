"use client";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { EDUCATIONALS_CARDS, EXPERIENCES_CARDS, SKILLS_CARDS } from "../constants";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function page() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="flex justify-center">
      <div className="mt-10"> 
        <div>
          <span className="text-paletteText text-4xl">Hello there!</span>
        </div>
        <div className="max-w-[800px]">
          <span className="text-white text-2xl">
            I'm <a className="text-paletteText">Emanuele</a>, a passionate programmer with a flair for crafting innovative
            software solutions. With a solid background, I thrive on diving into complex coding challenges and emerging with
            elegant solutions. My interests span across various domains of technology, from web development to artificial
            intelligence. I take pride in my technical prowess. Beyond coding, I'm driven by a relentless curiosity and a desire
            to continually expand my skill set. Let's embark on this journey of innovation{" "}
            <a className="text-paletteText">together!</a>
          </span>
        </div>
        <div className="text-center mt-10">
          <span className="text-paletteText text-4xl">Skills</span>
        </div>
        <div className="flex place-content-center mt-5 gap-3">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
            }}
            className="w-[700px]"
          >
            <CarouselContent>
              {SKILLS_CARDS.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5 ">
                  <div className="p-1 ">
                    <Card className="bg-transparent border-paletteText h-[150px] content-center">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <div>
                          <div className="flex justify-center">
                            <span className="text-1xl font-semibold text-center text-white">{item.title}</span>
                          </div>
                          <div>
                            <Image src={item.img} width={200} height={200} alt="Picture of the company" />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="text-center mt-10">
          <span className="text-paletteText text-4xl">Experience</span>
        </div>
        <div className="flex place-content-center mt-5 gap-3">
          {EXPERIENCES_CARDS.map((item, index) => {
            return (
              <>
                <a href={item.link} target="_blank">
                  <Card key={index} className="bg-transparent border-paletteText text-center h-[250px]">
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-gray-400">{item.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="">
                      <div className="flex place-content-center">
                        <Image
                          src={item.img}
                          width={item.company === "FIN" ? 100 : 200}
                          height={item.company === "FIN" ? 100 : 200}
                          alt="Picture of the company"
                        />
                      </div>
                      <div className="mt-3">
                        <span className="text-white">{item.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                  </Card>
                </a>
              </>
            );
          })}
        </div>
        <div className="text-center mt-10">
          <span className="text-paletteText text-4xl">Education</span>
        </div>
        <div className="flex place-content-center mt-5 gap-3">
          {EDUCATIONALS_CARDS.map((item, index) => {
            return (
              <>
                <a href={item.link} target="_blank">
                  <Card key={index} className=" bg-transparent border-paletteText text-center">
                    <CardHeader>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-gray-400">{item.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="">
                      <span className="text-white">{item.date}</span>
                    </CardContent>
                    <CardFooter className="flex justify-between"></CardFooter>
                  </Card>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
