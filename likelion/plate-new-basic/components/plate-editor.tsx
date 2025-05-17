"use client";

import { Plate } from "@udecode/plate/react";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCreateEditor } from "./use-create-editor";

export function PlateEditor() {
  const [isFocused, setIsFocused] = useState(false);

  const editor = useCreateEditor();

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor
            className="border border-black max-h-100 h-100 overflow-y-auto"
            variant="demo"
            // placeholder는 포커스가 없을 때만 보여줌
            placeholder={isFocused ? "" : "회고를 작성하세요."}
            // focus 들어올 때
            onFocus={() => setIsFocused(true)}
            // focus 나갈 때
            onBlur={() => setIsFocused(false)}
          />
        </EditorContainer>
      </Plate>
    </DndProvider>
  );
}
