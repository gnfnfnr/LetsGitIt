import React, { useState } from "react";
import PostItem from "../../components/PostItem";
import postData from "../../resource/postData.json";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "../../styles/Icons/DownArrow.svg";
import { Outlet } from "react-router-dom";

const UserHomeBox = styled.div`
  margin-top: 170px;
`;
const BestPostContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  justify-content: space-between;

  @media (max-width: 940px) {
    justify-content: center;
  }
`;
const UserHomePost = styled.section`
  max-width: 1360px;
  margin: 0 auto 120px;
  padding: 0 40px;
`;
const BestPostTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
  & > span {
    color: #ffffff;
    font-size: 36px;
    font-weight: bold;
    text-transform: capitalize;
  }
  & > span > span {
    color: var(--color-main-4);
    margin-right: 8px;
  }
`;

const BestPostOrder = styled.ul`
  background: #222222;
  border-radius: 10px;
  color: #ffffff;
  list-style: none;
  margin: 0;
  padding: 6px 20px;
  margin-left: 40px;
`;

export default function UserHome() {
  const [data, setData] = useState(postData.filter((_, index) => index < 6));
  return (
    <UserHomeBox>
      <Outlet />
      <UserHomePost>
        <BestPostTitle>
          <span>
            <span>best</span>
            프로젝트
          </span>
          <BestPostOrder>
            <li>
              오늘
              <DownArrow />
            </li>
          </BestPostOrder>
        </BestPostTitle>
        <BestPostContent>
          {data.map((item) => (
            <PostItem {...item} key={`pro${item.id}`} />
          ))}
        </BestPostContent>
      </UserHomePost>
      <UserHomePost>
        <BestPostTitle>
          <span>
            <span>best</span>
            커뮤니티
          </span>
          <BestPostOrder>
            <li>
              오늘
              <DownArrow />
            </li>
          </BestPostOrder>
        </BestPostTitle>
        <BestPostContent>
          {data.map((item) => (
            <PostItem {...item} key={`community${item.id}`} />
          ))}
        </BestPostContent>
      </UserHomePost>
    </UserHomeBox>
  );
}
