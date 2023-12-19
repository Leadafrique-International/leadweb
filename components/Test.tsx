import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

function Counter({ end, duration }: { end: number; duration: number }) {
  const [isInView, setInView] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setInView(true);
    }
  }, [inView]);

  return (
    <div ref={ref}>
      {isInView && <CountUp start={0} end={end} duration={duration} />}
    </div>
  );
}

function Test() {
  return (
    <div className="bg7">
      <div className="max-w-[1320px] font-font pb-20 md:pt-20 pt-10 text-black px-5 mx-auto">
        <div className="bg-white md:p-10 p-8 mt-8 cursor-pointer hover:shadow-md hover:shadow-white hover:scale-105 duration-200">
          <h1 className="text-3xl font-semibold py-5">Young People</h1>
          <hr />
          <p className="py-5 md:text-[18px] text-[14px]">
            To gain holistic, behavioral, and emotional mastery, our program
            takes a structured process for cultivating leadership,
            self-confidence, self-assurance, discipline, and personal
            responsibility using our African Leadership Toolkit (ALT); a
            leadership curriculum that inculcates in young people a spirit of
            good leadership skills and principles that will guide them
            throughout their life. Our program meticulously enables students and
            young people to discover and live their innate potentials for
            effective leadership within their circle of influence.
          </p>
          <h1 className="text-3xl flex items-center font-bold">
            <Counter end={20000} duration={2} />+
          </h1>
        </div>

        <div className="bg-white md:p-10 p-8 mt-8 cursor-pointer hover:shadow-md hover:shadow-white hover:scale-105 duration-200">
          <h1 className="text-3xl font-semibold py-5">Educators</h1>
          <hr />
          <p className="py-5 md:text-[18px] text-[14px]">
            Our primary focus hinges on the personal leadership of young people
            under the age of 20 years, their parents and their teachers. They
            embrace their innate strengths and capabilities to influence
            positively in every sphere of life. Exposure to concepts of
            leadership enables participants to demonstrate their skills through
            positive social action.
          </p>
          <h1 className="text-3xl flex items-center font-bold">
            <Counter end={5000} duration={2} />+
          </h1>
        </div>

        <div className="bg-white md:p-10 p-8 mt-8 hover:shadow-md hover:shadow-white cursor-pointer hover:scale-105 duration-200">
          <h1 className="text-3xl font-semibold py-5">Corporate Executives</h1>
          <hr />
          <p className="py-5 md:text-[18px] text-[14px]">
            LeadAfrique International is the first GrowthWheel certified
            business advisor in Ghana in September 2020 to empower businesses to
            achieve their strategic priorities. The rapid growth of micro, small
            and medium businesses in Ghana has led to a growing demand for
            business tools that support business advisors in their daily work of
            helping start-ups and small business owners commercialize their
            ideas, define their ambitions, stay focused to make decisions and
            take actions that promote high performance and profits.
          </p>
          <h1 className="text-3xl flex items-center font-bold">
            <Counter end={1000} duration={2} />+
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Test;
