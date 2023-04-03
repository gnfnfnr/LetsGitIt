import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";

interface Data {
  id: number;
  title: string;
  sort: string;
  date: string;
  read: boolean;
  noticeDelete: boolean;
  setNoticeDelete: Dispatch<SetStateAction<boolean>>;
}

const NoticeItemBox = styled.li<{ check: boolean; noticeDelete: boolean }>`
  display: flex;
  gap: 20px;
  padding: 12px 0 9px;
  position: relative;
  padding-left: 26px;
  margin: 0 20px;
  &:not(:last-child) {
    border-bottom: 1px solid #b2b2b2;
  }

  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }

  &::before {
    content: "";
    position: absolute;
    top: 14px;
    left: 0;
    width: 14px;
    height: 14px;

    ${({ noticeDelete, check }) =>
      noticeDelete
        ? `
            ${check && "content: '✔'"};
            border: 2px solid var(--color-main-4);
            border-radius: 4px;
            text-align: center;
            font-size: 8px;
        `
        : "background: var(--color-main-4);    border-radius: 50%;"}
  }
`;

const ItemTitle = styled.span`
  widht: 20%;

  & > input {
    display: none;
  }
`;

const ItemContent = styled.div`
  widht: 80%;
  & > p {
    margin: 0;
    padding-bottom: 6px;
  }
`;

const ItemSort = styled.span`
  position: relative;
  padding-right: 20px;
  &::after {
    position: absolute;
    right: 10px;
    top: 3px;
    content: "";
    width: 1px;
    height: 12px;
    background-color: white;
  }
`;

export default function NoticeItem({
  noticeDelete,
  setNoticeDelete,
  ...data
}: Data) {
  const [check, setCheck] = useState<boolean>(false);
  return (
    <NoticeItemBox
      onClick={() => setCheck(!check)}
      check={check}
      noticeDelete={noticeDelete}
    >
      <ItemTitle>댓글</ItemTitle>
      <ItemContent>
        <p>{data.title}</p>
        <ItemSort>{data.sort}</ItemSort>
        <span>1분전</span>
      </ItemContent>
    </NoticeItemBox>
  );
}
