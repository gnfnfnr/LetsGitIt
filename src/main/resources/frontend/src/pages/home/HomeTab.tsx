import React, { useState } from "react";
import styled from "styled-components";

const TabTable = styled.table`
  color: var(--color-sub-1);
  width: 100%;
  border-collapse: collapse;
  justify-content: center;
`;

const TabHeader = styled.th<{ active: boolean; color: string }>`
  padding: 10px;
  font-size: 1.75rem;
  font-weight: 600;
  width: 200px;
  text-align: center;
  border-bottom: solid 8px var(--color-sub-4);
  cursor: pointer;
  transition: width 0.3s ease-in-out;
  ${({ active, color }) => active && `width: 350px; border-bottom: 8px solid ${color};`}
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;


const TabContent = styled.td<{ active: boolean }>`
  padding: 10px;
  border: none;
  text-align: center;
  font-size: 0.96rem;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ active }) => (active ? 1 : 0)};
  white-space: pre-line;
  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export default function HomeTab() {
    const [tabs] = useState([
        { id: "tab1", title: "Team Matching", content: "여러 사이드프로젝트 중에서\n필터로 나에게 맞는 사이드프로젝트를 쉽게 찾을 수 있어요", color: '#9734DD' },
        { id: "tab2", title: "Project", content: "팀매칭으로 시작된 사이드프로젝트가 끝나면\n팀원들과 함께 프로젝트 후기글을 작성할 수 있어요" , color: '#B96CC8'},
        { id: "tab3", title: "Portfolio", content: "깃허브의 프로젝트로 포트폴리오를 만들 수 있어요\n포트폴리오는 팀매칭 지원 시 활용돼요" , color: '#DEA9B2' },
        { id: "tab4", title: "Git Me", content: "깃미 설명" , color: '#F9D5A2'},
      ]);

  const [selectedTab, setSelectedTab] = useState("tab1");

  const handleTabHover = (tab: string) => {
    if (selectedTab !== tab) {
      setSelectedTab(tab);
    }
  };

  return (
    <TabTable>
      <thead>
        <tr>
          {tabs.map((tab) => (
            <TabHeader
              key={tab.id}
              active={selectedTab === tab.id}
              color={tab.color}
              onMouseEnter={() => handleTabHover(tab.id)}
            >
              {tab.title}
            </TabHeader>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {tabs.map((tab) => (
            <TabContent
              key={tab.id}
              active={selectedTab === tab.id}
            >
              {tab.content}
            </TabContent>
          ))}
        </tr>
      </tbody>
    </TabTable>
  );
}
