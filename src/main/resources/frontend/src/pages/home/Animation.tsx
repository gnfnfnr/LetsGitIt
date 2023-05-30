import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const Wrapper = styled.div`
  color: var(--color-sub-1);
  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const fadeTransition = css`
  &.fade-enter {
    opacity: 0;
  }

  &.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }

  &.fade-exit {
    opacity: 1;
  }

  &.fade-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`;

const FadeInTransition = styled.div`
  ${fadeTransition};
`;

const ProgressCircle = styled.div`
  width: 30px;
  height: 10px;
  border-radius: 30px;
  border: 1px solid black;
  margin: 0 3px;
  transition: background-color 0.2s;
  border: none;

  &.filled {
    width: 120px;
    background-color: #9734dd;
  }

  &.filled:nth-child(2) {
    width: 76px;
    background-color: #b96cc8;
  }

  &.filled:nth-child(3) {
    width: 46px;
    background-color: #dea9b2;
  }
  &.filled:nth-child(4) {
    width: 10px;
    background-color: #f9d5a2;
  }
`;

const Text = styled.p`
  font-size: 3.125rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const moveAnimation = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${moveAnimation} 1.5s linear forwards;
`;

const AfterContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 17px;
`;

const ProgressAfterCircle = styled.div<{ width: number; color: string }>`
  display: flex;
  width: 30px;
  height: 10px;
  border-radius: 30px;
  border: 1px solid black;
  margin: 0 3px;
  background-color: ${({ color }) => color};
  border: none;
  width: ${(props) => props.width}px;
  box-shadow: -97px 65px 0px 0px var(--color-sub-4);
`;

const ProgressCircleContainer = styled.div`
  display: flex;
`;
const colors = ["#9734DD", "#B96CC8", "#DEA9B2", "#F9D5A2"];
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
    <ProgressCircleContainer>
      {[1, 2, 3, 4].map((index) => (
        <ProgressCircle
          key={index}
          className={progress >= index ? "filled" : ""}
          color={colors[index]}
        ></ProgressCircle>
      ))}
    </ProgressCircleContainer>
  );
};

const AfterProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > :nth-child(2),
  > :nth-child(3) {
    margin-left: 97px;
  }

  > :nth-child(2) {
    margin-bottom: 56px;
  }
`;

const AfterProgressContainer = () => {
  const indexArray = [97, 50, 82];
  const widthArray1 = [93, 75, 71];
  const widthArray2 = [43, 75, 98];

  return (
    <AfterProgressWrapper>
      <AfterContainer>
        {indexArray.map((index, i) => (
          <ProgressAfterCircle key={index} width={index} color={colors[0]} />
        ))}
      </AfterContainer>
      <AfterContainer>
        {widthArray1.map((width, i) => (
          <ProgressAfterCircle
            key={`width1-${i}`}
            width={width}
            color={colors[1]}
          />
        ))}
      </AfterContainer>
      <AfterContainer>
        {widthArray1.map((width, i) => (
          <ProgressAfterCircle
            key={`width2-${i}`}
            width={width}
            color={colors[2]}
          />
        ))}
      </AfterContainer>
      <AfterContainer>
        {widthArray2.map((width, i) => (
          <ProgressAfterCircle
            key={`width2-${i}`}
            width={width}
            color={colors[3]}
          />
        ))}
      </AfterContainer>
    </AfterProgressWrapper>
  );
};

const Animation = () => {
  const [progress, setProgress] = useState(0);
  const [animationFinished, setAnimationFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 3) {
          return prevProgress + 1;
        }
        return prevProgress;
      });
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 3) {
      setTimeout(() => {
        setAnimationFinished(true);
      }, 100);
    }
  }, [progress]);

  return (
    <Wrapper>
      <Container>
        <Text>Let’s git it!</Text>
        <FadeInTransition>
          {animationFinished ? <AfterProgressContainer /> : <ProgressBar />}
        </FadeInTransition>
      </Container>
    </Wrapper>
  );
};

export default Animation;
