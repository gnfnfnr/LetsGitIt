import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  color: var(--color-sub-1);
  flex-direction: row;
  margin: 40px 0 20px 30px;
`;

const StatComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 200px;
  p {
    font-size: 1.5rem;
    font-weight: 550;
    margin: 0;
  }
  span {
    font-size: 3rem;
    font-weight: 600;
  }
`;

const UserStat = () => {
    const [userCommit, setUserCommit] = useState<number>(178);
    const [userGitMe, setUserGitMe] = useState<number>(100);
    return (
        <Wrapper>
            <StatComponent>
          <p>Commits</p> <span>{userCommit}</span>
        </StatComponent>
        <StatComponent>
          <p>Git me</p> <span>{userGitMe}</span>
        </StatComponent>
        </Wrapper>)
        
}

export default UserStat;