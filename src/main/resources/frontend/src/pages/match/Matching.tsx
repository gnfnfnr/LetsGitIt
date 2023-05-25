import React, { useState, useEffect } from "react";
import CheckButton from "../../components/CheckButton";
import styled from "styled-components";
import regionData from "../../resource/regionData.json";
import languageData from "../../resource/languageData.json";
import DetailSort from "./DetailSort";
import HeaderButton from "../../components/HeaderButton";
import { useNavigate } from "react-router-dom";
import Selected from "./Selected";
import matchingData from "../../resource/matchingData.json";
import { MatchingSort } from "./MatchingSort";
import { ReactComponent as Close } from "../../styles/Icons/Close.svg";
import { ReactComponent as Reset } from "../../styles/Icons/Reset.svg";
import { ReactComponent as DownArrow } from "../../styles/Icons/DownArrow.svg";
import { ReactComponent as UpArrow } from "../../styles/Icons/UpArrow.svg";
import { ReactComponent as Search } from "../../styles/Icons/Search.svg";

const MatchingHeader = styled.header`
  max-width: var(--width-max);
  margin: 120px auto 55px;
  padding: 0 20px;
  color: var(--color-sub-1);
`;

const MatchingMain = styled.main`
  color: var(--color-sub-1);
  max-width: var(--width-max);
  margin: 30px auto 0;
  font-weight: 500;
`;

const MatchingTable = styled.table`
  border-collapse: collapse;
  // margin: 0 20px;
`;

const TableHeader = styled.thead`
  background: #222222;
  border-top: 3px solid #444444;
  border-bottom: 3px solid #444444;
  & tr {
    display: grid;
    grid-template-columns: 1fr 1.5fr 4fr 0.5fr 0.5fr 0.5fr;
    padding: 20px 0;
    word-break: keep-all;
  }

  @media (max-width: 1060px) {
    & tr {
      grid-template-columns: 1fr 1.5fr 4fr 1fr;
    }
    &>tr>th: nth-child(n + 5) {
      display: none;
    }
  }
`;

const TableBody = styled.tbody`
  @media (max-width: 900px) {
    & tr {
      grid-template-columns: initial;
    }

    & td {
      display: flex;
    }

    & td::before {
      content: attr(dataType);

      padding-left: 15px;
      font-size: 15px;
      font-weight: bold;
      text-align: left;
    }
  }
`;

const ItemAuthor = styled.td`
  padding: 0 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  & > img {
    width: 44px;
    height: 44px;
    object-fit: contain;
  }
`;

const ItemTitle = styled.td`
  display: flex;
  align-items: center;
  gap: 24px;
  & > p {
    max-width: 650px;
    width: 100%;
    text-align: left;
  }
`;

const ItemState = styled.span<{ state: number }>`
  border-radius: 10px;
  width: 70px;
  margin-right: 20px;

  ${({ state }) => state && "  padding: 10px 14px; background: #222222;"}
`;

const MatchingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 20px 37px;
`;

const MatchField = styled.div<{ show: boolean }>`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 40px;
  justify-items: center;
  margin-bottom: 87px;
  @media (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

const TitleLeft = styled.div`
  display: flex;
`;

const TitleText = styled.span`
  margin-right: 50px;
`;

const CheckText = styled.span`
  margin-left: 10px;
`;

const TableItem = styled.tr`
  border-bottom: 2px solid #444444;
  display: grid;
  grid-template-columns: 1fr 1.5fr 4fr 0.5fr 0.5fr 0.5fr;
  text-align: center;
  align-items: center;
  min-height: 80px;

  @media (max-width: 1060px) {
    grid-template-columns: 1fr 1.5fr 4fr 1fr;
    &>td: nth-child(n + 5) {
      display: none;
    }
  }
`;

const MatchingTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  & p {
    margin-top: 8px;
    margin-bottom: 24px;
  }
`;

const SortList = styled.div`
  padding: 11px 16px;
  background: #f9d5a2;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
  margin-bottom: 60px;
  align-items: center;
  position: relative;

  & > svg {
    position: absolute;
    right: 20px;
  }
`;

const SortItem = styled.div`
  background: #222222;
  border-radius: 10px;
  padding: 8px 10px;
  margin-right: 12px;

  & > span {
    margin-right: 6px;
  }
`;

const TitleRight = styled.div`
  position: relative;
  & > svg {
    margin-left: 8px;
  }
`;

const TitleOrder = styled.ul`
  all: unset;
  list-style: none;
  padding: 11px 9px;
  background: var(--color-sub-3);
  position: absolute;
  top: 20px;
  width: 80px;
  left: -10px;
  box-sizing: border-box;
  border-radius: 8px;
  color: var(--color-sub-2);
  font-weight: bold;

  & > li:not(:last-child) {
    margin-bottom: 16px;
  }
`;

const MatchingSearch = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-sub-3);
  border-radius: 20px;
  width: max-content;
`;

const SearchInput = styled.input`
  padding: 11px 12px;
  width: calc(100% - 66px);
`;

const SearchLabel = styled.label`
  width: 40px;
  height: 40px;
  background: var(--color-sub-1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: var(--color-sub-3);
  }
`;

type Op = { value: string; label: string }[];

export default function Matching() {
  const navigate = useNavigate();
  const [region, setRegion] = useState<Op | []>([]);
  const [languages, setLanguages] = useState<Op | []>([]);
  const [search, setSearch] = useState<string[]>([]);
  const [showOrder, setShowOrder] = useState(false);
  useEffect(() => {
    setSearch(
      Array.from(
        new Set([
          ...search,
          ...region.map(({ value }) => value),
          ...languages.map(({ value }) => value),
        ])
      )
    );
  }, [region, languages]);
  const [showSelect, setShowSelect] = useState(
    Array.from({ length: 5 }, () => false)
  );

  const sort = [
    {
      name: "진행기간",
      Component: (
        <DetailSort
          showSelect={showSelect}
          setShowSelect={setShowSelect}
          search={search}
          setSearch={setSearch}
          button
          sort={["1달 이내", "3달 이내", "6달 이내", "1년 이내", "1년 이상"]}
        />
      ),
      id: "period",
    },
    {
      name: "회의유형",
      Component: (
        <DetailSort
          showSelect={showSelect}
          setShowSelect={setShowSelect}
          search={search}
          setSearch={setSearch}
          button
          sort={["대면", "비대면", "혼합"]}
        />
      ),
      id: "type",
    },
    {
      Component: (
        <Selected
          options={languageData}
          placeholder="언어"
          value={languages}
          setValue={setLanguages}
        />
      ),
      id: "language",
    },
    {
      name: "포지션",
      Component: (
        <DetailSort
          showSelect={showSelect}
          setShowSelect={setShowSelect}
          search={search}
          setSearch={setSearch}
          sort={["프론트", "서버", "안드로이드", "IOS", "기타"]}
          button={false}
        />
      ),
      id: "position",
    },
    {
      Component: (
        <Selected
          options={regionData}
          placeholder="지역"
          value={region}
          setValue={setRegion}
        />
      ),
      id: "region",
    },
  ];

  const [checked, setChecked] = useState<number[]>([]);

  return (
    <>
      <MatchingHeader>
        <MatchingTitle>
          <div>
            <h3>팀매칭</h3>
            <p>사이드프로젝트를 통해 개발능력을 업그레이드해보세요</p>
          </div>
          <HeaderButton
            text="팀매칭 시작하기"
            onClick={() => navigate("/TeamMatchingCreate")}
          />
        </MatchingTitle>
        <MatchingSearch>
          <SearchInput />
          <SearchLabel>
            <Search />
          </SearchLabel>
        </MatchingSearch>
      </MatchingHeader>
      <MatchingMain>
        <MatchField
          show={showSelect.filter((state) => state).length ? true : false}
        >
          {sort.map(({ id, name, Component }, index) => (
            <MatchingSort
              key={id}
              name={name}
              Component={Component}
              showSelect={showSelect}
              setShowSelect={setShowSelect}
              index={index}
            />
          ))}
        </MatchField>
        {search.length !== 0 && (
          <SortList>
            {search.map((item, index) => (
              <SortItem key={index}>
                <span>{item}</span>

                <Close
                  onClick={() => {
                    setSearch(search.filter((state) => state !== item));
                    setRegion(region.filter(({ value }) => value !== item));
                    setLanguages(region.filter(({ value }) => value !== item));
                  }}
                />
              </SortItem>
            ))}
            <Reset
              onClick={() => {
                setSearch([]);
                setRegion([]);
                setLanguages([]);
              }}
            />
          </SortList>
        )}
        <MatchingInfo>
          <TitleLeft>
            <TitleText>전체글 {matchingData.length}개</TitleText>
            <CheckButton check={false} />
            <CheckText onClick={() => {}}>모집 진행중</CheckText>
          </TitleLeft>
          <TitleRight
            onClick={() => {
              setShowOrder(!showOrder);
            }}
          >
            최신순
            {showOrder ? <UpArrow /> : <DownArrow />}
            {showOrder && (
              <TitleOrder>
                <li>조회순</li>
                <li>댓글순</li>
                <li>스크랩순</li>
              </TitleOrder>
            )}
          </TitleRight>
        </MatchingInfo>

        <MatchingTable>
          <TableHeader>
            <tr>
              <th>작성일</th>
              <th>작성자</th>
              <th>제목</th>
              <th>모집 인원</th>
              <th>스크랩</th>
              <th>댓글</th>
            </tr>
          </TableHeader>
          <TableBody>
            {matchingData.map(
              ({ id, createdAt, author, title, scrap, comment, state }) => (
                <TableItem key={id}>
                  <td datatype="작성일">{createdAt.slice(0, 10)}</td>
                  <ItemAuthor datatype="작성자">
                    {author.image && <img src={author.image} alt="유저 사진" />}
                    <span>{author.username}</span>
                  </ItemAuthor>
                  <ItemTitle datatype="제목">
                    <p>{title}</p>
                    <ItemState state={state}>
                      {state ? "모집중" : "모집완료"}
                    </ItemState>
                  </ItemTitle>
                  <td datatype="모집인원">3/4</td>
                  <td>{scrap}</td>
                  <td>{comment}</td>
                </TableItem>
              )
            )}
          </TableBody>
        </MatchingTable>
      </MatchingMain>
    </>
  );
}
