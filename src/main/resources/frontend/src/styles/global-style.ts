// global-style.ts
import { createGlobalStyle } from "styled-components";
import "./fonts/pretendard.css";

export const GlobalStyle = createGlobalStyle`
    :root{
        --color-sub-1:#EAEAEA;
        --color-sub-3: #B2B2B2;
        --color-sub-2: #222222;
        --color-sub-4: #333333;
        --color-main-4: #F9D5A2;
    }

    body{
        margin: 0;
        padding: 0;
        font-family: Pretendard;
        background: #000000;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    button{
        all: unset;
        cursor: pointer;
    }

    input{
        all: unset;
    }
`;
