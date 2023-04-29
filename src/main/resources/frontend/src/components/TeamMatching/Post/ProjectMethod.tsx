import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: var(--color-sub-1);
    p{
        font-weight: 500;
        margin-right: 10px;
    }
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction: row;
`;

const List = styled.div`
    display: flex;
    flex-direction: space-between;
    font-weight: 550;
    span{
        font-weight: 500;
    }
`;

const ProjectMethod = () => {
    const [time, setTime] = useState("3개월 이내");
    const [type, setType] = useState("비대면");
    const [location, setLocation] = useState("서울특별시");
    
    return (
        <Wrapper>
            <p>프로젝트 진행방식 </p> <hr />
            <ContentContainer>
                <List>진행 기간 <span>{time}</span></List>
                <List>회의 유형 <span>{type}</span></List>
                <List>지역<span>{location}</span></List>
            </ContentContainer>
        </Wrapper>
    )
}

export default ProjectMethod;