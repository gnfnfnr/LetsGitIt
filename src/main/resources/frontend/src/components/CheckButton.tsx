import React from "react";
import styled from "styled-components";

interface Check {
  check: boolean;
  onClick?: () => void;
}

const Button = styled.div<{
  check: boolean;
}>`
  ${({ check }) =>
    `
      width: 14px;
      height: 14px;
      color: white;
      position: relative;
      &::before{
        ${check ? "content: '✔'" : "content: ''"};
        width: 14px;
        height: 14px;
        border: 2px solid var(--color-main-4);
        border-radius: 4px;
        text-align: center;
        font-size: 8px;
        position: absolute;
      }
  `}
`;

export default function CheckButton({ check, onClick }: Check) {
  return <Button check={check} onClick={onClick} />;
}
