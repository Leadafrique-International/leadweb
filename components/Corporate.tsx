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
    <div className="bg-[rgba(124,62,146)] ">
      <Menu />
      <div
        className="relative w-[100%]   flex justify-center items-center
      "
      >
        <Image
          loading="lazy"
          width={1000}
          height={1000}
          className="md:h-[600px] h-[250px] w-[100%] object-cover blur-image"
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_40/v1678626880/gyla_60_crtcf8.png"
          alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <motion.div initial="initial" animate="animate" className="absolute">
          <motion.div variants={banner} className="flex">
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              C
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
              r
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              p
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
              className="font-font lg:text-5xl md:text-3xl text-white font-bold "
            >
              t
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              e
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              T
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
              i
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold "
            >
              n
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              i
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
              g
            </motion.h1>

            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              a
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold "
            >
              n
            </motion.h1>

            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              d
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-2"
            >
              R
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
              t
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
              a
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
          </motion.div>
        </motion.div>
      </div>
      <div className="max-w-7xl mx-auto lg:p-10 pt-10 md:pt-0 xl:px-44 2xl:px-0">
        <div>
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011594/brochure/Untitled-1-01_juqvdx.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_50/v1682011589/brochure/Untitled-1-02_ipr8vc.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011589/brochure/Untitled-1-03_rmvwhl.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011588/brochure/Untitled-1-04_ipqrqx.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011588/brochure/Untitled-1-05_qivqi9.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011589/brochure/Untitled-1-06_tyi2qs.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_50/v1682011589/brochure/Untitled-1-07_cugjqk.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011589/brochure/Untitled-1-08_jorn5e.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_40/v1682011590/brochure/Untitled-1-09_k5pah0.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011593/brochure/Untitled-1-10_msomrs.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011589/brochure/Untitled-1-11_fxp6cz.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_50/v1682011591/brochure/Untitled-1-12_pqulmd.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011590/brochure/Untitled-1-13_s1gu84.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_10/v1682011593/brochure/Untitled-1-14_kxalrl.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011590/brochure/Untitled-1-15_mnvfe8.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_40/v1682011591/brochure/Untitled-1-16_qu1lcu.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011590/brochure/Untitled-1-17_grc2rv.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_40/v1682011593/brochure/Untitled-1-18_iluoa6.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011586/brochure/Untitled-1-19_ndcxum.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_20/v1682011604/brochure/Untitled-1-20_p4wxsi.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011586/brochure/Untitled-1-21_dcdd37.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_10/v1682011594/brochure/Untitled-1-22_etn5og.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011586/brochure/Untitled-1-23_dwkk8f.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_40/v1682011588/brochure/Untitled-1-24_mn0kuu.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011589/brochure/Untitled-1-25_dphdzz.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011586/brochure/Untitled-1-26_acwhnd.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011587/brochure/Untitled-1-27_vcdgpx.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011587/brochure/Untitled-1-28_get9u2.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011587/brochure/Untitled-1-29_dsjjqn.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/q_40/v1682011588/brochure/Untitled-1-30_spgtot.png"
            alt=""
          />
          <Image
            width={2000}
            height={2000}
            src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1682011587/brochure/Untitled-1-31_pehm5i.png"
            alt=""
          />
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
