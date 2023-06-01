import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../../resource/projectData.json";
import styled from "styled-components";
import ProjectMembers from "../../components/Project/ProjectMembers";

const ReviseBox = styled.div``;
const TeamMemberButton = styled.div`
  background: #962f2f;
  border-radius: 4px;
  padding: 2px 8px;
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
  const [data, setData] = useState<Project | null>(null);

  return (
    <ReviseBox>
      <ProjectMembers
        team={projectData[Number(id)].team}
        UserButton={<TeamMemberButton>나가기</TeamMemberButton>}
        OthersButton={<TeamMemberButton>퇴출</TeamMemberButton>}
      />
    </ReviseBox>
  );
}
