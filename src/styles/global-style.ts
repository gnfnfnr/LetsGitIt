// global-style.ts
import { createGlobalStyle } from "styled-components";
import "./fonts/pretendard.css";

export const GlobalStyle = createGlobalStyle`

    body{
        font-family: Pretendard;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        all: unset;
        cursor: pointer;
    }
`;
