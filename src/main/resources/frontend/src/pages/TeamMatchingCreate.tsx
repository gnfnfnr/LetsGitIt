import React, { useState } from "react";
import styled from "styled-components";
import Editor from "../components/Editor";
import ProjectRoadmap from "../components/TeamMatching/TeamMatchingCreate/ProjectRoadmap";
import TeamStatus from "../components/TeamMatching/TeamMatchingCreate/TeamStatus";

const Wrapper  = styled.div`
    display; flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    justify-content: center;
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
  width: 80%;
`;

const HrWrapper = styled.div`
  display: flex;
  flex: 1;
  border-top: 2px solid #b2b2b2;
  width: 100%;
`;
const TitleContainer = styled.div`
  display: flex;
  width: 80%;
  color: white;
  padding: 5px 5px 0px 50px;
  font-size: 32px;
  ${Hr} {
    margin-bottom: 5px;
  }
`;

const EditorWrapper = styled.div`
  display: flex;
  background-color: black;
  padding: 0px 0px 5px 50px;
`;

const ProjectStatus = styled.div`
  height: 65px;
  display: flex;
  background-color: #222222;
  align-items: center;
  border-top: 2px solid #B2B2B2;
  padding: 0 0 0 30px;
  margin-top: 40px;
  p{
    font-size: 20px;
    font-weight: 550;
    color: #EAEAEA;
    & + & {
        margin-right: 400px;
    } 
  }
`;

const ProjectStatusContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

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
        <HrWrapper>
          <Hr />
        </HrWrapper>
      </TitleContainer>

      <EditorWrapper>
            <Editor content={content} type="post"/>
    </EditorWrapper>
    <ProjectStatus>
        <p>프로젝트 팀원구성</p>
        <p>프로젝트 진행방식</p>
    </ProjectStatus>
    <ProjectStatusContainer>
        <TeamStatus />
        <ProjectRoadmap />
    </ProjectStatusContainer>
    </Wrapper>
    )
}

export default TeamMatchingCreate;