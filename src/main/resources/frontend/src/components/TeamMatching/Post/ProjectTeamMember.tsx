import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 15px;
  color: var(--color-sub-1);
  h3 {
    font-size: 15px;
    margin-left: 5px;
    font-weight: 450;
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
`;

const PosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const LangContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;

const PosList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 550;
  margin-bottom: 10px;
  span {
    font-weight: 400;
    color: var(--color-main-4);
    &.title {
      color: var(--color-sub-1);
      margin-right: 0px;
    }
    &.done {
      color: var(--color-sub-3);
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
    font-size: 15px;
    font-weight: 400;
  }
`;

const LangList = styled.div`
  padding: 3px;
  color: var(--color-sub-1);
  border-left: 2px solid var(--color-sub-1);
  margin-right: 10px;
`;

const Button = styled.div`
  box-sizing: border-box;
  width: 70px;
  height: 24px;
  padding: 1px;
  text-align: center;
  font-weight: 300;
  color: var(--color-main-4);
  border: 1px solid var(--color-main-4);

  &:hover {
    background-color: var(--color-main-4);
    color: var(--color-sub-2);
    font-weight: 300;
  }
  &.clicked {
    background-color: var(--color-main-4);
    color: var(--color-sub-2);
    font-weight: 450;
  }
`;

const Closed = styled.button`
  box-sizing: border-box;
  width: 70px;
  height: 24px;
  padding: 1px;
  background-color: var(--color-sub-3);
  color: black;
  border: none;
  pointer-events: none;
  cursor: not-allowed;
  font-weight: 450;
`;

const Position = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 120px;
  span {
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
`;

const ProjectTeamMember = () => {
  const [position, setPosition] = useState([
    {
      posName: "프론트엔드",
      cur: 0,
      total: 2,
      state: ""
    },
    {
      posName: "server",
      cur: 1,
      total: 1,
      state: "done"
    }
  ]);
  const [langsTools, setLangsTools] = useState(["JAVA", "VS Code"]);
  const [isClicked, setIsClicked] = useState(false);

  const onClickApply = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Wrapper>
      <Top>
        <span>프로젝트 팀원구성 </span> <Line />
      </Top>
      <h3>포지션</h3>
      <PosContainer>
        {position.map((items, index) => (
          <PosList key={index}>
            <Position>
              <span className="title">{"• " + items.posName} </span>
              <span className={items.state === "done" ? "done" : ""}>
                {items.cur}/{items.total}
              </span>
            </Position>
            {items.state === "done" ? (
              <Closed>지원마감</Closed>
            ) : (
              <Button
                className={isClicked ? "clicked" : " "}
                onClick={onClickApply}
              >
                지원하기
              </Button>
            )}
          </PosList>
        ))}
      </PosContainer>

      <h3>언어/툴</h3>
      <LangContainer>
        {langsTools.map((items) => (
          <LangList>{items}</LangList>
        ))}
      </LangContainer>
    </Wrapper>
  );
};

export default ProjectTeamMember;
