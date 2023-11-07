import React, { useEffect, useState } from "react";
import VideoShortsCard from "./VideoShortsCard";
import axios from "axios";

const VideoShorts = () => {
  const [shorts, setShorts] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&q=shorts&key=${process.env.REACT_APP_YOUTUBE_API_KEYII}`
    );
    const shortsItems = response.data.items;

    const updatedShorts = await Promise.all(
      shortsItems.map(async (video) => {
        const videoId = video.id.videoId;
        const videoInfo = await fetchVideoInfo(videoId);
        return {
          ...video,
          videoInfo: videoInfo,
        };
      })
    );

    setShorts(updatedShorts);
  };

  const fetchVideoInfo = async (videoId) => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEYII}`
    );
    const videoInfo = response.data.items[0];
    return videoInfo;
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log(shorts);

  return (
    <>
      <div className="shorts-logo">
        <img src="/images/logo_shorts.jpg" alt="숏영상로고" />
      </div>
      <div className="contents-shorts">
        {shorts.map((video, index) => (
          <VideoShortsCard key={index} video={video} />
        ))}
      </div>
    </>
  );
};

export default VideoShorts;
