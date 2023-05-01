import React, { useState } from "react";
import styled from "styled-components";
import { IoMdSettings, IoMdRemoveCircle } from "react-icons/io";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 810px;
`;

interface ProjectItemProps {
  settingMode: boolean;
  onClick: () => void;
}

const ProjectItem = styled.div<ProjectItemProps>`
  width: 374px;
  height: 200px;
  padding: 15px;
  box-sizing: border-box;
  border: solid 2px var(--color-sub-3);
  border-radius: 10px;
  flex-direction: column;
  position: relative;
  p {
    margin: 0px 0px 15px 0px;
    font-size: 20px;
    color: var(--color-main-4);
  }
  span {
    margin-top: 0;
    font-size: 18px;
    color: white;
  }
  ${(props) =>
    !props.settingMode &&
    `
    &:hover {
      border: none;
      background-color: var(--color-sub-4);;
      cursor: pointer;
    }
  `}
  margin-right: 30px;
  & ~ & {
    margin-right: 30px;
    margin-bottom: 30px;
  }
`;

const RemoveIcon = styled(IoMdRemoveCircle)`
  display: flex;
  position: absolute;
  fill: red;
  z-index: 6;
  top: -9px;
  left: -8px;
  cursor: pointer;
`;

const Setting = styled(IoMdSettings)`
  display: flex;
  height: 21px;
  width: 20px;
  justify-content: right;
  fill: var(--color-sub-1);
  cursor: pointer;
  margin-right: 50px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50px;
  align-items: center;
  text-align: center;
`;

type Props = {
  backgroundColor?: string;
};

const Button = styled.button<Props>`
  width: 56px;
  height: 40px;
  padding: 3px;
  font-size: 16px;
  font-weight: 550;
  box-sizing: border-box;
  margin-left: 10px;
  align-items: center;
  align-content: center;
  border-radius: 10px;
  color: var(--color-sub-2);
  background-color: ${(props) => props.backgroundColor};
`;

const ImportButton = styled.button`
  height: 81px;
  width: 382px;
  border: 2px solid var(--color-main-4);
  color: var(--color-main-4);
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  z-index: 2;
`;

const ImportButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 50px 0 50px 0;
`;

interface ProjectItemInterface {
  id: number;
  title: string;
  content: string;
  selected: boolean;
}
interface ProjectProps {
  selectedProject: ProjectItemInterface[];
  handleProjectClick: (id: number) => void;
  removeProject: (id: number) => void;
  reloadPortfolio: () => void;
}

const Project = ({
  selectedProject,
  handleProjectClick,
  removeProject,
  reloadPortfolio
}: ProjectProps) => {
  const [settingMode, setSettingMode] = useState(false);

  const handleSettingMode = () => {
    setSettingMode(true);
  };

  const onClickProject = (id: number) => {
    handleProjectClick(id);
  };

  const onCancel = () => {
    setSettingMode(false);
  };

  const onSubmit = () => {
    setSettingMode(false);
  };

  const onRemove = (id: number) => {
    //경고문 추가
    removeProject(id);
  };

  const [view, setView] = useState(false);

  const onClick = () => {
    setView(true);
    reloadPortfolio();
  }

  return (
    <Wrapper>
      <Top>
        <p>{selectedProject.length} Projects </p>
        {settingMode ? (
          <ButtonContainer>
            <Button onClick={onCancel} backgroundColor="var(--color-sub-3)">
              취소
            </Button>
            <Button backgroundColor="var(--color-main-4)">완료</Button>
          </ButtonContainer>
        ) : (
          <Setting onClick={handleSettingMode} />
        )}
      </Top>

      <ProjectItems>
        {selectedProject.map((project, index) => (
          <ProjectItem
            key={index}
            settingMode={settingMode}
            onClick={() => {
              if (settingMode === false) {
                onClickProject(index);
              }
            }}
          >
            {settingMode && <RemoveIcon onClick={() => onRemove(project.id)} />}
            <p>{project.title}</p>
            <span>{project.content}</span>
          </ProjectItem>
        ))}
      </ProjectItems>
      {settingMode && (
        <ImportButtonContainer>
          <ImportButton onClick={onClick}>깃허브에서 프로젝트 가져오기</ImportButton>
        </ImportButtonContainer>
      )}
    </Wrapper>
  );
};

export default Project;
