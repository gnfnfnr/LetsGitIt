import React, { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import ProjectRoadmap from "../components/TeamMatching/TeamMatchingCreate/ProjectRoadmap";
import TeamStatus from "../components/TeamMatching/TeamMatchingCreate/TeamStatus";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: minmax(10px, auto) minmax(100px, 780px) minmax(30px, auto) minmax(100px, auto);
  margin-top: 50px;
  margin-bottom: 100px;
  justify-items: center;
`;

const Title = styled.input`
  border: none;
  border-bottom: solid 2px var(--color-sub-3);
  color: var(--color-sub-1);
  padding: 0 100px 10px 50px;
  font-size: 2rem;
  box-sizing: border-box;
  width: 100%;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 0 20px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 80%;
  color: var(--color-sub-1);
  font-size: 32px;
  height: 50px;
  justify-content: center;
  position: relative;
`;

const EditorWrapper = styled.div`
  display: flex;
  background-color: black;
  width: 80%;
  height: 90%;
  margin-bottom: 20px;
  justify-content: center;
  @media (max-width: 768px) {
    height: 60%;
  }
`;

const ProjectStatus = styled.div`
  height: 65px;
  display: flex;
  background-color: var(--color-sub-2);
  border-top: 2px solid var(--color-sub-3);
  padding: 0 0 0 30px;
  margin-top: 40px;
  font-size: 20px;
  font-weight: 550;
  width: 80%;
  p {
    width: 50%;
    color: var(--color-sub-1);
  }
`;

const ProjectStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 80%;
  & > div {
    margin-left: 30px;
    width: 50%;
  }
`;

const Button = styled.div`
  display: flex;
  border-radius: 10px;
  width: 84px;
  height: 40px;
  background-color: var(--color-main-4);
  color: var(--color-sub-2);
  font-size: 1rem;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
  @media (max-width: 768px) {
    width: 20%;
  }
`;

const TeamMatchingCreate = () => {
  const [currTitle, setCurrTitle] = useState("");
  const [content, setContent] = useState("content");
  const currTitleHandle = (e: any) => {
    console.log(e.target.value);
    setCurrTitle(e.target.value);
  };

  return (
    <Wrapper>
      <TitleContainer>
        <Title
          value={currTitle}
          placeholder="제목을 입력하세요"
          onChange={currTitleHandle}
        />
        <Button>게시하기</Button>
      </TitleContainer>

      <EditorWrapper>
        <Editor content={content} type="post" />
      </EditorWrapper>

      <ProjectStatus>
        <p>• 프로젝트 팀원구성</p>
        <p>• 프로젝트 진행방식</p>
      </ProjectStatus>

      <ProjectStatusContainer>
        <TeamStatus />
        <ProjectRoadmap />
      </ProjectStatusContainer>
      
    </Wrapper>
  );
};

export default TeamMatchingCreate;
