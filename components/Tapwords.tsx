import React from "react";
// import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
  //   const [text, count] = useTypewriter({
  //     words: ["Gallery", "Home Of Memories", "Pride, Enjoy..."],
  //     loop: true,
  //     delaySpeed: 2300,
  //   });
  return (
    <div className="absolute lg:flex xl:gap-24 md:gap-14 justify-center items-center top-[10%] sm:top-[40%] left-[0] w-full lg:px-16 lg:py-1 px-4 ">
      <motion.h1
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-purple-500 font-font xl:text-[170px] 2xl:text-[200px] md:text-6xl font-bold text-center lg:text-[150px] md:text-[150px]  text-[100px]"
      >
        Our
        {/* <Cursor cursorColor="#7B2A93" /> */}
      </motion.h1>

      <motion.h1
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-white font-font -mt-10 md:-mt-0 xl:text-[200px] md:text-2xl text-center lg:text-[150px] font-bold stroke text-[80px] md:text-[150px] md:pt-16 lg:pt-0"
      >
        Gallery
      </motion.h1>
    </div>
  );
}
