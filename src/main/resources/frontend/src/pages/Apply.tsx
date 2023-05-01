import React, { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import PortfolioComplete from "../components/MyPage/PortfolioComplete";
import { BiArrowBack } from "react-icons/bi";

const ApplyBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
`;

const Wrapper  = styled.div`
    display; flex;
    flex-direction: column;
    padding: 10px;
    h3{
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 30px;
        color: var(--color-sub-1);
    }
    button{
        text-align: center;
        font-size: 20px;
        font-weight: 550;
        width: 240px;
        height: 58px;
        border-radius: 60px;
        border: 2px solid var(--color-main-4);
        color: var(--color-main-4);
        &.hover{
            background-color: var(--color-main-4);
            color: black;
        }
    }
`;

const EditorWrapper = styled.div`
    display: flex;
    margin-left: 60px;
    margin-bottom: 170px;
`;

const PortfolioWrapper = styled.div`
    display: flex;
    background-color: var(--color-sub-2);
    margin-bottom: 100px;
    margin-left: 60px;
    width: 745px;
    min-height: 615px;
    border-radius: 10px;
`;

const Editcontainer = styled.div`
    display: flex;
    flex-direction: column;
`;
const GoBack = styled.div`
  grid-column: span 3;
  padding: 0 20px 0 20px;
  color: var(--color-sub-1);
  font-size: 16px;
  font-weight: 500;
  svg {
    width: 15px;
    height: 15px;
    fill: var(--color-sub-1);
  }
`;

const Apply = () => {
    return(
        <ApplyBox>
        <Wrapper>
             <GoBack><BiArrowBack/></GoBack>
            <Editcontainer>
            <h3>지원서</h3>
            <EditorWrapper>
                <Editor content="" type="apply"/>
            </EditorWrapper>
            </Editcontainer>
            
            <h3>포트폴리오</h3>
            <PortfolioWrapper>
                
            </PortfolioWrapper>
            <button>지원하기</button>
        </Wrapper>
        </ApplyBox>
    )
}

export default Apply;