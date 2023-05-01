import { useState } from "react";
import styled from "styled-components";
import { AiTwotoneMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";
import { SiVelog } from "react-icons/si";

const Wrapper = styled.div`
  height: 348px;
  width: 510px;
  box-sizing: border-box;
  background-color: #222222;
  color: var(--color-sub-3);
  padding: 40px 20px 20px 25px;
  border-radius: 20px;
  justify-content: flex-start;
  font-size: 20px;
`;

const EmailIcon = styled(AiTwotoneMail)`
  fill: var(--color-sub-3);
  margin-right: 5px;
`;

const Button = styled.button`
  display: flex;
  padding: 6px;
  align-items: center;
  height: 15px;
  width: 80%;
  background-color: var(--color-sub-3);
  color: black;
  svg {
    margin-right: 8px;
  }
  :hover {
    background-color: #222222;
    color: var(--color-sub-3);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0 20px 0;
  width: 460px;
  font-size: 18px;
  & > * {
    margin-right: 10px;
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
