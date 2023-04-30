import { useState } from "react";
import styled from "styled-components";
import basicProfile from "../../../styles/Icons/BasicProfile.png";

const Wrapper = styled.div<{ isVisible: boolean }>`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    background-color: #333333;
    width: 145px;
    height: ${props => props.isVisible ? '210px' : '130px'};
    //min-height: 130px;
    //max-height: 210px;
    border-radius: 10px;
    align-items: center;
    justify-content: center;
    
`;

const Username = styled.div`
    display: flex;
    padding: 8px;
    font-size: 16px;
    text-align: center;
    color: var(--color-sub-1);
    border-radius: 10px;
    background-color: var(--color-sub-2);
    &:hover{
        color: var(--color-sub-3);
    }
`;

const Avatar = styled.img`
  display: flex;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-bottom: 5px;
`;

const Menu = styled.div<{ isVisible: boolean }>`
    display: ${props => props.isVisible ? 'flex' : 'none'};
    flex-direction: column;
    box-sizing: border-box;
    width: 115px;
    height: 65px;
    padding: 10px 5px 10px 5px;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: var(--color-sub-2);
    border-radius: 10px;
    background-color: var(--color-sub-3);
    margin: 5px 0 5px 0;
    justify-content: space-between;
`;


const WritorProfile = () => {
    const [profileImg, setProfileImg] = useState("");
    const [username, setUsername] = useState("Username");
    const [openMenu, setOpenMenu] = useState(false);

    const onClickUsername = () =>{
        setOpenMenu(!openMenu);
    }
    
    return (
        <Wrapper isVisible={openMenu}>
            <Avatar src={basicProfile} />
            <Username onClick={onClickUsername}>{username}</Username>
            <Menu isVisible={openMenu}>
                <span>개인페이지 보기</span>
                <span>쪽지 보내기</span>
            </Menu>
        </Wrapper>
    )
}

export default WritorProfile;
