import React, { useState } from "react";
import styled from "styled-components";
import projectData from "../resource/projectData.json";
import { ReactComponent as User } from "../styles/Icons/User.svg";
import { ReactComponent as RightLongArrow } from "../styles/Icons/RightLongArrow.svg";
import { ReactComponent as DownArrow } from "../styles/Icons/DownArrow.svg";
import { ReactComponent as Chatting } from "../styles/Icons/Chatting.svg";
import InfoBar from "../components/InfoBar";

const ProjectBox = styled.div`
  max-width: var(--width-max);
  margin: 0 auto;

  & > section {
    margin-bottom: 120px;
  }

  & > section:first-child {
    margin-top: 90px;
  }
`;

const ProjectPost = styled.div`
  position: relative;
  max-width: 320px;
  max-height: 320px;

  & > img {
    object-fit: cover;
    width: 320px;
    height: 320px;
  }
`;
const ProjectNavigate = styled.div`
  position: absolute;
  right: 35px;
  top: 35px;
`;
const ProjectInfo = styled.div<{ hover?: boolean }>`
  color: var(--color-sub-1);
  position: absolute;
  ${({ hover }) => (hover ? "top" : "bottom")}: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0 30px 24px;
  box-sizing: border-box;
`;
const ProjectHeader = styled.div`
  display: grid;
  color: var(--color-sub-1);
  font-size: 32px;
  grid-template-columns: 1fr 300px 1fr;
  align-items: center;
  margin-bottom: 60px;
  text-align: center;
  text-transform: uppercase;
  &::before {
    content: "";
    background: var(--color-sub-1);
    height: 2px;
    width: 100%;
  }
  &::after {
    content: "";
    background: var(--color-sub-1);
    height: 2px;
    width: 100%;
  }
`;

const ProjectUser = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  width: 100%;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    width: 20px; /*스크롤바의 너비*/
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-sub-2); /*스크롤바의 색상*/
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background-color: var(--color-sub-3); /*스크롤바의 색상*/
    border-radius: 10px;
  }
`;
const ProjectHot = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1330px) {
    justify-content: center;
  }
`;

const InfoNumber = styled.div`
  font-size: 64px;
`;

const ProjectMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const ProjectSmallPost = styled.div`
  position: relative;
  width: 290px;
`;

const SmallPostInfo = styled.div`
  font-weight: 500;
  color: var(--color-sub-1);
  padding: 20px 10px 0;
`;

const ProjectField = styled.div`
  font-weight: 600;
  color: var(--color-sub-1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 25px;
  cursor: pointer;
  position: relative;
  z-index: 20;
`;

const ProjectTeam = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  right: 20px;
  top: 15px;
  align-items: center;
  color: var(--color-sub-1);
  z-index: 10;
`;

const UserProject = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px;
  box-sizing: border-box;
  font-weight: bold;
  color: var(--color-sub-1);
  & > div {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
    height: 50%;
  }
`;
const UserCommit = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserProcess = styled.div`
  width: calc(50% - 8px);
`;
const UserDDay = styled.div`
  width: calc(50% - 8px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 8px;
  box-sizing: border-box;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  & > strong {
    font-weight: 500;
    font-size: 40px;
  }
`;

const DDayCalendar = styled.div`
  align-self: end;
  position: relative;

  & > span {
    position: absolute;
    top: 50%;
    left: 45%;
    transform: translate(-50%, -50%);
    color: var(--color-sub-2);
    font-weight: 600;
    font-size: 12px;
  }
`;

const FieldList = styled.ul`
  all: unset;
  list-style: none;
  position: absolute;
  bottom: -152px;
  z-index: 10;
  background: var(--color-sub-3);
  border-radius: 8px;
  color: var(--color-sub-2);
  padding: 9px;

  & > li:not(:last-child) {
    cursor: pointer;
    margin-bottom: 16px;
  }
`;

const ProjectTags = styled.div`
  position: absolute;
  color: var(--color-sub-2);
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;
const TagItem = styled.span`
  padding: 6px 10px;
  background: var(--color-sub-1);
  border-radius: 10px;
`;

const ProjectInfoDetail = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: var(--color-sub-1);
  margin-top: 10px;
  justify-content: end;
`;

const ProjectAll = styled.div`
  position: relative;
  & > img {
    object-fit: cover;
    width: 290px;
    height: 290px;
  }
`;

export default function Project() {
  const [data, setData] = useState(projectData);
  const [showField, setShowField] = useState(false);
  const [hover, setHover] = useState("");
  return (
    <ProjectBox>
      <section>
        <ProjectHeader>내프로젝트</ProjectHeader>
        <ProjectUser>
          {data.map(({ id, image, title, startDate, process }) => {
            const diff =
              (new Date().getTime() - new Date(startDate).getTime()) /
              (1000 * 60 * 60 * 24);
            return (
              <ProjectPost
                key={`user${id}`}
                onMouseEnter={() => setHover(`user${id}`)}
                onMouseLeave={() => setHover("")}
              >
                <img
                  alt="미리보기"
                  src={
                    image
                      ? image
                      : require("../assets/images/defaultProjectImage.png")
                  }
                />
                {hover === `user${id}` ? (
                  <UserProject>
                    <UserDDay>
                      <UserInfo>
                        <strong>{Math.floor(diff)}</strong>
                        <span>DAY</span>
                      </UserInfo>
                      <DDayCalendar>
                        <Chatting />
                        <span>3</span>
                      </DDayCalendar>
                    </UserDDay>
                    <UserProcess></UserProcess>
                    <UserCommit>
                      <UserInfo>
                        <strong>226</strong>
                        <span>commit</span>
                      </UserInfo>
                      <InfoBar process={process} />
                    </UserCommit>
                  </UserProject>
                ) : (
                  <>
                    <ProjectNavigate>
                      <RightLongArrow />
                    </ProjectNavigate>
                    <ProjectInfo>{title}</ProjectInfo>
                  </>
                )}
              </ProjectPost>
            );
          })}
        </ProjectUser>
      </section>
      <section>
        <ProjectHeader>hot 프로젝트</ProjectHeader>
        <ProjectHot>
          {data.map(({ id, image, title, tags, team }, index) => (
            <>
              {index < 4 && (
                <ProjectPost
                  key={`hot${id}`}
                  onMouseEnter={() => setHover(`hot${id}`)}
                  onMouseLeave={() => setHover("")}
                >
                  <img
                    alt="미리보기"
                    src={
                      image
                        ? image
                        : require("../assets/images/defaultProjectImage.png")
                    }
                  />
                  <ProjectNavigate>
                    <RightLongArrow />
                  </ProjectNavigate>
                  <ProjectInfo hover={hover === `hot${id}`}>
                    <InfoNumber>{index + 1}</InfoNumber>
                    <div>{title}</div>
                    {hover === `hot${id}` && (
                      <ProjectInfoDetail>
                        <User />
                        {team.length}
                      </ProjectInfoDetail>
                    )}
                  </ProjectInfo>
                  {hover === `hot${id}` && (
                    <ProjectTags>
                      {tags?.map((tag) => (
                        <TagItem>#{tag}</TagItem>
                      ))}
                    </ProjectTags>
                  )}
                </ProjectPost>
              )}
            </>
          ))}
        </ProjectHot>
      </section>
      <section>
        <ProjectHeader>모든 프로젝트</ProjectHeader>
        <ProjectField onClick={() => setShowField(!showField)}>
          최신순
          <DownArrow />
          {showField && (
            <FieldList>
              <li>목표 달성률</li>
              <li>조회순</li>
              <li>최신순</li>
              <li>커밋순</li>
            </FieldList>
          )}
        </ProjectField>
        <ProjectMain>
          {data.map(({ id, image, title, team, tags }) => (
            <ProjectSmallPost
              key={`all${id}`}
              onMouseEnter={() => setHover(`all${id}`)}
              onMouseLeave={() => setHover("")}
            >
              <ProjectTeam>
                <User />
                {team.length}
              </ProjectTeam>
              <ProjectAll>
                <img
                  alt="미리보기"
                  src={
                    image
                      ? image
                      : require("../assets/images/defaultProjectImage.png")
                  }
                />
                {hover === `all${id}` && (
                  <ProjectTags>
                    {tags?.map((tag) => (
                      <TagItem>#{tag}</TagItem>
                    ))}
                  </ProjectTags>
                )}
              </ProjectAll>
              <SmallPostInfo>{title}</SmallPostInfo>
            </ProjectSmallPost>
          ))}
        </ProjectMain>
      </section>
    </ProjectBox>
  );
}
