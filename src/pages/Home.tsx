import React, { useState } from "react";
import Notice from "./Notice";
import Model from "../components/Modal";

export default function Home() {
  const [showNotice, setShowNotice] = useState(false);
  return (
    <>
      {showNotice && <Model Children={<Notice />} />}
      <button onClick={() => setShowNotice(!showNotice)}>알림</button>
    </>
  );
}
