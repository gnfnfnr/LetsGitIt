import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global-style";
import EditProfile from "./pages/profile/EditProfile";
import Messages from "./pages/mail/Messages";
import Chatting from "./pages/mail/Chatting";
import Received from "./pages/mail/Received";
import Applications from "./pages/mail/Applications";
import Matching from "./pages/match/Matching";
import Board from "./pages/board/Board";
import Header from "./components/Header/Header";
import MyPage from "./pages/MyPage";
import TeamMatchingCreate from "./pages/TeamMatchingCreate";
import Apply from "./pages/Apply";
import TeamMatchingPost from "./pages/TeamMatchingPost";
import BoardPost from "./pages/BoardPost";
import CommunityPost from "./pages/CommunityPost";
import ProjectPostCreate from "./pages/board/ProjectPostCreate";
import CommunityPostCreate from "./pages/board/CommunityPostCreate";
import UserHome from "./pages/home/UserHome";
import CheckMatchng from "./pages/home/CheckMatchng";
import SelectMatching from "./pages/home/SelectMatching";
import Home from "./pages/home/Home";
import { LoginPage } from "./LoginPage";
import Project from "./pages/project/Project";
import Revise from "./pages/project/Revise";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route>
          <Route element={<UserHome />}>
            <Route path="/home/check" element={<CheckMatchng />} />
            <Route path="/home/select" element={<SelectMatching />} />
          </Route>
        </Route>
        <Route path="/mypage/edit" element={<EditProfile />} />
        <Route element={<Received />}>
          <Route path="/received/messages" element={<Messages />}>
            <Route path="/received/messages/:id" element={<Chatting />} />
          </Route>
          <Route path="/received/applications" element={<Applications />} />
        </Route>
        <Route path="/matching" element={<Matching />} />
        {/* <Route element={<Board />}>
          <Route path="/project" />
          <Route path="/community" />
        </Route> */}
        <Route element={<Project />} path="/project" />
        <Route element={<Revise />} path="/project/process/:id" />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/TeamMatchingCreate" element={<TeamMatchingCreate />} />
        <Route path="/matching/:id" element={<TeamMatchingPost />} />
        <Route path="/community/:id" element={<CommunityPost />} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/project/finish/:id" element={<BoardPost />} />
        <Route path="/project/create" element={<ProjectPostCreate />} />
        <Route path="/community/create" element={<CommunityPostCreate />} />
        <Route path="/login/github/authorized" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
