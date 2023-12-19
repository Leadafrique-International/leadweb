// components/HorizontalScrollCard.tsx
import React from "react";

const HorizontalScrollCard: React.FC = () => {
  const steps = [
    {
      title: "AWARE",
      description: "Stay informed and conscious of your surroundings.",
      color: "bg-blue-500",
    },
    {
      title: "ORGANIZE",
      description: "Structure and arrange tasks for optimal efficiency.",
      color: "bg-green-500",
    },
    {
      title: "PRESENCE",
      description: "Be fully engaged and focused in the present moment.",
      color: "bg-yellow-500",
    },
    {
      title: "VOICE",
      description: "Express thoughts and ideas with clarity and confidence.",
      color: "bg-red-500",
    },
    {
      title: "LEAD",
      description: "Guide and inspire others towards a common goal.",
      color: "bg-indigo-500",
    },
    {
      title: "RESPOND",
      description: "React and adapt effectively to various situations.",
      color: "bg-pink-500",
    },
  ];

  return (
    <div className="max-w-[1320px] pb-10 mx-auto px-4 font-font pt-10">
      <div>
        <h1 className="pb-5 md:text-5xl text-2xl font-bold">
          Our 6-Step Leadership Framework
        </h1>
      </div>
      <div className="flex  space-x-4 overflow-x-scroll overflow-hidden">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-72 ${step.color} text-white p-6 shadow-md`}
          >
            <h2 className="text-xl font-bold mb-4">{step.title}</h2>
            <p>{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
