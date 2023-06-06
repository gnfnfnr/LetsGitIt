import React from "react";
import styled from "styled-components";
import { ReactComponent as DownArrow } from "../../styles/Icons/DownArrow.svg";

const EndDateInputBox = styled.div`
  //   background: var(--color-sub-4);

  display: flex;
  gap: 10px;
`;
const DateSelect = styled.select`
  all: unset;
  padding: 6px 28px 6px 10px;
  position: relative;
  z-index: 2;
`;

const SelectBox = styled.div`
  background: var(--color-sub-4);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;
const DateOption = styled.option``;
const SelectIcon = styled(DownArrow)`
  z-index: 1;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export default function EndDateInput() {
  const today = new Date();
  const years = Array.from(
    { length: 5 },
    (_, index) => today.getFullYear() + index
  );
  const months = Array.from({ length: 12 }, (_, index) => 1 + index);
  const days = Array.from({ length: 31 }, (_, index) => 1 + index);

  return (
    <EndDateInputBox>
      <SelectBox>
        <DateSelect name="year" id="year">
          {years.map((year) => (
            <DateOption value={year}>{year}</DateOption>
          ))}
        </DateSelect>
        <SelectIcon />
      </SelectBox>
      <SelectBox>
        <DateSelect name="month" id="month">
          {months.map((month) => (
            <DateOption value={month}>{month}</DateOption>
          ))}
        </DateSelect>
        <SelectIcon />
      </SelectBox>
      <SelectBox>
        <DateSelect name="day" id="day">
          {days.map((day) => (
            <DateOption value={day}>{day}</DateOption>
          ))}
        </DateSelect>
        <SelectIcon />
      </SelectBox>
    </EndDateInputBox>
  );
}
