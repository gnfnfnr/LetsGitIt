import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import Editor from "../../Editor";
import ProjectDetailInfo from "./ProjectDetailInfo";
import ProjectDetailInput from "./ProjectDetailInput";

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 80%;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px; 
  margin-right: 50px; /* Adjust the right margin as needed */
  gap: 15px; /* Add gap between buttons */
  position: absolute; /* Add absolute positioning */
  right: 18%; /* Position it at the right side */
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


const Title = styled.input`
  border: none;
  border-bottom: solid 2px var(--color-sub-3);
  color: var(--color-sub-1);
  padding: 5px 5px 5px 50px;
  font-size: 32px;
  width: 100%;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
  
`;

const TitleContainer = styled.div`
  display: flex;
  color: var(--color-sub-1);
  padding: 5px 5px 0px 50px;
  font-size: 32px;
  width: 100%;
  
  ${Hr} {
    margin-bottom: 5px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.div`
  border: none;
  color: var(--color-sub-1);
  font-size: 15px;
  display: flex;
  width: 100%;
  background-color: var(--color-sub-2);
  padding: 30px 5px 5px 50px;
  font-size: 15px;
  margin-left: 50px;
  min-height: 500px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const EditorWrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 0px 0px 5px 50px;
  margin-bottom: 10px;
  width: 100%;
  height: 500px;
  @media (max-width: 768px) {
    height: 350px;
  }
`;

const ProjectDetailInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  margin-left: 50px;
  width: 100%;
`;

const DetailInputContainer = styled.div`
  display: flex;
`;

const ProjectStatus = styled.div`
  height: 65px;
  width: 750px;
  display: flex;
  background-color: var(--color-sub-2);
  border-top: 2px solid var(--color-sub-3);
  padding: 0 0 0 30px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 550;
  box-sizing: border-box;
  p {
    width: 50%;
    color: var(--color-sub-1);
  }
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 50px;
`;

interface PropsInterface {
  type: string;
  title: string;
  content: string;
  removeBackgroundColor: () => void;
}

const ProjectDetail = ({ type, title, content, removeBackgroundColor }: PropsInterface) => {
  const [projectTitle, setProjectTitle] = useState<string>(title);
  const [projectContent, setProjectContent] = useState<string>(content);
  const [isUser, setIsUser] = useState<boolean>(true); //User일 때
  const [isEditMode, setIsEditMode] = useState<boolean>(false); 
  const [currTitle, setCurrTitle] = useState(title);
  const [curContent, setCurContent] = useState(content);

  useEffect(()=>{
    if(type==="read"){
      setIsUser(false);
      setIsEditMode(false);
    }
  }, []);
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
      <TitleContainer>
        <Title
          value={currTitle}
          onChange={currTitleHandle}
          disabled={!isEditMode}
        />
      </TitleContainer>

      {isUser && !isEditMode ? (
        <ButtonContainer>
          <Button onClick={onEditButton} style={{ backgroundColor: "var(--color-main-4)" }}>
            수정하기
          </Button>
        </ButtonContainer>
      ) : null}

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
     
        {isEditMode ? (
          <>
          <EditorWrapper>
            <Editor content={content} type="project"/>
          </EditorWrapper>
          {/*<ProjectInfoContainer>
            <ProjectStatus>
              <p>• 프로젝트 정보</p>
            </ProjectStatus>
            <DetailInputContainer>
              <ProjectDetailInput />
            </DetailInputContainer>
          </ProjectInfoContainer>*/}
          </>
        ) : (
          <>
            <ProjectDetailInfoContainer>
              <ProjectDetailInfo />
            </ProjectDetailInfoContainer>
            <Content>{projectContent}</Content>
          </>
        )}
      
    </PortfolioContainer>
  );
};

export default ProjectDetail;
