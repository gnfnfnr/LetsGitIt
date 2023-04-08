import React, { useState } from "react";
import styled from "styled-components";
import Archive from "./Archive";
import Portfolio from "./Portfolio";
import { ReactComponent as leftarrowIcon } from "../../styles/Icons/leftarrowIcon.svg";
import { ReactComponent as rightarrowIcon } from "../../styles/Icons/rightarrowIcon.svg";

const TabWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;
  margin-bottom: 110px;
  position: relative;
`;

const TabContainer = styled.div`
  display: inline-flex;
  flex-direction: row;
  margin-bottom: 100px;
`;

interface TabListProps {
  backgroundColor?: string;
  color?: string;
}

const TabList = styled.div <TabListProps >`
    width: 137px;
    height: 53px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    color: #B2B2B2;
    font-size: 24px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    &.active{
      color: black;
      background-color: #F9D5A2;
    }
    & + & {
      margin-left: 10px;
    }
  `;

const ProfileComment = styled.div`
  display: flex;
  align-items: center;
  color: #f9d5a2;
  position: absolute;
  top: -4px;
  left: -40px;
  width: 500px;
  &.editMode {
    display: none;
  }
`;

const ArchiveComment = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  color: #f9d5a2;
  right: -130px;
  top: 18px;
  width: 500px;
  &.editMode {
    display: none;
  }
`;

const ArrowIcon = styled(leftarrowIcon)`
  display: flex;
  margin: 0 5px 0 5px;
`;

const RArrowIcon = styled(rightarrowIcon)`
  display: flex;
  margin: 0 5px 0 5px;
`;


const MyPageTab = () => {
  const [isInit, setIsinit] = useState(true);
  const [activeTab, setActiveTab] = useState(0);
  const onClickTab = (tabId: number) => {
    setActiveTab(tabId);
  };

  const tabList = [
    {
      Title: <div onClick={() => onClickTab(0)}>Portfolio</div>,
      Content: (
        <div>
          <Portfolio />
        </div>
      )
    },
    {
      Title: <div onClick={() => onClickTab(1)}>Archieve</div>,
      Content: (
        <div>
          <Archive />
        </div>
      )
    }
  ];
  return (
    <TabWrapper>
      {isInit && (
        <ProfileComment className={isInit ? "" : "editMode"}>
          <span style={{ marginTop: "23px" }}>
            GitHub의 Repository에서 프로젝트를 가져와서
            <br />
            개발 포트폴리오를 만들어보세요
          </span>
          <RArrowIcon />
        </ProfileComment>
      )}
      <TabContainer>
        {tabList.map((tab, index) => {
          return (
            <TabList
              className={activeTab === index ? "active" : ""}
              key={index}
            >
              {tab.Title}
            </TabList>
          );
        })}
      </TabContainer>
      {isInit && (
        <ArchiveComment className={isInit ? "" : "editMode"}>
          <ArrowIcon />
          <span>렛츠깃잇에서의 활동들을 모아볼 수 있어요</span>
        </ArchiveComment>
      )}
      {tabList[activeTab].Content}
    </TabWrapper>
  );
};

export default MyPageTab;
