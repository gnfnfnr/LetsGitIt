import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Wrapper = styled.div`
    color: var(--color-sub-1);
`;

const ProgressContainer = styled.div`
  display: flex;
  width: 255.55px;
`;

const ProgressCircle = styled.div`
  width: 30px;
  height: 10px;
  border-radius: 30px;
  border: 1px solid black;
  margin: 0 3px;
  transition: background-color 0.2s;
  border: none;

  &.filled:nth-child(1) {
    width: 120px;
    background-color: #9734DD;
  }

  &.filled:nth-child(2) {
    width: 76px;
    background-color: #B96CC8;
  }

  &.filled:nth-child(3) {
    width: 46px;
    background-color: #DEA9B2;
  }
  &.filled:nth-child(4) {
    width: 10px;
    background-color: #F9D5A2;
  }
`;

const Text = styled.p`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const moveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${moveAnimation} 1.5s linear forwards;
  align-items: flex-start;
`;

const ProgressBar = () => {
  const [progress, setProgress] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 4) {
          return prevProgress + 1;
        }
        return prevProgress;
      });
    }, 1500 / 4);

    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressContainer>
      {[0, 1, 2, 3].map((index) => (
        <ProgressCircle
          key={index}
          className={progress > index ? "filled" : ""}
        ></ProgressCircle>
      ))}
    </ProgressContainer>
  );
};

const Animation = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 3) {
          return prevProgress + 1;
        }
        return prevProgress;
      });
    }, 3500 / 3);

    return () => clearInterval(interval);
  }, []);

  return (
      <Wrapper>
    <Container>
        <Text>Let’s git it !</Text>
        <ProgressBar />
    </Container>
    </Wrapper>
  );
};

export default Animation;
