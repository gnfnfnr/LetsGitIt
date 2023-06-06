import { useState } from "react";
import styled from "styled-components";
import Model from "../Modal";
import Notice from "../../pages/Notice";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPrimitiveDot } from "react-icons/go";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 100px;
  @media (max-width: 768px) {
    align-items: flex-end;
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;
const NavWrapper = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  margin-right: 50px;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavStyle = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 10px;
  color: white;
  font-weight: 600;
  font-size: 17px;
  text-decoration: none;
  &.active {
    color: var(--color-main-4);
  }
  @media (max-width: 768px) {
    padding-right: 0px;
    justify-content: center;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  margin: 0 60px 0 30px;
  button {
    font-size: 17px;
    font-weight: 600;
    background-color: black;
    color: white;
    margin-right: 30px;
    border: none;
    cursor: pointer;

    :hover {
      text-decoration: underline;
      text-decoration-color: var(--color-main-4);
      text-decoration-thickness: 2px;
      text-underline-offset: 3px;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Dot = styled.div`
  display: inline-block;
  width: 12px;
  height: 12px;
  background: var(--color-main-4);
  border-radius: 10px;
  position: relative;
  top: -18px;
  left: 20px;
  visibility: hidden;
  &.new {
    visibility: visible;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 24px;
  border-radius: 30px;
  text-align: center;
  font-size: 13px;
  background-color: var(--color-sub-4);
  color: var(--color-sub-1);
  margin-right: 30px;
  :hover {
    background-color: var(--color-sub-3);
    color: var(--color-sub-2);
  }
  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-right: 30px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    svg {
      display: flex;
      align-items: flex-end;
    }
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 400px;
  margin-right: 50px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin-right: 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin-right: 30px;
`;

const NewAlertContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 85px;
  height: 54px;

  button {
    font-size: 17px;
    font-weight: 600;
    color: white;
    border: none;
    cursor: pointer;
  }
  span {
    margin-left: 12px;
  }
`;

const MenuIcon = styled(GiHamburgerMenu)`
  fill: white;
`;

const AlertIcon = styled(GoPrimitiveDot)`
  width: 12px;
  height: 12px;
  fill: var(--color-main-4);
  margin-left: 3px;
  visibility: hidden;
  &.new {
    visibility: visible;
  }
`;

const Header = () => {
  const [isLogIn, setIsLogIn] = useState<Boolean>(true);
  const [newMessage, setNewMessage] = useState<Boolean>(false);
  const [newAlert, setNewAlert] = useState<Boolean>(true);
  const [showNotice, setShowNotice] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const headers = [
    { name: "팀매칭", path: "/matching" },
    { name: "프로젝트", path: "/project" },
    { name: "커뮤니티", path: "/community" },
    { name: "마이페이지", path: "/mypage" }
  ];

  return (
    <>
      {isLogIn ? (
        <Wrapper>
          <NavWrapper>
            {headers.map((menu, index) => (
              <NavStyle to={menu.path} key={index}>
                <p>{menu.name}</p>
              </NavStyle>
            ))}
          </NavWrapper>
          <InfoContainer>
            <Dot className={newMessage ? "new" : ""} />
            <button onClick={() => navigate("/received/messages")}>쪽지</button>
            <Dot className={newAlert ? "new" : ""} />
            <button onClick={() => setShowNotice(true)}>알림</button>
          </InfoContainer>

          <HamburgerWrapper>
            <IconContainer>
              <MenuIcon size={24} onClick={() => setShowMenu(!showMenu)} />
            </IconContainer>{" "}
            {showMenu && (
              <MenuWrapper>
                {headers.map((menu, index) => (
                  <NavStyle to={menu.path} key={index}>
                    <p>{menu.name}</p>
                  </NavStyle>
                ))}
                <NewAlertContainer>
                  <button onClick={() => navigate("/received/messages")}>
                    <span>쪽지</span>
                  </button>
                  <AlertIcon className={newMessage ? "new" : ""} />
                </NewAlertContainer>
                <NewAlertContainer>
                  <button onClick={() => setShowNotice(!showMenu)}>
                    <span>알림</span>
                  </button>
                  <AlertIcon className={newAlert ? "new" : ""} />
                </NewAlertContainer>
              </MenuWrapper>
            )}
          </HamburgerWrapper>
        </Wrapper>
      ) : (
        <Wrapper>
          <ButtonContainer>
            <Button>로그인</Button>
            <Button>회원가입</Button>
          </ButtonContainer>
        </Wrapper>
      )}

      {showNotice && (
        <Model
          Children={<Notice setShowNotice={setShowNotice} />}
          setShowNotice={setShowNotice}
        />
      )}
    </>
  );
};

export default Header;
