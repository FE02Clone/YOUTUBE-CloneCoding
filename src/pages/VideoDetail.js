import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { MdSort } from "react-icons/md";
import { PiShareFatLight } from "react-icons/pi";
import { GiSaveArrow } from "react-icons/gi";
import { IoCutOutline } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";
import CommentList from "../components/CommentList";
import DetailList from "../components/DetailList";
import styled from "styled-components";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import moment from "moment";

const VideoDetail = ({ video }) => {
  const { videoId } = useParams();
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

  // videoId와 일치하는 동영상 찾기
  const currentVideo = videos.find((video) => video.id === videoId);

  // 동영상의 타이틀과 설명 추출
  const videoTitle = currentVideo?.snippet?.title;
  const videoDescription = currentVideo?.snippet?.description;

  // 동영상의 채널 썸네일과 타이틀 추출
  const channelThumbnail =
    currentVideo?.channelInfo?.snippet?.thumbnails?.default?.url;
  const channelTitle = currentVideo?.channelInfo?.snippet?.title;

  // 동영상의 채널 구독자 수, 조회수, 업로드 시간 추출
  const subscriberCount =
    currentVideo?.channelInfo?.statistics?.subscriberCount;
  const viewCount = currentVideo?.statistics?.viewCount;
  const publishedAt = currentVideo?.snippet?.publishedAt;

  const count = Math.floor(viewCount / 10000);
  const time = moment(publishedAt).fromNow();

  console.log(video);
  return (
    <>
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
            {videoDescription}
          </StDetailBottom>
          <StCommentArea>
            <StComment>
              댓글 <span>36개</span>
            </StComment>
            <div className="Sort">
              <MdSort />
              정렬기준
            </div>
          </StCommentArea>
          <StCommentAdd>
            <StThumbImg></StThumbImg>
            <div className="CommentInput">
              <input type="text" placeholder="댓글추가" />
            </div>
          </StCommentAdd>
          <CommentList />
          <CommentList />
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

export default VideoDetail;

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
const StCommentArea = styled.div`
  display: flex;
`;
const StComment = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 25px;
`;
const StCommentAdd = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 0;
`;

const StDetailRt = styled.div`
  width: 380px;
  margin-left: 28px;
`;
// const StCommentInput = styled.div`
//   margin-left: 20px;
//   &input {
//     width: 1200px;
//     border: none;
//     border-bottom: 1px solid #bbbbbb;
//     padding: 10px;
//   }
// `;
