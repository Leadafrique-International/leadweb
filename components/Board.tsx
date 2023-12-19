import React, { useState, useEffect } from "react";
import { Board } from "./Sidebar";
import { AiFillCloseCircle } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface BoardMember {
  name: string;
  image: string;
  position: string;
  details: string;
  points?: string;
}

function Team() {
  const [popupcontent, setpopupcontent] = useState<BoardMember[]>([]);
  const [popuptoggles, setpopuptoggle] = useState(false);

  const changecontent = (board?: BoardMember) => {
    if (board) {
      setpopupcontent([board]);
      document.body.style.overflow = "hidden";
    } else {
      setpopupcontent([]);
      document.body.style.overflow = "auto";
    }
    setpopuptoggle(!popuptoggles);
  };

  return (
    <div className="">
      {/* <style>
        {`
        body {
          overflow: ${popuptoggles ? "hidden" : "auto"};
        }
        .pop-up-body {
          overflow-y: scroll;
        }
      `}
      </style> */}
      <div className="max-w-7xl mx-auto pt-20 pb-40 lg:px-20 xl:px-32  2xl:px-0">
        <div>
          <h1 className="lg:text-5xl font-font font-bold text-black md:text-3xl text-3xl text-center md:text-start md:p-10 ">
            Governing Council
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
          {Board.map((board, index) => {
            return (
              <div key={index} className=" p-10">
                <motion.div
                  initial={{
                    y: -100,
                    opacity: 0,
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="relative "
                >
                  <Image width={500} height={500} src={board.image} alt="" />
                  <div
                    onClick={() => changecontent(board)}
                    className="overlay-text text-white text-2xl hover:underline cursor-pointer"
                  >
                    Read More
                  </div>
                </motion.div>
                <motion.div
                  initial={{
                    y: 100,
                    opacity: 0,
                  }}
                  transition={{ duration: 1 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h1 className="font-bold font-font text-2xl xl:text-xl 2xl:text-2xl text-black pt-10">
                    {board.name}
                  </h1>
                  <h1 className="font-font font-bold text-yellow-400 text-[16px]">
                    {board.position}
                  </h1>
                </motion.div>
              </div>
            );
          })}
        </div>
        {popuptoggles && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="pop-up-container z-[1001] overflow-scroll fixed top-0 bottom-0 right-0 left-0 bg-[rgb(0.0,0.0,0.0,0.6)] "
            onClick={() => changecontent()}
          >
            <motion.div
              initial={{
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="pop-up-body md:w-[500px] w-[300px]  fixed top-0 bottom-0  right-0 bg-white h-[100%] "
            >
              <div
                onClick={() => changecontent()}
                className="pop-header justify-between flex text-center p-2 md:text-4xl text-2xl font-normal cursor-pointer bg-purple-500 text-white "
              >
                <h1 className="md:text-2xl text-xl">
                  Governing Council Member
                </h1>
                <button>
                  {" "}
                  <AiFillCloseCircle className=" text-white hover:text-black" />
                </button>
              </div>
              <div className="pop-up-content">
                {popupcontent.map((pop, index) => {
                  return (
                    <div key={index} className="pop-up-card md:p-5 p-2">
                      <div className="md:px-32 md:pt-20 md:pb-10 pt-5 px-10 pb-5  ">
                        {" "}
                        <Image
                          width={500}
                          height={500}
                          src={pop.image}
                          alt=""
                          className=" "
                        />
                      </div>

                      <p className="text-center md:text-3xl text-2xl font-bold">
                        {pop.name}
                      </p>
                      <p className="text-center md:text-2xl text-[17px] text-purple-500 pt-5">
                        {pop.position}
                      </p>
                      <p className="md:text-[18px] text-sm md:pt-5 pt-2 px-5  pb-40 md:pb-0">
                        {pop.details}
                      </p>
                      <p className="md:text-[18px] text-sm md:pt-5 pt-2 px-5  pb-40 md:pb-0">
                        {pop.points}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Team;
