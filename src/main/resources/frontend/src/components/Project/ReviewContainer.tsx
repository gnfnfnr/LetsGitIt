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
    font-size: 20px;
    &.write{
        background-color: var(--color-sub-2);;
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
    font-size: 15px;
    font-weight: 400;
    span{
        margin-left: 10px;
    }

`;

const Button = styled.div`
    display: flex;
    color: var(--color-sub-2);
    background-color: var(--color-sub-3);
    border-radius: 10px;
    width: 44px;
    height: 30px;
    font-size: 13px;
    font-weight: 450;
    align-items: center;
    justify-content: center;
`;

interface PropsInterface {
    type: string;
    username: string;
    PostionName: string;
    content: string;
}

const Avatar = styled.img`
  display: flex;
  height: 20px;
  width: 20px;
  border-radius: 50%;
`;

const ReviewContainerBox = styled.div`
    display: flex;
    margin: 15px 0 50px 0;
    font-size: 15px;
    font-weight: 500;
`;

const ReviewContainer = ({ type, username, PostionName, content }: PropsInterface) => {
    const [writeMode, setWriteMode] = useState(false);
    const [newReview, setNewReview] = useState("");

    useEffect(()=>{
        type === "write" ? setWriteMode(true) : setWriteMode(false);
    },[]);
    
    const onHandleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setNewReview(event?.target.value);
    }

    return(
        <Wrapper>
            <Position className={ writeMode ? "write" : ""}>
                <span>{PostionName}</span>
                {writeMode ? 
                <Button>작성</Button>: 
                <User>
                    <Avatar src={basicProfile} /> <span>{username}</span>
                </User>}
            </Position>
            <ReviewContainerBox>
                {writeMode ? 
                <ReviewInputBox 
                value={newReview}
                onChange={onHandleChange}
                placeholder="프로젝트 후기를 작성하세요"
                /> : <span>{content}</span>}
            </ReviewContainerBox>
        </Wrapper>
    )
}

export default ReviewContainer;