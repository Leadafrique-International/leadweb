// pages/index.tsx
import React from "react";
import AnimatedText from "../components/Whatwedo";

const Home: React.FC = () => {
  return (
    <main className="max-w-[1320px] font-font pb-10 md:pt-20 pt-10 text-white   px-4 mx-auto">
      <div className="bg-yellow-600 p-10">
        <h1 className="md:text-5xl text-2xl md:text-left text-center font-medium">
          What We Do
        </h1>
        <hr className="h-4" />
        <AnimatedText />
      </div>
    </main>
  );
};

export default Home;
