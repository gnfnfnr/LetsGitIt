import React, { useEffect, useState } from "react";
import PostItem, { PostItemInfo } from "../../components/PostItem";
import styled from "styled-components";
import { ReactComponent as LeftArrow } from "../../styles/Icons/LeftArrow.svg";
import { ReactComponent as RightArrow } from "../../styles/Icons/RightArrow.svg";

const BoardTitle = styled.h2`
  font-weight: 600;
  font-size: 40px;
  margin: 0;
  &>span: first-child {
    color: var(--color-main-4);
    text-transform: uppercase;
  }

  &>span: last-child {
    color: var(--color-sub-1);
  }
`;

const HotBoardBox = styled.section`
  background: var(--color-sub-2);
  padding: 69px 20px;
`;

const PostBox = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--width-max);
  gap: 40px;
  justify-content: space-around;

  @media (max-width: 520px) {
    width: 80%;
  }
`;

const BoardSlider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const HotBoardHeader = styled.div`
  max-width: var(--width-max);
  margin: 0px auto 24px;
  display: flex;
  justify-content: space-between;
`;

const PostNumber = styled.div`
  font-size: 14px;
  color: var(--color-sub-1);
  align-self: end;
`;

interface AllPostInfo {
  data: PostItemInfo[];
  name: string;
}

export default function HotPost({ data, name }: AllPostInfo) {
  const [postNumber, setPostNumber] = useState(3);
  const [hotData, setHotData] = useState<PostItemInfo[][] | null>(null);
  const [slide, setSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const divide: PostItemInfo[][] = Array.from(
      { length: Math.ceil(data.length / postNumber) },
      () => []
    );

    data.map((content, index) =>
      divide[Math.ceil((index + 1) / postNumber) - 1].push(content)
    );
    setHotData(divide);
  }, [data, postNumber]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1285) {
      console.log(window.innerWidth);
      setPostNumber(3);
    }
    if (window.innerWidth < 1280) {
      console.log(window.innerWidth);
      setPostNumber(2);
    }

    if (window.innerWidth < 960) {
      console.log(window.innerWidth);
      setPostNumber(1);
    }
  }, [windowWidth]);

  return (
    <HotBoardBox>
      <HotBoardHeader>
        <BoardTitle>
          <span>hot</span> <span>{name}</span>
        </BoardTitle>
        <PostNumber>
          {slide + 1} / {hotData?.length}
        </PostNumber>
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
            hotData[slide].map((item) => {
              return <PostItem {...item} key={item.id} />;
            })}
        </PostBox>{" "}
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
