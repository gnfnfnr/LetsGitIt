import React from "react";
import styled from "styled-components";

const ApplicationBox = styled.main``;

export default function Application() {
  return (
    <ApplicationBox>
      <ul>
        <li>
          <img />
          <div>
            <span>username 님의 지원서</span>
            <span>2022</span>
          </div>
          <p>제목</p>
          <div>태그 서버</div>
          <div>
            <span>개인 페이지 보기</span>
            <span>대화창 바로가기</span>
          </div>
        </li>
      </ul>
    </ApplicationBox>
  );
}
