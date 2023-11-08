import React from "react";
import styled from "styled-components";
import { MdSort } from "react-icons/md";
import CommentList from "../components/CommentList";

const CommentArea = () => {
  return (
    <>
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
    </>
  );
};

export default CommentArea;
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
const StThumbImg = styled.div`
  width: 45px;
  height: 40px;
  border-radius: 50px;
  background: url(/images/thumb_img.jpg) no-repeat;
  background-size: cover;
`;
