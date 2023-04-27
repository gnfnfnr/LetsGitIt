import React from "react";
import SelectLanguage from "../components/SelectLanguage";
import CheckButton from "../components/CheckButton";
import styled from "styled-components";

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
    max-width: 80%;
  }

  & > span {
    padding: 10px 14px;
    background: #222222;
    border-radius: 10px;
  }
`;

export default function Matching() {
  const sort = ["진행기간", "회의유형", "지역", "포지션", "언어", "툴"];
  return (
    <>
      <MatchingHeader>
        <div>
          <h3>팀매칭</h3>
          <p>사이드프로젝트를 통해 개발능력을 업그레이드해보세요</p>
          <div>팀매칭 시작하기</div>
        </div>
        <div>찾기</div>
        <div>
          {sort.map((field) => (
            <div key={field}>{field}</div>
          ))}
        </div>
      </MatchingHeader>
      <MatchingMain>
        <div>
          <span>전체글 nn개</span>
          <div>
            <CheckButton check={false} />
            모집 진행중
          </div>
          <div>최신순</div>
        </div>

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
            <tr>
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
            </tr>
          </TableBody>
        </MatchingTable>
        {/* <ul>
          <li>
            <span>작성일</span>
            <span>작성자</span>
            <span>제목</span>
            <span>모집 인원</span>
            <span>스크랩</span>
            <span>댓글</span>
          </li>
          <li>
            <span>2023.3.45</span>
            <span>username</span>
            <span>
              사이드프로젝트를 통해 개발능력을
              업그레이드해보세요사이드프로젝트를 통해 개발능력을
              업그레이드해보세요사이드프로젝트를 통해 개발능력을
              업그레이드해보세요사이드프로젝트를 통해 개발능력을
              업그레이드해보세요
            </span>
            <span>모집완료</span>
            <span>3/4</span>
            <span>39</span>
            <span>4</span>
          </li>
        </ul> */}
      </MatchingMain>
    </>
  );
}
