import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import { GlobalStyle } from "./styles/global-style";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Header from "./components/Header/Header";
import MyPage from "./pages/MyPage";
import TeamMatchingCreate from "./pages/TeamMatchingCreate";
import Apply from "./pages/Apply";
import TeamMatchingPost from "./pages/TeamMatchingPost";
import BoardPost from "./pages/BoardPost";
import CommunityPost from "./pages/CommunityPost";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage/edit" element={<EditProfile />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/TeamMatchingCreate" element={<TeamMatchingCreate />} />
        <Route path="/TeamMatchingPost" element={<TeamMatchingPost />} />
        <Route path="/CommunityPost" element={<CommunityPost/>} />
        <Route path="/apply" element={<Apply />} />
        <Route path="/board" element={<BoardPost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
