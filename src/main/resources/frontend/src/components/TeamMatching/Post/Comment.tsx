import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: var(--color-sub-1);
    border-bottom: 2px solid var(--color-sub-1);
`;

const CommentBox = styled.div`
    display: flex;
    width: 732px;
    height: 75px;
    background-color: #333333;
    font-size: 13px;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 10px;
`;

const CommentBoxContainer = styled.div`
    text-align: left;
`;

const Button = styled.button`

`;

const CommentInput = styled.input`
    
`;

const Avatar = styled.img`
    display: flex;
`

const PostComment = () => {
    const [comment, setComment] = useState(2);
    const [user, setUser] = useState({
        username: "username",
        userImg: null,
    });
    const [date, setDate] = useState("2023.04.12");
    const [content, setContent] = useState("글 내용");
    
    return (
        <Wrapper>
            <p>댓글 {comment}개</p>
            <CommentBox>
                <Avatar src="" />
                {user.username}
                <CommentInput placeholder="댓글로 프로젝트에 대해서 문의해보세요"/>
            </CommentBox>
            <CommentBoxContainer>

            </CommentBoxContainer>
        </Wrapper>
    )
}

export default PostComment;