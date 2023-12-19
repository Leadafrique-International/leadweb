import { useRef, useState } from "react";
import Link from "next/link";
import { AiOutlinePause } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";

const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleDurationChange = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const width = rect.width;
      const percentage = x / width;
      const newTime = duration * percentage;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
    setIsFinished(true);
  };

  const handlePlayAgain = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
      setIsFinished(false);
    }
  };
  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  return (
    <div
      className="relative w-full "
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        className="w-full"
        src="https://res.cloudinary.com/dpbuwo8ha/video/upload/v1681914859/father_6_tv4q4t.mp4"
        autoPlay={isPlaying}
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleDurationChange}
        onLoadStart={handleLoadStart}
        onEnded={handleVideoEnd}
        onCanPlay={handleCanPlay}
      />
      {isLoading && (
        <div className="absolute  inset-0 flex items-center justify-center">
          <div className="loader" />
        </div>
      )}
      {!isFinished ? (
        <div
          className={`absolute bottom-0 left-0   ${
            isHovering ? "opacity-100" : "opacity-100"
          } transition-opacity duration-200`}
        >
          {isPlaying ? (
            <button
              className="text-white hover:text-gray-300 transition-colors bg-purple-500 hover:bg-purple-600 h-[36px]   w-9 font-bold "
              onClick={handlePlayPause}
            >
              <AiOutlinePause className="text-2xl ml-[5px] " />
            </button>
          ) : (
            <button
              className="text-white hover:text-gray-300 transition-colors bg-purple-500 hover:bg-purple-600 h-[36px]   w-9 font-bold "
              onClick={handlePlayPause}
            >
              <BsFillPlayFill className="text-2xl ml-[5px] " />
            </button>
          )}
        </div>
      ) : (
        <div className="absolute  inset-0 flex flex-col items-center justify-center">
          <Link
            href="https://www.youtube.com/@leadafriquetv7715"
            target="_blank"
          >
            <p className="text-white text-lg mb-4 bg-black p-3 rounded-md hover:bg-red-500 cursor-pointer">
              Go to YouTube
            </p>
          </Link>

          <button
            className="text-white bg-purple-500 hover:bg-purple-600 transition-colors px-4 py-2 rounded"
            onClick={handlePlayAgain}
          >
            Play Again
          </button>
        </div>
      )}
      <div className="md:absolute bottom-0 left-0 right-0 flex items-center justify-center py-4 bg-black ml-9">
        <div
          className="h-1 bg-gray-300 flex-1 mx-4 relative"
          onClick={handleProgressClick}
        >
          <div
            className="h-full bg-purple-500 absolute left-0 top-0"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
