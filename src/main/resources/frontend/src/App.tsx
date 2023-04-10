import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import { GlobalStyle } from "./styles/global-style";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage/edit" element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
