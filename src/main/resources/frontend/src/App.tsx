import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global-style";
import Home from "./pages/Home";
import EditProfile from "./pages/profile/EditProfile";
import Messages from "./pages/mail/Messages";
import Chatting from "./pages/mail/Chatting";
import Received from "./pages/mail/Received";
import Applications from "./pages/mail/Applications";
import Matching from "./pages/match/Matching";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage/edit" element={<EditProfile />} />
        <Route element={<Received />}>
          <Route path="/received/messages" element={<Messages />}>
            <Route path="/received/messages/:id" element={<Chatting />} />
          </Route>
          <Route path="/received/applications" element={<Applications />} />
        </Route>
        <Route path="/matching" element={<Matching />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
