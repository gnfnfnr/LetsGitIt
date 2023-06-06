import React, { useEffect, useState, KeyboardEvent } from "react";
import styled from "styled-components";
import Select from "react-select";
import languageData from "../../../resource/languageData.json";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 750px;
    margin-bottom: 100px;
`;
const InputList = styled.div`
  border-left: solid 2px var(--color-sub-1);
  padding: 3px 10px 3px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
  height: 20px;
  box-sizing: border-box;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;
  max-width: 400px;
`;
const Input = styled.input`
  width: 150px;
  height: 30px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--color-sub-4);
`;
const LangnToolContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const TeamMemberContainer = styled.div`
    display: flex;
    flex-direction: row;
    span{
        margin: 5px 0 0 5px;
    }
`;

const LanguageSelect =  styled(Select)`
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
    color: var(--color-sub-1);
    background: var(--color-sub-4);
    z-index: 10;
  }

  .select-value{
  border: 1px solid darkgray !important;
}

`;
const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const LeftContainer = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
`;
const ProjectDetailInput = () => {
    const [languages, setLanguages] = useState(["JAVA", "JAVASCRIPT"]);
  const [tools, setTools] = useState(["VS Code"]);
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
  };

  const onRemoveLanguages = (language: string) => {
    const newLanguage = languages.filter((lang) => lang !== language);
    setLanguages(newLanguage);
  };

  const handleToolKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newTool = event.currentTarget.value;
      if (tools.includes(newTool)) return;
      setTools([...tools, newTool]);
      event.currentTarget.value = "";
    }
  };

  const onRemoveTools = (tool: string) => {
    const newTools = tools.filter((t) => t !== tool);
    setTools(newTools);
  };

    return(
        <Wrapper>
            <LeftContainer>
            <p>프로젝트 분야</p>
            <Input
          type="text"
          placeholder="ex. 공유 서비스"
        />
            <p>프로젝트 기간</p>
            <p>프로젝트 팀원 수</p>
            <TeamMemberContainer>
            <Input
          type="number"
          style={{ width: "40px" }}
        /> <span>명 </span>
        </TeamMemberContainer>
            </LeftContainer>
            <RightContainer>
            <p>포지션</p>
            <Input
          type="text"
          placeholder="ex. IOS"
        />
            <p>언어</p>
      <LangnToolContainer>
        <LanguageSelect
        styles={colourStyles}
        className="basic-single"
        classNamePrefix="select"
          options={languageData}
          placeholder="언어를 입력하세요"
          onChange={(op: any) => {
            if(languages.includes(op.label)) return;
            else setLanguages([...languages, op.label])
          }
          }
        />
        
        <ListContainer>
          {languages.map((lang) => (
            <InputList key={lang} onClick={() => onRemoveLanguages(lang)}>
              {lang}
            </InputList>
          ))}
        </ListContainer>
      </LangnToolContainer>
      <p>툴</p>
      <LangnToolContainer>
        <Input
          type="text"
          placeholder="툴을 입력하세요"
          onKeyPress={handleToolKeyPress}
        />
        <ListContainer>
          {tools.map((tool) => (
            <InputList key={tool} onClick={() => onRemoveTools(tool)}>
              {tool}
            </InputList>
          ))}
        </ListContainer>
      </LangnToolContainer>
      </RightContainer>
        </Wrapper>
    );
}

export default ProjectDetailInput;