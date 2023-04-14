import React, { useState } from "react";
import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import PostCard from "../PostCard";

const ArchieveWapper = styled.div`
  width: 1000px;
  min-height: 350px;
  display: flex;
  border-radius: 20px;
  background-color: #222222;
  color: white;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  font-size: 20px;
  font-weight: 600;
  svg {
    height: 24px;
    margin-right: 5px;
  }
`;

const ComponentWapper = styled.div`
  display: flex;
  margin: 20px 0 50px 15px;
`;

const Archive = () => {
  return (
    <ArchieveWapper>
      <Title>
        <GiFeather /> 내 게시글
      </Title>
      <ComponentWapper>
        <PostCard type="" />
      </ComponentWapper>

      <Title>
        <BsFillBookmarkFill />
        스크랩한 글
      </Title>
      <ComponentWapper>
        <PostCard type="bookmark" />
      </ComponentWapper>

      <Title>
        <FaFolder />
        완료한 프로젝트
      </Title>
      <ComponentWapper></ComponentWapper>
    </ArchieveWapper>
  );
};

export default Archive;
