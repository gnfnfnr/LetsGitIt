import { useState } from "react";
import styled from "styled-components";
import { AiTwotoneMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";
import { SiVelog } from "react-icons/si";

const Wrapper = styled.div`
  height: 300px;
  width: 370px;
  background-color: #222222;
  color: white;
  padding: 20px;
  border-radius: 20px;
  justify-content: flex-start;
  font-size: 20px;
`;

const EmailIcon = styled(AiTwotoneMail)`
  fill: #b2b2b2;
  margin-right: 5px;
`;

const Button = styled.button`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  flex-grow: 1;
  svg {
    margin-right: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  font-size: 18px;
  & > * {
    margin-right: 6px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  font-size: 20px;
`;

export default function UserInfo() {
  const [content, SetContent] = useState("유저 소개글");
  const [useremail, setUserEmail] = useState("user@gmail.com");

  return (
    <Wrapper>
      <EmailContainer>
        <EmailIcon />
        {useremail}
      </EmailContainer>
      <ButtonContainer>
        <Button>
          <AiOutlineGithub />
          Github
        </Button>
        <Button>
          <RxNotionLogo />
          Notion
        </Button>
        <Button>
          <SiVelog />
          Velog
        </Button>
        <Button>
          <AiFillLinkedin />
          LinkedIn
        </Button>
      </ButtonContainer>
      {content}
    </Wrapper>
  );
}
