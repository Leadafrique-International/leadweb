import React, { useState, useRef, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Navbar2 from "@/components/Navbar2";
import Tapwords from "@/components/Tapwords";
import Gallery from "@/components/Gallery";
import Image from "next/image";
import Menu from "@/components/Menu";
import Head from "next/head";
import Footer from "@/components/Footer";
import { GrLinkTop } from "react-icons/gr";

import first from "../public/image 7 (1).webp";
import second from "../public/image 7 (2).webp";
import third from "../public/image 7 (3).webp";

type Props = {};

const backgrounds = [first, second, third];

function Tap() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const pageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const page = pageRef.current;
    if (!page) return;
    page.classList.add("fade-in-active");
    return () => {
      page.classList.remove("fade-in-active");
    };
  }, []);
  const [active, setActive] = useState(false);
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const showMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    let handler = () => {
      setActive(false);
    };
    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    setTimeout(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length);
    }, 5000);
  }, [backgroundIndex]);
  return (
    <div>
      <Head>
        <title>Leadafrique International</title>
      </Head>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Navbar2 />
      <Menu />
      <div className="fade-in" ref={pageRef}>
        <div className="relative">
          <Image
            width={500}
            height={600}
            className="sm:h-screen w-full object-cover"
            src={backgrounds[backgroundIndex]}
            alt=""
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 sm:h-screen"></div>
        </div>
      </div>

      <Tapwords />
      <Gallery />
      {showScrollTop && (
        <button
          className="fixed md:bottom-0 -bottom-1  md:right-3 right-5 m-5 p-3 font-font bg-white rounded-full shadow-md text-purple-500 hover:bg-purple-500 hover:text-white transition transform duration-200 ease-in-out"
          onClick={handleScrollToTop}
        >
          <GrLinkTop />
        </button>
      )}
      <Footer />
    </div>
  );
}

export default Tap;
