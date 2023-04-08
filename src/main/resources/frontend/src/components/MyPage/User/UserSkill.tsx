import React, { useState, useEffect } from "react";
import styled from "styled-components";
const MedalIcon = require("../../../styles/Icons/MedalIcon.svg") as string;

const Wrapper = styled.div`
  height: 300px;
  width: 370px;
  background-color: #222222;
  color: white;
  padding: 20px;
  border-radius: 20px;
  justify-content: flex-start;
  font-size: 20px;
`;

const ToolContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
  font-size: 18px;
  justify-content: space-between;
`;

const Tool = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  border-left: 5px solid white;
  padding-left: 8px;
  & + & {
    margin-left: 10px;
  }
`;

const Medalcontainer = styled.div`
  display: inline-flex;
  justify-content: space-between;
  margin-bottom: 15px;
  svg {
    margin-right: 10px;
    height: 60px;
  }
`;

const LanguageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  display: flex;
  flex-wrap: wrap;
`;

const Language = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  font-size: 20px;

  span {
    width: 100px;
    display: inline-block;
  }
`;

interface ProgressBarProps {
    width: number;
  }
  
const ProgressBar = styled.div<ProgressBarProps>`
  width: 200px;
  height: 10px;
  margin-left: 10px;
  position: relative;
  border-radius: 4px;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: 2px;
    background-image: linear-gradient(to right, #7c08ed, #f9d5a2);
    width: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: #f44336;
    width: ${(props) => props.width}%;
    background-image: linear-gradient(to right, #7c08ed, #f9d5a2);
    transition: width 0.5s ease-in-out;
    border-radius: 4px;
  }
`;
interface LanguageItemProps {
    name: string;
    percentage: number;
  }
  
  const LanguageItem: React.FC<LanguageItemProps> = ({ name, percentage }) => {
    return (
      <Language>
        <span>{name}</span>
        <ProgressBar width={percentage} />
      </Language>
    );
  };

  interface ToolItemProps {
    tool: string;
  }
  
  const ToolItem: React.FC<ToolItemProps> = React.memo(({ tool }) => <div>{tool}</div>);
  

export default function UserSkill() {
  const [languages, setLanguages] = useState([
    { name: "C++", percentage: 100 },
    { name: "Python", percentage: 80 },
    { name: "Java", percentage: 60 },
    { name: "javascript", percentage: 40 },
    { name: "Kotlin", percentage: 40 }
  ]);
  const [tool, setTool] = useState<string[]>([]);

  useEffect(() => {
    const tools = "ReactiveX Firebase Realm Git Bitrise";
    setTool(tools.split(" "));
  }, []);

  return (
    <Wrapper>
      <Medalcontainer>
        <MedalIcon />
        <MedalIcon />
        <MedalIcon />
      </Medalcontainer>

      <LanguageContainer>
        {languages.map((language) => (
          <LanguageItem
            key={language.name}
            name={language.name}
            percentage={language.percentage}
          />
        ))}
      </LanguageContainer>

      <ToolContainer>
        {tool.map((t, index) => (
          <ToolItem key={index} tool={t} />
        ))}
      </ToolContainer>
    </Wrapper>
  );
}
