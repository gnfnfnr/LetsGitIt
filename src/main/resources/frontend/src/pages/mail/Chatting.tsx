import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import chatData from "../../resource/chatData.json";

const ChattingBox = styled.section`
  position: fixed;
  right: 0;
  background: #000000;
  width: 40%;
  bottom: 0;
  max-width: 500px;
  height: 50vh;
  @media (max-width: 900px) {
    width: 50vw;
    height: 100%;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
    max-width: initial;
  }

  &::before {
    width: 50%;
    height: 100%;
  }
`;

const ChattingHeader = styled.header`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 105px;
`;
const ChattingMain = styled.main`
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  height: calc(50vh - 205px);
  @media (max-width: 900px) {
    height: calc(100% - 205px);
  }
`;

const InputBox = styled.div`
  background: var(--color-sub-2);
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 18px 20px;
  box-sizing: border-box;
  align-items: center;
  gap: 20px;
`;

const Input = styled.textarea`
  resize: none;
  border: 1px solid rgba(178, 178, 178, 0.5);
  border-radius: 4px;
  padding: 16px;
  width: 70%;
`;

const InputButton = styled.button`
  background: rgb(249, 213, 162);
  border-radius: 4px;
  padding: 11px 9px;
  width: 30%;
  max-width: 50px;
  text-align: center;
`;

const Opposite = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  align-self: start;
  max-width: 80%;
`;
const OppositeContent = styled.p`
  background: #d9d9d9;
  border-radius: 4px;
  margin: 0;
  padding: 16px;
`;
const Date = styled.span`
  margin-top: 20px;
  color: #eaeaea;
  font-size: 15px;
`;
const User = styled.div`
  max-width: 80%;
  align-self: end;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
const UserContent = styled.p`
  background: #b2b2b2;
  border-radius: 4px;
  margin: 0;
  padding: 16px;
`;

const UserName = styled.span`
  font-weight: 500;
  color: #eaeaea;
`;

const UserImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const ChatUser = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 26px;
  justify-content: center;
`;

export default function Chatting() {
  const { id } = useParams();
  const [data, setData] = useState(chatData[Number(id)]);
  useEffect(() => {
    setData(chatData[Number(id)]);
  }, [id]);
  return (
    <ChattingBox>
      <ChattingHeader>
        <ChatUser>
          {data.opposite.image && <UserImage src={data.opposite.image} />}
          <UserName>{data.opposite.username}</UserName>
        </ChatUser>
        <svg
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.50211 7.63381C5.11401 7.63381 4.75057 7.47823 4.47539 7.1939C4.20151 6.90957 4.04965 6.53404 4.04965 6.13303C4.04965 5.73202 4.20151 5.35649 4.47539 5.07216C4.75057 4.78917 5.11401 4.63226 5.50211 4.63226C5.89021 4.63226 6.25365 4.78917 6.52883 5.07216C6.80271 5.35649 6.95458 5.73202 6.95458 6.13303C6.95458 6.53404 6.80271 6.90957 6.52883 7.1939C6.39443 7.33384 6.23445 7.44479 6.0582 7.52031C5.88194 7.59583 5.69292 7.63441 5.50211 7.63381ZM10.8538 4.47534L10.0049 5.22506C10.0451 5.47988 10.0659 5.74007 10.0659 5.99891C10.0659 6.25776 10.0451 6.51929 10.0049 6.77277L10.8538 7.52249C10.9179 7.57921 10.9638 7.65476 10.9854 7.73909C11.0069 7.82342 11.0031 7.91253 10.9745 7.99458L10.9628 8.02945C10.7292 8.70448 10.3791 9.33018 9.92959 9.87625L9.90623 9.90441C9.85164 9.97073 9.77889 10.0184 9.69756 10.0412C9.61623 10.0639 9.53014 10.0606 9.45063 10.0318L8.39665 9.64423C8.00725 9.97416 7.57372 10.2343 7.10385 10.4154L6.90006 11.5541C6.88468 11.6398 6.84441 11.7188 6.7846 11.7803C6.72478 11.8419 6.64825 11.8832 6.56517 11.8987L6.53013 11.9054C5.85517 12.0315 5.14386 12.0315 4.4689 11.9054L4.43386 11.8987C4.35078 11.8832 4.27425 11.8419 4.21443 11.7803C4.15462 11.7188 4.11435 11.6398 4.09897 11.5541L3.89389 10.41C3.42846 10.2275 2.99489 9.96798 2.61017 9.64154L1.5484 10.0318C1.46892 10.0609 1.38276 10.0642 1.30138 10.0415C1.22 10.0187 1.14725 9.97092 1.0928 9.90441L1.06944 9.87625C0.620709 9.3296 0.27074 8.70405 0.0362286 8.02945L0.0245466 7.99458C-0.0338634 7.82693 0.0141626 7.63917 0.145261 7.52249L1.00454 6.76472C0.964299 6.51258 0.944829 6.25508 0.944829 6.00025C0.944829 5.74275 0.964299 5.48524 1.00454 5.23578L0.147857 4.47802C0.0837299 4.4213 0.0378335 4.34575 0.0162705 4.26142C-0.0052925 4.17709 -0.00150044 4.08798 0.0271426 4.00593L0.0388246 3.97106C0.273763 3.29645 0.620329 2.6728 1.07203 2.12426L1.0954 2.09609C1.14998 2.02978 1.22274 1.9821 1.30407 1.95936C1.3854 1.93661 1.47149 1.93986 1.551 1.96868L2.61276 2.35896C2.99957 2.03038 3.4305 1.77019 3.89648 1.59047L4.10157 0.446449C4.11694 0.360671 4.15721 0.281756 4.21703 0.22019C4.27685 0.158624 4.35338 0.11732 4.43645 0.101767L4.4715 0.0950614C5.1531 -0.0316871 5.85112 -0.0316871 6.53272 0.0950614L6.56777 0.101767C6.65085 0.11732 6.72738 0.158624 6.78719 0.22019C6.84701 0.281756 6.88728 0.360671 6.90265 0.446449L7.10644 1.58511C7.57632 1.76751 8.00985 2.02635 8.39925 2.35628L9.45323 1.96868C9.53271 1.93964 9.61886 1.93627 9.70024 1.95903C9.78162 1.98178 9.85437 2.02959 9.90883 2.09609L9.93219 2.12426C10.3839 2.67548 10.7305 3.29645 10.9654 3.97106L10.9771 4.00593C11.0329 4.17223 10.9849 4.35866 10.8538 4.47534ZM5.50211 3.77525C4.24175 3.77525 3.22023 4.83075 3.22023 6.13303C3.22023 7.43531 4.24175 8.49082 5.50211 8.49082C6.76247 8.49082 7.784 7.43531 7.784 6.13303C7.784 4.83075 6.76247 3.77525 5.50211 3.77525Z"
            fill="#EAEAEA"
          />
        </svg>
      </ChattingHeader>
      <ChattingMain>
        <Opposite>
          <OppositeContent>
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </OppositeContent>
          <Date>{data.opposite.createdAt}</Date>
        </Opposite>
        <User>
          <UserContent>ㅇㄹㄹ</UserContent>
          <Date>{data.opposite.createdAt}</Date>
        </User>
        <Opposite>
          <OppositeContent>
            Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </OppositeContent>
          <Date>{data.opposite.createdAt}</Date>
        </Opposite>
        <User>
          <UserContent>ㅇㄹㄹ</UserContent>
          <Date>{data.opposite.createdAt}</Date>
        </User>
      </ChattingMain>
      <InputBox>
        <Input placeholder="내용을 입력해주세요." />
        <InputButton>보내기</InputButton>
      </InputBox>
    </ChattingBox>
  );
}
