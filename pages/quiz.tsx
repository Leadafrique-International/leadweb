import React from "react";
import Quiz from "../components/Quiz";
import Link from "next/link";

const QuizPage: React.FC = () => {
  return (
    <div className="bg-purple-500 pb-10 pt-10 min-h-screen">
      <div className="flex flex-col justify-center items-center lg:px-10 px-5">
        <h1 className="text-center text-white font-bold lg:text-4xl text-2xl pb-10">
          Welcome to Intelligence type Test
        </h1>
        <Quiz />
        <Link href="/">
          <div className=" mt-10">
            <h1 className=" font-bold font-font text-center bg-white w-[120px] p-2 rounded-xl">
              Go to home
            </h1>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuizPage;
