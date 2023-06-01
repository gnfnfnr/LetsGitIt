import React from "react";
import styled from "styled-components";

const InfoBarBox = styled.div`
  background: #ffffff;
  border-radius: 10px;
  width: 100%;
  max-width: 200px;
  height: 10px;
  margin-top: 15px;
  position: relative;
`;
const InfoBarProcess = styled.div<{ process: number }>`
  width: ${({ process }) => process}%;
  height: 100%;
  background: var(--color-main-4);
  border-radius: 10px;
`;
const InfoBarPoint = styled.div<{ process: number }>`
  width: 18px;
  height: 18px;
  background: var(--color-main-4);
  border-radius: 50%;
  position: absolute;
  top: -4px;
  left: ${({ process }) => process}%;
  transform: translateX(-${({ process }) => process}%);
`;

interface Process {
  process: number;
}

export default function InfoBar({ process }: Process) {
  return (
    <InfoBarBox>
      <InfoBarProcess process={process} />
      <InfoBarPoint process={process} />
    </InfoBarBox>
  );
}
