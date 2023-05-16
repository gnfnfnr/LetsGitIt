import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import styled from "styled-components";

const FieldBlock = styled.div`
  max-width: 180px;
  width: 100%;
  background: #222222;
  text-align: center;
  border-radius: 10px;
  position: relative;
`;

const FieldText = styled.div`
  padding: 20px 0px;
`;

interface fieldInfo {
  name?: string;
  Component: JSX.Element;
  showSelect: boolean[];
  setShowSelect: Dispatch<SetStateAction<boolean[]>>;
  index: number;
}

export const MatchingSort = ({
  name,
  Component,
  showSelect,
  setShowSelect,
  index,
}: fieldInfo) => {
  return (
    <FieldBlock key={name}>
      {name ? (
        <>
          <FieldText
            onClick={(event) => {
              setShowSelect(
                showSelect.map((state, idx) => idx === index && !state)
              );
            }}
          >
            {name}
          </FieldText>
          {showSelect[index] && Component}
        </>
      ) : (
        Component
      )}
    </FieldBlock>
  );
};
