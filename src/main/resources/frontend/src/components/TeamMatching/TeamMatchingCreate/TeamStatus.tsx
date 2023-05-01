import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    color: var(--color-sub-1);
    font-weight: 550;
    margin-bottom: 10px;
  }
`;

const TeamStatus = () => {

    return(
        <Wrapper>
            <p>포지션 <span>(각 포지션별 모집할 인원을 입력하세요)</span></p>

            <p>언어</p>

            <p>툴</p>
        </Wrapper>
    )
}

export default TeamStatus;