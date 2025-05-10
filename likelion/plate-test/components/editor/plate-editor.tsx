"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Plate } from "@udecode/plate/react";

import { useCreateEditor } from "@/components/editor/use-create-editor";
import { Editor, EditorContainer } from "@/components/plate-ui/editor";

export function PlateEditor() {
  const editor = useCreateEditor();

  const handleSave = () => {
    console.log("Editor Value:", editor.children);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant="demo" />
        </EditorContainer>

        {/* 저장 버튼을 툴바 아래나 원하는 위치에 추가 */}
        <div className="mt-4">
          <button onClick={handleSave}>저장하기</button>
        </div>
      </Plate>
    </DndProvider>
  );
}
