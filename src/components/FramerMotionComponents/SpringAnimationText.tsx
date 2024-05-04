import React from "react";
import { motion } from "framer-motion";

interface ISpringAnimationText {
  duration: number,
  text: string,
  delay: number | undefined,
  color: string,
  fontSize: string,
}

export default function SpringAnimationText(props: ISpringAnimationText) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: props.delay,
        duration: props.duration,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
        <span className={`${props.color} ${props.fontSize}`}>{props.text}</span>
    </motion.div>
  );
}
