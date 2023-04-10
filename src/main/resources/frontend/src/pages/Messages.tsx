import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import messagesData from "../resource/messagesData.json";
import { useNavigate } from "react-router-dom";

const MessagesHeader = styled.header`
  max-width: var(--width-max);
  margin: 120px auto 55px;
`;
const HeaderDivsion = styled.div`
  margin-top: 30px;
  & > span:first-child {
    color: var(--color-sub-1);
  }

  & > span:last-child {
    color: var(--color-sub-3);
  }
`;
const HeaderTitle = styled.h3`
  margin: 0;
  font-weight: 600;
  font-size: 48px;
  color: var(--color-sub-1);
`;
const MessagesMain = styled.main`
  color: var(--color-sub-1);
  max-width: var(--width-max);
  margin: 0 auto;
`;
const MessagesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ItemUser = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: center;
`;
const UserImage = styled.img`
  max-width: 50px;
  max-height: 50px;
  object-fit: contain;
  padding: 0 26px;
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

const MessagesAllSelect = styled.div`
  display: flex;
  padding: 0 25px;
  margin-bottom: 50px;
  gap: 20px;
`;

function CheckList({ checked, setChecked, Children, id, read }: Data) {
  const navigate = useNavigate();
  return (
    <CheckListBox
      check={checked.includes(id)}
      read={read}
      onClick={() => navigate(`/messages/${id}`)}
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

export default function Messages() {
  const [data, setData] = useState(messagesData);
  const [checked, setChecked] = useState<number[]>([]);
  const [allCheck, setAllCheck] = useState<boolean>(false);
  return (
    <>
      <MessagesHeader>
        <HeaderTitle>쪽지</HeaderTitle>
        <HeaderDivsion>
          <span>
            받은 쪽지
            <span>{data.filter(({ read }) => !read).length}</span>
          </span>
          <span>받은 지원서</span>
        </HeaderDivsion>
        <div>
          <span>삭제</span>
        </div>
      </MessagesHeader>
      <MessagesMain>
        <MessagesAllSelect
          onClick={() => {
            setAllCheck(!allCheck);
            checked.length
              ? setChecked([])
              : setChecked(data.map(({ id }) => id));
          }}
        >
          <CheckButton check={allCheck} />
          전체 선택
        </MessagesAllSelect>
        <MessagesList>
          {data.map(({ id, username, read, last, createdAt, image }) => (
            <CheckList
              key={id}
              id={id}
              read={read}
              checked={checked}
              setChecked={setChecked}
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
    </>
  );
}
