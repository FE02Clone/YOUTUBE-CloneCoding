import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GiSaveArrow } from "react-icons/gi";
import { IoCutOutline } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";
import styled from "styled-components";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import SearchHeader from "../components/SearchHeader";
import DetailList from "../components/DetailList";
import CommentArea from "../components/CommentArea";

const SearchDetail = ({ video }) => {
  const { videoId } = useParams();
  const [videoInfo, setVideoInfo] = useState({});
  const [channelInfo, setChannelInfo] = useState({});
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
      );
      const videoInfo = response.data.items[0];
      setVideoInfo(videoInfo);

      const channelId = videoInfo.snippet.channelId;
      const channelResponse = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
      );
      const channelInfo = channelResponse.data.items[0];
      setChannelInfo(channelInfo);

      //추천동영상 정보 받아오기
      const responses = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=25&regionCode=KR&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
      );
      const videoItems = responses.data.items;

      const fetchChannelInfo = async (channelId) => {
        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEYI}`
        );
        const channelInfo = response.data.items[0];
        return channelInfo;
      };

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

    // videoId와 일치하는 동영상 찾기
    const currentVideo = videos.find((video) => video.id === videoId);

    fetchVideoInfo();
  }, [videoId]);

  const videoTitle = videoInfo?.snippet?.title;
  const videoDescription = videoInfo?.snippet?.description;
  const channelThumbnail = channelInfo?.snippet?.thumbnails?.default?.url;
  const channelTitle = channelInfo?.snippet?.title;
  const subscriberCount = channelInfo?.statistics?.subscriberCount;
  const viewCount = videoInfo?.statistics?.viewCount;
  const publishedAt = videoInfo?.snippet?.publishedAt;
  const count = Math.floor(viewCount / 10000);
  const time = moment(publishedAt).fromNow();

  return (
    <>
      <SearchHeader />
      <StContainerDetail>
        <StDetailLt>
          <StDetailMv>
            <ReactPlayer
              playing={true}
              url={`https://www.youtube.com/watch?v=${videoId}`}
              width="100%"
              height="720px"
              style={{ border: "none", borderRadius: "20px" }}
            />
          </StDetailMv>
          <StDetailTitle>{videoTitle}</StDetailTitle>
          <StDetailDescription>
            <StDetailG>
              <StThumbImg
                style={{ backgroundImage: `url(${channelThumbnail})` }}
              />
              <StThumbTitle>
                <StThumbUser>{channelTitle}</StThumbUser>
                <StThumbMember>구독자 {subscriberCount}명</StThumbMember>
              </StThumbTitle>
              <StDetailBtnB>구독</StDetailBtnB>
            </StDetailG>

            <div className="DetailBtnG">
              <StDetailBtn>
                <AiOutlineLike /> <span>188</span> | <AiOutlineDislike />
                <span>0</span>
              </StDetailBtn>
              <StDetailBtn>
                <PiShareFatLight />
                공유
              </StDetailBtn>
              <StDetailBtn>
                <GiSaveArrow />
                오프라인 저장
              </StDetailBtn>
              <StDetailBtn>
                <IoCutOutline />
                클립
              </StDetailBtn>
              <StDetailBtn>
                <RiMenuAddFill />
                저장
              </StDetailBtn>
              <StDetailBtnCir>· · ·</StDetailBtnCir>
            </div>
          </StDetailDescription>
          <StDetailBottom>
            조회수 <span>{count}만회</span> ㆍ{time}
            <br />
            <StVideoDescription>{videoDescription}</StVideoDescription>
          </StDetailBottom>
          <CommentArea />
        </StDetailLt>
        <StDetailRt>
          {videos.map((video, index) => (
            <DetailList key={index} video={video} />
          ))}
        </StDetailRt>
      </StContainerDetail>
    </>
  );
};

export default SearchDetail;

const StContainerDetail = styled.div`
  margin: 30px 0 0 30px;
  width: 95vw;
  display: flex;
  justify-content: center;
`;
const StDetailLt = styled.div`
  width: 1280px;
`;
const StDetailMv = styled.div`
  width: 1280px;
  height: 720px;
  border-radius: 20px;
  background: url(/images/img_detail.jpg) no-repeat;
`;
const StDetailTitle = styled.div`
  margin: 16px 0 10px;
  font-size: 1.3rem;
  font-weight: bold;
`;
const StDetailDescription = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const StDetailG = styled.div`
  display: flex;
`;
const StThumbImg = styled.div`
  width: 45px;
  height: 40px;
  border-radius: 50px;
  background: url(/images/thumb_img.jpg) no-repeat;
  background-size: cover;
`;
const StThumbTitle = styled.div`
  margin: 0 20px 0 10px;
`;
const StThumbUser = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;
const StThumbMember = styled.div`
  font-size: 0.8rem;
  color: #777;
`;
const StDetailBtnB = styled.button`
  border: none;
  background-color: #000;
  padding: 10px 20px;
  border-radius: 50px;
  color: #fff;
  font-size: 1.1rem;
`;
const StDetailBtn = styled.button`
  border: none;
  background-color: #f2f2f2;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 1rem;
  margin-right: 8px;
`;
const StDetailBtnCir = styled.button`
  border: none;
  background-color: #f2f2f2;
  font-weight: bold;
  padding: 15px;
  border-radius: 50px;
`;
const StDetailBottom = styled.div`
  width: 1250px;
  padding: 15px;
  font-size: 0.93rem;
  background-color: #f2f2f2;
  border-radius: 15px;
  color: #555;
  margin-bottom: 24px;
  font-weight: 500;
`;

const StDetailRt = styled.div`
  width: 380px;
  margin-left: 28px;
`;
const StVideoDescription = styled.div`
  height: 80px;
  overflow: hidden;
`;
