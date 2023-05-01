import React, { useState } from "react";
import styled from "styled-components";
import profile from "../../../styles/Icons/BasicProfile.png";

const Wrapper = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: left;
  width: 300px;
  p {
    font-size: 24px;
    font-weight: 550;
    margin: 10px 0px 10px 0px;
  }
  span {
    font-size: 18px;
  }
`;

const Avatar = styled.img`
  margin-top: 30px;
  display: inline-block;
  width: 180px;
  height: 180px;
  border-radius: 5px;
  justify-content: center;
`;

interface UserInterface {
  username: string;
  location: string;
  education: string;
  work: string;
}

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState<UserInterface>({
    username: "UserName",
    location: "서울특별시",
    education: "한국외국어대학교 경영학 전공",
    work: "2020-2023 CJ"
  });
  return (
    <Wrapper>
      <Avatar src={profile} alt="프로필 사진" />
      <p>{userInfo.username}</p>
      <p>Location</p> <span>{userInfo.location}</span>
      <p>Education</p> <span>{userInfo.education}</span>
      <p>Work Experience</p> <span>{userInfo.work}</span>
    </Wrapper>
  );
};

export default UserProfile;
