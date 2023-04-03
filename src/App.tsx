import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notice from "./pages/Notice";
import { GlobalStyle } from "./styles/global-style";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
