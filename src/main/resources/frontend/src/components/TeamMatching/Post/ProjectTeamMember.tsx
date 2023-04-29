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

const PosContainer = styled.div`
    display:flex;
    flex-direction: row;
`;

const LangContainer = styled.div`
    display:flex;
    flex-direction: row;
`;

const PosList = styled.div`
    display: flex;
    flex-direction: space-between;
    font-weight: 550;
    span{
        font-weight: 500;
    }
`;

const LangList = styled.div`
    padding: 2px;
    color: var(--color-sub-1);
    border-left: 2px solid var(--color-sub-1);
`;

const Button = styled.div`
    display: flex;
    padding: 8px;
    font-size: 15px;
    font-weight: 500;
    width: 50px;
    height: 24px;
    color: var(--color-main-4);
    border: 1px solid var(--color-main-4);
    .done{
        background-color: var(--color-sub-3);
        color: black;
        border: none;
    }
`;

const ProjectTeamMember = () => {
    const [position, setPosition] = useState([{
        posName: "web",
        cur: 0,
        total: 2,
        state: ""
    }, {
        posName: "server",
        cur: 1,
        total: 1,
        state: "done"
    }]);
    const [langsTools, setLangsTools] = useState(["JAVA", "VS Code"]);
    
    return (
        <Wrapper>
            <p>프로젝트 팀원구성 </p> <hr />
            <PosContainer>
                <h3>포지션</h3>
                {position.map((items) => (
                    <PosList>
                        {items.posName} 
                        <span>{items.cur}/{items.total}</span>
                        <Button className={items.state === "done" ? "done" : ""}> 
                            {items.state === "done" ? "지원마감" : "지원하기"}
                        </Button>
                    </PosList>
                ))}
            </PosContainer>
            <LangContainer>
                <h3>포지션</h3>
                {langsTools.map((items) => (
                    <LangList>{items}</LangList>
                ))}
            </LangContainer>
        </Wrapper>
    )
}

export default ProjectTeamMember;