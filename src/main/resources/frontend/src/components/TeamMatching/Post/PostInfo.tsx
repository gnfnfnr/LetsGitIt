import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 12px;
    color: var(--color-sub-1);
    .span{
        color: var(--color-main-4);
    }
`;

const Container = styled.div`
    display: flex;
    
`;
const PostInfo = () => {
    const [views, setViews] = useState(1234);
    const [comment, setComment] = useState(3);
    const [bookmark, setBookmark] = useState(100);

    return (
        <Wrapper>
            <Container>
                조회수 <span>{views}</span>
            </Container>
            <Container>
                댓글 <span>{comment}</span>
            </Container>
            <Container>
                스크랩 <span>{bookmark}</span>
            </Container>
        </Wrapper>
    );
}

export default PostInfo;