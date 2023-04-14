import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import messagesData from "../resource/messagesData.json";
import applicationData from "../resource/applicationData.json";
import CheckButton from "../components/CheckButton";

const ReceivedHeader = styled.header`
  max-width: var(--width-max);
  margin: 120px auto 55px;
  padding: 0 20px;
  color: var(--color-sub-1);
`;
const HeaderDivsion = styled.div`
  margin-top: 30px;

  & > a:not(:last-child) {
    margin-right: 35px;
  }

  & > a > span {
    margin-left: 8px;
    color: #f9d5a2;
  }
`;
const HeaderTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  color: var(--color-sub-1);
`;

const MessageDelete = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  cursor: default;
`;

const DeleteAllSelect = styled.div`
  display: flex;
  padding: 0 25px;
  gap: 20px;
`;

export default function Received() {
  const [data, setData] = useState<any[]>(messagesData);
  const [checked, setChecked] = useState<number[]>([]);
  return (
    <>
      <ReceivedHeader>
        <HeaderTitle>쪽지</HeaderTitle>
        <HeaderDivsion>
          <NavLink
            onClick={() => {
              setData(messagesData);
              setChecked([]);
            }}
            to="/received/messages"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-sub-1)" : "var(--color-sub-3)",
            })}
          >
            받은 쪽지
            <span>{data.filter(({ read }) => !read).length}</span>
          </NavLink>
          <NavLink
            onClick={() => {
              setData(applicationData);
              setChecked([]);
            }}
            to="/received/applications"
            style={({ isActive }) => ({
              color: isActive ? "var(--color-sub-1)" : "var(--color-sub-3)",
            })}
          >
            받은 지원서
            {data.filter(({ read }) => !read).length && <span>N</span>}
          </NavLink>
        </HeaderDivsion>
        <MessageDelete>
          <DeleteAllSelect
            onClick={() => {
              checked.length === data.length
                ? setChecked([])
                : setChecked(data.map(({ id }) => id));
            }}
          >
            <CheckButton check={checked.length === data.length} />
            전체 선택
          </DeleteAllSelect>
          <button>삭제</button>
        </MessageDelete>
      </ReceivedHeader>
      <Outlet context={{ data, checked, setChecked }} />
    </>
  );
}
