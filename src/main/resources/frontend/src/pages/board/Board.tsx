import React, { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import postData from "../../resource/postData.json";
import styled from "styled-components";
import { ReactComponent as Search } from "../../styles/Icons/Search.svg";
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
  const [field, setField] = useState<0 | 1>(0);
  const [data, setData] = useState(postData);
  // const [name, setName] = useState("프로젝트");
  const navigate = useNavigate();

  const select = [
    { name: "프로젝트", url: "/board/project/create" },
    { name: "커뮤니티", url: "/board/community/create" },
  ];
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
              setField(0);
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
              setField(1);
            }}
          >
            커뮤니티
          </NavLink>
        </HeaderLink>
        <HeaderButton
          text="게시글 작성하기"
          onClick={() => navigate(select[field].url)}
        />
      </BoardHeader>
      <BoardSearch>
        <Search />
      </BoardSearch>
      <HotPost data={data} name={select[field].name} />
      <AllPost data={data} name={select[field].name} />
    </>
  );
}
