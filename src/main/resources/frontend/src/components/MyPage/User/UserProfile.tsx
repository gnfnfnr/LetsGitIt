import React, { useState } from "react";
import styled from "styled-components";
import profile from "../../../styles/Icons/BasicProfile.png";
import { AiTwotoneMail } from "react-icons/ai";
import UserLinks from "./UserLinks";

const Wrapper = styled.div`
  display: flex;
  color: var(--color-sub-1);
  flex-direction: column;
  align-items: left;
  p {
    font-size: 1.5rem;
    font-weight: 550;
    margin: 10px 0px 10px 0px;
  }
  span {
    font-size: 1.125rem;
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

const LinkContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 1.25rem;
`;

const EmailIcon = styled(AiTwotoneMail)`
  fill: var(--color-sub-1);
  margin-right: 5px;
`;

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    username: "UserName",
    email: "user@gmail.com",
    location: "서울특별시",
    education: "한국외국어대학교 경영학 전공",
    work: "2020-2023 CJ"
  });
  return (
    <Wrapper>
      <Avatar src={profile} alt="프로필 사진" />
      <p>{userInfo.username}</p>
      <EmailContainer>
        <EmailIcon />
        {userInfo.email}
      </EmailContainer>
      <LinkContainer>
        <UserLinks />
      </LinkContainer>
      <p>Location</p> <span>{userInfo.location}</span>
      <p>Education</p> <span>{userInfo.education}</span>
      <p>Work Experience</p> <span>{userInfo.work}</span>
    </Wrapper>
  );
};

export default UserProfile;
