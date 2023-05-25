import React, { useState } from "react";
import Editor from "../../components/Editor";
import styled from "styled-components";
import projectData from "../../resource/projectData.json";

const BoardCreateBox = styled.div`
  max-width: 1080px;
  margin: 120px auto 0;
  padding: 0 24px;
`;

const InputTitle = styled.input`
  all: unset;
  color: var(--color-sub-1);
  font-size: 32px;
  width: calc(100% - 150px);

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const BoardCreateInfo = styled.ul`
  width: 100%;
  border-top: 2px solid var(--color-sub-3);
  background: var(--color-sub-2);
  color: var(--color-sub-1);
  padding: 20px 40px;
  box-sizing: border-box;
  border-top: 2px solid var(--color-sub-3);
  margin: 37px 0 0;
  display: flex;

  & > li {
    width: 50%;
  }
`;

const CreateBtn = styled.button`
  all: unset;
  background: var(--color-main-4);
  color: var(--color-sub-2);
  border-radius: 10px;
  padding: 10px 14px;
  font-weight: 600;
  @media (max-width: 400px) {
    align-self: flex-end;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
    margin-bottom: 24px;
  }
`;

const BoardCreateTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const BoardCreateInfoList = styled.ul`
  font-weight: 500;
  font-size: 20px;
  color: var(--color-sub-1);
  list-style: none;
  padding: 0;
  margin: 45px 0 0;
`;

const InfoInputItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 30px;

  & > input {
    background: var(--color-sub-4);
    border-radius: 10px;
    padding: 6px 8px;
    width: min-content;
  }
`;

const BoardCreateCompleted = styled.div`
  display: flex;
  gap: 42px;
  overflow: auto;
  margin-bottom: 90px;
  padding-bottom: 25px;

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
const CompletedTeam = styled.div`
  width: 316px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompletedItem = styled.div<{ current: number; selected: number }>`
  background: var(
    --color-${({ current, selected }) => (current === selected ? "main-4" : "sub-2")}
  );
  border-radius: 10px;
  padding: 16px 20px;
  color: var(
    --color-${({ current, selected }) => (current === selected ? "sub-2" : "sub-1")}
  );
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: space-around;
  & > p {
    margin: 0;
    font-weight: 500;
  }
`;
const UserImage = styled.img<{ index: number }>`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
  position: relative;
  z-index: ${({ index }) => index};
  left: -${({ index }) => index * 10}px;
`;

const CompletedPart = styled.div`
  background: #000000;
  border-radius: 10px;
  color: var(--color-sub-1);
  font-weight: 500;
  font-size: 15px;
  padding: 6px 8px;
`;

const CompletedTitle = styled.div`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 18px;

  & > span {
    color: var(--color-sub-1);
    margin-right: 8px;
  }
  & > span:last-child {
    margin: 0;
    color: var(--color-main-4);
  }
`;

export default function ProjectCreate() {
  const [selected, setSelected] = useState(0);
  return (
    <BoardCreateBox>
      <div>
        <CompletedTitle>
          <span>완료한 프로젝트</span>
          <span>{projectData.length}</span>
        </CompletedTitle>
        <BoardCreateCompleted>
          {projectData.map(({ id, title, team, part }) => (
            <CompletedItem
              key={id}
              onClick={() => setSelected(selected === id ? 0 : id)}
              current={id}
              selected={selected}
            >
              <p>{title}</p>
              <CompletedTeam>
                <div>
                  {team.map(({ username, image }, index) => (
                    <UserImage
                      src={image}
                      alt="팀원"
                      index={index}
                      key={username}
                    />
                  ))}
                </div>
                <CompletedPart>{part}</CompletedPart>
              </CompletedTeam>
            </CompletedItem>
          ))}
        </BoardCreateCompleted>
      </div>
      <BoardCreateTitle>
        <InputTitle placeholder="제목을 입력해주세요" />
        <CreateBtn>게시하기</CreateBtn>
      </BoardCreateTitle>
      <Editor content="프로젝트 후기를 작성하세요" type="post" />
      {selected && (
        <>
          <BoardCreateInfo>
            <li>프로젝트 정보</li>
            <li>대표 이미지 선택</li>
          </BoardCreateInfo>
          <BoardCreateInfoList>
            <InfoInputItem>
              <label>프로젝트 분야</label>
              <input placeholder="ex.공유 서비스" />
            </InfoInputItem>
            <InfoInputItem>
              <label>시작일</label>
              <input placeholder="ex.공유 서비스" />

              <label>완료일</label>
              <input placeholder="ex.공유 서비스" />
            </InfoInputItem>
            <InfoInputItem>
              <label>프로젝트 팀원</label>
              <input placeholder="ex.공유 서비스" />
            </InfoInputItem>
            <InfoInputItem>
              <label>프로그래밍 언어</label>
              <input placeholder="JAVA" />
            </InfoInputItem>
          </BoardCreateInfoList>
        </>
      )}
    </BoardCreateBox>
  );
}
