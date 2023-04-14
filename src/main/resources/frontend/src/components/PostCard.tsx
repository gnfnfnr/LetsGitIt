import React, { useEffect, useState } from "react";
import styled from "styled-components";
import profile from "../styles/Icons/BasicProfile.png";
import { MdModeEdit } from "react-icons/md";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const CardContainer = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #353535;
  border: none;
  border-radius: 20px;
`;

const Title = styled.div`
  padding: 20px 0 15px 20px;
  font-size: 18px;
  color: #eaeaea;
  font-weight: 500;
`;

const Content = styled.div`
  display: flex;
  width: 400px;
  height: 250px;
  box-sizing: border-box;
  background-color: white;
  margin-bottom: 20px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  img {
    margin-left: 20px;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: none;
  }
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
  margin: 7px 0 0px 10px;
  justify-items: center;
  p {
    //username
    font-size: 16px;
    margin: 0 0 5px 0;
    font-weight: 480;
  }
  span {
    //Time
    font-size: 14px;
    font-weight: 400;
  }
`;

const PostInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 60px;
  width: 186px;
  padding: 8px 10px 8px 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #222222;
  border: none;
  color: #eaeaea;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  right: 15px;
`;

const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    margin: 0;
  }
  span {
    font-size: 20px;
    font-weight: 600;
  }
`;

const CommentBox = styled.div`
  margin-top: 10px;
  display: flex;
  width: 400px;
  color: #353535;
  position: relative;
  svg {
    position: absolute;
    right: 10px;
    top: 12px;
    z-index: 1;
    width: 22px;
    height: 22px;
    fill: #353535;
    cursor: pointer;
  }
`;

const CommentInput = styled.input`
  width: 400px;
  min-height: 50px;
  border-radius: 20px;
  background-color: #eaeaea;
  box-sizing: border-box;
  padding: 2px 5px 2px 15px;
  color: #222222;
`;

interface props {
  type: string;
}
const PostCard = ({ type }: props) => {
  const [isMarked, setIsMarked] = useState<boolean>(true);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [inputComment, setInputComment] = useState<string>("");

  useEffect(() => {
    type === "bookmark" ? setIsMarked(true) : setIsMarked(false);
  }, []);

  const onClickEdit = () => {
    setIsEdit(!isEdit);
  };

  const onChangeInput = (event: any) => {
    setInputComment(event.target.value);
  };

  return (
    <Wrapper>
      <CardContainer>
        <Title>React에서 스프라이트 기법 사용하기</Title>
        <Content></Content>
        <Bottom>
          <img src={profile} alt="profile" />
          <Author>
            <p>username</p>
            <span>1시간 전</span>
          </Author>
          <PostInfoContainer>
            <PostInfo>
              <p>조회수</p> <span>40</span>
            </PostInfo>
            <PostInfo>
              <p>댓글</p> <span>7</span>
            </PostInfo>
            <PostInfo>
              <p>스크랩</p> <span>10</span>
            </PostInfo>
          </PostInfoContainer>
        </Bottom>
      </CardContainer>
      {isMarked && (
        <CommentBox>
          <CommentInput
            value={inputComment}
            onChange={onChangeInput}
            disabled={!isEdit}
            placeholder="Add Comment"
          />
          <MdModeEdit onClick={onClickEdit} />
        </CommentBox>
      )}
    </Wrapper>
  );
};

export default PostCard;
