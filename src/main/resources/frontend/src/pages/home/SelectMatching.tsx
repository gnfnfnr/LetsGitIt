import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import projectData from "../../resource/projectData.json";
import { ReactComponent as RightArrow } from "../../styles/Icons/RightArrow.svg";
import { ReactComponent as LeftArrow } from "../../styles/Icons/LeftArrow.svg";

const SelectMatchingBox = styled.article`
  margin-bottom: 115px;
`;
const SelectTitle = styled.p`
  max-width: 1360px;
  font-weight: 600;
  font-size: 36px;
  color: var(--color-sub-1);
  margin: 0 auto 35px;
  padding: 0px 40px;
  & > span {
    margin-left: 8px;
    color: var(--color-main-4);
  }
`;
const SelectSub = styled.div`
  width: 100%;
  color: #ffffff;
  background: #222222;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
  max-width: 1360px;
  margin: 0 auto;
`;

const SelectMovement = styled.button`
  font-weight: 500;
  font-size: 18px;
  color: var(--color-main-4);
  border: 1px solid var(--color-main-4);
  padding: 20px 15px;
  cursor: pointer;

  &:hover {
    background: var(--color-main-4);
    color: #000000;
    font-weight: 500;
  }
`;

const ContentTeam = styled.ul`
  all: unset;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  padding: 35px 0 40px;
  justify-content: center;
  max-height: 139px;
  overflow: auto;

  @media (max-width: 900px) {
    max-height: 280px;
    overflow: auto;
  }

  @media (max-width: 500px) {
    max-height: 100px;
    overflow: auto;
  }
`;

const TeamUser = styled.li`
  display: flex;
  flex-direction: column;
  background: rgb(51, 51, 51);
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 15px 10px;
  & > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    @media (max-width: 500px) {
      width: 30px;
      height: 30px;
    }
  }

  & > span {
    padding: 10px 20px;
    color: var(--color-sub-1);
    background: var(--color-sub-2);
    border-radius: 8px;
  }
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const ContentTitle = styled.h4`
  font-weight: 500;
  font-size: 30px;
  margin: 0 0 11px;
  text-align: center;
  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

const ContentDate = styled.span`
  & > span {
    color: var(--color-main-4);
  }
`;

const SelectContent = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 100px;
  padding: 0 40px;
  @media (max-width: 1600px) {
    gap: 40px;
  }

  @media (min-width: 1800px) {
    & > svg:first-child {
      position: absolute;
      left: 10%;
    }

    & > svg:last-child {
      position: absolute;
      right: 10%;
    }
  }
`;

export default function SelectMatching() {
  const [data, setData] = useState(projectData);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  return (
    <SelectMatchingBox>
      <SelectTitle>
        진행중인 프로젝트<span>3</span>
      </SelectTitle>
      <SelectContent>
        <LeftArrow
          onClick={() => setIndex(index > 0 ? index - 1 : data.length - 1)}
        />
        <SelectSub>
          {data[index] && (
            <ContentItem key={data[index].id}>
              <ContentTitle>{data[index].title}</ContentTitle>
              <ContentDate>
                <span>{30}일</span>째 진행중
              </ContentDate>
              <ContentTeam>
                {data[index].team.map(({ username, image }) => (
                  <TeamUser key={username}>
                    <img src={image} alt="프로필 사진" />
                    <span>{username}</span>
                  </TeamUser>
                ))}
              </ContentTeam>
            </ContentItem>
          )}
          <SelectMovement onClick={() => navigate("/")}>
            프로젝트 완료하기
          </SelectMovement>
        </SelectSub>
        <RightArrow
          onClick={() => setIndex(index < data.length - 1 ? index + 1 : 0)}
        />
      </SelectContent>
    </SelectMatchingBox>
  );
}
