import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link2 from "./Link";
import Link from "next/link";
import Curve from "./Curve";
import Footer from "./Footer";
import { GoArrowRight } from "react-icons/go";
import { FiArrowUpRight } from "react-icons/fi";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about-us",
  },
  {
    title: "Programs",
    href: "/programs",
  },
  {
    title: "Our Blog",
    href: "/",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export default function Index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.menu}
    >
      <div className={styles.body}>
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className={`${styles.nav} md:text-[46px] text-[36px]`}
        >
          <div className={styles.header}>
            <p className="text-white">Navigation Menu</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <Link2
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link2>
            );
          })}
          <hr />
          <Link href="/quiz">
            <div className="flex items-center gap-1 pt-2">
              <h1 className="md:text-xl text-sm hover:underline duration-150">
                Take a Intelligence Type Test
              </h1>
              <FiArrowUpRight className="text-xl" />
            </div>
          </Link>
          <Link href="/careerpathway">
            <div className="flex items-center gap-1 pb-1">
              <h1 className="md:text-xl text-sm hover:underline duration-150">
                Take a Career Path Test
              </h1>
              <FiArrowUpRight className="text-xl" />
            </div>
          </Link>
          <Link href="/ImpactReport">
            <div className="flex items-center gap-1 pb-3">
              <h1 className="md:text-xl text-sm hover:underline duration-150">
                Download Our latest Impact Report
              </h1>
              <FiArrowUpRight className="text-xl" />
            </div>
          </Link>
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  );
}
