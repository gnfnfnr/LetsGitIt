import React from "react";
import styled from "styled-components";
import { FaCrown } from "react-icons/fa"
import basicProfile from "../../styles/Icons/BasicProfile.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-sub-1);
  font-size: 0.93rem;

  button {
    width: 96px;
    height: 40px;
    margin-top: 30px;
    color: var(--color-main-4);
    border: 2px solid var(--color-main-4);
    text-align: center;
    cursor: pointer;
  }

  span {
    font-size: 0.8125rem;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  text-align: center;
  svg{
      margin-right: 3px;
      fill: var(--color-main-4);
    }
`;

const MemberContainer = styled.div`
  display: flex;
  margin: 15px 0;
  gap: 30px;
`;

const PositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const Avatar = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const RecruitmentComplete = () => {
  const memberList = [
    {
      position: "안드로이드",
      members: [
        {
          img: "img",
          name: "name",
        },
      ],
    },
    {
      position: "웹",
      members: [
        {
          img: "img",
          name: "name",
          leader: true
        },
        {
          img: "img",
          name: "name",
        },
      ],
    },
    {
      position: "서버",
      members: [
        {
          img: "img",
          name: "name",
        },
      ],
    },
  ];

  const onClickButton = () => {
      //go to projectBoardPage
  };

  return (
    <Wrapper>
      <Title>커리어 SNS 기반 멘토링 플랫폼 프로젝트</Title>
      <MemberContainer>
        {memberList.map((list, index) => (
          <MemberListContainer key={index}>
            <p>{list.position}</p>
            <PositionContainer>
              {list.members.map((member, index) => (
                <ProfileContainer key={index}>
                  <Avatar src={basicProfile} />
                  <Name>{member.leader ? <FaCrown/> : " "}{member.name}</Name>
                </ProfileContainer>
              ))}
            </PositionContainer>
          </MemberListContainer>
        ))}
      </MemberContainer>
      <span>모집 완료시 프로젝트 게시글이 생성됩니다</span>
      <button onClick={onClickButton}>모집 완료</button>
    </Wrapper>
  );
};

export default RecruitmentComplete;
