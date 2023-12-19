// components/HorizontalScrollCard.tsx
import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import image1 from "../public/youtube.jpg";
import image2 from "../public/youtube2.jpg";
import image3 from "../public/youtube3.jpg";
import image4 from "../public/youtube4.jpg";
import image5 from "../public/youtube5.jpg";
import image6 from "../public/youtube6.jpg";

interface Step {
  title: string;
  description: string;
  color: string;
  image: StaticImageData;
  link: string; // Add a link property to each step
}

const steps: Step[] = [
  {
    title: "PROACTIVE",
    description: "Empower Your Life with Proactive Choice",
    color: "bg-blue-500",
    image: image1,
    link: "https://www.youtube.com/watch?v=7XwEzPcpRJA&t=8s", // Provide a unique link for each step
  },
  {
    title: "ART OF READING",
    description: "Structure and arrange tasks for optimal efficiency.",
    color: "bg-green-500",
    image: image2,
    link: "https://www.youtube.com/watch?v=NOEjFHNQODk",
  },
  {
    title: "SUPINE",
    description: "Unveiling the Enigma of Supine Temperament:",
    color: "bg-yellow-500",
    image: image3,
    link: "https://www.youtube.com/watch?v=haVD3laQIoc&t=7s",
  },
  {
    title: "INSIDE THE MINDS OF TEENS",
    description: "Inside the Mind of Teens",
    color: "bg-red-500",
    image: image4,
    link: "https://www.youtube.com/watch?v=hCi92NYQJ7U",
  },
  {
    title: "PHLEGMATIC",
    description: "Phlegmatic Temperament Explained",
    color: "bg-indigo-500",
    image: image5,
    link: "https://www.youtube.com/watch?v=ex0goDtWHfs&t=1s",
  },
  {
    title: "MUSICAL INTELLIGENCE",
    description: "Understanding Musical Intelligence",
    color: "bg-pink-500",
    image: image6,
    link: "https://www.youtube.com/watch?v=iFhAJ8u8rlg&t=4s",
  },
];

const HorizontalScrollCard: React.FC = () => {
  return (
    <div className="bg6 mt-20">
      {" "}
      <div className="max-w-[1320px] pb-20 mx-auto px-4 font-font pt-20">
        <div>
          <h1 className="pb-5 md:text-5xl text-white text-2xl font-bold">
            Watch Us On Youtube
          </h1>
        </div>
        <div className="flex  space-x-4 overflow-x-scroll  overflow-hidden">
          {steps.map((step, index) => (
            <Link href={step.link} key={index} target="_blank">
              <div
                className={`flex-shrink-0 w-72  duration-300 hover:-mt-2 ${step.color} text-white p-6 shadow-md`}
              >
                <div className="mb-4 w-full h-32 relative">
                  <Image
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h2 className="text-xl font-bold mb-4">{step.title}</h2>
                <p>{step.description}</p>
              </div>
            </Link>
          ))}
          <div className="flex-shrink-0 w-72 bg-gray-200/40 flex justify-center items-center text-white p-6 shadow-md">
            <Link
              href="https://www.youtube.com/@leadafriquetv7715/videos"
              target="_blank"
            >
              <div>
                <h1 className="text-xl font-bold mb-4">Watch More</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCard;
