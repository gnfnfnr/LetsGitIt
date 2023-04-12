import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/global-style";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import Messages from "./pages/Messages";
import Chatting from "./pages/Chatting";
import Received from "./pages/Received";
import Application from "./pages/Application";

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
          <Route path="/received/application" element={<Application />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
