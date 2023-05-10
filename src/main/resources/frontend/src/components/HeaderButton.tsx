import React from "react";
import styled from "styled-components";

const HeaderButtonBox = styled.div`
  border: 1px solid var(--color-main-4);
  padding: 20px 43px;
  color: var(--color-main-4);
  cursor: pointer;

  &:hover {
    color: var(--color-sub-2);
    background: var(--color-main-4);
  }
`;

interface ButtonInfo {
  text: string;
  onClick: () => void;
}

export default function HeaderButton({ text, onClick }: ButtonInfo) {
  return <HeaderButtonBox onClick={onClick}>{text}</HeaderButtonBox>;
}
