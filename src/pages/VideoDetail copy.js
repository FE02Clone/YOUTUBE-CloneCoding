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
const VideoDetail = () => {
  return (
    <>
      <StContainerDetail>
        <StDetailLt>
          <StDetailMv></StDetailMv>
          <StDetailTitle>
            {/* 2023 ISU 피겨 그랑프리 3차_그랑프리 드 프랑스_이해인 프리_뮤지컬
            '노트르담 드 파리' OST [습츠_피겨스케이팅] */}
          </StDetailTitle>
          <StDetailDescription>
            <StThumbImg></StThumbImg>
            <StThumbTitle>
              <StThumbUser>스브스스포츠 SUBUSU SPORTS</StThumbUser>
              <StThumbMember>구독자 47.2만명</StThumbMember>
            </StThumbTitle>
            <StDetailBtnB>구독</StDetailBtnB>

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
            조회수 <span>6,900</span>시간 전 #피겨그랑프리3차_앙제 #이해인
            #Hain_Lee
            {/* <br /> 2023 ISU 피겨 그랑프리 3차_그랑프리 드 프랑스_이해인
            프리_뮤지컬 '노트르담 드 파리' OST [습츠_피겨스케이팅] <br />
            <br /> 2023년 11월 4일 프랑스 앙제에서 열린 2023-2024 ISU 피겨
            시니어 그랑프리 3차 대회 그랑프리 드 프랑스 여자 싱글
            프리스케이팅에서 124.66점을 받아 최종 합계 190.96점... */}
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
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
          <DetailList />
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
  margin-bottom: 15px;
`;
const StThumbImg = styled.div`
  width: 45px;
  height: 40px;
  border-radius: 50px;
  background: url(/images/thumb_img.jpg) no-repeat;
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
  margin-right: 235px;
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
  font-size: 0.98rem;
  background-color: #f2f2f2;
  border-radius: 15px;
  color: #555;
  margin-bottom: 24px;
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
