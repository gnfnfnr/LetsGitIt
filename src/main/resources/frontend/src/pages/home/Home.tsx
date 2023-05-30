import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeTab from "./HomeTab";
import Intro from "./Intro";
import Animation from "./Animation";

const Wrapper = styled.div`
  justify-content: center;
  display: grid;
  grid-template-rows: repeat(2, minmax(max-content, 25rem));
  grid-template-columns: repeat(2, minmax(max-content, 30rem));
  gap: 1rem;
  width: 100%;
  @media (max-width: 768px) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const HomeTabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  width: 100%;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: end;
  @media (max-width: 768px) {
    justify-content: center;
    
  }
`;

const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: start;
  padding-left: 150px;

  @media (max-width: 768px) {
    padding-left: 0;
    align-self: flex-start;
  }
`;

export default function SignOutHome() {
  return (
    <Wrapper>
      <AnimationWrapper>
        <Animation />
      </AnimationWrapper>

      <IntroWrapper>
        <Intro />
      </IntroWrapper>

      <HomeTabContainer>
        <HomeTab />
      </HomeTabContainer>
    </Wrapper>
  );
}
