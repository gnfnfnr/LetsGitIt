import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import languageData from "../resource/languageData.json";

const CustomSelect = styled(Select)`
  & .select__control {
    padding: 10px 16px;
    background: var(--color-sub-3);
    border: none;
    max-width: 240px;
    width: 100%;
    border-radius: 10px;
    height: 56px;
  }

  & .select__indicator-separator,
  .select__dropdown-indicator {
    display: none;
  }

  & .select__menu {
    color: #222222;
    max-width: 240px;
    width: 100%;
    background: var(--color-sub-1);
    z-index: 10;
  }

  & .select__option {
    border-radius: 5px;
  }
`;

const RangeInput = styled.input`
  margin: auto;
  height: 13px;
  width: 100%;
  cursor: pointer;
  background: ;
  border-radius: 10px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;

  &::-webkit-slider-runnable-track {
    z-index: 10;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 13px;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    z-index: 3;
    position: relative;
  }

  &::-webkit-slider-thumb::before {
    content: "";
    background: blue;
    width: 50px;
    height: 80px;
    position: absolute;
    top: 50%;
    left: 0;
  }

  &::-moz-range-track {
    height: 13px;
    background: #ddd;
  }

  &::-moz-range-thumb {
    background: #fff;
    height: 13px;
    width: 20px;
    border-radius: 0 !important;
    box-shadow: -200px 0 0 200px dodgerblue;
    box-sizing: border-box;
  }
`;

const RangeSelect = styled.div`
  position: relative;
  max-width: 368px;
  margin: 27px 0 46px;
`;
const RangeBackGround = styled.div<{ range: string }>`
  width: ${({ range }) => range}%;
  height: 13px;
  left: 0px;
  top: 50%;
  position: absolute;
  z-index: 1;
  transform: translateY(-50%);
  background: linear-gradient(90deg, #7c08ed 0%, var(--color-main-4) 100%);
  border-radius: 10px;
`;

const RangeDivison = styled.div`
  width: 100%;
  height: 2px;
  left: 0px;
  top: 50%;
  position: absolute;
  z-index: 1;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.5);

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    position: absolute;
    top: -2px;
    right: 0px;
    border-radius: 50%;
    background: #f8d3a2;
  }

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    position: absolute;
    top: -2px;
    left: 0px;
    border-radius: 50%;
    background: #f8d3a2;
  }
`;

interface Language {
  locate: number;
  languages: {
    name: { value: string; label: string };
    range: string;
    index: number;
  }[];
  setLanguages: Dispatch<
    SetStateAction<
      {
        name: { value: string; label: string };
        range: string;
        index: number;
      }[]
    >
  >;
}

export default function SelectLanguage({
  locate,
  languages,
  setLanguages,
}: Language) {
  const [isClearable, setIsClearable] = useState(true);

  return (
    <>
      <CustomSelect
        theme={(theme: any) => ({
          ...theme,
          borderRadius: 10,
          colors: {
            ...theme.colors,
            primary50: "#b2b2b2",
            primary25: "#b2b2b2",
            primary: "#b2b2b2",
          },
        })}
        className="basic-single"
        classNamePrefix="select"
        isClearable={isClearable}
        name="color"
        defaultValue={
          Object.keys(!languages[locate].name).length
            ? languages[locate].name
            : null
        }
        options={languageData}
        placeholder="언어를 선택해주세요"
        onChange={(op: any) =>
          setLanguages(
            languages.map((el) =>
              locate === el.index
                ? {
                    index: el.index,
                    name: op,
                    range: el.range,
                  }
                : el
            )
          )
        }
      />
      {languages[locate] && (
        <RangeSelect>
          <RangeInput
            type="range"
            value={languages[locate].range}
            onChange={(event) =>
              setLanguages(
                languages.map((el) =>
                  locate === el.index
                    ? {
                        index: el.index,
                        name: el.name,
                        range: event.target.value,
                      }
                    : el
                )
              )
            }
            disabled={false}
          />
          <RangeDivison />
          <RangeBackGround range={languages[locate].range} />
        </RangeSelect>
      )}
    </>
  );
}
