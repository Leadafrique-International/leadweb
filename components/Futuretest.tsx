import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Test() {
  return (
    <div className=" max-w-5xl mx-auto mt-[100px]">
      <div className="mt-5 flex flex-col rounded-lg items-center">
        <Image
          width={100}
          height={100}
          className="object-center"
          src="/icons8-quote-left-100.png"
          alt=""
        />
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
        className="mt-5 px-5 lg:px-0"
      >
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            We were surprised to see some of our students who were not that
            outspoken take the microphone to express their views. It was so
            amazing.
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">
            Estela Eshen
          </h1>
          <p>English Teacher, Afram Plains</p>
        </div>
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            Most of the students did not know how to learn, they have no
            confidence and they are filled with anxiety. I thank LeadAfrique for
            the intervention and I am happy our students are ready for the BECE
            examination.
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">
            Rev. Fr Stephen Kofi Sakpaku
          </h1>
          <p>Catholic priest Maame Krobo (Kwahu Afram South District)</p>
        </div>
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            I have learnt how to plan and how to achieve my goals. This program
            has helped me to chose the right career path. I am very happy. Thank
            you LeadAfrique
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">
            Jessica Otoo
          </h1>
          <p>Student, Kwabenya</p>
        </div>
        <div className="font-font ">
          <p className="lg:text-2xl text-sm font-light">
            Any time I take my book to learn, I always feel to sleep. But after
            this intervention I leant new strategies to help me learn
            effectively in school and at home. Thank you LeadAfrique.
          </p>
          <h1 className="p-2 text-2xl font-bold text-purple-500">
            Kansinua joseph
          </h1>
          <p>Student, Afram Plains</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Test;
