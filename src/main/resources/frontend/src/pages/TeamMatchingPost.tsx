import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import styled from "styled-components";
import PostContent from "../components/TeamMatching/Post/PostContent";
import WritorProfile from "../components/TeamMatching/Post/WritorProfile";
import Comment from "../components/TeamMatching/Post/Comment";
import PostInfo from "../components/TeamMatching/Post/PostInfo";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-row: span 2; /* 수정 */
  grid-column: 1; /* 수정 */
`;

const ContentContainer = styled.div`
  display: grid;
  grid-row: 2 / span 3; /* 수정 */
  grid-column: 2 / span 2; /* 수정 */
`;

const CommentContainer = styled.div`
  display: grid;
  grid-row: 2 / span 2; /* 수정 */
  grid-column: 2 / span 1; /* 수정 */
`;

const ProjectInfoContainer = styled.div`
  display: grid;
  grid-row: 2 / span 2; /* 수정 */
  grid-column: 3 / span 1; /* 수정 */
`;

const GoBack = styled.div`
  display: flex;
  color: var(--color-sub-1);
  font-size: 16px;
  font-weight: 500;
  svg {
    width: 15px;
    height: 15px;
    fill: var(--color-sub-1);
  }
`;



const TeamMatchingPost = () => {
    const [processState, setProcessState] = useState(true); //false = 모집완료
    const [bookMark, setBookMark] = useState(false);
    return (
        <Wrapper>
            <GoBack><BiArrowBack/>목록</GoBack>
            <ProfileContainer>
                <WritorProfile />
            </ProfileContainer>
            <ContentContainer>
                <PostContent />
            </ContentContainer>
            <CommentContainer>
                <Comment />
            </CommentContainer>
            <ProjectInfoContainer>
                <PostInfo />
            </ProjectInfoContainer>
        </Wrapper>
    )
}

export default TeamMatchingPost;
