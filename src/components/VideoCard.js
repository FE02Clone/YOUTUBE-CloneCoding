import React from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";
import { Link } from "react-router-dom";

const VideoCard = ({ video, link }) => {
  const time = moment(video.snippet.publishedAt).fromNow();
  const view = video.statistics.viewCount;
  const count = Math.floor(view / 10000);

  const channelThumbnail = video.channelInfo?.snippet?.thumbnails?.default?.url;

  // console.log(video);

  return (
    <Link
      to={`/video/${link}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <StThumbArea>
        <StThumbMv
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
        <StThumbDetail>
          <StThumbLogo
            style={{ backgroundImage: `url(${channelThumbnail})` }}
          />
          <div className="thumb-description">
            <StThumbTitle>{video.snippet.title}</StThumbTitle>
            <StThumbUser>{video.snippet.channelTitle}</StThumbUser>
            <StThumbTime>
              조회수 {count}만 회 ㆍ{time}
            </StThumbTime>
          </div>
        </StThumbDetail>
      </StThumbArea>
    </Link>
  );
};

const StThumbArea = styled.div`
  width: 350px;
  margin-left: 15px;
`;

const StThumbMv = styled.img`
  width: 345px;
  height: 100%;
  margin-bottom: 13px;
  border-radius: 15px;
`;

const StThumbDetail = styled.div`
  display: flex;
`;

const StThumbLogo = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 14px;
  border-radius: 50%;
  background-size: cover;
`;

const StThumbTitle = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-decoration: none;
  width: 280px;
  height: 41px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 450;
  line-height: 1.2rem;
  margin-bottom: 3px;
`;

const StThumbUser = styled.div`
  margin-bottom: 3px;
  font-size: 13px;
  color: #606060;
`;

const StThumbTime = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  color: #606060;
  margin-bottom: 30px;
`;

export default VideoCard;
