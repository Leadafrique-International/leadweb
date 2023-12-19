// import React from "react";

// const VideoPlayer: React.FC = () => {
//   const videoUrl =
//     "https://res.cloudinary.com/dpbuwo8ha/video/upload/v1678626891/video_zuoi1x.webm";

//   // Add the `cache` transformation parameter to the video URL
//   const cachedVideoUrl = `${videoUrl}?cache=31536000`;

//   return (
//     <div className="relative md:w-[60%] w-[100%]">
//       <video controls src={cachedVideoUrl}></video>
//     </div>
//   );
// };

// export default VideoPlayer;
import VideoPlayer from "./Vid";
const MyPage = () => {
  return (
    <div className="relative md:w-[60%] w-[100%]">
      <VideoPlayer />
    </div>
  );
};

export default MyPage;
