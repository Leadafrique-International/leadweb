import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Futuretest from "@/components/Futuretest";
import Footer from "./Footer";
import Link from "next/link";

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
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const Future = () => {
  return (
    <div className="bg-[rgba(124,62,146)]">
      {/* <div
        className="relative w-[100%]  flex justify-center items-center
      "
      >
        <Image
          loading="lazy"
          width={1000}
          height={1000}
          className="h-[300px] md:h-[600px] w-[100%] object-cover blur-image"
          src="/image (1).jpg"
          alt=""
        />

        <div className="absolute inset-0 bg-white bg-opacity-40 "></div>
        <div className="absolute">
          <motion.div variants={svgVariants} initial="hidden" animate="visible">
            <motion.img
              className=" md:w-[500px] md:h-[200px] w-[280px] h-[100px]"
              variants={pathVariants}
              src="/ttp.jpg"
              alt=""
            />
          </motion.div>
        </div>
      </div> */}
      {/* <div className="max-w-7xl mx-auto xl:px-28 2xl:px-0">
        <h1 className="pt-24 font-font font-bold md:text-6xl text-4xl text-[#1D79BF] underline px-10">
          Teachers
          <span className="text-[#5DA237] underline"> Transformation</span>{" "}
          <span className="text-[#1D79BF] underline">Programme</span>
        </h1>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          Teachers are one of the greatest influencers of young people, as they
          look up to them for acceptance, hope and validation. Teacher
          Transformation Programme seeks to equip teachers to enable them
          fulfill their original and true role in the life of students – light a
          fire and see to the full realization of the greatness of each young
          person. Our programmes span personal, professional development and
          financial development of the teacher to become a highly effective
          individual hence better teacher.
        </p>
         <div className="p-10">
          <img src="/G4C COVER 14.png" alt="" />
        </div> 

         <div className="p-10">
          <img src="/G4C COVER 15.png" alt="" />
        </div> 
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#1D79BF]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> They will
            undertake a series of self-discovery exercises <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Strategies
            to get young people to listen <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> They are
            exposed to personal management tips and skills <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>{" "}
            Understanding dynamics of the classroom <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Effective
            classroom management <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Personal
            and emotional mastery <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Financial
            education <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Retirement
            planning <br />
            <br />
          </p>
        </div>
      </div> */}
      {/* <div>
        <Futuretest />
      </div> */}
      {/* <div className="mt-40 max-w-7xl mx-auto p-10">
        <h1 className="font-font font-bold text-6xl text-[#C40C7B] underline ">
          Support <span className="text-[#472657]"> Us</span>
        </h1>
        <img className="pt-32" src="/donate.png" alt="" />
      </div> */}

      <div className="max-w-7xl mx-auto text-center pt-20 px-10">
        <h1 className="md:text-4xl text-2xl text-white">
          Download Our Impact Report below
        </h1>
        <Link
          href="/IMPACT REPORT_final edits.pdf"
          download="/IMPACT REPORT_final edits.pdf"
          target="_blank"
        >
          <div className="py-[200px] flex justify-center ">
            <h1 className="md:text-4xl text-2xl bg-purple-400 p-5 rounded-xl w-[400px]">
              Click here
            </h1>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
};
export default Future;
