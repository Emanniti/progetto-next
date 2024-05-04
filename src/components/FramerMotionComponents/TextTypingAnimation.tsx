import React from "react";
import { motion } from "framer-motion";

interface ITextTypingAnimation {
  duration: number;
  text: string;
  delay: number;
  color: string;
  fontSize: string;
}

export default function TextTypingAnimation(props: ITextTypingAnimation) {
  const text = props.text.split("");
  return (
    <>
      {text.map((el, i) => (
        <motion.span
          className={`${props.fontSize} ${props.color}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.25,
            delay: i / props.delay,
          }}
          key={i}
        >
          {el}
        </motion.span>
      ))}
    </>
  );
}
