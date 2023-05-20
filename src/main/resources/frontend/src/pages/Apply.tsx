import React, { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import { BiArrowBack } from "react-icons/bi";
import {PortfolioView} from "../components/MyPage/PortfolioComplete";

const ApplyBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    justify-items: center;
`;

const Wrapper  = styled.div`
    display: grid;
    grid-auto-columns: repeat(6,minmax(10px, max-content));
    grid-template-rows: 1fr;
    align-items: center;
    padding: 10px;
    h3{
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 30px;
        color: var(--color-sub-1);
    }
    
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 60px;
    
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
    width: 80%;
    justify-content: center;
`;
const PortfolioWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const PortfolioContainer = styled.div`
    display: flex;
    border-radius: 10px;
    width: 1000px;
    height: 100%;
`;

const Editcontainer = styled.div`
    display: flex;
    justify-content: center;
`;
const GoBack = styled.div`
  padding: 0 20px 0 20px;
  color: var(--color-sub-1);
  font-size: 16px;
  font-weight: 500;
  svg {
    width: 20px;
    height: 20px;
    fill: var(--color-sub-1);
  }
`;

interface ProjectItemInterface {
    id: number;
    title: string;
    content: string;
    selected: boolean;
  }

const Apply = () => {
    const [importProjectItems, setImportProjectItems] = useState<
    ProjectItemInterface[]
  >([
    {
      id: 1,
      title: "Repo Name",
      content: "Repo Intro",
      selected: false
    },
    {
      id: 4,
      title: "Repo Name",
      content: "Repo Intro",
      selected: false
    },
    {
      id: 5,
      title: "Repo Name2",
      content: "Repo Intro2",
      selected: false
    },
    {
      id: 6,
      title: "Repo Name3",
      content: "Repo Intro3",
      selected: false
    }
  ]);
    return(
        <ApplyBox>
        <Wrapper>
             <GoBack><BiArrowBack/></GoBack>
             <h3>지원서</h3>
            <Editcontainer>
            <EditorWrapper>
                <Editor content="" type="apply"/>
            </EditorWrapper>
            </Editcontainer>
            <h3>포트폴리오</h3>
            <PortfolioWrapper>
            <PortfolioContainer>
                <PortfolioView selectedProject={importProjectItems}/>
            </PortfolioContainer>
            </PortfolioWrapper>
            <ButtonContainer>
            <button>지원하기</button>
            </ButtonContainer>
        </Wrapper>
        </ApplyBox>
    )
}

export default Apply;