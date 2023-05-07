import React, { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import ProjectRoadmap from "../components/TeamMatching/TeamMatchingCreate/ProjectRoadmap";
import TeamStatus from "../components/TeamMatching/TeamMatchingCreate/TeamStatus";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 100px;
`;

const Title = styled.input`
  border: none;
  border-bottom: solid 2px var(--color-sub-3);
  color: var(--color-sub-1);
  padding: 0 100px 10px 50px;
  font-size: 32px;
  box-sizing: border-box;
  width: 1200px;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 80%;
  color: white;
  font-size: 32px;
  width: 1200px;
  justify-content: center;
  position: relative;
`;

const EditorWrapper = styled.div`
  background-color: black;
  width: 1200px;
  margin-top: 20px;
  justify-content: center;
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
  width: 1200px;
  box-sizing: border-box;

  p {
    width: 50%;
    color: var(--color-sub-1);
  }
`;

const ProjectStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & > div {
    margin-left: 15px;
    padding: 10px;
    width: 50%;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
`;

const Button = styled.div`
  display: flex;
  border-radius: 10px;
  width: 84px;
  height: 40px;
  background-color: var(--color-main-4);
  color: var(--color-sub-2);
  font-size: 16px;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  bottom: 10px;
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
      <Bottom>
        <ProjectStatusContainer>
          <TeamStatus />
          <ProjectRoadmap />
        </ProjectStatusContainer>
      </Bottom>
    </Wrapper>
  );
};

export default TeamMatchingCreate;
