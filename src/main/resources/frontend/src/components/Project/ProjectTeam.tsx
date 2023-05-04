import { useState } from "react";
import styled from "styled-components";
import basicProfile from "../../styles/Icons/BasicProfile.png";
import { FaCrown } from "react-icons/fa"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-sub-1);
  margin-bottom: 10px;
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

const PosContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const PosList = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 10px;
  span{
      margin-top: 6px;
      font-size: 15px;
  }
`;

const Position = styled.div`
  display: flex;
  flex-direction: row;
  height: 32px;
  box-sizing: border-box;
  padding: 3px 10px 3px 10px;
  background-color: var(--color-sub-4);
  border-radius: 10px;
  font-size: 15px;
  color: var(--color-sub-1);
  align-items: center;
  margin-bottom: 10px;
  p {
    margin-left: 10px;
    &:not(:last-child) {
      margin-left: 5px;
    }
  }
`;

const Avatar = styled.img`
  display: flex;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const PosItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const PostionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    svg{
        margin: 0px 5px 10px 0px;
        fill: var(--color-main-4);
    }
`;

const ProjectTeam = () => {
  const [members, setMembers] = useState([
    {
      positionName: "pos1",
      member: [
        {
          username: "username",
          img: "Img",
          leader: false
        },
        {
          username: "user2",
          img: "Img",
          leader: false
        }
      ]
    },

    {
      positionName: "pos2",
      member: [
        {
          username: "user3",
          img: "Img",
          leader: false
        }
      ]
    },
    {
      positionName: "pos3",
      member: [
        {
          username: "user4",
          img: "Img",
          leader: true
        }
      ]
    },
    {
      positionName: "pos4",
      member: [
        {
          username: "user5",
          img: "Img",
          leader: false
        }
      ]
    }
  ]);

  return (
    <Wrapper>
      <Top>
        <span>프로젝트 팀원</span> <Line />
      </Top>
      <PosContainer>
        {members.map((items, index) => (
          <PosList key={index}>
              <span>{items.positionName} </span>            
              <PosItem>
              {items.member.map((memberList) => (
                  <PostionWrapper>
                  {memberList.leader ? <FaCrown/> : " "}
                  <Position>
                      <Avatar src={basicProfile} /> 
                      <p>{memberList.username}</p>
                  </Position>
                  </PostionWrapper>
              ))}
            </PosItem>
          </PosList>
        ))}
      </PosContainer>
    </Wrapper>
  );
};

export default ProjectTeam;
