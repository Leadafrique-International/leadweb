import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 font-font md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-sm md:text-xl text-red-500 font-medium">
          Register for our upcoming summercamp 2024
        </span>
        <h3 className="text-2xl  font-semibold"></h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          LearningFarm Summercamp is a 1-week self and purpose discovery summer
          camp for upper primary, junior high, senior high, and university-bound
          young people between ages 6 -20
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLScNpKt-e2zsRtXIqXZL7UEQCn2qdh6b5lfpqpyhPZbglF6W0A/viewform"
          target="_blank"
        >
          <button className="bg-purple-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-purple-600 active:scale-95">
            Register Now
          </button>
        </Link>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626862/camp_78_ycvkyf.webp",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626858/camp_2_xhcxth.webp",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626863/camp_10_hbp9b6.webp",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626866/camp_98_k147yb.webp",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626866/camp_102_maj6p2.webp",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626868/front_hunat9.jpg",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626871/camp_25_glt9hm.webp",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626883/camp_51_hff0ex.webp",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626883/camp_51_hff0ex.webp",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626879/camp_41_klrbyi.webp",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626883/camp_49_qvr6wv.webp",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626861/camp_68_ghpdym.webp",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-3 h-[350px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
