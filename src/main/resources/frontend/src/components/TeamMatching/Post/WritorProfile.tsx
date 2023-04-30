import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    background-color: #333333;
    width: 145px;
    height: 130px;
    border-radius: 10px;
`;

const Username = styled.div`
    display: flex;
    padding: 8px;
    font-size: 16px;
    text-align: center;
    color: var(--color-sub-1);
    border-radius: 10px;
    background-color: var(--color-sub-2);
`;

const Avatar = styled.img`

`;


const WritorProfile = () => {
    const [profileImg, setProfileImg] = useState("");
    const [username, setUsername] = useState("Username");
    
    return (
        <Wrapper>
            <Avatar src={profileImg} />
            <Username>{username}</Username>
        </Wrapper>
    )
}

export default WritorProfile;
