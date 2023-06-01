import { useState } from "react";
import styled from "styled-components";
import basicProfile from "../../styles/Icons/BasicProfile.png";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import CommentInputBox from "./CommentInputBox";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  color: var(--color-sub-1);
  margin-bottom: 10px;
  svg {
    width: 12px;
    height: 8px;
    fill: var(--color-sub-1);
  }
`;

const CommentBoxContainer = styled.div`
  text-align: left;
`;

const CommentBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  span {
    &.content {
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

const ReplyAvatar = styled.img`
  display: flex;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  margin-left: 10px;
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
  span {
    margin-right: 10px;
    cursor: pointer;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReplyContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

const ReplyBoxContainer = styled.div`
  display: flex;
  margin-top: 10px;
`;

interface CommentInterface {
  //profileImg: img,
  username: string;
  content: string;
  time: string;
}

interface CommentPropsInterface {
  //profileImg: img,
  username: string;
  content: string;
  time: string;
  reply: CommentInterface[];
}

const CommentList = ({
  username,
  content,
  time,
  reply
}: CommentPropsInterface) => {
  const [showReply, setShowReply] = useState(true);
  const [showReplyBox, setShowReplyBox] = useState(false);
  const onClickReply = () => {
    setShowReply(!showReply);
  };

  const onClickWriteReply = () => {
    setShowReplyBox(!showReplyBox);
  };

  return (
    <Wrapper>
      <CommentBoxContainer>
        <CommentBox>
          <Avatar src={basicProfile} />
          <ContentContainer>
            <CommentTop>
              <span className="username">{username}</span>
              <span className="time">{time}</span>
            </CommentTop>
            <span className="content">{content}</span>
            <CommentBottom>
              <span onClick={onClickWriteReply}>답글쓰기</span>
              {reply.length > 0 ? (
                <ReplyContainer onClick={onClickReply}>
                  답글 {reply.length} 개
                  {showReply ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />}
                  {!showReply &&
                    reply.map((item, idx) => (
                      <ReplyAvatar key={idx} src={basicProfile} />
                    ))}
                </ReplyContainer>
              ) : (
                ""
              )}
            </CommentBottom>
            {showReplyBox && (
              <ReplyBoxContainer>
                <CommentInputBox />
              </ReplyBoxContainer>
            )}
            {showReply &&
              reply.map((item, idx) => (
                <CommentBox key={idx}>
                  <Avatar src={basicProfile} />
                  <ContentContainer>
                    <CommentTop>
                      <span className="username">{item.username}</span>
                      <span className="time">{item.time}</span>
                    </CommentTop>
                    <span className="content">{item.content}</span>
                  </ContentContainer>
                </CommentBox>
              ))}
          </ContentContainer>
        </CommentBox>
      </CommentBoxContainer>
    </Wrapper>
  );
};

export default CommentList;
