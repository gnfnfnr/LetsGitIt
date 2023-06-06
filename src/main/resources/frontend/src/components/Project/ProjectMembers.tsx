import React from "react";
import styled from "styled-components";
import { ReactComponent as Member } from "../../styles/Icons/Member.svg";
import { ReactComponent as Owner } from "../../styles/Icons/Owner.svg";

const ReviseTeam = styled.div`
  background: var(--color-sub-2);
  color: var(--color-sub-1);
  padding: 18px 18px 32px;
  border-radius: 20px;
  height: min-content;
`;
const TeamTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;
const TeamList = styled.ul`
  all: unset;
  list-style: none;
`;
const TeamMember = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 16px;
  background: var(--color-sub-4);
  border-radius: 10px;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  gap: 28px;
`;
const MemberName = styled.span`
  &:first-child {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
const MemberImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const MemberPart = styled.span`
  font-size: 13px;
`;
const MemberCount = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const MemberBox = styled.div`
  display: flex;
  gap: 8px;
`;

const SortRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

interface Team {
  team: {
    username: string;
    image: string;
    part: string;
  }[];
  UserButton: JSX.Element;
  OthersButton: JSX.Element;
}

export default function ProjectMembers({
  team,
  UserButton,
  OthersButton,
}: Team) {
  return (
    <ReviseTeam>
      <TeamTitle>
        <span>프로젝트 팀원</span>
        <MemberCount>
          <Member />
          {team.length + 1}
        </MemberCount>
      </TeamTitle>
      <TeamList>
        <TeamMember>
          <MemberBox>
            <MemberImage
              src={"http://dummyimage.com/600x500.png/5fa2dd/ffffff"}
            />
            <SortRow>
              <MemberName>
                username
                <Owner />
              </MemberName>
              <MemberPart>part</MemberPart>
            </SortRow>
          </MemberBox>
          {UserButton}
        </TeamMember>
        {team.map(({ username, image, part }) => (
          <TeamMember key={username}>
            <MemberBox>
              <MemberImage src={image} />
              <SortRow>
                <MemberName>{username}</MemberName>
                <MemberPart>{part}</MemberPart>
              </SortRow>
            </MemberBox>
            {OthersButton}
          </TeamMember>
        ))}
      </TeamList>
    </ReviseTeam>
  );
}
