import { useState } from "react";
import { BsFillBookmarkFill, BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import PostContent from "../components/TeamMatching/Post/PostContent";
import WritorProfile from "../components/TeamMatching/Post/WritorProfile";
import CommentList from "../components/TeamMatching/Post/Comment/CommentList";
import GoBack from "../components/GoBack";
import CommentInputBox from "../components/TeamMatching/Post/Comment/CommentInputBox";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 800px;
  margin-bottom: 40px;
`;

const PostBox = styled.div`
  display: grid;
  grid-template-columns: minmax(auto, max-content) minmax(auto, 750px) minmax(
      auto,
      max-content
    );
  grid-template-rows: repeat(4, minmax(auto, max-content));
  padding: 10px;
  background-color: var(--color-sub-2);
  border-radius: 20px;
  grid-template-areas:
    "header header header"
    "profile content side"
    ". content ."
    ". comment .";
`;

const ProfileContainer = styled.div`
  grid-area: profile;
  padding: 0 20px 0 20px;
`;

const ContentContainer = styled.div`
  grid-area: content;

  padding: 0 20px 0 20px;
`;

const CommentContainer = styled.div`
  grid-area: comment;
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
  p {
    font-size: 16px;
    color: var(--color-sub-1);
  }
`;

const Head = styled.div`
  grid-area: header;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  grid-area: side;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: center;
`;

const Button = styled.button`
  color: var(--color-sub-2);
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  border: none;
  height: 32px;
  text-align: center;
  margin-right: 10px;
  border-radius: 10px;
  background-color: var(--color-sub-1);
  width: 88px;
  &.marked {
    color: var(--color-sub-1);
    background-color: var(--color-sub-2);
    svg {
      width: 13px;
      height: 12px;
      fill: var(--color-sub-1);
    }
  }
`;

const CommunityPost = () => {
  const [isWriter, setIsWriter] = useState(true); //작성자일 때만 수정하기 보이기
  const [bookMark, setBookMark] = useState(false);
  const [comments, setComments] = useState([
    {
      //profileImg: img,
      username: "user1",
      content: "예시 댓글 어쩌고 저쩌고",
      time: "2023.03.28 12:01",
      reply: [
        {
          //profileImg: img,
          username: "user1",
          content: "대댓글",
          time: "2023.03.28 12:05"
        }
      ]
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
          content: "대댓글11",
          time: "2023.03.28 12:05"
        },
        {
          //profileImg: img,
          username: "user1",
          content: "대댓글22",
          time: "2023.03.28 12:05"
        }
      ]
    }
  ]);
  const handleClickBookMark = () => {
    setBookMark(!bookMark);
  };

  const onClickEdit = () => {
    //edit page로 이동하기
  };

  return (
    <Wrapper>
      <PostBox>
        <Head>
          <GoBack />
        </Head>
        <ProfileContainer>
          <WritorProfile />
        </ProfileContainer>
        <ContentContainer>
          <PostContent />
        </ContentContainer>
        <CommentContainer>
          <>
            <p>댓글 {comments.length}개</p>
            <CommentInputBox />
            {comments.map((comment, idx) => (
              <CommentList
                key={idx}
                username={comment.username}
                content={comment.content}
                time={comment.time}
                reply={comment.reply}
              />
            ))}
          </>
        </CommentContainer>
        <ButtonContainer>
          <Button
            className={bookMark ? "marked" : ""}
            onClick={handleClickBookMark}
          >
            스크랩 {bookMark ? <BsCheckLg /> : <BsFillBookmarkFill />}
          </Button>
          {isWriter && <Button onClick={onClickEdit}>수정하기</Button>}
        </ButtonContainer>
      </PostBox>
    </Wrapper>
  );
};

export default CommunityPost;
