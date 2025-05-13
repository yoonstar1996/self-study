"use client";

import { Plate } from "@udecode/plate/react";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { useCreateEditor } from "@/components/use-create-editor";

export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <Plate editor={editor}>
      <EditorContainer>
        <Editor variant="demo" placeholder="Type..." />
      </EditorContainer>
    </Plate>
  );
}
