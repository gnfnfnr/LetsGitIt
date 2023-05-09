import React, { Dispatch, SetStateAction } from "react";
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
}

export default function DetailSort({
  sort,
  button,
  setSearch,
  search,
}: DetailSortInfo) {
  return (
    <DetailSortBox>
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
