import { useState, useRef } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  color: var(--color-sub-1);
  p {
    font-size: 20px;
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
`;

const PositionListContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-size: 16px;
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
  font-size: 15px;
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
    font-size: 16px;
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
    font-size: 16px;
    font-weight: 450;
    margin-right: 10px;
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

  return (
    <Wrapper>
      <p>
        포지션 <span>(각 포지션별 모집할 인원을 입력하세요)</span>
      </p>
      <PositionContainer>
        <InitialPosition>
          {positionList.map((pos) => (
            <PositionListContainer>
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
                  />{" "}
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

      <p>툴</p>
    </Wrapper>
  );
};

export default TeamStatus;
