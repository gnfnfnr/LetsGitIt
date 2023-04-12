import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import styled from "styled-components";
import messagesData from "../resource/messagesData.json";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

const MessagesMain = styled.main`
  color: var(--color-sub-1);
  max-width: var(--width-max);
  margin: 55px auto 0;
`;
const MessagesList = styled.ul<{ move: number }>`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  @media (max-width: 900px) {
    width: ${({ move }) => (move ? 50 : 100)}%;
  }
`;

const ItemUser = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: center;
`;
const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  padding: 0px 26px;
  border-radius: 50%;
`;
const ItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  flex-wrap: wrap;
`;

const ContentText = styled.p``;
const ContentDate = styled.span``;
const UserName = styled.span``;

interface Data {
  id: number;
  read: boolean;
  checked: number[];
  setChecked: Dispatch<SetStateAction<number[]>>;
  Children: JSX.Element;
  move: number;
  setMove: Dispatch<SetStateAction<number>>;
}

const CheckListBox = styled.li<{
  check: boolean;
  read: boolean;
}>`
  display: flex;
  gap: 20px;
  padding: 25px 24px;
  position: relative;
  padding-left: 26px;
  align-items: center;
  justify-content: space-between;
  &:not(:last-child) {
    border-bottom: 1px solid #b2b2b2;
  }
  ${({ read }) => read && "color: var(--color-sub-3);"}

  &:hover {
    background: #222222;
  }
`;

const CheckButton = styled.div<{
  check: boolean;
}>`
  ${({ check }) =>
    `
    width: 14px;
    height: 14px;
    color: white;
    position: relative;
    &::before{
      ${check ? "content: '✔'" : "content: ''"};
      width: 14px;
      height: 14px;
      border: 2px solid var(--color-main-4);
      border-radius: 4px;
      text-align: center;
      font-size: 8px;
      position: absolute;
    }
`}
`;

function CheckList({
  checked,
  setChecked,
  Children,
  id,
  read,
  move,
  setMove,
}: Data) {
  return (
    <CheckListBox
      check={checked.includes(id)}
      read={read}
      onClick={() => setMove(move === id ? 0 : id)}
    >
      <CheckButton
        check={checked.includes(id)}
        onClick={() => {
          setChecked(
            checked.includes(id)
              ? checked.filter((el) => el !== id)
              : [...checked, id]
          );
        }}
      />
      {Children}
    </CheckListBox>
  );
}
interface Message {
  id: number;
  username: string;
  last: string;
  read: boolean;
  createdAt: string;
  image: string;
}

export default function Messages() {
  const { data, checked, setChecked } = useOutletContext<{
    data: Message[];
    checked: number[];
    setChecked: Dispatch<SetStateAction<number[]>>;
  }>();

  const [move, setMove] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    navigate(move ? `/received/messages/${move}` : "/received/messages");
  }, [move]);
  return (
    <>
      <MessagesMain>
        <MessagesList move={move}>
          {data.map(({ id, username, read, last, createdAt, image }) => (
            <CheckList
              key={id}
              id={id}
              read={read}
              checked={checked}
              setChecked={setChecked}
              move={move}
              setMove={setMove}
              Children={
                <>
                  <ItemUser>
                    {image && <UserImage src={image} />}
                    <UserName>{username}</UserName>
                  </ItemUser>
                  <ItemContent>
                    <ContentText>{last}</ContentText>
                    <ContentDate>{createdAt}</ContentDate>
                  </ItemContent>
                </>
              }
            ></CheckList>
          ))}
        </MessagesList>
      </MessagesMain>
      <Outlet />
    </>
  );
}
