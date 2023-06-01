import React, { useEffect, useState } from "react";
import { redirect } from "react-router";
import styled from "styled-components";
import axios from "axios";

const Wrapper = styled.div`
  display: flex;
  color: var(--color-sub-1);
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StartContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    width: 278px;
    height: 38px;
    border-radius: 30px;
    font-size: 1.25rem;
    background-color: var(--color-sub-4);
    button{
        width: 120px;
        border-radius: 30px;
        height: 38px;
        color: var(--color-sub-2);
        background-color: var(--color-sub-1);
        margin-left: 10px;
        :hover{
            background-color: #C3C3C3;
        }
    }

    @media (max-width: 768px) {

    justify-content: center;
    button {
      margin-left: auto;
    }
    span {
      margin-left: auto;
    }
  }
  }
`;

const TextContainer = styled.div`
  text-align: right;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`;

const Intro = () => {
  const handleOpenNewTab = (url: string) => {
    window.open(url, "_blank", "noopener, noreferrer");
  };

  return (
    <Wrapper>
      <TextContainer>
        혼자서 하기 어려운 코딩 공부
        <br /> 이제는 다른 개발들과 함께 하세요
      </TextContainer>
      <StartContainer>
        <span>깃허브 계정으로</span>
        <button
          onClick={() =>
            handleOpenNewTab("https://github.com/login/oauth/authorize?client_id=2fdad6f3e6e4332a9edc")}
        >
          시작하기
        </button>
      </StartContainer>
    </Wrapper>
  );
};

export default Intro;
