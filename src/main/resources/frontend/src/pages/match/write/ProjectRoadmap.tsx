import { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import regionData from "../../../resource/regionData.json";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  p {
    font-size: 1.25rem;
    color: var(--color-sub-1);
    font-weight: 550;
    margin-bottom: 10px;
  }
`;

const Label = styled.label`
  background-color: var(--color-sub-4);
  border-radius: 10px;
  margin-top: 5px;
  padding: 10px 7px 10px 7px;
  font-size: 0.93rem;
  font-weight: 550;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  & + & {
    margin-left: 10px;
  }
`;
const RadioButton = styled.input`
  background-color: var(--color-sub-4);
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 3px solid var(--color-sub-1);
  margin-right: 10px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background-color: var(--color-main-4);
    opacity: 0;
    transition: all 0.2s ease-in-out;
  }

  &:checked:before {
    opacity: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--color-sub-1);
  label {
    margin: 5px 0;
  }

  input[type="radio"] {
    margin-right: 5px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border: 3px solid var(--color-sub-1);
    border-radius: 50%;
    outline: none;
    transition: all 0.3s ease-in-out;

    &:checked {
      border-color: var(--color-main-4);
      background-color: var(--color-sub-4);
    }
  }
`;


const LocationSelect =  styled(Select)`
  color: var(--color-sub-1);
  & .select__control {
    width: 150px;
    height: 50px;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: var(--color-sub-4);
    border: none;
    outline: none;
    color: var(--color-sub-1);
    box-Shadow: none;
  }

  & .select__indicator-separator,
  .select__dropdown-indicator {
    display: none;
  }

  & .select__menu {
    width: 150px;
    color: var(--color-sub-1);
    background: var(--color-sub-4);
    z-index: 10;
  }
`;

export default function ProjectRoadmap() {
  const [selectedTerm, setSelectedTerm] = useState("");
  const [selectedMeet, setSelectedMeet] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleTerm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTerm(event.target.value);
  };

  const handleMeet = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMeet(event.target.value);
  };

  const colourStyles = {
    option: (style: any, { isFocused }: any) => { 
      return {
        ...style,
        backgroundColor: isFocused ? 'var(--color-sub-2)' : null,
        color: 'var(--color-sub-1)'
      }
    },
    singleValue: (base: any) => ({ 
      ...base,
      color: "var(--color-sub-1)" 
    }),
    input: (base: any) => ({ 
      ...base,
      color: "var(--color-sub-1)" 
    }),
    control: (base: any) => ({ 
      ...base,
      height: '30px'
    }),
  };

  return (
    <Wrapper>
      <p>진행기간</p>
      <ButtonContainer>
        <Label>
          <RadioButton
            type="radio"
            name="term"
            value="1month"
            checked={selectedTerm === "1month"}
            onChange={handleTerm}
          />
          1달 이내
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="term"
            value="3months"
            checked={selectedTerm === "3months"}
            onChange={handleTerm}
          />
          3달 이내
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="term"
            value="6months"
            checked={selectedTerm === "6months"}
            onChange={handleTerm}
          />
          6달 이내
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="term"
            value="1-"
            checked={selectedTerm === "1-"}
            onChange={handleTerm}
          />
          1년 이내
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="term"
            value="1+"
            checked={selectedTerm === "1+"}
            onChange={handleTerm}
          />
          1년 이상
        </Label>
      </ButtonContainer>

      <p>회의유형</p>
      <ButtonContainer>
        <Label>
          <RadioButton
            type="radio"
            name="meeting"
            value="face"
            checked={selectedMeet === "face"}
            onChange={handleMeet}
          />
          대면
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="meeting"
            value="online"
            checked={selectedMeet === "online"}
            onChange={handleMeet}
          />
          비대면
        </Label>
        <Label>
          <RadioButton
            type="radio"
            name="meeting"
            value="mix"
            checked={selectedMeet === "mix"}
            onChange={handleMeet}
          />
          혼합
        </Label>
      </ButtonContainer>

      <p>지역</p>
      <LocationSelect
        styles={colourStyles}
        className="basic-single"
        classNamePrefix="select"
          options={regionData}
          placeholder="언어를 입력하세요"
          maxMenuHeight={100}
          onChange={(op: any) => {
            setSelectedLocation(op.label)
          }
          }
        />
    </Wrapper>
  );
}
