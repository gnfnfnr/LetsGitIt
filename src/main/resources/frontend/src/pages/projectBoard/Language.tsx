import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, max-content));
  grid-template-rows: repeat(3, minmax(40px, max-content));
  align-items: center;
  column-gap: 30px;
  background-color: var(--color-sub-2);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 10px 24px;
  color: var(--color-sub-1);
  font-size: 15px;
  font-weight: 400px;
  p {
    font-weight: 500px;
    margin: 0px;
  }
  span {
    margin-left: 7px;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;
  max-width: 400px;
  flex-wrap: wrap;
  text-align: center;
`;

const List = styled.div`
  border-left: solid 2px var(--color-sub-1);
  padding: 5px 10px 5px 5px;
  margin-bottom: 10px;
`;

const Language = () => {
  const [info, setInfo] = useState({
    field: "SNS 플랫폼 서비스",
    languages: ["Java", "C++", "CSS"],
    tools: ["React", "ReactX", "GIT"]
  });
  return (
    <Wrapper>
      <p>프로젝트 분야</p> <span>{info.field}</span>
      <p>프로그래밍 언어</p>
      <ListContainer>
        {info.languages.map((language, index) => (
          <List key={index}>{language}</List>
        ))}
      </ListContainer>
      <p>소프트웨어 툴</p>
      <ListContainer>
        {info.tools.map((tool, index) => (
          <List key={index}>{tool}</List>
        ))}
      </ListContainer>
    </Wrapper>
  );
};

export default Language;
