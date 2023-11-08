import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

const CommentList = () => {
  return (
    <div className="CommentList">
      <div className="ThumbImg"></div>
      <div className="CommentListTxt">
        <span className="UserInfo">@user-pv1mm6du5e 38분 전</span>

        <div className="CommentCon">
          🐥뿅아리 해인 선수 오늘 끝까지 혼신을 다하신 무대 보여주셔서
          감사해요!😉💕 시즌 첫 그랑프리 무대 4위 정말 좋은성과세요!!!~👍👍👍
          담무대도 🔥🔥🔥파이팅!!!
        </div>
        <span>
          <AiOutlineLike /> <span>188</span> <AiOutlineDislike />
        </span>
      </div>
    </div>
  );
};

export default CommentList;
