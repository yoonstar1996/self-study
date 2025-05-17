"use client";

import { Plate } from "@udecode/plate/react";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCreateEditor } from "./use-create-editor";

export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor
            className="border border-black max-h-100 h-100 overflow-y-auto"
            variant="demo"
            placeholder="Type..."
          />
        </EditorContainer>
      </Plate>
    </DndProvider>
  );
}
