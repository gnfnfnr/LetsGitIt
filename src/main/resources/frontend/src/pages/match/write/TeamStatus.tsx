import { useState, useRef, KeyboardEvent } from "react";
import styled from "styled-components";
import Select from "react-select";
import languageData from "../../../resource/languageData.json";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  color: var(--color-sub-1);
  p {
    font-size: 1.25rem;
    font-weight: 550;
    margin-bottom: 10px;
  }
`;

const InitialPosition = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--color-sub-1);
  justify-content: space-between;
  margin-bottom: 15px;
  margin-top: 7px;
`;

const PositionListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-size: 0.93rem;
  }
`;

const PositionInput = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--color-sub-4);
  border-radius: 10px;
  width: 50px;
  height: 30px;
  box-sizing: border-box;
  padding-left: 5px;
  justify-content: center;
  margin-right: 10px;
  position: relative;
  input {
    width: 15px;
    margin-left: 5px;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PostionNameInput = styled.input`
  display: flex;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 2px 15px 2px 15px;
  width: 154px;
  height: 30px;
  font-size: 0.93rem;
  color: var(--color-sub-1);
  background-color: var(--color-sub-4);
  margin-right: 10px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  background-color: var(--color-sub-4);
  margin-right: 5px;
`;

const PostionInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`;

const AddPosition = styled.div`
  display: flex;
  flex-direction: row;
  p {
    font-size: 1rem;
    align-items: flex-start;
    margin-right: 10px;
    margin-top: 7px;
  }
`;

const NewPositions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  align-items: flex-end;
  margin-bottom: 10px;
`;

const PositionContainer = styled.div`
  display: flex;
  flex-direction: column;
  span {
    color: var(--color-sub-1);
    font-size: 1rem;
    font-weight: 450;
    margin-right: 10px;
  }
`;

const Input = styled.input`
  width: 150px;
  height: 50px;
  padding: 5px 10px 5px 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--color-sub-4);
`;

const InputList = styled.div`
  border-left: solid 2px var(--color-sub-1);
  padding: 5px 10px 5px 5px;
  margin-right: 5px;
  margin-bottom: 10px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  margin-top: 10px;
  max-width: 400px;
  flex-wrap: wrap;
`;

const LangnToolContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

const TeamStatus = () => {
  const [positionList, setPositionList] = useState([
    {
      id: 1,
      name: "웹",
      number: 0
    },
    {
      id: 2,
      name: "서버",
      number: 0
    },
    {
      id: 3,
      name: "IOS",
      number: 0
    },
    {
      id: 4,
      name: "안드로이드",
      number: 0
    }
  ]);

  const [inputPosition, setInputPostion] = useState([
    {
      id: 5,
      name: "",
      number: 0
    }
  ]);
  const nextId = useRef(6);
  const [languages, setLanguages] = useState(["JAVA", "JAVASCRIPT"]);
  const [tools, setTools] = useState(["VS Code"]);

  type Position = {
    id: number,
    name: string,
    number: number
  };

  const onClickAdd = () => {
    if (inputPosition.length > 5) {
      //추가된 포지션이 6개 이상이면 리턴
      alert("추가된 포지션이 너무 많습니다");
      return;
    }
    const position = {
      id: nextId.current,
      name: "",
      number: 0
    };
    const newPosition = (inputPosition: Position[]) =>
      inputPosition.concat(position);
    setInputPostion(newPosition);
    nextId.current += 1;
  };

  const onClickRemove = () => {
    setInputPostion((positions) => {
      if (positions.length > 1) {
        const lastIndex = positions.length - 1;
        const newPosition = positions.filter((_, index) => index !== lastIndex);
        return newPosition;
      } else return positions;
    });
  };

  const onHandlePositionChange = (id: number, num: number) => {
    let positionArr = positionList.find((position) => position.id === id);
    if (positionArr) {
      positionArr.number = num;
    }
    const updatedPositions = [...positionList];
    //console.log(updatedPositions);
    setPositionList(updatedPositions);
  };

  const onHandlePositionInputChange = (
    id: number,
    field: string,
    num: number
  ) => {
    //사용자 입력 포지션
    let positionInputArr = inputPosition.find((position) => position.id === id);
    if (positionInputArr) {
      positionInputArr.number = num;
      positionInputArr.name = field;
    }
    const updatedPositions = [...inputPosition];
    //console.log(updatedPositions);
    setInputPostion(updatedPositions);
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

  return (
    <Wrapper>
      <p>
        포지션 <span>(각 포지션별 모집할 인원을 입력하세요)</span>
      </p>
      <PositionContainer>
        <InitialPosition>
          {positionList.map((pos) => (
            <PositionListContainer key={pos.id}>
              <span>{pos.name}</span>
              <PositionInput>
                <input
                  type="number"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onHandlePositionChange(
                      pos.id,
                      parseInt(event?.target.value)
                    )
                  }
                />
                <span>명</span>
              </PositionInput>
            </PositionListContainer>
          ))}
        </InitialPosition>

        <AddPosition>
          <p>기타</p>
          <NewPositions>
            {inputPosition.map((pos) => (
              <PostionInputContainer key={pos.id}>
                <PostionNameInput
                  placeholder="포지션을 입력하세요"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    onHandlePositionInputChange(
                      pos.id,
                      event?.target.value,
                      pos.number
                    )
                  }
                />
                <PositionInput>
                  <input
                    type="number"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      onHandlePositionInputChange(
                        pos.id,
                        pos.name,
                        parseInt(event?.target.value)
                      )
                    }
                  />
                  <span>명</span>
                </PositionInput>
              </PostionInputContainer>
            ))}
          </NewPositions>
          <ButtonContainer>
            <Button onClick={onClickAdd}>+</Button>
            <Button onClick={onClickRemove}>-</Button>
          </ButtonContainer>
        </AddPosition>
      </PositionContainer>
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
    </Wrapper>
  );
};

export default TeamStatus;
