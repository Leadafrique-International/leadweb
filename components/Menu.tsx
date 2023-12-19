import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoIosPeople } from "react-icons/io";
import { GrProjects, GrResources } from "react-icons/gr";
import { BsCalendar2EventFill } from "react-icons/bs";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Image from "next/image";

function Menu() {
  useEffect(() => {
    let handler = () => {
      setOpen(false);
    };
    document.addEventListener("mousedown", handler);
  });
  useEffect(() => {
    let handler1 = () => {
      setOpen1(false);
    };
    document.addEventListener("mousedown", handler1);
  });
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const router = useRouter();
  return (
    <nav className="bg-purple-600/40 flex w-max px-4 py-1 z-[999] fixed left-[50%] translate-x-[-50%] bottom-16 gap-4 rounded-[3rem] backdrop-blur-lg md:hidden ">
      <Link
        className={
          router.pathname === "/about"
            ? "bg-black/30 px-3 pt-2 rounded-[20%] text-white text-2xl"
            : "hover:bg-black/30 transition transform duration-200 ease-in-out px-3 pt-2 rounded-[20%] text-white text-2xl"
        }
        href="/about-us"
      >
        <IoIosPeople />
        <p className="text-[8px]">About</p>
      </Link>
      {/* <Link
        href="/programs"
        className={
          router.pathname === "/programs"
            ? "bg-black/30 px-3 pt-2 rounded-[20%] text-white text-2xl"
            : "hover:bg-black/30 transition transform duration-200 ease-in-out px-3 pt-2 rounded-[20%] text-white text-2xl"
        }
      >
        <AiOutlineFundProjectionScreen />
        <p className="text-[8px] -ml-1">Programs</p>
      </Link> */}
      <div className="menu-container-mobile">
        <div
          className="menu-trigger-mobile "
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div
            className={
              open
                ? "bg-black/30 px-3 pt-2 rounded-[20%] text-white text-2xl"
                : "hover:bg-black/30 transition transform duration-200 ease-in-out px-3 pt-2 rounded-[20%] text-white text-2xl"
            }
          >
            <AiOutlineFundProjectionScreen />
            <p className="text-[8px] -ml-1">Programs</p>
          </div>
        </div>
        <div className={`dropdown-menu-mobile ${open ? "active" : "inactive"}`}>
          <ul>
            <li>
              <Link
                href="/future"
                className="flex p-2 -ml-10  gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
              >
                {/* <img
                        className="w-10 h-10"
                        src="/icons8-teenager-male-50.png"
                        alt=""
                      /> */}

                <p className="text-[15px]">Be future Ready</p>
              </Link>
            </li>
            <li>
              <Link
                href="/gyla"
                className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
              >
                {/* <img
                        className="w-10 h-10"
                        src="/icons8-teenager-male-50.png"
                        alt=""
                      /> */}

                <p className="text-[15px]">
                  Ghana Youth <br /> Leadership Academy
                </p>
              </Link>
            </li>
            <li>
              <Link
                href="/youngpeople"
                className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 h-5"
                  src="/icons8-teenager-male-50.png"
                  alt=""
                />

                <p className="text-[15px]">Young People</p>
              </Link>
            </li>
            <li className="">
              <Link
                href="/parents"
                className="flex p-2 -ml-8   gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 h-5"
                  src="/icons8-family-50.png"
                  alt=""
                />

                <p className="text-[15px]">Parenting</p>
              </Link>
            </li>
            <li>
              <Link
                href="/educators"
                className="flex p-2 -ml-8   gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 h-5"
                  src="/icons8-student-center-50.png"
                  alt=""
                />

                <p className="text-[15px]">Educators</p>
              </Link>
            </li>

            <li>
              <Link
                href="/corporate"
                className="flex p-2 ml-2   gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-5 h-5"
                  src="/icons8-manager-50.png"
                  alt=""
                />

                <p className="text-[15px]">Corp. Executive</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Link
        className={
          router.pathname === "/resources"
            ? "bg-black/30 px-3 pt-2 rounded-[20%] text-white text-2xl"
            : "hover:bg-black/30 transition transform duration-200 ease-in-out px-3 pt-2 rounded-[20%] text-white text-2xl"
        }
        href="/resources"
      >
        <GiSandsOfTime />
        <p className="text-[8px] -ml-1">Resources</p>
      </Link> */}
      <div className="menu-container1">
        <div
          className="menu-trigger1 "
          onClick={() => {
            setOpen1(!open1);
          }}
        >
          <div
            className={
              open1
                ? "bg-black/30 px-3 pt-2 rounded-[20%] text-white text-2xl"
                : "hover:bg-black/30 transition transform duration-200 ease-in-out px-3 pt-2 rounded-[20%] text-white text-2xl"
            }
          >
            <GiSandsOfTime />
            <p className="text-[8px] -ml-1">Resources</p>
          </div>
        </div>
        <div
          className={`dropdown-menu-mobile1 ${open1 ? "active1" : "inactive1"}`}
        >
          <ul>
            <li>
              <Link
                href="/future"
                className="flex p-2 -ml-10  gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
              >
                {/* <img
                        className="w-10 h-10"
                        src="/icons8-teenager-male-50.png"
                        alt=""
                      /> */}

                <p className="text-[15px]"></p>
              </Link>
            </li>
            <li>
              <Link
                href="/gyla"
                className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
              ></Link>
            </li>
            <li>
              <Link
                href="/youngresources"
                className="flex p-2  gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-10 h-10"
                  src="/icons8-teenager-male-50.png"
                  alt=""
                />

                <p className="text-[15px]">Young People</p>
              </Link>
            </li>
            <li className="">
              <Link
                href=""
                className="flex p-2 -ml-8   gap-5 items-center justify-center hover:-ml-0 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-10 h-10"
                  src="/icons8-family-50.png"
                  alt=""
                />

                <p className="text-[15px]">Parenting</p>
              </Link>
            </li>
            <li>
              <Link
                href="/educators"
                className="flex p-2 -ml-0   gap-5 items-center justify-center hover:ml-5 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-10 h-10"
                  src="/icons8-student-center-50.png"
                  alt=""
                />

                <p className="text-[15px]">Impact Report</p>
              </Link>
            </li>

            <li>
              <Link
                href="/corporate"
                className="flex p-2 ml-2   gap-5 items-center justify-center hover:ml-8 transform duration-200 ease-in-out"
              >
                <Image
                  width={50}
                  height={50}
                  className="w-10 h-10"
                  src="/icons8-manager-50.png"
                  alt=""
                />

                <p className="text-[15px]">Corp. Executive</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Link
        className={
          router.pathname === "/gallery"
            ? "bg-black/30 px-3 pt-2 rounded-[20%] text-white text-2xl"
            : "hover:bg-black/30 transition transform duration-200 ease-in-out px-3 pt-2 rounded-[20%] text-white text-2xl"
        }
        href="/gallery"
      >
        <BsCalendar2EventFill />
        <p className="text-[8px]">Gallery</p>
      </Link>
      <Link
        className={
          router.pathname === "/image"
            ? "bg-black/30 px-3 pt-2 rounded-[20%] text-white text-2xl"
            : "hover:bg-black/30 transition transform duration-200 ease-in-out px-3 pt-2 rounded-[20%] text-white text-2xl"
        }
        href="https://leadafriqueblog.vercel.app/"
        target="_blank"
      >
        <FaBloggerB />
        <p className="text-[8px] ml-1">Blog</p>
      </Link>
    </nav>
  );
}

export default Menu;
