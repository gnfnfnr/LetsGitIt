import React, { useEffect, useState } from "react";
import styled from "styled-components";
import basicProfile from "../../styles/Icons/BasicProfile.png";
import { BsFillPersonFill } from "react-icons/bs";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sub-2);
  width: 100%;
  height: 100%;
  border-radius: 16px;
  color: var(--color-sub-1);
  p {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

const Avatar = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  margin-top: 5px;
`;

const InitialAvatar = styled.div`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  display: flex;
  background-color: var(--color-sub-4);
  margin-top: 5px;
  margin-bottom: -20px;
  svg {
    width: 18px;
    height: 18px;
    fill: var(--color-main-4);
  }
`;

const ProgressBar = styled.div<{ height: number }>`
  width: 10px;
  height: 180px;
  position: relative;
  border-radius: 4px;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.height}%;
    background-image: linear-gradient(
      to bottom,
      var(--color-main-4),
      var(--color-sub-2)
    );
    transition: height 0.5s ease-in-out;
    border-radius: 4px;
  }
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CommitBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
  span {
    font-size: 13px;
    margin-bottom: 5px;
  }
`;

const CommitGraph = ({ type }: { type: string }) => {
  const [initial, setInitial] = useState(false);
  const [title, setTitle] = useState("");
  const [userState, setUserState] = useState([
    {
      img: "img",
      commit: 50
    },
    {
      img: "img",
      commit: 40
    }
  ]);
  const maxCommit = userState[0].commit;
  const heightRatio = (commit: number) => (commit / maxCommit) * 100;

  useEffect(() => {
    type === "month" ? setTitle("이달의 커밋왕") : setTitle("오늘의 커밋왕");
  }, []);
  const renderInitialCommitBars = () => {
    return (
      <BarContainer>
        <ProgressBar height={5} />
        <InitialAvatar>
          <BsFillPersonFill />
        </InitialAvatar>
      </BarContainer>
    );
  };

  return (
    <Wrapper>
      <p>{title}</p>
      {initial ? (
        <CommitBox>
          {Array.from({ length: 3 }).map((_, index) =>
            renderInitialCommitBars()
          )}
        </CommitBox>
      ) : (
        <CommitBox>
          {userState.map((state, index) => (
            <BarContainer key={index}>
              <span>{state.commit}</span>
              <ProgressBar height={heightRatio(state.commit)} />
              <Avatar src={basicProfile} />
            </BarContainer>
          ))}
          {userState.length < 3 &&
            Array.from({ length: 3 - userState.length }).map((_, index) =>
              renderInitialCommitBars()
            )}
        </CommitBox>
      )}
    </Wrapper>
  );
};

export default CommitGraph;
