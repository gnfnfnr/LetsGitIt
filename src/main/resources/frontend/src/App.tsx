import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import { GlobalStyle } from "./styles/global-style";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Header from "./components/Header/Header";
import MyPage from "./pages/MyPage";
import TeamMatchingCreate from "./pages/TeamMatchingCreate";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
