import React from "react";
import YouTube from "react-youtube";

interface Props {
  videoId: string;
}

const YouTubeVideo: React.FC<Props> = ({ videoId }) => {
  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-8">
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeVideo;
