import React, { useState } from "react";
import styled from "styled-components";
import projectData from "../resource/projectData.json";
import { ReactComponent as User } from "../styles/Icons/User.svg";
import { ReactComponent as RightLongArrow } from "../styles/Icons/RightLongArrow.svg";
import { ReactComponent as DownArrow } from "../styles/Icons/DownArrow.svg";

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
const ProjectInfo = styled.div`
  color: var(--color-sub-1);
  position: absolute;
  bottom: 0;
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
  max-width: 290px;

  & > img {
    object-fit: cover;
    width: 290px;
    height: 290px;
  }
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
`;

const ProjectTeam = styled.div`
  display: flex;
  gap: 8px;
  position: absolute;
  right: 20px;
  top: 15px;
  align-items: center;
  color: var(--color-sub-1);
`;

const UserProject = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;

  & > div {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 20px;
  }
`;
const UserCommit = styled.div``;
const UserProcess = styled.div``;
const UserDDay = styled.div``;

export default function Project() {
  const [data, setData] = useState(projectData);
  return (
    <ProjectBox>
      <section>
        <ProjectHeader>내프로젝트</ProjectHeader>
        <ProjectUser>
          {data.map(({ id, image, title }) => (
            <ProjectPost key={`user${id}`}>
              <ProjectNavigate>
                <RightLongArrow />
              </ProjectNavigate>
              <img
                alt="미리보기"
                src={
                  image
                    ? image
                    : require("../assets/images/defaultProjectImage.png")
                }
              />
              <ProjectInfo>{title}</ProjectInfo>
              <UserProject>
                <UserDDay>
                  <span>day</span>
                </UserDDay>
                <UserProcess></UserProcess>
                <UserCommit>
                  <span>commit</span>
                </UserCommit>
              </UserProject>
            </ProjectPost>
          ))}
        </ProjectUser>
      </section>
      <section>
        <ProjectHeader>hot 프로젝트</ProjectHeader>
        <ProjectHot>
          {data.map(({ id, image, title }, index) => (
            <>
              {index < 4 && (
                <ProjectPost key={`hot${id}`}>
                  <ProjectNavigate>
                    <RightLongArrow />
                  </ProjectNavigate>
                  <img
                    alt="미리보기"
                    src={
                      image
                        ? image
                        : require("../assets/images/defaultProjectImage.png")
                    }
                  />
                  <ProjectInfo>
                    <InfoNumber>{index + 1}</InfoNumber>
                    <div>{title}</div>
                  </ProjectInfo>
                </ProjectPost>
              )}
            </>
          ))}
        </ProjectHot>
      </section>
      <section>
        <ProjectHeader>모든 프로젝트</ProjectHeader>
        <ProjectField>
          최신순
          <DownArrow />
        </ProjectField>
        <ProjectMain>
          {data.map(({ id, image, title, team }) => (
            <ProjectSmallPost key={`all${id}`}>
              <ProjectTeam>
                <User />
                {team.length}
              </ProjectTeam>
              <img
                alt="미리보기"
                src={
                  image
                    ? image
                    : require("../assets/images/defaultProjectImage.png")
                }
              />
              <SmallPostInfo>{title}</SmallPostInfo>
            </ProjectSmallPost>
          ))}
        </ProjectMain>
      </section>
    </ProjectBox>
  );
}
