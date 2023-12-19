import React from "react";
import Image from "next/image";
import Aboutvid from "@/components/Aboutvid";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import Board from "@/components/Board";

function AboutUs() {
  // const url = buildUrl("gyla_11_oxx2yv", {
  //   cloud: {
  //     cloudName: "dpbuwo8ha",
  //   },
  // });
  // const urlBlurred = buildUrl("gyla_11_oxx2yv", {
  //   cloud: {
  //     cloudName: "dpbuwo8ha",
  //   },
  //   transformations: {
  //     effect: "blur:1000",
  //     quality: 0.1,
  //   },
  // });
  return (
    <div className="bg-white">
      <div className="  max-w-7xl mx-auto md:p-20 xl:px-32 2xl:p-20">
        <h1 className="md:text-[80px] font-font font-semibold text-[40px] md:pl-0 pl-10 text-black pt-10 lg:pt-0">
          About Us
        </h1>
        {/* <div className="md:mt-40 mt-8 lg:mt-20">
          <Image
            priority
            width={1280}
            height={853}
            className="lg:h-[650px] blur-image"
            src={url}
            alt=""
          />
        </div> */}
        <div className="md:mt-10 mt-8 lg:mt-5">
          {/* <div
            style={{
              position: "relative",
              height: 0,
              paddingTop: `${(750 / 1280) * 100}%`,
              backgroundImage: `url(${urlBlurred})`,
              backgroundPosition: "center center",
              backgroundSize: `100%`,
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <Image
                width={1280}
                height={853}
                className="lg:h-[650px] "
                src={url}
                alt=""
                unoptimized={true}
              />
            </div>
          </div> */}
          <div>
            <Aboutvid />
          </div>
        </div>
      </div>
      <motion.div
        initial={{
          y: 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:mt-40 mt-8 lg:mt-20 bg-purple-500 relative"
      >
        <div className=" max-w-7xl mx-auto p-10 gap-8 items-center xl:px-28 2xl:px-10">
          <div>
            <h1 className="text-white text-4xl font-font font-bold text-center ">
              Why we exist
            </h1>
            <div className="lg:flex lg:space-x-5 mt-10">
              <div>
                <p className="mt-5 xl:text-[17px] lg:text-[14px] text-white   font-font text-justify tracking-tight text-sm leading-6">
                  {" "}
                  LeadAfrique International was birthed in March 2014 to
                  cultivate a new generation of creative and responsive leaders
                  for Africa, enabling people to live purposeful, fearless,
                  limitless, powerful and fulfilled lives.
                </p>

                <p className="mt-5 xl:text-[17px] lg:text-[14px] text-white   font-font  text-sm ">
                  {" "}
                  We aim to coordinate all leadership programmes that will
                  tactically cultivate the next generation of the continent’s
                  leaders – in business, health, education, governance, public
                  service, religious organisations, uniformed services and
                  chieftaincy.
                </p>
              </div>
              <div>
                {" "}
                <p className="mt-5 xl:text-[17px] lg:text-[14px] text-white  font-font  text-sm ">
                  This dream has been necessitated by the fact that Africa has
                  consistently lagged behind on almost all development indices
                  in spite of its vast and rich natural resources. Many studies
                  and anecdotal evidence show that poor and unresponsive
                  leadership is the cause of this spate of affairs.
                </p>
                <p className="mt-5 xl:text-[17px] lg:text-[14px] text-white   font-font  text-sm ">
                  We want to see an Africa that works. An Africa where we place
                  our collective interest over the individual. An Africa where
                  we set the trend when it comes to development and innovation.
                </p>
              </div>
            </div>
            <div className="mt-20">
              <h1 className="text-white font-font text-center 2xl:text-4xl text-3xl pb-14 font-bold">
                Our Objectives
              </h1>
              <p className="text-white font-font  xl:text-[17px] lg:text-[14px] text-sm ">
                <span className="font-bold text-xl">Leadership Research:</span>{" "}
                As a Pan-African organization specializing in Leadership and
                Organizational Development; we partner with leaders across a
                wide variety of industries, empowering them to guide and
                transform their organizations. LeadAfrique International focuses
                on conducting sophisticated and scientifically-robust research
                analyses, making key presentations to senior leadership of
                countries and organizations, and helping them leverage their own
                data to achieve real impact.{" "}
              </p>

              <p className="text-white font-font pt-5  xl:text-[17px] lg:text-[14px] text-sm ">
                <span className="font-bold text-xl text-start">
                  Leadership Development:{" "}
                </span>{" "}
                We designs and facilitates development initiatives for leaders
                at all levels, using empirically-supported frameworks and
                skill-building activities to produce behavior change. Using the
                Africa Leadership Toolkit, LeadAfrique cultivates leaders from
                as young as six years in schools across Africa. We are
                specialized in the development of curriculums and frameworks
                that facilitates growth. This has been proven over the last nine
                years as we have worked diligently to shift mindsets and hearts
                among school children, teachers, working professionals and
                corporate firms.
              </p>
              <p className="text-white font-font pt-5  xl:text-[17px] lg:text-[14px] text-sm ">
                <span className="font-bold text-xl text-start">
                  Leadership Consulting:{" "}
                </span>{" "}
                LeadAfrique has positioned itself as the leadership development
                organization of choice across the continent. We create programs
                in partnership with our clients to provide them with the tools
                to assess and meet leaders’ needs, maximize their leaders’
                development and effectiveness, and build their credibility as
                national and business leaders.
              </p>
            </div>
            <div className="mt-20"></div>
          </div>
          <div className="lg:flex gap-6 pt-20 justify-center">
            <div className="bg-white xl:w-[350px] xl:h-[350px] lg:w-[250px] lg:h-[250px] p-3 lg:pt-16 rounded-sm">
              <Image
                loading="lazy"
                width={50}
                height={50}
                className="mr-auto ml-auto blur-image"
                src="/icons8-mission-80 (1).png"
                alt=""
              />
              <h1 className="text-2xl font-font text-center font-bold p-2">
                Our Mission
              </h1>
              <p className="text-center">
                We inspire people to achieve their Greatness
              </p>
            </div>
            <div className="bg-white xl:w-[350px] xl:h-[350px] lg:w-[250px] lg:h-[250px] p-3 rounded-sm lg:pt-16 mt-8 lg:mt-0">
              <Image
                loading="lazy"
                width={50}
                height={50}
                className="mr-auto ml-auto blur-image"
                src="/icons8-surprise-64.png"
                alt=""
              />
              <h1 className="text-2xl font-font text-center font-bold p-2">
                Our Vision
              </h1>
              <p className="text-center">
                Transformed Africa through creative and responsive leaders.
              </p>
            </div>
            <div className="bg-white xl:w-[350px] xl:h-[350px] lg:w-[250px] lg:h-[250px] p-3 rounded-sm lg:pt-16 mt-8 lg:mt-0">
              <Image
                loading="lazy"
                width={50}
                height={50}
                className="mr-auto ml-auto blur-image"
                src="/icons8-accuracy-100.png"
                alt=""
              />
              <h1 className="text-2xl font-font text-center font-bold p-2">
                Our Focus
              </h1>
              <p className="text-center">
                We aim to accelerate personal and business growth to avoid the
                successful failure syndrome.
              </p>
            </div>
          </div>
        </div>
        <h1 className="absolute bottom-[20%] lg:left-[10%] lg:text-[180px] text-[120px] opacity-10 text-white font-bold">
          Values
        </h1>
      </motion.div>
      <Board />
      <hr className=" new1 " />
      <Team />
      <Footer />
    </div>
  );
}

export default AboutUs;
