import React, { Dispatch, SetStateAction } from "react";
import Select from "react-select";
import regionData from "../../resource/regionData.json";
import styled from "styled-components";

const RegionSelect = styled(Select)`
  & .select__control {
    color: var(--color-sub-2);
    padding: 10px 16px;
    background: var(--color-sub-3);
    border: none;
    max-width: 300px;
    width: 100%;
    border-radius: 10px;
  }

  & .select__indicator-separator {
    display: none;
  }

  & .select__menu {
    color: var(--color-sub-2);
    max-width: 240px;
    width: 100%;
    background: var(--color-sub-1);
    z-index: 10;
  }

  & .select__option {
    border-radius: 5px;
  }
`;

interface RegionInfo {
  region: string;
  setRegion: Dispatch<SetStateAction<string>>;
  placeholder: string;
}

// const [region, setRegion] = useState("");
export default function SelectRegion({
  region,
  setRegion,
  placeholder,
}: RegionInfo) {
  return (
    <RegionSelect
      theme={(theme: any) => ({
        ...theme,
        borderRadius: 10,
        colors: {
          ...theme.colors,
          neutral90: "var(--color-sub-2)",
          primary50: "var(--color-sub-3)",
          primary25: "var(--color-sub-3)",
          primary: "var(--color-sub-3)",
        },
      })}
      className="basic-single"
      classNamePrefix="select"
      isClearable={true}
      name="color"
      options={regionData}
      placeholder={placeholder}
      defaultValue={region ? region : null}
      onChange={(op: any) => setRegion(op)}
    />
  );
}
