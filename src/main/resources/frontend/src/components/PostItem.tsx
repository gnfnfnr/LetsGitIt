import React from "react";
import styled from "styled-components";

interface PostItemInfo {
  id: number;
  title: string;
  image: string;
  watch: number;
  reply: number;
  scrap: number;
  user: {
    username: string;
    image: string;
  };
  tags: string[] | null;
}

const PostItemBox = styled.div`
  color: var(--color-sub-1);
  width: 100%;
  background: #353535;
  border-radius: 20px;
  margin-bottom: 40px;
  width: 400px;
`;
const PostItemHeader = styled.h3`
  margin: 0;
  padding: 22px;
  font-weight: 500;
  font-size: 18px;
`;
const PostItemMain = styled.div`
  position: relative;
`;
const MainImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;
const MainTags = styled.div`
  position: absolute;
  bottom: 0;
  right: 16px;
`;

const TagLabel = styled.div`
  background: var(--color-sub-1);
  border-right: 4px solid var(--color-sub-4);
  color: var(--color-sub-3);
  font-weight: 500;
  font-size: 15px;
  padding: 2px 12px;
  margin-bottom: 14px;
`;
const PostItemFooter = styled.div`
  padding: 22px;
  display: flex;
  justify-content: space-between;
`;
const PostItemList = styled.ul`
  list-style: none;
  background: var(--color-sub-3);
  border-radius: 10px;
  display: flex;
  margin: 0px;
  padding: 0px 16px;
  height: 60px;
  align-items: center;
  gap: 20px;
  text-align: center;
`;
const PostItemUser = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
`;

const Username = styled.div`
  font-weight: 600;
`;
const UserCreatedAt = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: var(--color-sub-2);
`;
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;
const ItemTitle = styled.span``;
const ItemTotal = styled.span``;

export default function PostItem({ ...item }: PostItemInfo) {
  return (
    <PostItemBox>
      <PostItemHeader>{item.title}</PostItemHeader>
      <PostItemMain>
        <MainImage src={item.image} />
        <MainTags>
          {item.tags?.map((tag) => (
            <TagLabel>{tag}</TagLabel>
          ))}
        </MainTags>
      </PostItemMain>
      <PostItemFooter>
        <PostItemUser>
          <img src={item.user.image} />
          <div>
            <Username>{item.user.username}</Username>
            <UserCreatedAt>1시간 전</UserCreatedAt>
          </div>
        </PostItemUser>
        <PostItemList>
          <ListItem>
            <ItemTitle>조회수</ItemTitle>
            <ItemTotal>{item.watch}</ItemTotal>
          </ListItem>
          <ListItem>
            <ItemTitle>댓글</ItemTitle>
            <ItemTotal>{item.reply}</ItemTotal>
          </ListItem>
          <ListItem>
            <ItemTitle>스크랩</ItemTitle>
            <ItemTotal>{item.scrap}</ItemTotal>
          </ListItem>
        </PostItemList>
      </PostItemFooter>
    </PostItemBox>
  );
}
