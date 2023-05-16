import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import styled from "styled-components";

const DetailSortBox = styled.div`
  color: var(--color-sub-1);
  display: flex;
  gap: 14px;
  font-size: 18px;
  position: absolute;
  background: #000000;
  padding: 18.5px 13.5px;
  bottom: -95px;
  left: 0;
  border-radius: 10px;
  position: absolute;
  z-index: 10;
`;
const DetailSortItem = styled.div`
  padding: 18px;
  display: flex;
  gap: 8px;
  align-items: center;
  background: var(--color-sub-3);
  border-radius: 10px;
  width: max-content;
`;

const RoundButton = styled.div`
  width: 18px;
  height: 18px;
  border: 2px solid var(--color-sub-1);
  border-radius: 50%;
  box-sizing: border-box;
`;

interface DetailSortInfo {
  sort: string[];
  button?: boolean;
  setSearch: Dispatch<SetStateAction<string[]>>;
  search: string[];
  setShowSelect: Dispatch<SetStateAction<boolean[]>>;
  showSelect: boolean[];
}

export default function DetailSort({
  sort,
  button,
  setSearch,
  search,
  setShowSelect,
  showSelect,
}: DetailSortInfo) {
  const selectRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(selectRef);
    function handleClickOutside(e: MouseEvent): void {
      if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
        setShowSelect(showSelect.map(() => false));
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectRef]);
  return (
    <DetailSortBox ref={selectRef}>
      {sort.map((time) => (
        <DetailSortItem
          onClick={() =>
            search &&
            setSearch(
              search.includes(time)
                ? search.filter((state) => state !== time)
                : [...search, time]
            )
          }
        >
          {button && <RoundButton />}
          {time}
        </DetailSortItem>
      ))}
    </DetailSortBox>
  );
}
