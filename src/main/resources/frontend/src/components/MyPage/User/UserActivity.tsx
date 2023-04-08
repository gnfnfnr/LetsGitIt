import { useState } from "react";
import styled, { css } from "styled-components";
import { AiFillFolder } from "react-icons/ai";
import { BsBookmarkFill } from "react-icons/bs";
import { GiFeather } from "react-icons/gi";

const Wrapper = styled.div`
  width: 900px;
  background-color: #222222;
  color: white;
  padding: 20px;
  border-radius: 20px;
  justify-content: flex-start;
  font-size: 20px;
  svg {
    margin-right: 5px;
    height: 24px;
  }
`;

const MyPost = styled.div`
  margin: 50px 0px 50px 10px;
`;

const SavePost = styled.div`
  margin: 20px 0px 50px 10px;
`;

const MyProject = styled.div`
  margin: 20px 0px 50px 10px;
`;

const UserActivity = () => {
  return (
    <Wrapper>
      <MyPost>
        <GiFeather />내 게시글
      </MyPost>
      <SavePost>
        <BsBookmarkFill />
        스트랩한 글
      </SavePost>
      <MyProject>
        <AiFillFolder />
        완료한 프로젝트
      </MyProject>
    </Wrapper>
  );
};

export default UserActivity;
