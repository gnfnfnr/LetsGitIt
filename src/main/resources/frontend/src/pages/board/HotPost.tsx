import React, { useEffect, useState } from "react";
import PostItem from "../../components/PostItem";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../styles/icon/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../styles/icon/RightArrow.svg";

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
  width: 100%;
  max-width: var(--width-max);
  gap: 40px;
`;

const BoardSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HotBoardHeader = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;
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

export default function HotPost({ data, name }: AllPostInfo) {
  const [hotData, setHotData] = useState<PostItemInfo[][] | null>(null);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const divide: PostItemInfo[][] = Array.from(
      { length: Math.ceil(data.length / 3) },
      () => []
    );

    data.map((content, index) =>
      divide[Math.ceil((index + 1) / 3) - 1].push(content)
    );
    setHotData(divide);
  }, [data]);

  return (
    <HotBoardBox>
      <HotBoardHeader>
        <BoardTitle>
          <span>hot</span> <span>{name}</span>
        </BoardTitle>
      </HotBoardHeader>

      <BoardSlider>
        <LeftArrow
          onClick={() =>
            setSlide(
              slide
                ? hotData
                  ? slide - 1
                  : 0
                : hotData
                ? hotData.length - 1
                : 0
            )
          }
        />
        <PostBox>
          {hotData &&
            hotData[slide].map((item, index) => {
              return <PostItem {...item} />;
            })}
        </PostBox>
        <RightArrow
          onClick={() =>
            setSlide(
              slide === (hotData ? hotData.length - 1 : 0) ? 0 : slide + 1
            )
          }
        />
      </BoardSlider>
    </HotBoardBox>
  );
}
