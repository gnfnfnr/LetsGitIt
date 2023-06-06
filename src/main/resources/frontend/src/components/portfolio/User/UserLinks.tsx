import { useState } from "react";
import styled from "styled-components";
import { AiTwotoneMail, AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";
import { SiVelog } from "react-icons/si";

const Button = styled.button`
  display: flex;
  padding: 0px 10px 0px 10px;
  height: 29px;
  align-items: center;
  background-color: var(--color-sub-3);
  color: black;
  svg {
    margin-right: 8px;
  }
  :hover {
    background-color: var(--color-sub-2);
    color: var(--color-sub-3);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 1.125rem;
  & > * {
    margin-right: 10px;
    margin-bottom: 10px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;

export default function UserLinks() {
  return (
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
  );
}
