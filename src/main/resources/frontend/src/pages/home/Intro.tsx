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
`;

const StartContainer = styled.div`
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: flex-end;
    width: 278px;
    height: 38px;
    border-radius: 30px;
    font-size: 20px;
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
`;

const TextContainer = styled.div`
    text-align: right;
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 30px;
`;

const Intro = () => {

    const userCode = [];
    const handleOpenNewTab = (url : string) => {
        window.open(url, "_blank", "noopener, noreferrer");
      };

      ///login/github/authorized?code=61d040a0e52a7b736648
 
      //

      

    return(
        <Wrapper>
            <TextContainer>
                혼자서 하기 어려운 코딩 공부<br /> 이제는 다른 개발들과 함께 하세요
            </TextContainer>
            <StartContainer>
                깃허브 계정으로
                <button onClick={() => handleOpenNewTab("https://github.com/login/oauth/authorize?client_id=2fdad6f3e6e4332a9edc")}>시작하기</button>
            </StartContainer>
        </Wrapper>
    );
}

export default Intro;