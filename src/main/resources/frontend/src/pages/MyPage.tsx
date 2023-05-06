import { useState } from "react";
import styled from "styled-components";
import UserInfo from "../components/MyPage/User/UserInfo";
import UserSkill from "../components/MyPage/User/UserSkill";
import MyPageTab from "../components/MyPage/MyPageTab";
import { ReactComponent as arrowIcon } from "../styles/Icons/leftarrowIcon.svg";
import profile from "../styles/Icons/BasicProfile.png";

const ArrowIcon = styled(arrowIcon)`
  display: flex;
  margin: 0 5px 0 5px;
`;

const Wrapper = styled.div`
  background-color: black;
  padding: 100px 30px 30px 30px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  justify-items: center;
  position: relative;
  span {
    font-size: 18px;
  }
  .username {
    font-size: 24px;
  }
`;

const Avatar = styled.img`
  margin-top: 30px;
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 5px;
  justify-content: center;
`;

const EditButton = styled.button`
  width: 132px;
  height: 37px;
  background-color: #222222;
  color: #b2b2b2;
  font-size: 18px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  text-align: center;
  &.editMode {
    position: absolute;
    right: 110px;
    top: 80px;
    align-items: center;
    justify-items: center;
    text-align: center;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 355px;
  position: absolute;
  top: 250px;
  p {
    display: inline-flex;
  }
`;

const TabContainer = styled.div`
  display: flex;
  justify-items: center;
  margin-bottom: 100px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  color: #f9d5a2;
  &.editMode {
    display: none;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: -30px 30px 0 30px;
`;

const MyPage = () => {
  const [afterEditProfile, setAfterEditProfile] = useState(true);
  //false = before, true=after

  const [username, setUsername] = useState("username");
  return (
    <Wrapper>
      <TopContainer>
        {afterEditProfile && <UserInfo />}
        <UserNameContainer>
          <Avatar src={profile} alt="프로필 사진" />
          <p className="username">{username}</p>
        </UserNameContainer>
        {afterEditProfile && <UserSkill type="" />}
      </TopContainer>
      <ProfileContainer>
        <EditButton className={afterEditProfile ? "editMode" : ""}>
          프로필 수정
        </EditButton>
        <Comment className={afterEditProfile ? "editMode" : ""}>
          <ArrowIcon />
          <span>프로필로 개발자로서의 나를 표현하세요</span>
        </Comment>
      </ProfileContainer>

      <TabContainer>
        <MyPageTab />
      </TabContainer>
    </Wrapper>
  );
};

export default MyPage;
