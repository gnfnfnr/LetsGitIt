import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import Select from "react-select";

const RegionSelect = styled(Select)`
  & .select__control {
    padding: 10px 16px;
    border: none;
    border-radius: 10px;
  }

  & .select__indicator-separator {
    display: none;
  }

  & .select__menu {
    max-width: 240px;
    width: 100%;
    z-index: 10;
  }

  & .select__option {
    border-radius: 5px;
  }

  & .select__multi-value {
    display: none;
  }
`;

interface CustomSelectInfo {
  options: any;
  placeholder: string;
  value: null | [];
  onChange: any;
  color?: CustomSelectColor;
  onFocus: () => void;
  isMulti: boolean;
}

interface CustomSelectColor {
  background?: string; // 배경색
  placeholder?: string; // placeholder
  selected?: string; // 입력한 후 값
  hover?: string; // hover
  options?: string; // 선택한 option
  active?: string; //active; 클릭하는 도중
}

export default function CustomSelect({
  options,
  placeholder,
  value,
  onChange,
  color,
  onFocus,
  isMulti,
}: CustomSelectInfo) {
  return (
    <RegionSelect
      theme={(theme: any) => ({
        ...theme,
        borderRadius: 10,
        colors: {
          ...theme.colors,
          neutral0: color?.background, // 배경색
          neutral80: color?.selected, // 입력한 후 값
          neutral50: color?.placeholder, // placeholder
          primary25: color?.hover, // hover
          primary: color?.options, // 선택한 option
          primary50: color?.active, //active; 클릭하는 도중
        },
      })}
      isMulti={isMulti}
      className="basic-single"
      classNamePrefix="select"
      isClearable={true}
      name="color"
      options={options}
      placeholder={placeholder}
      defaultValue={value?.length ? value : null}
      onChange={onChange}
      onFocus={onFocus}
    />
  );
}
