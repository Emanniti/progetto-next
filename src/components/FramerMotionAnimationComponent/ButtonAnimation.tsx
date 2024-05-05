import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { AwesomeButtonSocial, AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
export default function ButtonAnimation() {
  return (
    <div className="mt-28 flex justify-center gap-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 3,
          duration: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            delay: 4.5,
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <AwesomeButtonSocial type="linkedin" href="https://www.linkedin.com/in/emanuele-manniti-338360183/">
            LinkedIn
          </AwesomeButtonSocial>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 3.5,
          duration: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            delay: 4.8,
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <AwesomeButtonSocial type="github" href="https://github.com/Emanniti">
            GitHub
          </AwesomeButtonSocial>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 4,
          duration: 0.25,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{
            delay: 5.1,
            duration: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <a style={{ textDecoration: "inherit", color: "inherit" }} href="../../../../EmanueleMannitiCV.pdf" download>
            <AwesomeButtonProgress
              before={<FaFileDownload />}
              type="secondary"
              onPress={async (element, next) => {
                // await for something then call
                next();
              }}
            >
              Download CV
            </AwesomeButtonProgress>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
