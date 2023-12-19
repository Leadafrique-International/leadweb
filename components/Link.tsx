// pages/index.tsx
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import { debounce } from "lodash"; // Import debounce function

import styles from "./page.module.scss";

const images = [
  "/camp (1).webp",
  "/gyla (7).webp",
  "/gyla (53).webp",
  "/gyla (57).webp",
  "/gyla (58).webp",
  "/gyla (69).webp",
  "/g4c (3).jpg",
  "/camp (14).webp",
  "/camp (106).webp",
  "/camp (101).webp",
  "/camp (100).webp",
  "/camp (10).webp",
];

interface Dimension {
  width: number;
  height: number;
}

const Home: React.FC = () => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;
      console.log("Scroll Position:", scrollPosition);

      // You can add additional logic based on the scroll position
      // For example, updating state or triggering animations
    }, 16);

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.spacer}></div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
};

interface ColumnProps {
  images: string[];
  y: any; // Adjust the type accordingly based on framer-motion
}

const Column: React.FC<ColumnProps> = ({ images, y }) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => (
        <div key={i} className={styles.imageContainer}>
          <Image src={`${src}`} alt="image" fill />
        </div>
      ))}
    </motion.div>
  );
};

export default Home;
