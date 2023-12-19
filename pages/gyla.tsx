import React, { useState, useRef, useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";
import { motion } from "framer-motion";
import Gyla from "@/components/Gyla";
import Head from "next/head";
import Menu from "@/components/Menu";
import Navbar2 from "@/components/Navbar2";
import { GrLinkTop } from "react-icons/gr";
import Futures from "@/components/Future";

const Future = () => {
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
  return (
    <div>
      <Head>
        <title>Leadafrique International</title>
      </Head>
      <motion.div className="progress-bar" style={{ scaleX }} />

      <Menu />
      <Gyla />
      {showScrollTop && (
        <button
          className="fixed md:bottom-0 -bottom-1  md:right-3 right-5 m-5 p-3 font-font bg-white rounded-full shadow-md text-purple-500 hover:bg-purple-500 hover:text-white transition transform duration-200 ease-in-out"
          onClick={handleScrollToTop}
        >
          <GrLinkTop />
        </button>
      )}
    </div>
  );
};
export default Future;
