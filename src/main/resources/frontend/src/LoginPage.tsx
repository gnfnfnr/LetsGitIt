import { useEffect } from "react"
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const LoginPage = () => {
    const [serchParams] = useSearchParams();
    useEffect(()=>{
        axios.get(`https://3.35.159.112:9000/login/oauth2?code=${serchParams.get("code")}`)
        .then((response)=> console.log("로그인", response));
    }, [])
    return(
    <>
    </>)
}