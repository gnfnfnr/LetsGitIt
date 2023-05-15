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
  width: 20%;
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
  const selectRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(selectRef);
    function handleClickOutside(e: MouseEvent): void {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setShowSelect(showSelect.map(() => false));
        console.log(selectRef);
        console.log(selectRef);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);
  return (
    <FieldBlock key={name} ref={selectRef}>
      {name ? (
        <>
          <FieldText
            onClick={(event) => {
              // event.preventDefault();
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
