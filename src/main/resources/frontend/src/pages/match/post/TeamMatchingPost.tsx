import { useState } from "react";
import { BsFillBookmarkFill, BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import PostContent from "../../../components/post/PostContent";
import WritorProfile from "../../../components/post/WritorProfile";
import CommentList from "../../../components/comment/CommentList";
import ProjectTeamMember from "./ProjectTeamMember";
import ProjectMethod from "./ProjectMethod";
import GoBack from "../../../components/GoBack";
import CommentInputBox from "../../../components/comment/CommentInputBox";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  min-height: 800px;
  margin-bottom: 40px;
`;

const PostBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: var(--color-sub-2);
  border-radius: 20px;
  width: 1200px;
  justify-content: center;
`;
const Middle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ProfileContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 0 20px 0 20px;
`;

const ContentContainer = styled.div`
  display: grid;
  padding: 0 20px 0 20px;
  align-items: start;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
  p {
    font-size: 16px;
    color: var(--color-sub-1);
  }
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex: 3;
  width: 300px;
  flex-direction: column;
  padding: 0 20px 0 20px;
`;

const Head = styled.div`
  display: inline-flex;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  align-items: left;
  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    border: none;
    height: 32px;
    text-align: center;
    margin-right: 10px;
    border-radius: 10px;

    svg {
      width: 11px;
      height: 12px;
      fill: var(--color-sub-4);
    }
  }
`;

const BookMarkButton = styled.button`
  color: var(--color-sub-2);
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

const StateButton = styled.button`
  color: var(--color-sub-1);
  background-color: var(--color-sub-4);
  width: 97px;
`;

const TeamMatchingPost = () => {
  const [processState, setProcessState] = useState(true); //false = 모집완료
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

  return (
    <Wrapper>
      <PostBox>
        <Head>
          <GoBack />
        </Head>
        <ContentWrapper>
          <ProfileContainer>
            <WritorProfile />
          </ProfileContainer>
          <Middle>
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
          </Middle>
          <ProjectInfoContainer>
            <ButtonContainer>
              <StateButton>
                {processState ? "모집 진행중" : "모집 완료"}
              </StateButton>
              <BookMarkButton
                className={bookMark ? "marked" : ""}
                onClick={handleClickBookMark}
              >
                스크랩 {bookMark ? <BsCheckLg /> : <BsFillBookmarkFill />}
              </BookMarkButton>
            </ButtonContainer>

            <ProjectMethod />
            <ProjectTeamMember />
          </ProjectInfoContainer>
        </ContentWrapper>
      </PostBox>
    </Wrapper>
  );
};

export default TeamMatchingPost;
