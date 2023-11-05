import React from "react";
import VideoShortsCard from "./VideoShortsCard";

const VideoShorts = () => {
  return (
    <>
      <div className="shorts-logo">
        <img src="/images/logo_shorts.jpg" alt="숏영상로고" />
      </div>
      <div className="contents-shorts">
        <VideoShortsCard />
        <VideoShortsCard />
        <VideoShortsCard />
        <VideoShortsCard />
        <VideoShortsCard />
        <VideoShortsCard />
        <VideoShortsCard />
      </div>
    </>
  );
};

export default VideoShorts;
