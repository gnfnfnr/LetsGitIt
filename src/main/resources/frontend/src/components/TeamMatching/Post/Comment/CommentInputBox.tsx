import { useState } from "react";
import styled from "styled-components";
import basicProfile from "../../../../styles/Icons/BasicProfile.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const WriteCommentBox = styled.div`
  display: flex;
  flex-direction: row;
  height: 75px;
  background-color: var(--color-sub-4);
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 450;
  align-items: center;
  color: var(--color-sub-1);
`;

const CommentInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin-top: 2px;
  }
`;

const Top = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 5px 0 5px 0;
  position: absolute;
  top: -45px;
  right: 10px;
`;

const WriteButton = styled.button`
  width: 44px;
  height: 28px;
  border-radius: 10px;
  font-size: 13px;
  font-weight: 450;
  justify-content: center;
  text-align: center;
  background-color: var(--color-sub-3);
  color: var(--color-sub-2);
`;

const CommentInput = styled.input`
  width: 600px;
  height: 30px;
`;

const Avatar = styled.img`
  display: flex;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;
const CommentInputBox = () => {
  const [user, setUser] = useState({
    username: "username",
    userImg: null
  });
  const [commentInput, setCommentInput] = useState("");

  const onHandleCommentInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCommentInput(event.target.value);
  };
  return (
    <Wrapper>
      <Top>
        <WriteButton>작성</WriteButton>
      </Top>
      <WriteCommentBox>
        <Avatar src={basicProfile} />
        <CommentInputContainer>
          <span>{user.username}</span>
          <CommentInput
            value={commentInput}
            onChange={onHandleCommentInput}
            placeholder="댓글로 프로젝트에 대해서 문의해보세요"
          />
        </CommentInputContainer>
      </WriteCommentBox>
    </Wrapper>
  );
};

export default CommentInputBox;
