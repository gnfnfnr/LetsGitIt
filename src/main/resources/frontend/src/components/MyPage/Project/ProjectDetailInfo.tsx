import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(6,max-content);
    grid-template-rows: repeat(2, 1fr);
    font-size: 16px;
    background-color: var(--color-sub-2);
    color: var(--color-sub-1);
    height: 100px;
    align-items: center;
    justify-items: left;
    
    p{
        font-weight: 500;
        font-size: 16px;
        margin-left: 20px;
        margin-right: 20px;
    }
    span{
        font-weight: 400;
        font-size: 16px;
        margin-right: 10px;
    }
`;

const ArrayContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledSpan = styled.span`
    border-left: 2px solid var(--color-sub-1);
    padding: 4px;
`;

const ProjectDetailInfo = () => {
    const [projectInfo, setProjectInfo] = useState({
        field: "공유서비스",
        member : 4,
        language: ["JAVA", "Python"],
        term: "2023.03.01 ~ 2023.04.12",
        position: "IOS",
        tools: ["Github"]
    });

    return (
        <Wrapper>
            <p>프로젝트 분야</p> <span>{projectInfo.field}</span>
            <p>프로젝트 인원 수</p> <span>{projectInfo.member}</span>
            <p>프로그래밍 언어</p> 
            <ArrayContainer>
            {projectInfo.language.map((lang) => (
                <StyledSpan key={lang}>{lang}</StyledSpan>
            ))}
            </ArrayContainer>
            <p>진행기간</p> <span>{projectInfo.term}</span>
            <p>포지션</p> <span>{projectInfo.position}</span>
            <p>소프트웨어 툴</p> 
            <ArrayContainer>
                {projectInfo.tools.map((tool) => (
                <StyledSpan key={tool}>{tool}</StyledSpan>
            ))}
            </ArrayContainer>
        </Wrapper>
    );
}

export default ProjectDetailInfo;