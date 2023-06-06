import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--color-main-4);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  color: var(--color-sub-1);
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const CommitContainer = styled.div`
  width: 195px;
  height: 83px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 24px 7px 24px;
  box-sizing: border-box;
  background-color: var(--color-sub-2);
  margin-right: 5px;
  border-radius: 10px;
`;

const CommitDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    margin: 0;
    font-size: 15px;
  }
  span {
    font-size: 36px;
    font-weight: 500;
  }
`;

const ProgressBar = styled.div<{ width: number }>`
  width: 190px;
  height: 10px;
  position: relative;
  border-radius: 10px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 6px;
    background-color: var(--color-sub-3);
    width: 100%;
    border-radius: 30px;
  }
  &::after {
    width: ${(props) => props.width}%;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: var(--color-main-4);
    transition: width 0.5s ease-in-out;
    border-radius: 30px;
  }
`;
const Dot = styled.div`
  width: 16px;
  height: 16px;
  background: #f8d3a2;
  border-radius: 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const LevelContainer = styled.div`
  width: 283px;
  height: 83px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  background-color: var(--color-sub-2);
`;

const Text = styled.div`
  display: flex;
  align-items: flex-end;
  margin-right: 10px;
  p {
    font-size: 20px;
    margin-bottom: 7px;
  }
  span {
    font-size: 36px;
    font-weight: 500;
  }
`;

const CommitLevel = () => {
  return (
    <Wrapper>
      <CommitContainer>
        <CommitDetail>
          <p>내 커밋</p>
          <span>30</span>
        </CommitDetail>
        <CommitDetail>
          <p>팀 커밋</p>
          <span>226</span>
        </CommitDetail>
      </CommitContainer>
      <LevelContainer>
        <Text>
          <p>Lv.</p>
          <span>3</span>
        </Text>
        <ProgressBar width={30}>
          <Dot style={{ left: `${25}%` }} />
        </ProgressBar>
      </LevelContainer>
    </Wrapper>
  );
};

export default CommitLevel;
