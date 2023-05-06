import React, { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import postData from "../../resource/postData.json";
import styled from "styled-components";
import { ReactComponent as Search } from "../../styles/icon/Search.svg";
import { ReactComponent as LeftArrow } from "../../styles/icon/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../styles/icon/RightArrow.svg";
import { ReactComponent as DownArrow } from "../../styles/icon/DownArrow.svg";
import HeaderButton from "../../components/HeaderButton";
import { NavLink, useNavigate } from "react-router-dom";
import AllPost from "./AllPost";
import HotPost from "./HotPost";

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

export default function Board() {
  const [field, setField] = useState<"project" | "community">("project");

  const [data, setData] = useState(postData);
  const [name, setName] = useState("프로젝트");
  const navigate = useNavigate();
  return (
    <>
      <BoardHeader>
        <HeaderLink>
          <NavLink
            to="/board/project"
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid var(--color-main-4)" : "none",
            })}
            onClick={() => {
              setData(postData);
              setName("프로젝트");
            }}
          >
            프로젝트
          </NavLink>
          <NavLink
            to="/board/community"
            style={({ isActive }) => ({
              borderBottom: isActive ? "4px solid var(--color-main-4)" : "none",
            })}
            onClick={() => {
              setData(postData);
              setName("커뮤니티");
            }}
          >
            커뮤니티
          </NavLink>
        </HeaderLink>
        <HeaderButton
          text="게시글 작성하기"
          onClick={() => navigate("/board/project/create")}
        />
      </BoardHeader>
      <BoardSearch>
        <Search />
      </BoardSearch>
      <HotPost data={data} name={name} />
      <AllPost data={data} name={name} />
    </>
  );
}
