import React, { useState } from "react";
import styled from "styled-components";
import { IoMdChatbubbles, IoMdSend } from "react-icons/io";
import { RiMailLockFill } from "react-icons/ri";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--color-sub-2);
  width: 100%;
  height: 100%;
  border-radius: 16px;
  position: relative;

  input {
    width: 400px;
    height: 40px;
    padding: 15px;
    box-sizing: border-box;
    border: 1px solid var(--color-sub-3);
    border-radius: 4px;
    color: var(--color-sub-3);
  }
`;

const ChatIcon = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background-color: #525252;
  align-items: center;
  justify-content: center;
  display: flex;

  svg {
    width: 58px;
    height: 58px;
    fill: var(--color-sub-2);
  }
`;

const Send = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--color-sub-4);
  align-items: center;
  justify-content: center;
  margin-left: 14px;
  svg {
    height: 14px;
    width: 14px;
    fill: var(--color-sub-3);
  }
`;

const ChatBar = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 15px;
  align-items: center;
`;

const ProjectChatBox = () => {
  const [isMember, setIsmember] = useState(true);
  return (
    <Wrapper>
      <ChatIcon>
        {isMember ? <IoMdChatbubbles /> : <RiMailLockFill />}
      </ChatIcon>
      {isMember && (
        <ChatBar>
          <input placeholder="프로젝트에 대해 팀원들과 채팅하세요" />
          <Send>
            <IoMdSend />
          </Send>
        </ChatBar>
      )}
    </Wrapper>
  );
};

export default ProjectChatBox;
