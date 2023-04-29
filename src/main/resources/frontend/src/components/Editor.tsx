import React, { useState } from "react";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";

const QuillWrapper = styled.div`
  display: flex;
`;

const EditorWrapper = styled.div`
  .ql-toolbar {
    box-sizing: border-box;
    background-color: #222222;
    width: 745px;
    height: 60px;
    display: flex;
    align-items: center;

    button svg {
      fill: #eaeaea !important;
    }

    button:hover svg {
      fill: #f9d5a2 !important;
    }

    &:hover {
      color: #f9d5a2 !important;
    }
  }

  .ql-toolbar.ql-snow { 
    border: none !important;
  }

  .ql-container.ql-snow{
    border: none !important;
  }

  .ql-editor {
    box-sizing: border-box;
    margin-top: 40px;
    background-color: #222222;
    font-size: 15px;
    line-height: 1.5;
    padding: 30px;
    color: #B2B2B2;

    &.ql-blank::before {
      color: #B2B2B2;
    }
  }

  .ql-toolbar .ql-stroke {
    fill: none;
    stroke: #B2B2B2;
  }

  .ql-toolbar .ql-fill {
    fill: #B2B2B2;
    stroke: none;
  }

  .ql-toolbar .ql-picker {
    color: #B2B2B2;
  }

  .ql-snow.ql-toolbar .ql-formats button:hover {
    fill: #f9d5a2;
    z-index: 10;
  }

  .ql-snow.ql-toolbar button.ql-active .ql-fill,
  .ql-snow.ql-toolbar button:hover .ql-fill {
    fill: #f9d5a2;
  }

  .ql-snow.ql-toolbar button.ql-active .ql-stroke,
  .ql-snow.ql-toolbar button:hover .ql-stroke {
    stroke: #f9d5a2;
  }
`;


interface PropsInterface {
    content: string;
    type: string;
}

export default function Editor( { content, type } : PropsInterface ) {
    if(type === "project"){
        //editor높이 설정
    }
    const [curContent, setCurContent] = useState(content);

    const modules = {
        toolbar: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ 'align': null}, {'align': 'center'}, {'align': 'right'}, {'align': 'justify'}],
        ["blockquote", "code-block"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"]
        ]
    };

    const currContentHandle = (e: any) => {
        console.log(e);
        setCurContent(e);
    };
    let editorHeight = "300px"; // 기본 높이는 300px로 설정

  // type에 따라 editor 높이를 설정
  if (type === "project") {
    editorHeight = "800px";
  } else if (type === "apply") {
    editorHeight = "300px";
  } else if (type === "post") {
    editorHeight = "660px";
  }

    

  return (
    <QuillWrapper>
      <EditorWrapper>
        <ReactQuill
        style={{ height: editorHeight}}
          onChange={currContentHandle}
          modules={modules}
          value={curContent}
          placeholder="내용을 입력해주세요!"
        ></ReactQuill>
      </EditorWrapper>
    </QuillWrapper>
  );
}
