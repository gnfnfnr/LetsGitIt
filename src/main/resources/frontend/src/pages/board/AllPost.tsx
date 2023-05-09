import React, { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "../../styles/icon/DownArrow.svg";

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

const MainBoardBox = styled.main``;
const PostMainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: center;
  justify-content: center;
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

const MainBoardPages = styled.div`
  display: flex;
  margin: 120px auto;
  justify-content: center;
  gap: 16px;
`;

const PageNumber = styled.div<{ active: boolean }>`
  cursor: pointer;
  font-weight: 700;
  font-size: 20px;
  color: var(--color-${({ active }) => (active ? "main-4" : "sub-1")});
  border-bottom: ${({ active }) =>
    active ? "3px solid var(--color-main-4)" : "none"};
`;

const BoardSort = styled.div`
  color: var(--color-sub-1);
  cursor: pointer;
`;

interface PostItemInfo {
  id: number;
  title: string;
  image: string;
  watch: number;
  reply: number;
  scrap: number;
  user: {
    username: string;
    image: string;
  };
  tags: string[] | null;
}

interface AllPostInfo {
  data: PostItemInfo[];
  name: string;
}

export default function AllPost({ data, name }: AllPostInfo) {
  const [mainData, setMainData] = useState<PostItemInfo[][] | null>(null);
  const [fullPageNumber, setFullPageNumber] = useState<null | number[]>(null);
  useEffect(() => {
    const dividePages: PostItemInfo[][] = Array.from(
      { length: Math.ceil(data.length / 9) },
      () => []
    );
    data.map((content, index) =>
      dividePages[Math.ceil((index + 1) / 9) - 1].push(content)
    );
    setMainData(dividePages);
  }, [data]);

  useEffect(() => {
    if (mainData) {
      setFullPageNumber(
        Array.from({ length: mainData.length }, (_, index) => index + 1)
      );
    }
  }, [mainData]);

  const [page, setPage] = useState(0);

  return (
    <>
      <MainBoardBox>
        <MainBoardHeader>
          <BoardTitle>
            <span>모든</span> <span>{name}</span>
          </BoardTitle>
          <BoardSort>
            최신순
            <DownArrow />
          </BoardSort>
        </MainBoardHeader>
        <PostMainBox>
          {mainData && mainData[page].map((item) => <PostItem {...item} />)}
        </PostMainBox>
        <MainBoardPages>
          {fullPageNumber &&
            fullPageNumber.map((number) => (
              <PageNumber
                key={`page${number}`}
                onClick={() => {
                  setPage(number - 1);
                }}
                active={page === number - 1 ? true : false}
              >
                {number}
              </PageNumber>
            ))}
        </MainBoardPages>
      </MainBoardBox>
    </>
  );
}
