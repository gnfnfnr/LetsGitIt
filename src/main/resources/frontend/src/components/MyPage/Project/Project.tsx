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
  border: solid 2px #b2b2b2;
  border-radius: 10px;
  flex-direction: column;
  position: relative;
  p {
    margin: 0px 0px 15px 0px;
    font-size: 20px;
    color: #f9d5a2;
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
      background-color: #333333;
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
  fill: #eaeaea;
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
  color: #222222;
  background-color: ${(props) => props.backgroundColor};
`;

const ImportButton = styled.button`
  height: 81px;
  width: 382px;
  border: 2px solid #f9d5a2;
  color: #f9d5a2;
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
}

const Project = ({
  selectedProject,
  handleProjectClick,
  removeProject
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

  return (
    <Wrapper>
      <Top>
        <p>{selectedProject.length} Projects </p>
        {settingMode ? (
          <ButtonContainer>
            <Button onClick={onCancel} backgroundColor="#B2B2B2">
              취소
            </Button>
            <Button backgroundColor="#F9D5A2">완료</Button>
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
          <ImportButton>깃허브에서 프로젝트 가져오기</ImportButton>
        </ImportButtonContainer>
      )}
    </Wrapper>
  );
};

export default Project;
