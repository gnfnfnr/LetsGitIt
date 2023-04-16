import React, { useState } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const QuillWrapper = styled.div`
  display: flex;
`;

const EditorWrapper = styled.div`
  .ql-toolbar {
    button svg {
      fill: #eaeaea !important;
    }
    button:hover svg {
      fill: #f9d5a2 !important;
    }
    box-sizing: border-box;
    background-color: #222222;
    width: 720px;
    height: 60px;
    display: flex;
    align-items: center;
    color: #eaeaea !important;
    border: none !important;
    
    &:hover {
      color: #f9d5a2 !important;
    }
  }

  .ql-editor {
    box-sizing: border-box;
    border: none !important;
    margin-top: 40px;
    background-color: #222222;
    min-height: 800px;
    font-size: 16px;
    line-height: 1.5;
    padding: 30px;
    color: #eaeaea;
    
  }
`;

interface PropsInterface {
    content: string;
}

export default function Editor( { content } : PropsInterface ) {
  const [curContent, setCurContent] = useState(content);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: "left" }, { align: "center" }, { align: "right" }], // 추가
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"]
    ]
  };

  const currContentHandle = (e: any) => {
    console.log(e);
    setCurContent(e);
  };

  return (
    <QuillWrapper>
      <EditorWrapper>
        <ReactQuill
          onChange={currContentHandle}
          modules={modules}
          value={curContent}
          placeholder="내용을 입력해주세요!"
        ></ReactQuill>
      </EditorWrapper>
    </QuillWrapper>
  );
}
