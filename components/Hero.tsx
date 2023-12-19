// components/HorizontalScrollCard.tsx

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero2: React.FC = () => {
  const bgAnimate: {
    hidden: { clipPath: string };
    show: {
      clipPath: string;
      transition: { ease: string; duration: number; delay: number };
    };
  } = {
    hidden: {
      clipPath: "polygon(21% 27%, 77% 26%, 77% 77%, 21% 77%)",
    },
    show: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        delay: 1,
      },
    },
  };

  const textAnimate1: {
    hidden: { y: string; opacity: number };
    show: {
      y: number;
      opacity: number;
      transition: {
        ease: string;
        duration: number;
        staggerChildren: number;
        delayChildren: number;
      };
    };
  } = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
        staggerChildren: 0.4,
        delayChildren: 1,
      },
    },
  };

  const textAnimate2: {
    hidden: { x: number };
    show: (i: number) => {
      x: number;
      transition: { ease: string; duration: number };
    };
  } = {
    hidden: {
      x: 0,
    },
    show: (i: number) => ({
      x: i,
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    }),
  };

  const textParagrapgh: {
    hidden: { y: string; opacity: number };
    show: {
      y: number;
      opacity: number;
      transition: { type: string; stiffness: number; delay: number };
    };
  } = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 1.8,
      },
    },
  };

  return (
    <div className="relative h-screen md:px-10 px-3 bg-black font-font min-h-[800px]">
      <motion.div
        className="absolute inset-0 w-full h-full overflow-hidden"
        variants={bgAnimate}
        initial="hidden"
        animate="show"
      >
        <Image
          src="/camp (10).webp"
          alt=""
          layout="fill"
          objectFit="cover"
          priority={true}
          className="brightness-50"
        />
      </motion.div>
      <div className=" absolute top-[40%]  ">
        <motion.div
          className=""
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          {" "}
          <motion.h1
            className="md:text-8xl text-5xl xl:text-[150px]  text-[#eaeaea] tracking-tighter   font-bold font-mont"
            variants={textAnimate2}
          >
            We Inspire You
          </motion.h1>
        </motion.div>
        <motion.div
          className=" "
          variants={textAnimate1}
          initial="hidden"
          animate="show"
        >
          {" "}
          <motion.h1
            className="md:text-8xl xl:text-[150px] text-5xl  text-purple-400 tracking-tighter  font-bold"
            variants={textAnimate2}
          >
            To GREATness
          </motion.h1>
          <motion.p
            variants={textParagrapgh}
            initial="hidden"
            animate="show"
            className="max-w-[300px]  pt-3 md:max-w-[500px]    text-justify md:text-xl text-xs text-white pl-3"
          >
            Using the patient and methodical process of farming, LeadAfrique
            empowers, emboldens and inspires people and businesses to live their
            fullest, highest selves.
          </motion.p>
        </motion.div>
      </div>
      <div className="absolute top-0 pt-[30px] left-4">
        <Image src="/logo.webp" width={50} height={50} alt="" />
      </div>
    </div>
  );
};

export default Hero2;
