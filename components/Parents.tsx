import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Futuretest from "@/components/Futuretest";
import Footer from "./Footer";
import Menu from "@/components/Menu";

const svgVariants = {
  hidden: {
    rotate: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 5,
      ease: "easeInOut",
    },
  },
};
const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};
const letterAnimate = {
  initial: {
    y: 400,
    opacity: 0.4,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
    },
  },
};

const Future = () => {
  return (
    <div>
      <Menu />
      <div
        className="relative w-[100%]  flex justify-center items-center
      "
      >
        <Image
          width={1000}
          height={1000}
          className="md:h-[600px] h-[250px] w-[100%] object-cover"
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_auto/v1680544751/photo_2023-03-24_14-18-59_rekve8.jpg"
          alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <motion.div initial="initial" animate="animate" className="absolute">
          <motion.div variants={banner} className="flex">
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              P
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              a
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              n
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              t
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              s
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              D
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              v
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              l
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              o
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold "
            >
              p
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              m
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              n
            </motion.h1>

            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              t
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              P
            </motion.h1>

            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              o
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              g
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              a
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              m
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              s
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto xl:px-28 2xl:px-0">
        <h1 className="pt-24 font-font font-bold text-[#66319A] px-10 md:text-6xl text-4xl">
          Parents Development Programs
        </h1>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          This initiative was birthed out of the need to enhance the overall
          learning capabilities amongst young people in socio-economically
          deprived communities across Ghana. There is a huge margin of young
          individuals in deprived urban or rural communities who never realize
          their full potential to achieve success academically, socially and
          professionally. This is due to they being unaware of their innate
          capabilities to be great and their ignorance about the uniqueness of
          their person.{" "}
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Become
            “intentional” and “active” parents <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Build
            united and happy families <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Create
            family ethos <br />
            <br />
          </p>
        </div>
      </div>

      {/* <div>
        <Futuretest />
      </div>
      <div className="mt-40 max-w-7xl mx-auto p-10">
        <h1 className="font-font font-bold text-6xl text-[#C40C7B] underline ">
          Support <span className="text-[#472657]"> Us</span>
        </h1>
        <img className="pt-32" src="/donate.png" alt="" />
      </div> */}
      <Footer />
    </div>
  );
};
export default Future;
