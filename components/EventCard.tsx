import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function EventCard() {
  return (
    <div className="flex space-x-5">
      {" "}
      <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[300px] md:w-[600px]   snap-center bg-purple-500 p-8 opacity-100 lg:opacity-60 lg:hover:opacity-100 cursor-pointer overflow-hidden transition-opacity duration-200 md:mt-20">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="  border border-purple-500 xl:[200px] object-cover object-center bg- "
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/c_scale,w_150/v1678626868/futlogo_rzowty.png"
          alt="be-future-ready"
        />
        <div className="px-0 md:px-10 pt-10">
          <h3 className="text-3xl font-font font-bold text-white">
            BE FUTURE READY
          </h3>
          <p className="text-xl font-medium font-font text-white">
            Date: Currently Ongoing
          </p>
          <p className="font-font font-extralight my-2 text-xs md:text-sm text-white">
            This initiative was birthed out of the need to enhance the overall
            learning capabilities amongst young people in socio-economically
            deprived communities across Ghana.There is a huge margin of young
            individuals in deprived urban or rural communities who never realize
            their full potential to achieve success academically, socially and
            professionally
          </p>
          <Link href="/future">
            <h2 className="border mt-4 text-white p-3 text-center hover:bg-black">
              Read More ---{">"}
            </h2>
          </Link>
        </div>
      </article>
      <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[300px] md:w-[600px]   snap-center bg-purple-500 p-8 opacity-100 lg:opacity-60 lg:hover:opacity-100 cursor-pointer overflow-hidden transition-opacity duration-200 md:mt-20">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="  border border-purple-500 xl:[200px] object-cover object-center bg- "
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/c_scale,w_200/v1678626883/GYLA_emkzbc.png"
          alt="Ghana-Youth-Leadership-Academy"
        />
        <div className="px-0 md:px-10 pt-10">
          <h3 className="text-3xl font-font font-bold text-white">
            GHANA YOUTH LEADERSHIP ACADEMY (GYLA)
          </h3>
          <p className="text-xl font-medium font-font text-white">
            Date: Currently Ongoing
          </p>
          <p className="font-font font-extralight my-2 text-xs md:text-sm text-white">
            The Ghana Youth Leadership Academy was an academy organized by
            LeadAfrique International with backing from the Centre Party,
            Sweden. The academy was organized to groom young and upcoming
            leaders to become a better version of themselves.
          </p>
          <Link href="/gyla">
            <h2 className="border mt-4 text-white p-3 text-center hover:bg-black">
              Read More ---{">"}
            </h2>
          </Link>
        </div>
      </article>
      <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[300px] md:w-[600px]   snap-center bg-purple-500 p-8 opacity-100 lg:opacity-60 lg:hover:opacity-100 cursor-pointer overflow-hidden transition-opacity duration-200 md:mt-20">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32  border border-purple-500 xl:[200px] object-cover object-center bg- "
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/c_scale,w_200/v1680543588/WhatsApp_Image_2023-04-03_at_5.21.45_PM-removebg-preview_4_meozje.png"
          alt="EWIP"
        />
        <div className="px-0 md:px-10">
          <h3 className="text-3xl font-font font-bold text-white">
            EMPOWERING WOMEN IN POLITICS (EWIP)
          </h3>
          <p className="text-xl font-medium font-font text-white">
            Date:Currently Ongoing
          </p>
          <p className="font-font font-extralight my-2 text-xs md:text-sm text-white">
            Even though females represent a little over half of Ghana’s
            population, women’s representation and participation in politics
            does not reflect this. Equity in participation in the Ghanaian
            national political field is asymmetrical thereby limiting women’s
            involvement in the decision-making process.
          </p>
          <Link href="">
            <h2 className="border mt-4 text-white p-3 text-center hover:bg-black">
              Read More ---{">"}
            </h2>
          </Link>
        </div>
      </article>
      <article className="flex flex-col rounded-lg items-center flex-shrink-0 w-[300px] md:w-[600px]   snap-center bg-purple-500 p-8 opacity-100 lg:opacity-60 lg:hover:opacity-100 cursor-pointer overflow-hidden transition-opacity duration-200 md:mt-20">
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="  border border-purple-500 xl:[200px] object-cover object-center w-32 h-32"
          src="https://res.cloudinary.com/dpbuwo8ha/image/upload/v1678626887/summercamp_yxszmt.png"
          alt="Leadershipfarm-summercamp"
        />
        <div className="px-0 md:px-10">
          <h3 className="text-3xl font-font font-bold text-white">
            SUMMERCAMP 2023
          </h3>
          <p className="text-xl font-medium font-font text-white">
            Date: July 12 - July 16
          </p>
          <p className="font-font font-extralight my-2 text-xs md:text-sm text-white">
            LearningFarm Summercamp is a 1-week self and purpose discovery
            summer camp for upper primary, junior high, senior high, and
            university-bound young people between ages 6 -20. At the end of
            every academic year, hundreds of emerging student leaders from
            across the country are camped to be groomed in the art of leadership
            and statesmanship.
          </p>
          <Link href="/gyla">
            <h2 className="border mt-4 text-white p-3 text-center hover:bg-black">
              Read More ---{">"}
            </h2>
          </Link>
        </div>
      </article>
    </div>
  );
}

export default EventCard;
