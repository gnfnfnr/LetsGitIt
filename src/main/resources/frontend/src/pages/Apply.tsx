import React, { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import PortfolioComplete from "../components/MyPage/PortfolioComplete";

const Wrapper  = styled.div`
    display; flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p{
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 30px;
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
    margin-left: 100px;
    margin-bottom: 170px;
`;

const PortfolioWrapper = styled.div`
    display: flex;
    background-color: #222222;
    margin-bottom: 170px;
`;

const Editcontainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Apply = () => {
    return(
        <Wrapper>
            <Editcontainer>
            <p>지원서</p>
            <EditorWrapper>
                <Editor content="" type="apply"/>
            </EditorWrapper>
            </Editcontainer>
            <p>포트폴리오</p>
            <PortfolioWrapper>
            </PortfolioWrapper>
            <button>지원하기</button>
        </Wrapper>
    )
}

export default Apply;