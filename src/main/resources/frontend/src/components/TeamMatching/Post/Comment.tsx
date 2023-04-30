import { useState } from "react";
import styled from "styled-components";
import basicProfile from "../../../styles/Icons/BasicProfile.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: var(--color-sub-1);
`;

const WriteCommentBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 732px;
  height: 75px;
  background-color: #333333;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 450;
  align-items: center;
`;

const CommentInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    span{
        margin-top: 2px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0 5px 0;
    button{
        width: 44px;
        height: 28px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 450;
        justify-content: center;
        text-align: center;
        background-color: var(--color-sub-3);
        color: var(--color-sub-2);
    }
`;

const CommentInput = styled.input`
    width: 600px;
    height: 30px;
`;

const CommentBoxContainer = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 20px;
  span{
      &.content{
          font-size: 13px;
          font-weight: 400;
          margin-bottom: 10px;
      }
  }
`;



const Avatar = styled.img`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CommentTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  span {
    &.username {
      font-size: 13px;
      font-weight: 450;
      margin-right: 10px;
    }
    &.time {
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

const CommentBottom = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  font-weight: 400;
  span{
      margin-right: 10px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PostComment = () => {
  const [commentNum, setCommentNum] = useState(2);
  const [user, setUser] = useState({
    username: "username",
    userImg: null
  });
  const [date, setDate] = useState("2023.04.12");
  const [content, setContent] = useState("글 내용");

  const [comments, setComments] = useState([
    {
      //profileImg: img,
      username: "user1",
      content: "예시 댓글 어쩌고 저쩌고",
      time: "2023.03.28 12:01",
      reply: []
    },
    {
      //profileImg: img,
      username: "user2",
      content: "예시 댓글 어쩌고 저쩌고2222",
      time: "2023.03.28 12:03",
      reply: [
        {
          //profileImg: img,
          username: "user1",
          content: "대댓글",
          time: "2023.03.28 12:05"
        }
      ]
    }
  ]);
  return (
    <Wrapper>
    <Top>
      <p>댓글 {commentNum}개</p>
      <button>작성</button>
      </Top>
      <WriteCommentBox>
        <Avatar src={basicProfile} />
        <CommentInputContainer>
            <span>{user.username}</span>
            <CommentInput placeholder="댓글로 프로젝트에 대해서 문의해보세요" />
        </CommentInputContainer>
      </WriteCommentBox>

      <CommentBoxContainer>
        {comments.map((comment, index) => (
          <CommentBox key={index}>
            <Avatar src={basicProfile} />
            <ContentContainer>
              <CommentTop>
                <span className="username">{comment.username}</span>
                <span className="time">{comment.time}</span>
              </CommentTop>
              <span className="content">{comment.content}</span>
              <CommentBottom>
                <span>답글쓰기</span>
                {comment.reply.length > 0 ? (
                  <span> 답글 {comment.reply.length} 개</span>
                ) : ( "" )}
              </CommentBottom>
            </ContentContainer>
          </CommentBox>
        ))}
      </CommentBoxContainer>
    </Wrapper>
  );
};

export default PostComment;
