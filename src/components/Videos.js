import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "./VideoCard";
import axios from "axios";
import styled from "styled-components";

function Videos() {
  const { keyword } = useParams();
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=25&regionCode=KR&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
    );
    const videoItems = response.data.items;

    const updatedVideos = await Promise.all(
      videoItems.map(async (video) => {
        const channelId = video.snippet.channelId;
        const channelInfo = await fetchChannelInfo(channelId);
        return {
          ...video,
          channelInfo: channelInfo,
        };
      })
    );

    setVideos(updatedVideos);
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
  }, []);

  // console.log(videos);

  return (
    <>
      <StContentsMain>
        {videos.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </StContentsMain>
    </>
  );
}

const StContentsMain = styled.div`
  width: 100vw;
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export default Videos;
