import React, { useState } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import Editor from "../../Editor";

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  border: none;
  border-radius: 10px;
  color: var(--color-sub-2);
  font-size: 16px;
  font-weight: 600;
  z-index: 1;
  & + & {
    margin-left: 15px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 0px;
  right: 30px;
`;

const Title = styled.input`
  border: none;
  border-bottom: solid 2px var(--color-sub-3);
  color: var(--color-sub-1);
  padding: 5px 5px 5px 50px;
  font-size: 32px;
  position: relative;
  width: 100%;
`;

const Hr = styled.hr`
  border: none;
  border-top: 2px solid var(--color-sub-3);
`;

const HrWrapper = styled.div`
  display: flex;
  flex: 1;
  border-top: 2px solid var(--color-sub-3);
`;

const TitleContainer = styled.div`
  display: flex;
  color: white;
  padding: 5px 5px 0px 50px;
  font-size: 32px;
  ${Hr} {
    margin-bottom: 5px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-sub-2);
  color: white;
  padding: 5px 5px 5px 50px;
  font-size: 32px;
  ${Hr} {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  border: none;
  background-color: var(--color-sub-2);
  color: white;
  font-size: 15px;
  padding: 5px 5px 5px 50px;
  margin-top: 20px;
  
`;

const EditorWrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 0px 0px 5px 50px;
  margin-bottom: 150px;
`;

interface PropsInterface {
  title: string;
  content: string;
  removeBackgroundColor: () => void;
}

const ProjectDetail = ({ title, content, removeBackgroundColor }: PropsInterface) => {
  const [projectTitle, setProjectTitle] = useState<string>(title);
  const [projectContent, setProjectContent] = useState<string>(content);
  const [isUser, setIsUser] = useState<boolean>(true); //User일 때
  const [isEditMode, setIsEditMode] = useState<boolean>(false); 
  const [currTitle, setCurrTitle] = useState(title);
  const [curContent, setCurContent] = useState(content);

  const onEditButton = () => {
    setIsEditMode(true);
    removeBackgroundColor();
  };

  const currTitleHandle = (e: any) => {
    console.log(e.target.value);
    setCurrTitle(e.target.value);
  };

  const onExitEditPage = () => {
    setIsEditMode(false);
    removeBackgroundColor();
    //setCurrTitle(title);
    //setCurContent(content);
  };

  const onSubmitEdit = () => {};

  const currContentHandle = (e: any) => {
    console.log(e);
    setCurContent(e);
  };

  return (
    <PortfolioContainer>
      {isUser ? (
        <ButtonContainer>
          <Button onClick={onEditButton} style={{ backgroundColor: "var(--color-main-4)" }}>
            수정하기
          </Button>
        </ButtonContainer>
      ) : ""}
      {isEditMode ? (
        <ButtonContainer>
          <Button
            style={{ backgroundColor: "var(--color-sub-3)" }}
            onClick={onExitEditPage}
          >
            나가기
          </Button>
          <Button style={{ backgroundColor: "var(--color-main-4)" }}>저장하기</Button>
        </ButtonContainer>
      ) : null}
      <TitleContainer>
        <Title
          value={currTitle}
          onChange={currTitleHandle}
          disabled={!isEditMode}
        />
        <HrWrapper>
          <Hr />
        </HrWrapper>
      </TitleContainer>
        {isEditMode ? (
          <EditorWrapper>
            <Editor content={content} type="project"/>
          </EditorWrapper>
        ) : (
          <ContentContainer>
          <Content>{projectContent}</Content>
          </ContentContainer>
        )}
      
    </PortfolioContainer>
  );
};

export default ProjectDetail;
