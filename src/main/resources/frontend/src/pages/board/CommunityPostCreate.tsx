import React, { useState } from "react";
import Editor from "../../components/Editor";
import styled from "styled-components";

const CreateBox = styled.div`
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

const CreateInfo = styled.ul`
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

const CreateTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const CreateInfoList = styled.ul`
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

export default function CommunityPostCreate() {
  return (
    <CreateBox>
      <CreateTitle>
        <InputTitle placeholder="제목을 입력해주세요" />
        <CreateBtn>게시하기</CreateBtn>
      </CreateTitle>
      <Editor content="프로젝트 후기를 작성하세요" type="post" />
      <CreateInfo>
        <li>대표 이미지 선택</li>
      </CreateInfo>
      <CreateInfoList>
        <InfoInputItem></InfoInputItem>
      </CreateInfoList>
    </CreateBox>
  );
}
