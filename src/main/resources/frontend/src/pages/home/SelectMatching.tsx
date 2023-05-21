import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import projrctData from "../../resource/projectData.json";

const SelectMatchingBox = styled.div``;
const SelectTitle = styled.p``;
const SelectSub = styled.div`
  width: 100%;
  color: #ffffff;
  background: #222222;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  align-items: center;
`;
const SubContent = styled.div`
  margin-bottom: 40px;
`;
const SelectMovement = styled.div`
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

const TeamUser = styled.div`
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
  }

  & > span {
    padding: 10px 20px;
    color: #eaeaea;
    background: #222222;
    border-radius: 8px;
  }
`;

export default function SelectMatching() {
  const [data, setData] = useState(projrctData);
  const navigate = useNavigate();
  return (
    <div>
      <SelectTitle>
        진행중인 프로젝트<span>3</span>
      </SelectTitle>
      <SelectSub>
        <SubContent>
          {data.map(({ title, id, team, startDate }) => (
            <li>
              <span>{title}</span>
              <span>
                <span>{30}일</span>째 진행중
              </span>
              <div>
                {team.map(({ username, image }) => (
                  <TeamUser>
                    <img src={image} alt="프로필 사진" />
                    <span>{username}</span>
                  </TeamUser>
                ))}
              </div>
            </li>
          ))}
        </SubContent>
        <SelectMovement onClick={() => navigate("/")}>
          프로젝트 완료하기
        </SelectMovement>
      </SelectSub>
    </div>
  );
}
