import React, { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import CheckButton from "../../components/CheckButton";

const ApplicationsBox = styled.main`
  color: var(--color-sub-1);
  max-width: var(--width-max);
  margin: 30px auto 0;
  font-weight: 500;
`;
const ApplicationsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  justify-content: center;
`;
const ListItem = styled.li`
  background: #222222;
  border-radius: 10px;
  max-width: 620px;
  width: 100%;
  padding: 30px 21px;
  box-sizing: border-box;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;

  &:hover {
    background: #333333;
  }
`;

const UserImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 50%;
`;

const ItemTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(178, 178, 178, 0.8);
  padding-bottom: 8px;

  &>span: last-child {
    font-size: 14px;
  }
`;

const UserName = styled.span<{ read: boolean }>`
  font-weight: 500;
  font-size: 24px;
  color: ${({ read }) => (read ? "inherit" : "var(--color-main-4)")};
`;
const ItemContent = styled.div`
  width: calc(100% - 124px);

  @media (max-width: 500px) {
    width: 100%;
  }
`;
const ItemLink = styled.div`
  text-align: end;

  & > span:first-child {
    margin-right: 13px;
  }
`;

const ItemTag = styled.div`
  background: #333333;
  border-radius: 4px;
  padding: 7px;
  width: max-content;
  margin-bottom: 8px;
`;

interface AData {
  id: number;
  user: {
    username: string;
    image: string;
  };
  read: boolean;
  createdAt: string;
  project: {
    title: string;
    field: string;
    date: string;
  };
}
export default function Applications() {
  const { data, checked, setChecked } = useOutletContext<{
    data: AData[];
    checked: number[];
    setChecked: Dispatch<SetStateAction<number[]>>;
  }>();

  return (
    <ApplicationsBox>
      <ApplicationsList>
        {data.map(({ id, user, read, createdAt, project }) => (
          <ListItem key={id}>
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
            {user && <UserImage src={user.image} />}

            <ItemContent>
              <ItemTitle>
                <UserName read={read}>username 님의 지원서</UserName>
                <span>{createdAt.slice(0, 10)}</span>
              </ItemTitle>
              {project && (
                <>
                  <p>{project.title}</p>
                  <ItemTag>{project.field}</ItemTag>
                </>
              )}
              <ItemLink>
                <span>개인 페이지 보기</span>
                <span>대화창 바로가기</span>
              </ItemLink>
            </ItemContent>
          </ListItem>
        ))}
      </ApplicationsList>
    </ApplicationsBox>
  );
}
