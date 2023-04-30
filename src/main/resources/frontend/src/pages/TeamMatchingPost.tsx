import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsFillBookmarkFill, BsCheckLg } from "react-icons/bs";
import styled from "styled-components";
import PostContent from "../components/TeamMatching/Post/PostContent";
import WritorProfile from "../components/TeamMatching/Post/WritorProfile";
import Comment from "../components/TeamMatching/Post/Comment";
import ProjectTeamMember from "../components/TeamMatching/Post/ProjectTeamMember";
import ProjectMethod from "../components/TeamMatching/Post/ProjectMethod";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  grid-template-rows: 1fr 4fr 4fr;
  padding: 10px;
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-row: span 3;
  padding: 0 20px 0 20px;
`;

const ContentContainer = styled.div`
  display: grid;
  padding: 0 20px 0 20px;
`;

const CommentContainer = styled.div`
  display: grid;
  padding: 0 20px 0 20px;
`;

const ProjectInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: span 3;
  padding: 0 20px 0 20px;
  
`;

const GoBack = styled.div`
  grid-column: span 3;
  padding: 0 20px 0 20px;
  color: var(--color-sub-1);
  font-size: 16px;
  font-weight: 500;
  svg {
    width: 15px;
    height: 15px;
    fill: var(--color-sub-1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
  align-items: left;
  button{
    cursor: pointer;
    font-size: 15px;
    font-weight: 500;
    border: none;
    height: 32px;
    text-align: center;
    margin-right: 10px;
    border-radius: 10px;

    svg{
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
  &.marked{
    color: var(--color-sub-1);
    background-color: var(--color-sub-2);
    svg{
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

    const handleClickBookMark = () => {
      setBookMark(!bookMark);
    }

    return (
        <Wrapper>
            <GoBack><BiArrowBack/>목록</GoBack>
            <ProfileContainer>
                <WritorProfile />
            </ProfileContainer>
            <ContentContainer>
                <PostContent />
            </ContentContainer>
            <ProjectInfoContainer>
            <ButtonContainer>
  <StateButton >{processState ? "모집 진행중" : "모집 완료"}</StateButton>
  <BookMarkButton 
  className={ bookMark ? "marked" : ""}
  onClick={handleClickBookMark}> 스크랩 { bookMark ? <BsCheckLg /> : <BsFillBookmarkFill/> } </BookMarkButton>
 </ButtonContainer>

                <ProjectMethod />
                <ProjectTeamMember/>
            </ProjectInfoContainer>
            <CommentContainer>
                <Comment />
            </CommentContainer>
            
        </Wrapper>
    )
}

export default TeamMatchingPost;
