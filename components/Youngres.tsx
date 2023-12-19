import React from "react";
import YouTubeVideo from "../components/Youtubevid";

const HomePage: React.FC = () => {
  const videoId1 = "A3rRhm4YwCA";
  const videoId2 = "A3rRhm4YwCA";
  const videoId3 = "A3rRhm4YwCA";
  const videoId4 = "A3rRhm4YwCA";
  const videoId5 = "A3rRhm4YwCA";
  const videoId6 = "A3rRhm4YwCA";

  return (
    <div className="max-w-7xl mx-auto md:mt-40 mt-10 mb-36">
      <h1 className="font-font md:text-6xl font-bold pb-10 text-[#66319A] underline text-4xl text-center md:text-start">
        Integrity Series
      </h1>{" "}
      <div className="grid md:grid-cols-2  gap-8 ">
        {" "}
        <div className="flex justify-center ">
          <YouTubeVideo videoId={videoId1} />
        </div>
        <div className="flex justify-center ">
          <YouTubeVideo videoId={videoId2} />
        </div>
        <div className="flex justify-center ">
          <YouTubeVideo videoId={videoId3} />
        </div>
        <div className="flex justify-center ">
          <YouTubeVideo videoId={videoId4} />
        </div>
        <div className="flex justify-center ">
          <YouTubeVideo videoId={videoId5} />
        </div>
        <div className="flex justify-center ">
          <YouTubeVideo videoId={videoId6} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
