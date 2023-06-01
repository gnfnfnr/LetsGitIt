import React, { useState } from "react";
import styled from "styled-components";
import UserSkill from "./User/UserSkill";
import ProjectDetail from "./Project/ProjectDetail";
import { BiArrowBack } from "react-icons/bi";
import UserProfile from "./User/UserProfile";
import {Project, ProjectViewMode} from "./Project/Project";
import UserStat from "./User/UserStat";

const PortfolioContainer = styled.div<{ backgroundColor: boolean }>`
  display: grid;
  grid-template-rows: ${({ backgroundColor }) =>
    backgroundColor ? 'repeat(3, minmax(min-content, 2rem))' : 'repeat(2, minmax(min-content, 2rem))'};
  grid-template-columns: ${({ backgroundColor }) =>
    backgroundColor ? '30% 50%' : '80%'};
  gap: 1rem;
  grid-template-areas: ${({ backgroundColor }) =>
    backgroundColor ? 
      `"profile stat"
       "profile skill"
       "project project"` 
      : 
      `"back"
       "detail"`};
  width: 70%;
  justify-content: center; 
  align-items: center; 
  padding: 40px 100px;
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? 'var(--color-sub-2)' : 'none'};
  color: var(--color-sub-1);
  border-radius: 20px;
`;


const UserProfileContainer = styled.div`
  display: flex;
  grid-area: profile;
  width: 100%;
`;

const Back = styled(BiArrowBack)`
grid-area: back;
  fill: #ffffff;
  display: flex;
  height: 20px;
  width: 20px;
  z-index: 10;
  cursor: pointer;
`;

const StatContainer = styled.div`
  display: flex;
  grid-area: stat;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 30px;
  grid-area: skill;
  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 0 10px;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  grid-area: project;
`;

interface ProjectItemInterface {
  id: number;
  title: string;
  content: string;
  selected: boolean;
}
interface PortfolioCompleteProps {
  selectedProject: ProjectItemInterface[];
  onRemoveSelectedProject: (id: number) => void;
  onClickReImportProject: () => void;
}

interface PortfolioViewProps {
  selectedProject: ProjectItemInterface[];
}

export const PortfolioComplete = ({
  selectedProject,
  onRemoveSelectedProject,
  onClickReImportProject
}: PortfolioCompleteProps) => {
  const [showDetail, setShowDetail] = useState(false);
  const [onClickProject, setOnClickProject] = useState<ProjectItemInterface>();
  const [backgroundColor, setBackgroundColor] = useState(true);

  const removeBackgroundColor = () => {
    setBackgroundColor(!backgroundColor);
  }

  const goBack = () => {
    setShowDetail(false);
  };

  const handleProjectClick = (id: number) => {
    setShowDetail(true);
    setOnClickProject(selectedProject[id]);
  };

  const removeProject = (id: number) => {
    onRemoveSelectedProject(id);
  };

  const reloadPortfolio = () =>{
    onClickReImportProject();
  }

  return (
    <>
      {showDetail ? (
        <PortfolioContainer 
          backgroundColor={false}>
          <Back onClick={goBack} />
          <ProjectDetail
          type=""
            title={onClickProject?.title || ""}
            content={onClickProject?.content || ""}
            removeBackgroundColor={removeBackgroundColor}
          />
        </PortfolioContainer>
      ) : (
        <PortfolioContainer backgroundColor={true}>

            <UserProfileContainer>
              <UserProfile />
            </UserProfileContainer>

              <StatContainer>
                <UserStat />
              </StatContainer>

              <SkillContainer>
                <p>Skills</p>
                <UserSkill type="portfolio" />
              </SkillContainer>
   
            <ProjectContainer>
              <Project
                selectedProject={selectedProject}
                handleProjectClick={handleProjectClick}
                removeProject={removeProject}
                reloadPortfolio={reloadPortfolio}
              />
            </ProjectContainer>
         
        </PortfolioContainer>
      )}
    </>
  );
};


export const PortfolioView = ({ selectedProject }: PortfolioViewProps) => {

  const [showDetail, setShowDetail] = useState(false);
  const [onClickProject, setOnClickProject] = useState<ProjectItemInterface>();
  const [backgroundColor, setBackgroundColor] = useState(true);

  const removeBackgroundColor = () => {
    setBackgroundColor(!backgroundColor);
  }

  const goBack = () => {
    setShowDetail(false);
  };

  const handleProjectClick = (id: number) => {
    setShowDetail(true);
    setOnClickProject(selectedProject[id]);
  };

  return (
    <>
    {showDetail ? (
      <PortfolioContainer 
        backgroundColor={false}>
        <Back onClick={goBack} />
        <ProjectDetail
        type="read"
          title={onClickProject?.title || ""}
          content={onClickProject?.content || ""}
          removeBackgroundColor={removeBackgroundColor}
        />
      </PortfolioContainer>
    ) : (
        <PortfolioContainer
        backgroundColor={true}>
   
            <UserProfileContainer>
              <UserProfile />
            </UserProfileContainer>
            
              <StatContainer>
                <UserStat />
              </StatContainer>
              <SkillContainer>
                <p>Skills</p>
                <UserSkill type="portfolio" />
              </SkillContainer>
           
         
            <ProjectContainer>
              <ProjectViewMode
                selectedProject={selectedProject}
                handleProjectClick={handleProjectClick}
              />
            </ProjectContainer>

        </PortfolioContainer>
        )}
        </>
  );
 
};


