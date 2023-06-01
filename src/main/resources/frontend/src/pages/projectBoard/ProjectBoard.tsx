import React from "react";
import styled from "styled-components";
import { AiFillSetting } from "react-icons/ai";
import GoBack from "../../components/GoBack";
import CommitGraph from "./CommitGraph";
import CommitLevel from "./CommitLevel";
import ProjectChatBox from "./ProjectChatBox";
import { ProjectDday } from "./ProjectDday";
import Language from "./Language";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(4, minmax(auto, max-content));
  grid-template-rows: repeat(5, minmax(auto, max-content));
  gap: 40px;
  margin-bottom: 100px;
  grid-template-areas:
    "back back back back"
    "team title title title"
    "team dday dday lang"
    "team dday dday level"
    "team month today chat";
`;

const BackContainer = styled.div`
  display: flex;
  grid-area: back;
`;

const TeamContainer = styled.div`
  display: flex;
  grid-area: team;
  width: 290px;
  height: 740px;
  background-color: var(--color-sub-2);
`;

const TitleContainer = styled.div`
  display: flex;
  grid-area: title;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-sub-2);
  border-radius: 14px;
  color: var(--color-sub-1);
  width: 950px;
  height: 50px;
  padding: 12px 20px;
  font-size: 1.5rem;
  font-weight: 500;

  svg {
    width: 16px;
    height: 16px;
    fill: var(--color-sub-1);
    cursor: pointer;
  }
`;

const DdayContainer = styled.div`
  width: 400px;
  height: 272px;
  grid-area: dday;
`;

const LangContainer = styled.div`
  display: flex;
  grid-area: lang;
  width: 510px;
  height: 127px;
`;

const ChatContainer = styled.div`
  width: 510px;
  height: 330px;
  grid-area: chat;
`;

const CommitGraphContainer = styled.div`
  width: 180px;
  height: 330px;
  grid-area: month;
`;

const TodayCommitContainer = styled.div`
  width: 180px;
  height: 330px;
  grid-area: today;
`;

const CommitLevelContainer = styled.div`
  width: 510px;
  height: 105px;
  grid-area: level;
`;

export const ProjectBoard = () => {
  const onClickEditButton = () => {
    //go to edit page
  };
  return (
    <Wrapper>
      <BackContainer>
        <GoBack />
      </BackContainer>
      <TeamContainer></TeamContainer>

      <TitleContainer>
        커리어 SNS 기반 멘토링 플랫폼 프로젝트{" "}
        <AiFillSetting onClick={onClickEditButton} />
      </TitleContainer>

      <DdayContainer>
        <ProjectDday />
      </DdayContainer>
      <LangContainer>
        <Language />
      </LangContainer>
      <CommitLevelContainer>
        <CommitLevel />
      </CommitLevelContainer>
      <ChatContainer>
        <ProjectChatBox />
      </ChatContainer>
      <CommitGraphContainer>
        <CommitGraph type="month" />
      </CommitGraphContainer>
      <TodayCommitContainer>
        <CommitGraph type="today" />
      </TodayCommitContainer>
    </Wrapper>
  );
};
