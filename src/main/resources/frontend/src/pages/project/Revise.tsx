import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../../resource/projectData.json";
import styled from "styled-components";
import ProjectMembers from "../../components/Project/ProjectMembers";
import { ReactComponent as RoundClose } from "../../styles/Icons/RoundClose.svg";
import EndDateInput from "../../components/inputs/EndDateInput";

const ReviseBox = styled.div`
  max-width: var(--width-max);
  margin: 120px auto 0px;
  min-height: calc(100vh - 220px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 110px;
`;

const ReviseProject = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 1080px) {
    flex-direction: column;
    padding: 0 25px;
  }
`;

const TeamMemberButton = styled.div`
  background: #962f2f;
  border-radius: 4px;
  padding: 2px 8px;
`;

const ProjectInputs = styled.div`
  width: calc(100% - 373px);
  @media (max-width: 1080px) {
    width: 100%;
  }
`;

const TitleInput = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: var(--color-sub-2);
  padding: 12px 20px;
  border-radius: 14px;
  margin-bottom: 40px;

  & > input {
    width: calc(100% - 26px);
    margin-right: 10px;
    color: var(--color-sub-1);
    font-weight: 500;
    font-size: 24px;
  }
`;

const InputItems = styled.div`
  margin-bottom: 24px;
  display: grid;
  grid-template-columns: 120px calc(100% - 120px);
  text-align: center;

  @media (max-width: 300px) {
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
  }
`;
const InputColumnItems = styled.div`
  & > label {
    margin-bottom: 16px;
    display: flex;
  }
`;
const InputLabel = styled.label`
  font-weight: 500;
  font-size: 15px;
`;
const InputLightLabel = styled.label`
  font-weight: 300;
  font-size: 15px;
`;
const ReadOnlyInput = styled.span`
  font-weight: 300;
  text-align: start;
`;
const DetailInput = styled.div`
  color: var(--color-sub-1);
`;
const InputList = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 70px;

  & > div {
    width: 50%;
  }

  @media (max-width: 850px) {
    flex-wrap: wrap;

    & > div {
      width: 100%;
    }
  }
`;
const SortRow = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;
const SelectTag = styled.span`
  padding: 6px 10px;
  background: var(--color-sub-2);
  border-radius: 30px;
`;
const LongInput = styled.input`
  background: var(--color-sub-4);
  border-radius: 10px;
  padding: 6px 8px;
`;
const EtcLabel = styled.label`
  padding: 6px;
  background: var(--color-sub-4);
  border-radius: 10px;
  margin-right: 30px;
`;

const ReviseSaveButton = styled.button`
  background: var(--color-sub-1);
  border-radius: 10px;
  padding: 8px 40px;
  font-weight: 500;
`;

interface Project {
  id: number;
  startDate: string;
  image: null | string;
  title: string;
  process: number;
  part: string;
  tags: string[];
  team: {
    username: string;
    image: string;
    part: string;
  }[];
}

export default function Revise() {
  const { id } = useParams() as { id: string };
  const data = projectData[Number(id)];
  const [titleInput, setTitleInput] = useState(data.title);
  const [inputs, setInputs] = useState({});
  const [urlInputs, setUrlInputs] = useState({
    git: "",
    notion: "",
    etc: ["", "", "", ""],
  });
  const defaultTags = [
    "SNS",
    "플랫폼서비스",
    "C++",
    "github",
    "CSS",
    "javascript",
    "ReactiveX",
    "Firebase",
    "Git",
    "Reaim",
  ];
  return (
    <ReviseBox>
      <ReviseProject>
        <ProjectMembers
          team={data.team}
          UserButton={<TeamMemberButton>나가기</TeamMemberButton>}
          OthersButton={<TeamMemberButton>퇴출</TeamMemberButton>}
        />
        <ProjectInputs>
          <TitleInput>
            <input
              placeholder="제목을 입력해주세요"
              value={titleInput}
              onChange={(event) => setTitleInput(event?.target.value)}
            />
            <RoundClose onClick={() => setTitleInput("")} />
          </TitleInput>
          <DetailInput>
            <InputList>
              <div>
                <InputItems>
                  <InputLabel>프로젝트 시작일</InputLabel>
                  <ReadOnlyInput>{data.startDate}</ReadOnlyInput>
                </InputItems>
                <InputItems>
                  <InputLabel>프로젝트 완료일</InputLabel>
                  <EndDateInput />
                </InputItems>
                <SortRow>
                  <InputLabel>프로젝트 분야</InputLabel>
                  <div>
                    <InputItems>
                      <InputLightLabel>분야 1</InputLightLabel>
                      <LongInput />
                    </InputItems>
                    <InputItems>
                      <InputLightLabel>분야 2</InputLightLabel>
                      <LongInput />
                    </InputItems>
                  </div>
                </SortRow>
              </div>
              <div>
                <InputItems>
                  <InputLabel>프로그래밍 언어</InputLabel>
                  <input />
                </InputItems>
                <InputItems>
                  <InputLabel>소프트웨어 툴</InputLabel>
                  <input />
                </InputItems>
              </div>
            </InputList>
            <InputList>
              <div>
                <InputItems>
                  <InputLabel>깃허브 URL</InputLabel>
                  <LongInput />
                </InputItems>
                <InputItems>
                  <InputLabel>노션 URL</InputLabel>
                  <LongInput />
                </InputItems>
              </div>
              <div>
                {urlInputs.etc.map((val, index) => (
                  <InputItems key={`etc${index}`}>
                    <EtcLabel>기타 URL</EtcLabel>
                    <LongInput
                      value={val}
                      onChange={(event) =>
                        setUrlInputs({
                          ...urlInputs,
                          etc: urlInputs.etc.map((value, idx) =>
                            idx === index ? event?.target.value : value
                          ),
                        })
                      }
                    />
                  </InputItems>
                ))}
              </div>
            </InputList>
            <InputList>
              <InputColumnItems>
                <InputLabel>프로젝트 썸네일 이미지</InputLabel>
                <input />
              </InputColumnItems>
              <InputColumnItems>
                <InputLabel>프로젝트태그(최대 10개 선택가능)</InputLabel>
                <SortRow>
                  {defaultTags.map((tag) => (
                    <SelectTag key={tag}>#{tag}</SelectTag>
                  ))}
                </SortRow>
              </InputColumnItems>
            </InputList>
          </DetailInput>
        </ProjectInputs>
      </ReviseProject>
      <ReviseSaveButton>저장하기</ReviseSaveButton>
    </ReviseBox>
  );
}
