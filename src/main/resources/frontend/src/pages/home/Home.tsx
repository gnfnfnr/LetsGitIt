import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeTab from "./HomeTab";
import Intro from "./Intro";
import Animation from "./Animation";

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3, minmax(max-content, 25rem));
    grid-template-columns: repeat(2, minmax(max-content, 30rem)); 
    gap: 1rem;
`;

const HomeTabContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1 / 2 span;
    width: 100%;
`;

const IntroWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: end;
`;

const AnimationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-self: start;
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
