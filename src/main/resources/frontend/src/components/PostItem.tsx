import React from "react";
import styled from "styled-components";

interface PostItemInfo {}

const PostItemBox = styled.div`
  color: var(--color-sub-1);
  width: 400px;
  height: 400px;
`;
const PostItemHeader = styled.h3`
  margin: 0;
  padding: 22px;
  font-weight: 500;
  font-size: 18px;
`;
const PostItemMain = styled.div``;
const MainImage = styled.img``;
const MainTag = styled.div``;
const PostItemFooter = styled.div`
  padding: 22px;
`;
const PostItemList = styled.ul`
  list-style: none;
`;
const PostItemUser = styled.div``;
const ListItem = styled.li``;
const ItemTitle = styled.span``;
const ItemTotal = styled.span``;

export default function PostItem({}: PostItemInfo) {
  return (
    <PostItemBox>
      <PostItemHeader>wpahr</PostItemHeader>
      <PostItemMain>
        <MainImage src="" />
        <MainTag>nn</MainTag>
      </PostItemMain>
      <PostItemFooter>
        <PostItemUser>
          <img src="" />
          <div>username</div>
          <div>1시간 전</div>
        </PostItemUser>
        <PostItemList>
          <ListItem>
            <ItemTitle>조회수</ItemTitle>
            <ItemTotal>40</ItemTotal>
          </ListItem>
          <ListItem>
            <ItemTitle>댓글</ItemTitle>
            <ItemTotal>70</ItemTotal>
          </ListItem>
          <ListItem>
            <ItemTitle>스크랩</ItemTitle>
            <ItemTotal>10</ItemTotal>
          </ListItem>
        </PostItemList>
      </PostItemFooter>
    </PostItemBox>
  );
}
