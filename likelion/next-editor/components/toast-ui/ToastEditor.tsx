// src/components/ToastEditor.tsx
"use client";

import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";
import { useRef } from "react";

export default function ToastEditor() {
  const editorRef = useRef<Editor>(null);

  return (
    <Editor
      ref={editorRef}
      initialValue="**Hello Toast UI**"
      previewStyle="vertical" // 미리보기 모드: vertical or tab
      height="400px"
      initialEditType="wysiwyg" // wysiwyg / markdown
      useCommandShortcut={true} // Cmd/Ctrl + B/I 등 단축키 활성화
      toolbarItems={[
        // 툴바 버튼만 골라 쓰기
        ["heading", "bold", "italic"],
        ["ul", "ol", "task", "table"],
        ["image", "link"],
      ]}
    />
  );
}
