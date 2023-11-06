import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/ko";
import styled from "styled-components";

const VideoCard = () => {
  const [video, setVideo] = useState("");

  const fetchData = async () => {
    const response = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=25&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    );
    setVideo(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(video.items);

  return (
    <>
      {video.items &&
        video.items.map((item, index) => {
          const time = moment(item.snippet.publishedAt).fromNow();
          const view = item.statistics.viewCount;
          const count = Math.floor(view / 10000);
          return (
            <StThumbArea key={index}>
              <StThumbMv
                src={item.snippet.thumbnails.high.url}
                alt={item.snippet.title}
              />
              <StThumbDetail>
                <StThumbLogo></StThumbLogo>
                <div className="thumb-description">
                  <StThumbTitle>{item.snippet.title}</StThumbTitle>
                  <StThumbUser>{item.snippet.channelTitle}</StThumbUser>
                  <StThumbTime>
                    조회수 {count}만 회 ㆍ{time}
                  </StThumbTime>
                </div>
              </StThumbDetail>
            </StThumbArea>
          );
        })}
    </>
  );
};

const StThumbArea = styled.div`
  width: 350px;
  margin-left: 15px;
`;

const StThumbMv = styled.img`
  width: 345px;
  height: 194px;
  margin-bottom: 13px;
  border-radius: 15px;
`;

const StThumbDetail = styled.div`
  display: flex;
`;

const StThumbLogo = styled.div`
  width: 56px;
  height: 36px;
  margin-right: 13px;
  border-radius: 50px;
  background: url(/images/thumbnail_logo.jpg) no-repeat;
`;

const StThumbTitle = styled.div`
  font-size: 16px;
  line-height: 1.2rem;
  margin-bottom: 12px;
`;

const StThumbUser = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  color: #606060;
`;

const StThumbTime = styled.div`
  margin-bottom: 8px;
  font-size: 13px;
  color: #606060;
  margin-bottom: 40px;
`;

export default VideoCard;
