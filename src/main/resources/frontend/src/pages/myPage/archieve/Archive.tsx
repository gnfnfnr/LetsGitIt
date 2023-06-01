import React, { useState } from "react";
import styled from "styled-components";
import { BsFillBookmarkFill } from "react-icons/bs";
import { FaFolder } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import PostCard from "../../../components/PostCard";

const ArchieveWapper = styled.div`
  width: 100%;
  min-height: 350px;
  display: flex;
  border-radius: 20px;
  background-color: var(--color-sub-2);
  color: var(--color-sub-1);
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
  font-size: 1.25rem;
  font-weight: 600;
  svg {
    height: 24px;
    margin-right: 5px;
  }
`;

const ComponentWapper = styled.div`
  display: flex;
  margin: 20px 0 50px 15px;
  overflow-x: hidden; 
`;

const PostCardContainer = styled.div`
  display: flex;
  width: 100%; 
  overflow-x: auto; 
  white-space: nowrap;
  gap: 10px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Archive = () => {
  return (
    <ArchieveWapper>
      <Title>
        <GiFeather /> 내 게시글
      </Title>
      <ComponentWapper>
        <PostCardContainer>
          <PostCard type="" />
          <PostCard type="" />
        </PostCardContainer>
      </ComponentWapper>

      <Title>
        <BsFillBookmarkFill /> 스크랩한 글
      </Title>
      <ComponentWapper>
      <PostCardContainer>
        <PostCard type="bookmark" />
        </PostCardContainer>
      </ComponentWapper>

      <Title>
        <FaFolder /> 완료한 프로젝트
      </Title>
      <ComponentWapper></ComponentWapper>
    </ArchieveWapper>
  );
};

export default Archive;
