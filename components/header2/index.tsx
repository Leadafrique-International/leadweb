"use client";
import styles from "./style.module.scss";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Nav from "./nav"; // Import the Nav component

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleToggleMenu = () => {
      setIsActive(!isActive);
    };

    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isActive]);

  return (
    <div className="z-[9999]">
      <div className={styles.main}>
        <div className={styles.header}>
          <div onClick={() => setIsActive(!isActive)} className={styles.button}>
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </div>
        </div>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
