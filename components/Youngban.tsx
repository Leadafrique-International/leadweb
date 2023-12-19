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
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626866/camp_102_maj6p2.png"
          alt=""
        />

        <div className="absolute inset-0 bg-black bg-opacity-60 "></div>
        <motion.div initial="initial" animate="animate" className="absolute">
          <motion.div variants={banner} className="flex">
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              Y
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
              u
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
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-3"
            >
              P
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
              o
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
              l
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
              s
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold md:pl-7 pl-3"
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
              n
            </motion.h1>
            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              s
            </motion.h1>

            <motion.h1
              variants={letterAnimate}
              className="font-font lg:text-5xl md:text-3xl text-white font-bold"
            >
              f
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
              m
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
              i
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
              n
            </motion.h1>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="max-w-7xl mx-auto xl:px-28 2xl:px-0">
        <motion.img
          initial={{
            y: 50,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-[300px] h-[300px] ml-auto mr-auto nd:mt-36 mt-10 p-5"
          src="/lf.jpg"
          alt="leadershipfarm"
        />
        <p className="p-10 font-font font-light md:text-xl text-sm">
          <span className="text-[#66319A] xl:text-[40px] font-font font-black">
            {" "}
            Leadership <span className="text-[#27B24B]">Farm</span>
          </span>{" "}
          is a weekly, meticulous programme that enables a student to discover
          his or her innate potential for effective leadership within their
          circle of influence. During the sessions, Participants are guided
          through critical yet practical fun concepts that will support them to
          find their essence in life and develop strategies for its achievement.
          It empowers and enables participants to lead themselves to greatness
          and adequately prepares them to lead others effectively.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Continuous
            personal development throughout their time with the school <br />{" "}
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Some of
            the
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Young
            people inducted into the Leadership and Good Character Tribe as they
            achieve set competencies over time ensuring that employers make the
            tribe their first choice for staff recruitment. <br />
            <br /> topics includes but not restricted to self-awareness, goal
            setting, being proactive, lead, voice, presence, collaboration,
            curiosity, team work, time management among others <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Tracked
            behaviour change and shifts in the young person <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Expression
            of critical thinking, effective communication, self-awareness and
            understanding and planning. <br />
            <br />
          </p>
        </div>
        <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
          Our track record of success
        </h1>
        <p className="font-font px-10 md:text-xl text-[12px] font-light">
          Leadership Farm has a proud community of schools in Ghana, impacting
          the lives of about 5000 students every week. <br />{" "}
          <span className="text-[#66319A] font-bold">Some of which are:</span>{" "}
          <br /> <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>ALSYD Academy{" "}
          <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Akosombo
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Delhi Public
          School (DPS) <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Gold Avenue
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Corricreche
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Flobar
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Aves
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Tema Parents
          Association <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Swedru
          Secondary School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Queensland
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Saps School{" "}
          <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Shield
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Solidarity
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Springforth
          International School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>SOS Hermann
          Gmeiner School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Dayspring
          Montessori School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>True Love
          School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Harvest Time
          School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Victory
          Presbyterian School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Penfield
          School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>St. Martin De
          Poress School <br />
          <br />
          <span className="text-[#66319A] md:text-2xl">{">"}</span>Madina
          Cluster of Schools <br />
          <br />
        </p>
      </motion.div>
      <motion.div className="max-w-7xl mx-auto xl:px-28 2xl:px-0">
        <motion.img
          initial={{
            y: 50,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-[550px] md:h-[300px] ml-auto mr-auto nd:mt-36 mt-10 p-5"
          src="/l2l.jpg"
          alt="learning-to-learn"
        />
        <p className="p-10 font-font font-light md:text-xl text-sm">
          <span className="text-[#F8C77C] xl:text-[40px] font-font font-black">
            {" "}
            Learning<span className="text-[#F7844C]">-to-</span>
            <span className="text-[#EE008B]">learn</span>
          </span>{" "}
          A flagship program skewed towards academics to draw from students’
          innate capabilities to harness their strengths to do exceptionally
          well in their examinations. We equip them with the skills to study
          more effectively, and in the process are able to comprehend, recall
          and defend their opinions where necessary.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#F8C77C]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Learning
            Style Assessments, processing and personal coaching. <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Intelligent
            Type Assessments <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Strategies
            for effective learning <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Strategies
            for acing examination <br />
            <br />
          </p>
        </div>
        <h1 className="text-center text-[#66319A] text-[30px] p-10 font-bold font-font">
          Career Guidance and Counselling
        </h1>
        <p className="font-font font-light text-[12px] md:text-xl px-10 ">
          Most people spend an average of 88,000 hours in careers that steals
          their joy. They are a mismatch to their inborn capabilities and not
          purpose-driven. The objective of the programme to enable young people
          embrace an infinite possibility of options available to them juxtapose
          it with the innate strengths and capabilities and design a blueprint
          to make informed decisions for their future.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Gain an
            understanding of life blocks <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Analyse
            current strengths, weaknesses, opportunities and threats and how to
            leverage each component for success <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Develop a
            skills and talents matrix <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Take a
            personality type assessment <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>21st
            century skills and how to acquire them <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Career
            Planning and life management skills <br />
            <br />
          </p>
        </div>
        <h1 className="text-center text-[#66319A] text-[30px] p-10 font-bold font-font">
          Teens Hangout
        </h1>
        <p className="font-font font-light text-[12px] md:text-xl px-10 ">
          Many young adults are conflicted in areas of school, friends, parents,
          dating and sex, addictions and self-worth especially as they
          transition to boarding schools and receive tertiary education. The
          decisions they make regarding these areas oftentimes determines the
          level of success they will each attain in life and when. With this in
          mind, this programme provides young people with the tools to answer
          some of life’s most challenging questions as they prepare for the next
          stage of their lives.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Gain an
            understanding of life blocks <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Who can you
            consider a friend and how to develop friendships
            <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>How to
            understand and work with parents effectively <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>How to
            manage dating and sex <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>What is an
            addiction, how to I identify it, how do I manage it <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Developing
            the power within – self-acceptance, self-worth, self-esteem
            self-confidence <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Developing
            the power within – self-acceptance, self-worth, self-esteem
            self-confidence <br />
            <br /> <br />
            <br />
          </p>
        </div>
        <motion.img
          initial={{
            y: 50,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-[550px] md:h-[300px] ml-auto mr-auto nd:mt-36 mt-10 p-5"
          src="/summercamp.webp"
          alt="leadafrique"
        />
        <p className="p-10 font-font font-light md:text-xl text-sm">
          <span className="text-[#ee0000] xl:text-[40px] font-font font-black">
            {" "}
            LearningFarm <span className=" text-yellow-400"> Summercamp</span>
          </span>{" "}
          is a 1-week self and purpose discovery summer camp for upper primary,
          junior high, senior high, and university-bound young people between
          ages 6 -20. At the end of every academic year, hundreds of emerging
          student leaders from across the country are camped to be groomed in
          the art of leadership and statesmanship. By participating in the camp,
          students gain skills in self-awareness, personal growth, confidence,
          and self-esteem in an environment that fosters learning character
          traits that will propel them into their sometimes-uncertain yet
          prosperous future.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#ee0000]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Becomes an
            effective life-long learner who is able to network, collaborate,
            think critically, take initiative, be more proactive <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Enhances
            curiosity and dynamism in the learner <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>{" "}
            Collaborates with others easily <br />
            <br />
          </p>
        </div>
        <motion.img
          initial={{
            y: 50,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:w-[550px] md:h-[300px] ml-auto mr-auto nd:mt-36 mt-10 p-5"
          src="/xp.jpg"
          alt="leadafrique"
        />
        <p className="p-10 font-font font-light md:text-xl text-sm">
          <span className="text-[#ee0000] xl:text-[40px] font-font font-black">
            {" "}
            X <span className=" text-yellow-400">p</span>{" "}
            <span className=" text-[#8BC43F]">l</span>{" "}
            <span className=" text-[#28A8DE]">o</span>{" "}
            <span className=" text-[#F6783D]">r</span>
            <span className=" text-[#642C8F]">e</span>
          </span>{" "}
          LeadAfrique has so far planned and executed 1-week camps and a
          regional tour for over 300 young people during the long vacation and
          proposes to bring its expertise to the schools via exchange programs
          in other countries and cultural diversity learning across Ghana and
          other countries. We have both local and international tours, camps,
          expeditions and school exchange programs that prepare our young ones
          to be global citizens. The purpose of these experiential learning
          trips is to empower and enable participants to be more independent
          minded, gain rich cultural diversity, cultivate a better understanding
          of self-outside their familiar environment, resolve conflict, and
          become a more dynamic individual.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#ee0000]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Becomes an
            effective life-long learner <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Enhances
            curiosity and dynamism in the learner <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>{" "}
            Collaborates with others easily <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Explores
            significant cultural and global perspectives
            <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Becomes
            more in tune with value systems defined
            <br />
            <br />
          </p>
        </div>
        <h1 className="text-center text-[#66319A] text-[30px] p-10 font-bold font-font">
          School Prefect Training
        </h1>
        <p className="font-font font-light text-[12px] md:text-xl px-10 ">
          Every year Prefects are elected to lead various offices in a school
          without often times understanding what is required of them to excel in
          these roles. This program seeks to develop the prefect’s leadership
          potential and developing transferable skills that will serve them well
          as prefects in the school and beyond. They will learn to position
          themselves responsibly where they will lead, learn to be led and to
          serve and to leave a legacy.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span>{" "}
            Understanding leadership <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Learning to
            develop leadership capabilities
            <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Learning to
            lead their teams through effective team building and management{" "}
            <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Learning to
            manage projects <br />
            <br />
            <br /> <br />
            <br />
          </p>
        </div>
        <h1 className="text-center text-[#66319A] text-[30px] p-10 font-bold font-font">
          Work Ready
        </h1>
        <p className="font-font font-light text-[12px] md:text-xl px-10 ">
          Most employers spend more resources to equip graduates with employable
          skills while on the job. This program seeks to provide early
          understanding of work and to cultivate a spirit of entrepreneurship in
          young people by providing them with continuous work skills in
          different environments, grooming them with practical skills and honing
          their interests in their selected fields of endeavour.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Acquire
            new work ethic and vocabulary <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Learn to
            take initiative and think through options thoroughly
            <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Acquire
            critical judgment skills <br />
            <br />
            <br /> <br />
            <br />
          </p>
        </div>
        <h1 className="text-center text-[#66319A] text-[30px] p-10 font-bold font-font">
          Goal Setting and Purpose Discovery for Young People
        </h1>
        <p className="font-font font-light text-[12px] md:text-xl px-10 ">
          The purpose of this programme is to empower the young people with
          tools to live effective and fulfilled lifestyles. This program
          provides clarity of thought and route to achieving their dreams.
        </p>
        <div>
          <h1 className="px-10 py-5 font-font font-bold md:text-xl text-sm underline text-[#66319A]">
            How they will benefit
          </h1>
          <p className="font-font px-10 md:text-xl text-[12px] font-light">
            <span className="text-[#66319A] md:text-2xl">{">"}</span> Crafted
            Personal Vision Statements <br /> <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Crafted
            Personal Mission Statements
            <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Crafted
            Personal Values <br />
            <br />
            <span className="text-[#66319A] md:text-2xl">{">"}</span>Developed
            10-year life plans <br />
            <br />
            <br /> <br />
            <br />
          </p>
        </div>
      </motion.div>

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
