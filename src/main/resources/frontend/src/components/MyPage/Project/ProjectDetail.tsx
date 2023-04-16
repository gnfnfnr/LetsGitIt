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
  color: #222222;
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
  border-bottom: solid 2px #b2b2b2;
  color: #eaeaea;
  padding: 5px 5px 5px 50px;
  font-size: 32px;
  position: relative;
  width: 100%;
`;

const Hr = styled.hr`
  border: none;
  border-top: 2px solid #b2b2b2;
`;

const HrWrapper = styled.div`
  display: flex;
  flex: 1;
  border-top: 2px solid #b2b2b2;
`;

const TitleContainer = styled.div`
  display: flex;
  //background-color: #222222;
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
  background-color: #222222;
  color: white;
  padding: 5px 5px 5px 50px;
  font-size: 32px;
  ${Hr} {
    margin-bottom: 5px;
  }
`;

const Content = styled.div`
  border: none;
  background-color: #222222;
  color: white;
  font-size: 15px;
  padding: 5px 5px 5px 50px;
`;

const EditorWrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 0px 0px 5px 50px;
`;

interface PropsInterface {
  title: string;
  content: string;
}

const ProjectDetail = ({ title, content }: PropsInterface) => {
  const [projectTitle, setProjectTitle] = useState<string>(title);
  const [projectContent, setProjectContent] = useState<string>(content);
  const [isEditMode, setIsEditMode] = useState<boolean>(true); //User일 때
  const [editPage, setEditPage] = useState<boolean>(false);
  const [currTitle, setCurrTitle] = useState(title);
  const [curContent, setCurContent] = useState(content);

  const onEditButton = () => {
    setEditPage(true);
  };

  const currTitleHandle = (e: any) => {
    console.log(e.target.value);
    setCurrTitle(e.target.value);
  };

  const onExitEditPage = () => {
    setEditPage(false);
  };

  const onSubmitEdit = () => {};

  const currContentHandle = (e: any) => {
    console.log(e);
    setCurContent(e);
  };

  return (
    <PortfolioContainer>
      {isEditMode ? (
        <ButtonContainer>
          <Button onClick={onEditButton} style={{ backgroundColor: "#F9D5A2" }}>
            수정하기
          </Button>
        </ButtonContainer>
      ) : null}
      {editPage ? (
        <ButtonContainer>
          <Button
            style={{ backgroundColor: "#B2B2B2" }}
            onClick={onExitEditPage}
          >
            나가기
          </Button>
          <Button style={{ backgroundColor: "#F9D5A2" }}>저장하기</Button>
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
      
        {editPage ? (
          <EditorWrapper>
            <Editor content={content}/>
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
