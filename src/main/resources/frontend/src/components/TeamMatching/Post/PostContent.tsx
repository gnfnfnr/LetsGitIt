import { useState } from "react";
import styled from "styled-components";
import { GrFormNextLink } from 'react-icons/gr';
import PostInfo from "./PostInfo";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: var(--color-sub-1);
    border-bottom: 2px solid var(--color-sub-1);
    position: relative;
`;

const Top = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 13px;
    margin-bottom: 30px;
    p{
        font-size: 32px;
        font-weight: 500;
        margin-bottom: 10px;
        margin-top: 0;
    }
`;

const ContentContainer = styled.div`
    text-align: left;
    margin-bottom: 30px;
`;

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProjectReviewContainer = styled.div<{ isVisible: boolean }>`
    display: ${props => props.isVisible ? 'inline-block' : 'none'};
    text-align: right;
    text-decoration: underline;
    color: var(--color-main-4);
    height: 50px;
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    svg {
        path{
            stroke: var(--color-main-4);
            height: 15px;
            width: 15px;
        }
    }
`;

const PostContent = () => {
    const [title, setTitle] = useState("커리어 SNS기반 멘토링 플랫폼 프로젝트");
    const [date, setDate] = useState("2023.04.12");
    const [content, setContent] = useState("복슬복슬은 ‘반려견 프로파일 데이터화를 통한 미용 예약 중개 플랫폼’입니다.복슬복슬의 비전은 2030 딩펫족, 펫펨족과 같이 반려견을 자신의 가족, 친구와 같은 소중한 존재로 인식하고 있는 소비자층을 타겟팅, 기존의 산발적으로 흩어져있던 반려견 미용 업체를 앱 하나로 쉽게 접근할 수 있도록 하여 소비자의 불편함을 해소하는 것입니다. 또한, 배냇미용과 같은 특수 미용의 경우에도 키워드 검색을 통해 업체를 쉽게 선별할 수 있도록 하고, 미용 과정 CCTV 송출을 통해 반려인의 불안함을 줄이고 보다 만족할 수 있는 서비스를 제공하는 것을 목표로 합니다.");
    const [state, setState] = useState(false);

    return (
        <Wrapper>
            <Top>
                <p>{title}</p>
                <InfoContainer>
                {date}
            <PostInfo />
            </InfoContainer>
            </Top>
            
            <ProjectReviewContainer isVisible={state}>
                    프로젝트 후기글 보러가기 <GrFormNextLink/>
            </ProjectReviewContainer>
            <ContentContainer>
                {content}
            </ContentContainer>
        </Wrapper>
    )
}

export default PostContent;