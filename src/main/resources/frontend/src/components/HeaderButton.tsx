import React from "react";
import { text } from "stream/consumers";
import styled from "styled-components";

const HeaderButtonBox = styled.div`
  border: 1px solid var(--color-main-4);
  padding: 20px 43px;
  color: var(--color-main-4);
`;

interface ButtonInfo {
  text: string;
}

export default function HeaderButton({ text }: ButtonInfo) {
  return <HeaderButtonBox>{text}</HeaderButtonBox>;
}
