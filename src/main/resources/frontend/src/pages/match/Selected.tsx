import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";

const SelectBox = styled.div`
  color: var(--color-sub-1);
  position: relative;
`;

const SelectMenu = styled.div`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  margin-top: 16px;
  background: #222222;
  border-radius: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SelectPlaceholder = styled.div`
  padding: 20px 22px;
  text-align: center;
  background: #222222;
  border-radius: 10px;
`;

const Menuitem = styled.div`
  padding: 20px 24px;

  &:not(:last-child) {
    border-bottom: 1px solid #b2b2b2;
  }

  &:hover {
    background: #b2b2b2;
    color: #222222;
  }
`;

type Op = { value: string; label: string }[];

interface SelectedOptions {
  placeholder: string;
  options: Op;
  value: Op | [];
  setValue: Dispatch<SetStateAction<Op | []>>;
}

export default function Selected({
  placeholder,
  options,
  value,
  setValue,
}: SelectedOptions) {
  const [showMenu, setShowMenu] = useState(false);
  const [data, setData] = useState(options);
  useEffect(() => {
    const find = value.map(({ value }) => value);
    setData(options.filter((op) => !find.includes(op.value)));
  }, [value]);
  return (
    <SelectBox>
      <SelectPlaceholder onClick={() => setShowMenu(!showMenu)}>
        {placeholder}
      </SelectPlaceholder>
      {showMenu && (
        <SelectMenu>
          {data.map((dt) => (
            <Menuitem
              onClick={() => {
                setValue([dt, ...value]);
              }}
            >
              {dt.value}
            </Menuitem>
          ))}
        </SelectMenu>
      )}
    </SelectBox>
  );
}
