import React from "react";
import { motion } from "framer-motion";

export default function Intro() {
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const text = "Juan José Cieri";

  return (
    <section className="w-[100vh] h-[100vh] flex justify-center items-center">
      <motion.p
        initial="hidden"
        animate="visible"
        variants={textVariants}
        className="text-4xl font-bold"
      >
        {text.split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.p>
    </section>
  );
}
