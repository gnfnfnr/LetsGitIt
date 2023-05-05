import React, { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import postData from "../resource/postData.json";
import styled from "styled-components";
import { ReactComponent as Search } from "../styles/icon/Search.svg";
import { ReactComponent as LeftArrow } from "../styles/icon/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../styles/icon/RightArrow.svg";
import { ReactComponent as DownArrow } from "../styles/icon/DownArrow.svg";
import HeaderButton from "../components/HeaderButton";
import { NavLink } from "react-router-dom";

const BoardHeader = styled.div`
  display: flex;
  max-width: var(--width-max);
  margin: 120px auto 30px;
  padding: 0px 20px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLink = styled.div`
  display: flex;
  gap: 32px;
  font-weight: 600;
  font-size: 48px;
  color: var(--color-sub-1);
  margin: 0;
`;

const BoardSearch = styled.div`
  max-width: var(--width-max);
  margin: 0 auto 45px;
`;

const BoardTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  &>span: first-child {
    color: var(--color-main-4);
    text-transform: uppercase;
  }

  &>span: last-child {
    color: var(--color-sub-1);
  }
`;

const HotBoardBox = styled.section`
  background: var(--color-sub-3);
  padding: 69px 0;
`;

const PostBox = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: var(--width-max);
`;
const MainBoardBox = styled.main``;
const BoardSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PostMainBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  max-width: var(--width-max);
  margin: 0 auto;
`;

const MainBoardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: var(--width-max);
  margin: 95px auto 0;
  align-items: center;
`;

const HotBoardHeader = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;
`;

export default function Board() {
  const [data, setData] = useState(postData);

  useEffect(() => {
    // setData(data => data.map((it,index)=>index%3?))
  }, []);

  return (
    <>
      <BoardHeader>
        <HeaderLink>
          <NavLink
            to="/board/project"
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid var(--color-main-4)" : "none",
            })}
          >
            프로젝트
          </NavLink>
          <NavLink
            to="/board/community"
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid var(--color-main-4)" : "none",
            })}
          >
            커뮤니티
          </NavLink>
        </HeaderLink>
        <HeaderButton text="게시글 작성하기" />
      </BoardHeader>
      <BoardSearch>
        <Search />
      </BoardSearch>
      <HotBoardBox>
        <HotBoardHeader>
          <BoardTitle>
            <span>hot</span> <span>프로젝트</span>
          </BoardTitle>
        </HotBoardHeader>

        <BoardSlider>
          <LeftArrow />
          <PostBox>
            {data.map((item, index) => {
              return <PostItem {...item} />;
            })}
          </PostBox>
          <RightArrow />
        </BoardSlider>
      </HotBoardBox>
      <MainBoardBox>
        <MainBoardHeader>
          <BoardTitle>
            <span>모든</span> <span>프로젝트</span>
          </BoardTitle>
          <div>
            최신순
            <DownArrow />
          </div>
        </MainBoardHeader>
        <PostMainBox>
          {data.map((item) => (
            <PostItem {...item} />
          ))}
        </PostMainBox>
      </MainBoardBox>
    </>
  );
}
