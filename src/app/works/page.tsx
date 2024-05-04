"use client";
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CrowdSite from "../../../public/crowdSite.png";
import CrowdSiteFull from "../../../public/crownSiteFull.png";
import EscapeSiteSmall from "../../../public/escapeSiteSmall.png";
import EscapeSiteFull from "../../../public/escapeSiteFull.jpeg";
import SpringAnimationText from "@/components/FramerMotionComponents/SpringAnimationText";
import { motion } from "framer-motion";

export default function page() {
  return (
    <div className="h-screen">
      <div className="text-center mt-10">
        <SpringAnimationText fontSize="text-4xl" color="text-paletteText" text="Experience" duration={0.5} key={"1"} delay={0.5} />
      </div>
      <div className="flex flex-wrap justify-center mt-10 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.25,
            delay: 1,
          }}
          key={"1"}
        >
          <Dialog>
            <Card className="bg-transparent border-paletteText text-center">
              <CardHeader>
                <CardTitle className="text-white">CrowdMoovi</CardTitle>
              </CardHeader>
              <CardContent className="">
                <div className="flex justify-center">
                  <Image src={CrowdSite} width={300} height={300} quality={100} alt="Picture of the company" />
                </div>
                <DialogTrigger asChild className="mt-5">
                  <Button
                    variant="outline"
                    className="text-paletteText border-paletteText text-2xl bg-transparent transition ease-in-out hover:-translate-y-1"
                  >
                    Apri
                  </Button>
                </DialogTrigger>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>

            <DialogContent className="sm:max-w-[925px] bg-paletteText2">
              <DialogHeader>
                <DialogTitle className="text-white">CrowdMoovi</DialogTitle>
                <DialogDescription>
                  CrowdMoovi ed il suo Marketplace NFT permettono agli artisti nel mondo del cinema come registi, sceneggiatori,
                  attori e molti altri di finanziare i propri prodotti cinematografici tramite la vendita di NFTs Cards che
                  offrono vantaggi collegati al prodotto finale. Oltre a questi vantaggi, ad ogni NFT venduto il team artistico
                  associa una frazione dei diritti d'autore sull'opera.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap justify-center">
                <Image src={CrowdSiteFull} width={900} height={900} quality={100} alt="Picture of the company" />
              </div>
              <div className="flex justify-between ">
                <div>
                  <span className="text-3xl text-white">
                    Project: <a className="text-paletteText">Website</a>
                  </span>
                </div>
                <div>
                  <span className="text-3xl text-white">
                    Languages: <a className="text-paletteText">Java</a>,<a className="text-paletteText">Javascript</a>
                  </span>
                </div>
              </div>
              <div className="flex justify-between ">
                <div>
                  <span className="text-3xl text-white">
                    Client: <a className="text-paletteText">CrowdMoovi</a>
                  </span>
                </div>
                <div>
                  <span className="text-3xl text-white">
                    Preview: <a className="text-paletteText">crowdmoovi.com</a>
                  </span>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.25,
            delay: 1.5,
          }}
          key={"1"}
        >
        <Dialog>
          <Card className="bg-transparent border-paletteText text-center">
            <CardHeader>
              <CardTitle className="text-white">Escape Market</CardTitle>
            </CardHeader>
            <CardContent className="">
              <div className="flex justify-center">
                <Image src={EscapeSiteSmall} width={300} height={300} quality={100} alt="Picture of the company" />
              </div>
              <DialogTrigger asChild className="mt-5">
                <Button
                  variant="outline"
                  className="text-paletteText border-paletteText text-2xl bg-transparent transition ease-in-out hover:-translate-y-1"
                >
                  Apri
                </Button>
              </DialogTrigger>
            </CardContent>
            <CardFooter className="flex justify-between"></CardFooter>
          </Card>

          <DialogContent className="sm:max-w-[925px] bg-paletteText2">
            <DialogHeader>
              <DialogTitle className="text-white">Escape Market</DialogTitle>
              <DialogDescription>
                Escape from Tarkov is a first-person shooter (FPS) video game developed by Battlestate Games. Set in a post-Soviet
                world ravaged by war, the game puts players in the shoes of mercenaries trying to survive and escape from the city
                of Tarkov, located in an isolated region of Russia.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-wrap justify-center">
              <Image src={EscapeSiteFull} width={900} height={900} quality={100} alt="Picture of the company" />
            </div>
            <div className="flex justify-between ">
              <div>
                <span className="text-3xl text-white">
                  Project: <a className="text-paletteText">Website</a>
                </span>
              </div>
              <div>
                <span className="text-3xl text-white">
                  Languages: <a className="text-paletteText">Java</a>,<a className="text-paletteText">Javascript</a>
                </span>
              </div>
            </div>
            <div className="flex justify-between ">
              <div>
                <span className="text-3xl text-white">
                  Client: <a className="text-paletteText">Myself</a>
                </span>
              </div>
              <div>
                <span className="text-3xl text-white">
                  Preview: <a className="text-paletteText">escape-site.vercel.app</a>
                </span>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        </motion.div>
      </div>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
}
