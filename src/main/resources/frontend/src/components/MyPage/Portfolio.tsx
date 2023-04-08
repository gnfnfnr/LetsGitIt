import { useState } from "react";
import styled from "styled-components";
import { ReactComponent as ProjectIcon } from "../../styles/Icons/ImportProjectIcon.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  width: 1000px;
  height: 350px;
  border-radius: 20px;
  padding: 20px;

  button {
    border: solid 2px #f9d5a2;
    border-radius: 60px;
    color: #f9d5a2;
  }
`;

const ImportProjectIcon = styled(ProjectIcon)`
  margin: 150px 0 100px 0;
  cursor: pointer;
`;

const ProjectContainer = styled.div`
  display: flex;
`;

const ProjectItem = styled.div`
  padding: 5px;
  width: 400px;
  height: 120px;
  border: solid 2px #b2b2b2;
  border-radius: 10px;
  &.title {
    font-size: 20px;
    color: #f9d5a2;
  }

  &.content {
    font-size: 18px;
    color: white;
  }

  &.selected {
    border: none;
    background-color: #333333;
  }
`;

const Portfolio = () => {
  return (
    <Wrapper>
      <ImportProjectIcon />
    </Wrapper>
  );
};

export default Portfolio;
