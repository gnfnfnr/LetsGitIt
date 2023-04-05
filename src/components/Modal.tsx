import React from "react";
import styled from "styled-components";

const ModelBox = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  // display: flex;
  // align-items: center;
  // justify-content: center;
`;

interface Elemnet {
  Children: JSX.Element;
}

export default function Model({ Children }: Elemnet) {
  return <ModelBox>{Children}</ModelBox>;
}
