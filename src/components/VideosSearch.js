import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import axios from "axios";

function VideosSearch() {
  const { keyword } = useParams(); // useParams를 통해 키워드 받아오기
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${keyword}&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
    );
    const videoItems = response.data.items;

    const updatedVideos = await Promise.all(
      videoItems.map(async (video) => {
        const videoId = video.id.videoId; // 검색 API를 사용하면 videoId가 id 객체 내부에 있습니다.
        const videoDetail = await fetchVideoDetail(videoId);
        return {
          ...videoDetail,
          channelInfo: videoDetail.channelInfo,
        };
      })
    );

    setVideos(updatedVideos);
  };

  const fetchVideoDetail = async (videoId) => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
    );
    const videoDetail = response.data.items[0];
    const channelId = videoDetail.snippet.channelId;
    const channelInfo = await fetchChannelInfo(channelId);
    return {
      ...videoDetail,
      channelInfo: channelInfo,
    };
  };

  const fetchChannelInfo = async (channelId) => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
    );
    const channelInfo = response.data.items[0];
    return channelInfo;
  };

  useEffect(() => {
    fetchData();
  }, [keyword]); // 키워드가 변경되면 fetchData를 다시 호출

  return (
    <>
      <div className="contents-main">
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </div>
    </>
  );
}

export default VideosSearch;
