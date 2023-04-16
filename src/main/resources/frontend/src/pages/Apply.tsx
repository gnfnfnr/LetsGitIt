import React, { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import PortfolioComplete from "../components/MyPage/PortfolioComplete";

const Wrapper  = styled.div`
    display; flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
    p{
        font-size: 36px;
        font-weight: 600;
        color: #EAEAEA;
    }
    button{
        text-align: center;
        font-size: 20px;
        font-weight: 550;
        width: 240px;
        height: 58px;
        border-radius: 60px;
        border: 2px solid #F9D5A2;
        color: #F9D5A2;
        &.hover{
            background-color: #F9D5A2;
            color: black;
        }
    }
`;

const EditorWrapper = styled.div`
    display: flex;
`;

const PortfolioWrapper = styled.div`
    display: flex;
`;

const Apply = () => {
    return(
        <Wrapper>
            <p>지원서</p>
            <EditorWrapper>
                <Editor content=""/>
            </EditorWrapper>
            <p>포트폴리오</p>
            <PortfolioWrapper>
            </PortfolioWrapper>
            <button>지원하기</button>
        </Wrapper>
    )
}

export default Apply;