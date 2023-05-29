import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

const ModalBox = styled.section`
  position: fixed;
  z-index: 300;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: #ffffff3b;
`;

interface Elemnet {
  setShowNotice: Dispatch<SetStateAction<boolean>>;
  Children: JSX.Element;
}

export default function Modal({ setShowNotice, Children }: Elemnet) {
  return (
    <ModalBox
      onClick={(e) => {
        if (e.target !== e.currentTarget) return;
        e.preventDefault();
        setShowNotice(false);
      }}
    >
      {Children}
    </ModalBox>
  );
}
