import { useState,useEffect } from "react";
import styled from "styled-components";
import { ReactComponent as ProjectIcon } from "../../styles/Icons/ImportProjectIcon.svg";
import PortfolioComplete from "./PortfolioComplete";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  width: 1000px;
  height: 350px;
  border-radius: 20px;
  padding: 20px;
  margin-bottom: 50px;
`;

const Button = styled.button`
  width: 240px;
  height: 58px;
  text-align: center;
  box-sizing: border-box;
  font-weight: 550;
  padding: 12px;
  margin-top: 70px;
  border: solid 2px var(--color-main-4);
  border-radius: 60px;
  color: var(--color-main-4);
`;

const ImportProjectIcon = styled(ProjectIcon)`
  margin: 150px 0 50px 0;
  cursor: pointer;
  &.hide {
    display: none;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  p {
    font-size: 24px;
    font-weight: 600;
  }
`;

const ProjectItem = styled.div`
  padding: 15px;
  width: 400px;
  height: 120px;
  box-sizing: border-box;
  border: solid 2px var(--color-sub-3);
  border-radius: 10px;
  flex-direction: column;
  flex-basis: calc(33.333% - 30px);
  p {
    margin-top: 0px;
    margin-bottom: 5px;
    font-size: 20px;
    color: var(--color-main-4);
  }
  span {
    margin-top: 0;
    font-size: 18px;
    color: white;
  }
  :hover, &.selected {
    border: none;
    background-color: var(--color-sub-4);
  }
  
  margin-right: 30px;
  & ~ & {
    margin-right: 30px;
    margin-bottom: 30px;
  }
`;

interface ProjectItemInterface {
  id: number;
  title: string;
  content: string;
  selected: boolean;
}

const Portfolio = () => {
  const [importPortfolio, setImportPortfolio] = useState<Boolean>(false);
  const [isInitial, setIsInitial] = useState<Boolean>(true);
  const [isDone, setIsDone] = useState<Boolean>(false);
  const [selectedProject, setSelectedProject] = useState<
    ProjectItemInterface[]
  >([]);

  const [importProjectItems, setImportProjectItems] = useState<
    ProjectItemInterface[]
  >([
    {
      id: 1,
      title: "Repo Name",
      content: "Repo Intro",
      selected: false
    },
    {
      id: 2,
      title: "Repo Name2",
      content: "Repo Intro2",
      selected: false
    },
    {
      id: 3,
      title: "Repo Name3",
      content: "Repo Intro3",
      selected: false
    },
    {
      id: 4,
      title: "Repo Name",
      content: "Repo Intro",
      selected: false
    },
    {
      id: 5,
      title: "Repo Name2",
      content: "Repo Intro2",
      selected: false
    },
    {
      id: 6,
      title: "Repo Name3",
      content: "Repo Intro3",
      selected: false
    }
  ]);

  const onClickImportPorject = () => {
    setImportPortfolio(true);
    setIsInitial(false);
  };

  const handleSelectedClick = (index: number) => {
    const updatedItems = importProjectItems.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          selected: !item.selected
        };
      }
      return item;
    });
    setImportProjectItems(updatedItems);
  };

  const onClickImportProject = () => {
    setSelectedProject(
      importProjectItems.filter((project) => project.selected)
    );
    setIsDone(true);
  };

  const onRemoveSelectedProject = (id: number) => {
    const updatedProjects = selectedProject.filter(
      (project) => project.id !== id
    );
    setSelectedProject(updatedProjects);
  };


  function onClickReload() {
   
  }

  return (
    <Wrapper>
      {!isDone && (
        <>
          <ImportProjectIcon
            onClick={onClickImportPorject}
            className={isInitial ? "" : "hide"}
          />
          {importPortfolio && (
            <ProjectContainer>
              {importProjectItems.map((project, index) => (
                <ProjectItem
                  onClick={() => handleSelectedClick(index)}
                  className={
                    importProjectItems[index]?.selected ? "selected" : ""
                  }
                  key={index}
                >
                  <p>{project.title}</p>
                  <span>{project.content}</span>
                </ProjectItem>
              ))}
            </ProjectContainer>
          )}
          {importPortfolio && (
            <Button onClick={onClickImportProject}>
              선택한 프로젝트 가져오기
            </Button>
          )}
        </>
      )}
      {isDone && (
        <PortfolioComplete
          selectedProject={selectedProject}
          onRemoveSelectedProject={onRemoveSelectedProject}
          onClickReload={onClickReload}
        />
      )}
    </Wrapper>
  );
};

export default Portfolio;
