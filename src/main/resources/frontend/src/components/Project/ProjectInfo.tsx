import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-sub-1);
  margin-bottom: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin: 10px 0 0 10px;
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 450;
  margin-bottom: 20px;
  font-size: 15px;
  span {
    font-weight: 400;
  }
`;

const Line = styled.hr`
  flex-grow: 1;
  height: 0px;
  border-top: 0.5px solid var(--color-sub-1);
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  font-weight: 550;
  span {
    margin-right: 10px;
  }
  margin-bottom: 10px;
`;

const LangList = styled.div`
  padding: 3px;
  color: var(--color-sub-1);
  border-left: 2px solid var(--color-sub-1);
  margin-left: 10px;
  flex-shrink: 0;
  margin-bottom: 10px;
`;

const LangContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  flex-wrap: wrap;
  width: 175px;
  justify-content: flex-end;
`;

const ProjectInfo = () => {
  const [field, setField] = useState("공유 서비스");
  const [process, setProcess] = useState("2023.03.01 ~ 2023.04.12");
  const [langsTools, setLangsTools] = useState([
    "JAVA",
    "Python",
    "JAVA",
    "JAVA"
  ]);

  return (
    <Wrapper>
      <Top>
        <span>프로젝트 정보</span> <Line />
      </Top>
      <ContentContainer>
        <List>
          분야 <span>{field}</span>
        </List>
        <List>
          진행 기간 <span>{process}</span>
        </List>
        <List>
          언어/툴
          <LangContainer>
            {langsTools.map((items) => (
              <LangList>{items}</LangList>
            ))}
          </LangContainer>
        </List>
      </ContentContainer>
    </Wrapper>
  );
};

export default ProjectInfo;
