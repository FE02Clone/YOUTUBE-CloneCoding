import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const VideoShortsCard = ({ video }) => {
  const view = video.videoInfo?.statistics?.viewCount;
  const count = Math.floor(view / 10000);
  return (
    <>
      <StShortsArea>
        <StShortsMv
          src={video.snippet.thumbnails.high.url}
          art={video.snippet.title}
        />
        <StThumbTitle>{video.snippet.title}</StThumbTitle>
        <StThumbTime>조회수 {count}만 회</StThumbTime>
      </StShortsArea>
    </>
  );
};

const StShortsArea = styled.div`
  width: 242px;
  margin: 0 15px 15px 0;
`;

const StShortsMv = styled.img`
  width: 241px;
  height: 429px;
  border-radius: 15px;
  margin-bottom: 15px;
`;

const StThumbTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  width: 240px;
  font-size: 16px;
  font-weight: 450;
  line-height: 1.2rem;
  margin-bottom: 12px;
`;

const StThumbTime = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  color: #606060;
  margin-bottom: 40px;
`;

export default VideoShortsCard;
