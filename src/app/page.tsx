"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import SpringAnimationText from "@/components/FramerMotionComponents/SpringAnimationText";
import TextTypingAnimation from "@/components/FramerMotionComponents/TextTypingAnimation";
import ButtonAnimation from "@/components/FramerMotionAnimationComponent/ButtonAnimation";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

export default function Home() {
  return (
    <div className="">
      <div className="h-screen flex justify-center">
        <div className="place-content-center">
          <div className="-mt-60">
            <SpringAnimationText
              fontSize="text-4xl"
              color="text-paletteText"
              text="Hi my name is"
              duration={0.5}
              key={"1"}
              delay={0}
            />
          </div>
          <div className="mt-5">
            <SpringAnimationText
              fontSize="text-7xl"
              color="text-white"
              text="Emanuele Manniti."
              duration={0.3}
              key={"2"}
              delay={0.5}
            />
          </div>
          <div className="mt-5">
            <SpringAnimationText
              fontSize="text-7xl"
              color="text-gray-400"
              text="I build things for the web."
              duration={0.5}
              key={"3"}
              delay={0.7}
            />
          </div>

          <div className="max-w-[600px] mt-5">
            <TextTypingAnimation
              color="text-gray-400 "
              delay={50}
              duration={0.25}
              fontSize="text-4xl"
              text="I'm a full stack Web Developer from Naples (Italy). I work mainly in web development and in the creation of
            tailor-made websites."
            />
          </div>
          <div className="mt-8">
            <motion.div animate={{ x: [-5000, 100, 0] }} transition={{ delay: 2 }}>
              <Link href="/works" legacyBehavior passHref>
              <AwesomeButton type="secondary">
                  Check out my works!
                </AwesomeButton>
              </Link>
            </motion.div>
          </div>
          <ButtonAnimation />
        </div>
      </div>
      {/* BACKGROUND */}
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
    </div>
  );
}
