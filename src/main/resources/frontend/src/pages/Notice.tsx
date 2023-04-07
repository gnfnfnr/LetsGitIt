import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import NoticeItem from "../components/NoticeItem";
import noticeData from "../resource/noticeData.json";

const NoticeBox = styled.div`
  color: white;
  background: var(--color-sub-2);
  display: flex;
  flex-direction: column;
  font-weight: 600;
  border-radius: 5%;
  max-width: 40%;
  height: 60vh;
  position: absolute;
  z-index: 10;
  top: 80px;
  right: 10%;
  @media (max-width: 900px) {
    max-width: 400px;
    height: 380px;
  }

  @media (max-width: 450px) {
    right: 50%;
    transform: translateX(50%);
    width: 100%;
  }
`;
const NoticeHeader = styled.div`
  padding: 24px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 26px;
`;
const HeaderComplete = styled.button`
  color: var(--color-main-4);
  padding-left: 28px;
`;
const NoticeList = styled.ul`
  all: unset;
  list-style: none;
  font-weight: 500;
  height: calc(100% - 164px);
  overflow: auto;

  //   height: 228px;
  &::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none; /* 인터넷 익스플로러 */
    scrollbar-width: none; /* 파이어폭스 */
  }
`;

const NoticeButton = styled.div`
  padding: 20px 0;
  background: var(--color-main-4);
  text-align: center;
  color: #000000;
  margin-top: 36px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const HeaderSelect = styled.div`
  display: flex;
  gap: 16px;

  & > span:last-child {
    cursor: pointer;
  }
`;

interface Open {
  setShowNotice: Dispatch<SetStateAction<boolean>>;
}

export default function Notice({ setShowNotice }: Open) {
  const [data, setData] = useState(noticeData);
  const [showDelete, setShowDelete] = useState<boolean>(false);
  const [checked, setChecked] = useState<number[]>([]);

  return (
    <NoticeBox>
      <NoticeHeader>
        <HeaderSelect>
          <span>전체 알림</span>
          {!showDelete && (
            <span onClick={() => setShowDelete(true)}>알림 삭제</span>
          )}
        </HeaderSelect>
        {showDelete ? (
          <div>
            <button
              onClick={() =>
                checked.length
                  ? setChecked([])
                  : setChecked(data.map(({ id }) => id))
              }
            >
              전체 {checked.length ? "취소" : "선택"}
            </button>
            <HeaderComplete onClick={() => setShowDelete(false)}>
              완료
            </HeaderComplete>
          </div>
        ) : (
          <button
            onClick={() => {
              setShowNotice(false);
            }}
          >
            닫기
          </button>
        )}
      </NoticeHeader>
      <NoticeList>
        {data.map((dt) => (
          <NoticeItem
            key={dt.id}
            {...dt}
            showDelete={showDelete}
            checked={checked}
            setChecked={setChecked}
          />
        ))}
      </NoticeList>
      {showDelete && (
        <NoticeButton
          onClick={() => {
            console.log(checked);
            setShowDelete(false);
            setChecked([]);
          }}
        >
          삭제하기
        </NoticeButton>
      )}
    </NoticeBox>
  );
}
