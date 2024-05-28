"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import first from "../public/fallback (5).jpg";
import second from "../public/fallback (2).jpg";
import third from "../public/fallback (3).jpg";
import four from "../public/fallback (4).jpg";
import five from "../public/fallback (5).jpg";
import Link from "next/link";
import Hero2 from "./Hero";

const myImages = [
  "https://res.cloudinary.com/dpbuwo8ha/image/upload/f_auto,q_auto/v1635360549/camp_4_hbmxvz.webp",
  "https://res.cloudinary.com/dpbuwo8ha/image/upload/f_auto,q_auto/v1635360549/camp_10_hbp9b6.webp",
  "https://res.cloudinary.com/dpbuwo8ha/image/upload/f_auto,q_auto/v1635360549/camp_54_c90khq.webp",
  "https://res.cloudinary.com/dpbuwo8ha/image/upload/f_auto,q_auto/v1635360549/gyla_53_r7lgfe.webp",
  "https://res.cloudinary.com/dpbuwo8ha/image/upload/f_auto,q_auto/v1635360549/work_eli4r6.webp",
];

const fallbackImages = [first, second, third, four, five];

type Props = {};

export default function Header({}: Props) {
  const pageRef = useRef<HTMLDivElement>(null);
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    page.classList.add("fade-in-active");
    return () => {
      page.classList.remove("fade-in-active");
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((backgroundIndex + 1) % myImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundIndex]);

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleCancelClick = (): void => {
    setIsVisible(false);
    const now: number = new Date().getTime();
    localStorage.setItem("cancelTimestamp", now.toString());
  };
  useEffect(() => {
    const cancelTimestampString: string | null =
      localStorage.getItem("cancelTimestamp");
    if (cancelTimestampString) {
      const cancelTimestamp: number = parseInt(cancelTimestampString, 10);
      const now: number = new Date().getTime();
      const elapsedHours: number = (now - cancelTimestamp) / (1000 * 60 * 1);
      if (elapsedHours < 0.016) {
        setIsVisible(false);
      } else {
        localStorage.removeItem("cancelTimestamp");
      }
    }
  }, []);

  return (
    <header>
      <div className="fade-in" ref={pageRef}>
        <div className="relative">
          {isVisible && (
            <div className="flex flex-col justify-center fixed top-0 left-0 right-0 bottom-0 z-[9999] items-center bg-black/30 w-full backdrop-blur-sm -mt-32 lg:-mt-0">
              <h1
                className="text-white font-bold md:text-3xl text-xl bg-[rgba(124,62,146)] hover:bg-black/80 text-center mb-5 p-2 cursor-pointer"
                onClick={handleCancelClick}
              >
                CANCEL
              </h1>
              <Image
                src="/camp.jpg"
                width={1000}
                height={1000}
                alt=""
                className="md:w-[370px] md:h-[370px] w-[250px] h-[250px]"
              />
              <Link href="https://forms.gle/zuD2kvJ7i9egPu1VA" target="_blank">
                <h1
                  className="text-white text-3xl hover:border border-white w-[300px] text-center mt-5 p-3 cursor-pointer font-bold bg-[rgba(124,62,146)] "
                  onClick={handleCancelClick}
                >
                  Register Now
                </h1>
              </Link>
            </div>
          )}
          <Hero2 />
          {/* <img
            srcSet={`${myImages[backgroundIndex]}?format=webp 1x, ${fallbackImages[backgroundIndex]} 1x`}
            src={`${fallbackImages[backgroundIndex]}`}
            className="h-screen w-full object-cover blur-image"
            alt="Leadafriques"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 h-screen"></div> */}
        </div>
      </div>
    </header>
  );
}

