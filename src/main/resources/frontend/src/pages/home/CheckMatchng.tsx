import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CheckMatchingBox = styled.div`
  width: 100%;
  color: #ffffff;
  background: #222222;
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 24px;
  padding: 40px 0;
  align-items: center;
  text-align: center;
  margin-bottom: 115px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
const CheckTitle = styled.span`
  padding-bottom: 8px;
`;
const CheckCount = styled.span`
  font-size: 40px;
  color: var(--color-main-4);
  padding-bottom: 24px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
const CheckDescription = styled.p`
  padding-bottom: 38px;
  margin: 0;
  line-height: 35px;
`;

const CheckMovement = styled.div`
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

export default function CheckMatchng() {
  const navigate = useNavigate();
  return (
    <CheckMatchingBox>
      <CheckTitle>현재 진행중인 팀매칭</CheckTitle>
      <CheckCount>47건</CheckCount>
      <CheckDescription>
        아직 참여하고 있는 프로젝트가 없어요
        <br />
        팀매칭을 통해 다른 개발자들과 사이드 프로젝트를 시작해보세요
      </CheckDescription>
      <CheckMovement onClick={() => navigate("/home/select")}>
        진행중인 팀매칭 보러가기
      </CheckMovement>
    </CheckMatchingBox>
  );
}
