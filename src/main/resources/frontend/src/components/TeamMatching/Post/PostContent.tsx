import { useState } from "react";
import styled from "styled-components";
import { GrFormNextLink } from "react-icons/gr";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: var(--color-sub-1);
    border-bottom: 2px solid var(--color-sub-1);
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 13px;
    margin-bottom: 30px;
    h2{
        font-size: 32px;
    }
`;

const ContentContainer = styled.div`
    text-align: left;
`;

const ProjectReviewContainer = styled.div`
    display: none;
    color: var(--color-main-4);
    font-size: 20px;
    font-weight: 600;
`;

const Icon = styled(GrFormNextLink)`
    width: 15px;
    height: 15px;
    fill: var(--color-main-4);
`;

const PostContent = () => {
    const [title, setTitle] = useState("커리어 SNS기반 멘토링 플랫폼 프로젝트");
    const [date, setDate] = useState("2023.04.12");
    const [content, setContent] = useState("글 내용");
    
    return (
        <Wrapper>
            <Top>
                {title}
                {date}
            </Top>
            <ProjectReviewContainer >
                    프로젝트 후기글 보러가기 <Icon />
            </ProjectReviewContainer>
            <ContentContainer>
                {content}
            </ContentContainer>
        </Wrapper>
    )
}

export default PostContent;