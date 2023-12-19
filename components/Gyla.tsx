import React from "react";
import { motion } from "framer-motion";

import Image from "next/image";

import Footer from "./Footer";

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
    <div>
      <div
        className="relative w-[100%]  flex justify-center items-center
      "
      >
        <Image
          loading="lazy"
          width={2000}
          height={1500}
          className="h-[300px] md:h-[600px] w-[100%] object-cover"
          src="/gyla (57).webp"
          alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 "></div>
        <div className="absolute">
          <motion.div variants={svgVariants} initial="hidden" animate="visible">
            <motion.img
              className="sm:w-[350px] sm:h-[150px] lg:w-[700px] lg:h-[300px] w-[200px] h-[80px]"
              variants={pathVariants}
              src="/GYLA.png"
              alt="Ghana-Youth-Leadership-Academy"
            />
          </motion.div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto xl:px-28 2xl:px-0">
        <h1 className="pt-24 font-font font-bold md:text-6xl text-4xl text-[#CA1E1E] px-10">
          Ghana <span className="text-[#F9EA37] ">Youth </span>
          <span className="text-[#5DA237] ">Leadership </span>{" "}
          <span className="text-black ">Academy</span>
        </h1>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          The Ghana Youth Leadership Academy was an academy organized by
          LeadAfrique International with backing from the Centre Party, Sweden.
          The academy was organized to groom young and upcoming leaders to
          become a better version of themselves. The academy was hosted at
          Ensign Health College. In attendance were 40 youth leaders spanning
          several organizations, unions, political parties, and activists.
        </p>
        <div className="p-10">
          <Image
            loading="lazy"
            width={1500}
            height={1000}
            src="/gyla (59).webp"
            alt="Ghana-Youth-Leadership-Academy"
          />
        </div>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          The duration of the opening camp was a week and the activities to be
          done were structured into 7 days.
        </p>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          On Saturday 26 th of March, the enlisted participants converged at the
          Accra Mall and were driven to Ensign Health College, on arrival, rooms
          were allocated to participants and the first activity took place. The
          first activity was to know each other, be familiar with one another,
          break the ice in the room and make everyone feel comfortable around
          each other.
        </p>
        <div className="p-10">
          <Image
            loading="lazy"
            width={1500}
            height={1000}
            src="/gly.webp"
            alt="Ghana-Youth-Leadership-Academy"
          />
        </div>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          A workbook was given to each participant to track their understanding
          of concepts to be taught and activities to be done at the Academy. On
          day 1, participants were taken through two exercises,
        </p>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          The Objective Ball Exercise, and The Amazing Race under the tutelage
          of Michael Ohene-Effah. The exercises shed light on the benefit of
          playing together as a team and complementing one another, it also
          highlighted how to make good use of scarce resources by looking around
          them and finding solutions to their problems from around and within
          them.
        </p>
        <p className="p-10 font-font font-light md:text-xl text-sm">
          A discussion on the Development of Africa was also held, and
          participants were made to rack up their brains and find the causes and
          solutions concerning the stunted developmental growth that Africa is
          facing.
        </p>
      </div>

      <Footer />
    </div>
  );
};
export default Future;
