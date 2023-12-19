import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 font-font md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-sm md:text-xl text-purple-500 font-medium">
          Learn on our E-learning Platform
        </span>
        <h3 className="text-2xl md:text-[30px] font-semibold">
          Visit MyLeadershipFarm.com
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nobis in
          error repellat voluptatibus ad.
        </p>
        <Link href="https://www.myleadershipfarm.com/" target="_blank">
          <button className="bg-purple-500 text-white font-medium py-2 px-4 rounded transition-all hover:bg-purple-600 active:scale-95">
            Find a course
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
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_1_axvy9c.webp",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_14_plq5o2.webp",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_2_eqjmcm.webp",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626870/G4C_COVER_15_ctnwth.webp",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626871/G4C_COVER_17_mkhglj.webp",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626870/G4C_COVER_16_rqz6j1.webp",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626870/G4C_COVER_16_rqz6j1.webp",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626871/G4C_COVER_17_mkhglj.webp",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_2_eqjmcm.webp",
  },
  {
    id: 10,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_14_plq5o2.webp",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_1_axvy9c.webp",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626869/G4C_COVER_14_plq5o2.webp",
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
