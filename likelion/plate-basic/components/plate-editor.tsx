"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Plate } from "@udecode/plate/react";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { useCreateEditor } from "@/components/use-create-editor";
import { useState } from "react";

export function PlateEditor() {
  const [isFocused, setIsFocused] = useState(false);

  const editor = useCreateEditor();

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor
            variant="demo"
            className="border border-black max-h-50 h-50 overflow-y-auto"
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
