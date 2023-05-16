import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useRef,
} from "react";
import CheckButton from "../../components/CheckButton";
import styled from "styled-components";
import regionData from "../../resource/regionData.json";
import languageData from "../../resource/languageData.json";
import DetailSort from "./DetailSort";
import CustomSelect from "../../components/CustomSelect";
import HeaderButton from "../../components/HeaderButton";
import { useNavigate } from "react-router-dom";
import Selected from "./Selected";
import matchingData from "../../resource/matchingData.json";
import { MatchingSort } from "./MatchingSort";

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
  width: 100%;
  border-collapse: collapse;
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

const TableBody = styled.tbody``;

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
  margin-bottom: 37px;
`;

const MatchField = styled.div<{ show: boolean }>`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  row-gap: 40px;
  margin-bottom: ${({ show }) => (show ? 161 : 87)}px;
  @media (max-width: 1060px) {
    grid-template-columns: repeat(3, 1fr);
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
`;

const SortItem = styled.div`
  background: #222222;
  border-radius: 10px;
  padding: 8px 10px;
  margin-right: 12px;
`;

type Op = { value: string; label: string }[];

export default function Matching() {
  const navigate = useNavigate();
  const [region, setRegion] = useState<Op | []>([]);
  const [languages, setLanguages] = useState<Op | []>([]);
  const [search, setSearch] = useState<string[]>([]);
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
                {item}
                <span
                  onClick={() => {
                    setSearch(search.filter((state) => state !== item));
                    setRegion(region.filter(({ value }) => value !== item));
                    setLanguages(region.filter(({ value }) => value !== item));
                  }}
                >
                  X
                </span>
              </SortItem>
            ))}
          </SortList>
        )}
        <MatchingInfo>
          <TitleLeft>
            <TitleText>전체글 nn개</TitleText>
            <CheckButton check={false} />
            <CheckText onClick={() => {}}>모집 진행중</CheckText>
          </TitleLeft>
          <div>최신순</div>
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
                  <td>{createdAt.slice(0, 10)}</td>
                  <ItemAuthor>
                    {author.image && <img src={author.image} alt="유저 사진" />}
                    <span>{author.username}</span>
                  </ItemAuthor>
                  <ItemTitle>
                    <p>{title}</p>
                    <ItemState state={state}>
                      {state ? "모집중" : "모집완료"}
                    </ItemState>
                  </ItemTitle>
                  <td>3/4</td>
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
