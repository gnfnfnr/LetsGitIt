import { useEffect, useState } from "react";
import styled from "styled-components";
import basicProfile from "../../styles/Icons/BasicProfile.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-sub-1);
  margin-bottom: 10px;
  width: 100%;
`;

const Position = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  width: 100%;
  height: 46px;
  align-items: center;
  padding: 10px;
  background-color: var(--color-sub-4);
  color: var(--color-sub-1);
  justify-content: space-between;
  font-weight: 450;
  font-size: 1.25rem;
  position: relative;
  &.write {
    background-color: var(--color-sub-2);
    border: 1px solid var(--color-sub-1);
    color: var(--color-sub-1);
  }
`;

const ReviewInputBox = styled.input`
  display: block;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: var(--color-sub-4);
  width: 100%;
  min-height: 150px;
  padding: 5px 15px 5px 15px;
`;

const User = styled.div`
  display: flex;
  height: 32px;
  border-radius: 10px;
  background-color: var(--color-sub-2);
  padding: 3px 10px 3px 10px;
  box-sizing: border-box;
  align-items: center;
  font-size: 0.94rem;
  font-weight: 400;
  cursor: pointer;
  span {
    margin-left: 10px;
    :hover{
        color: var(--color-sub-3);
    }
  }
`;

const Button = styled.div`
  display: flex;
  color: var(--color-sub-2);
  background-color: var(--color-sub-3);
  border-radius: 10px;
  width: 44px;
  height: 30px;
  font-size: 0.8125rem;
  font-weight: 450;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  display: flex;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const ReviewContainerBox = styled.div`
  display: flex;
  margin: 15px 0 50px 0;
  font-size: 0.94rem;
  font-weight: 500;
`;

const Menu = styled.div <{ isVisible: boolean }>`
    display: ${(props) => (props.isVisible ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 40px;
    right: 0px;
    box-sizing: border-box;
    width: 115px;
    height: 65px;
    padding: 10px 5px 10px 5px;
    font-size: 0.875rem;
    font-weight: 400;
    text-align: center;
    color: var(--color-sub-2);
    border-radius: 10px;
    background-color: var(--color-sub-3);
    margin: 5px 0 5px 0;
    justify-content: space-between;
    hr {
        width: 100%;
        border: none;
        border-top: 1px solid var(--color-sub-2);
    }
`;

interface PropsInterface {
    type: string;
    username: string;
    PostionName: string;
    content: string;
}
  
const ReviewContainer = ({
  type,
  username,
  PostionName,
  content
}: PropsInterface) => {
  const [writeMode, setWriteMode] = useState(false);
  const [newReview, setNewReview] = useState("");
  const [showUserMenu, setShowUserMenu] = useState(false);

  useEffect(() => {
    type === "write" ? setWriteMode(true) : setWriteMode(false);
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setNewReview(event?.target.value);
  };

  const onClickUser = () => {
    setShowUserMenu(!showUserMenu);
  };

  return (
    <Wrapper>
      <Position className={writeMode ? "write" : ""}>
        <span>{PostionName}</span>
        {writeMode ? (
          <Button>작성</Button>
        ) : (
          <User onClick={onClickUser}>
            <Avatar src={basicProfile} /> <span>{username}</span>
          </User>
        )}
        {!writeMode && (
          <Menu isVisible={showUserMenu}>
            <span>개인페이지 보기</span>
            <hr />
            <span>쪽지 보내기</span>
          </Menu>
        )}
      </Position>
      <ReviewContainerBox>
        {writeMode ? (
          <ReviewInputBox
            value={newReview}
            onChange={onHandleChange}
            placeholder="프로젝트 후기를 작성하세요"
          />
        ) : (
          <span>{content}</span>
        )}
      </ReviewContainerBox>
    </Wrapper>
  );
};

export default ReviewContainer;
