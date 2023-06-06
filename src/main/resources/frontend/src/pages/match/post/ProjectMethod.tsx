import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: var(--color-sub-1);
    margin-bottom: 10px;
`;

const ContentContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-left: 10px;
    margin: 10px 0 0 10px;
`;

const List = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 450;
    margin-bottom: 20px;
    font-size: 15px;
    span{
        font-weight: 400;
    }
`;

const Line = styled.hr`
    flex-grow: 1;
    height: 0px;
    border-top: 0.5px solid var(--color-sub-1);
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 15px;
    font-weight: 550;
    span{
        margin-right: 10px;
    }
    margin-bottom: 10px;
`;
const ProjectMethod = () => {
    const [time, setTime] = useState("3개월 이내");
    const [type, setType] = useState("비대면");
    const [location, setLocation] = useState("서울특별시");
    
    return (
        <Wrapper>
            <Top>
            <   span>프로젝트 진행방식</span> <Line />
            </Top>
            <ContentContainer>
                <List>진행 기간 <span>{time}</span></List>
                <List>회의 유형 <span>{type}</span></List>
                <List>지역<span>{location}</span></List>
            </ContentContainer>
        </Wrapper>
    )
}

export default ProjectMethod;