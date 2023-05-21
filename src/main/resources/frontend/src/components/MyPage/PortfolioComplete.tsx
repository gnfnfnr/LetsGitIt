import React, { useState } from "react";
import styled from "styled-components";
import UserSkill from "./User/UserSkill";
import ProjectDetail from "./Project/ProjectDetail";
import { BiArrowBack } from "react-icons/bi";
import UserProfile from "./User/UserProfile";
import {Project, ProjectViewMode} from "./Project/Project";
import UserStat from "./User/UserStat";

const PortfolioContainer = styled.div<{ backgroundColor: boolean }>`
  display: flex;
  max-width: 1000px;
  min-height: 980px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 40px 100px 20px 100px;
  background-color: ${props => props.backgroundColor ? 'var(--color-sub-2)' : 'none'};
  color: var(--color-sub-1);
  border-radius: 20px;
  flex-direction: column;
  margin-bottom: 100px;
`;

const UserProfileContainer = styled.div`
  display: flex;
  flex: 1;
`;

const ProjectDetailContainer = styled.div<{ backgroundColor: boolean }>`
  display: flex;
  width: 1000px;
  box-sizing: border-box;
  padding: 40px 100px 20px 100px;
  min-height: 800px;
  background-color: ${props => props.backgroundColor ? 'var(--color-sub-2)' : 'none'};
  color: var(--color-sub-1);
  border-radius: 20px;
  flex-direction: column;
`;

const Back = styled(BiArrowBack)`
  fill: #ffffff;
  display: flex;
  height: 20px;
  width: 20px;
  z-index: 10;
  cursor: pointer;
`;
const UpperContainer = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 20px;
`;

const RightContainer = styled.div`
  display: flex;
  flex: 2;
  flex-direction: column;
`;

const StatContainer = styled.div`
  display: flex;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 30px;
  p {
    font-size: 24px;
    font-weight: 600;
    margin: 0 0 0 10px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  flex: 2;
`;

const ProjectContainer = styled.div`
  display: flex;
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
  onClickReload: () => void;
}

interface PortfolioViewProps {
  selectedProject: ProjectItemInterface[];
}

export const PortfolioComplete = ({
  selectedProject,
  onRemoveSelectedProject,
  onClickReload
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
    onClickReload();
  }

  return (
    <>
      {showDetail ? (
        <PortfolioContainer 
          backgroundColor={ backgroundColor ? true : false}>
          <Back onClick={goBack} />
          <ProjectDetail
          type=""
            title={onClickProject?.title || ""}
            content={onClickProject?.content || ""}
            removeBackgroundColor={removeBackgroundColor}
          />
        </PortfolioContainer>
      ) : (
        <PortfolioContainer
        backgroundColor={ backgroundColor ? true : false}
        >
          <UpperContainer>
            <UserProfileContainer>
              <UserProfile />
            </UserProfileContainer>
            <RightContainer>
              <StatContainer>
                <UserStat />
              </StatContainer>
              <SkillContainer>
                <p>Skills</p>
                <UserSkill type="portfolio" />
              </SkillContainer>
            </RightContainer>
          </UpperContainer>

          <BottomContainer>
            <ProjectContainer>
              <Project
                selectedProject={selectedProject}
                handleProjectClick={handleProjectClick}
                removeProject={removeProject}
                reloadPortfolio={reloadPortfolio}
              />
            </ProjectContainer>
          </BottomContainer>
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
        backgroundColor={ backgroundColor ? true : false}>
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
        backgroundColor={ backgroundColor ? true : false}>
          <UpperContainer>
            <UserProfileContainer>
              <UserProfile />
            </UserProfileContainer>
            <RightContainer>
              <StatContainer>
                <UserStat />
              </StatContainer>
              <SkillContainer>
                <p>Skills</p>
                <UserSkill type="portfolio" />
              </SkillContainer>
            </RightContainer>
          </UpperContainer>
          <BottomContainer>
            <ProjectContainer>
              <ProjectViewMode
                selectedProject={selectedProject}
                handleProjectClick={handleProjectClick}
              />
            </ProjectContainer>
          </BottomContainer>
        </PortfolioContainer>
        )}
        </>
  );
 
};


