"use client";

import { Editor, EditorContainer } from "@/components/plate/plate-ui/editor";

import { SettingsDialog } from "@/components/plate/editor/settings";
import { useCreateEditor } from "@/components/plate/editor/use-create-editor";
import { Plate } from "@udecode/plate/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor variant="demo" />
        </EditorContainer>

        <SettingsDialog />
      </Plate>
    </DndProvider>
  );
}
