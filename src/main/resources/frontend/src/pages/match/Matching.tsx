import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import CheckButton from "../../components/CheckButton";
import styled from "styled-components";
import regionData from "../../resource/regionData.json";
import languageData from "../../resource/languageData.json";
import DetailSort from "./DetailSort";
import CustomSelect from "../../components/CustomSelect";
import HeaderButton from "../../components/HeaderButton";
import { useNavigate } from "react-router-dom";

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

  & th {
    height: 60px;
  }
`;

const TableBody = styled.tbody`
  & td {
    border-bottom: 2px solid #444444;
    text-align: center;
    height: 80px;
    padding: 0 15px;
  }
`;

const BodyUser = styled.td`
  display: flex;
  align-items: center;
  & > img {
    width: 44px;
    height: 44px;
  }
`;

const BodyTitle = styled.td`
  display: flex;
  align-items: center;
  gap: 24px;
  & > p {
    height: 40px;
    overflow: hidden;
  }

  & > span {
    padding: 10px 14px;
    background: #222222;
    border-radius: 10px;
  }
`;

const MatchingInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 37px;
`;

const MatchField = styled.div<{ show: boolean }>`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  margin-bottom: ${({ show }) => (show ? 161 : 87)}px;
`;

const FieldBlock = styled.div`
  max-width: 180px;
  width: 20%;
  background: #222222;
  text-align: center;
  border-radius: 10px;
  position: relative;
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

const TableItem = styled.tr``;

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

const FieldText = styled.div`
  padding: 20px 0px;
`;

interface fieldInfo {
  name?: string;
  Component: JSX.Element;
  showSelect: boolean[];
  setShowSelect: Dispatch<SetStateAction<boolean[]>>;
  index: number;
}

const MatchingSort = ({
  name,
  Component,
  showSelect,
  setShowSelect,
  index,
}: fieldInfo) => {
  return (
    <FieldBlock key={name}>
      {name ? (
        <>
          <FieldText
            onClick={(event) => {
              event.preventDefault();
              setShowSelect(
                showSelect.map((state, idx) => idx === index && !state)
              );
            }}
          >
            {name}
          </FieldText>
          {showSelect[index] && Component}
        </>
      ) : (
        Component
      )}
    </FieldBlock>
  );
};

const SortList = styled.div`
  padding: 11px 16px;
  background: #f9d5a2;
  border-radius: 10px;
  display: flex;
`;

const SortItem = styled.div`
  background: #222222;
  border-radius: 10px;
  padding: 8px 10px;
  margin-right: 12px;
`;

export default function Matching() {
  const navigate = useNavigate();
  const [region, setRegion] = useState<null | []>(null);
  // const [language, setLanguages] = useState([]);
  const [search, setSearch] = useState<string[]>([]);
  useEffect(() => {
    if (region) {
      setSearch(
        Array.from(new Set([...search, ...region.map(({ value }) => value)]))
      );
    }
  }, [region]);

  const sort = [
    {
      name: "진행기간",
      Component: (
        <DetailSort
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
        <div></div>
        // <CustomSelect
        //   isMulti
        //   onFocus={() => setShowSeleect(showSelect.map(() => false))}
        //   color={{
        //     background: "var(--color-sub-3)",
        //     options: "var(--color-sub-2)",
        //   }}
        //   options={languageData}
        //   value={language ? region : null}
        //   onChange={(op: any) => {
        //     setLanguages(op);
        //   }}
        //   placeholder="언어"
        // />
      ),
      id: "language",
    },
    {
      name: "포지션",
      Component: (
        <DetailSort
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
        <CustomSelect
          isMulti
          onFocus={() => setShowSeleect(showSelect.map(() => false))}
          color={{
            background: "var(--color-sub-2)",
            options: "var(--color-sub-3)",
          }}
          options={regionData}
          value={region ? region : null}
          onChange={(op: any) => {
            setRegion(op);
          }}
          placeholder="지역"
        />
      ),
      id: "region",
    },
  ];
  const [showSelect, setShowSeleect] = useState(
    Array.from({ length: sort.length }, () => false)
  );

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
              setShowSelect={setShowSeleect}
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
                    console.log(region?.filter(({ value }) => value !== item));
                    if (region) {
                      setRegion(
                        region?.filter(({ value }) => value !== item) && null
                      );
                    }
                  }}
                >
                  {" "}
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
            <TableItem>
              <td>2023.3.45</td>
              <td>
                <img />
                <span>username</span>
              </td>
              <BodyTitle>
                <p>
                  사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요사이드프로젝트를 통해 개발능력을
                  업그레이드해보세요
                </p>
                <span>모집완료</span>
              </BodyTitle>

              <td>3/4</td>
              <td>39</td>
              <td>4</td>
            </TableItem>
          </TableBody>
        </MatchingTable>
      </MatchingMain>
    </>
  );
}
