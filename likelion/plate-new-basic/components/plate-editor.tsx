"use client";

import { Plate } from "@udecode/plate/react";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { forwardRef, memo, useImperativeHandle } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useCreateEditor } from "./use-create-editor";

export interface PlateEditorHandle {
  getContent: () => unknown[];
}

function PlateEditorInner(_props: unknown, ref: React.Ref<PlateEditorHandle>) {
  console.log("PlateEditor 렌더링");
  const editor = useCreateEditor();

  useImperativeHandle(ref, () => ({
    getContent: () => editor.children,
  }));

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          {/* 본문 editor */}
          <div>
            <label className="block text-sm font-medium">회고록 작성</label>
            <Editor
              className="h-60 overflow-y-auto rounded border px-8 py-2 focus:placeholder:text-transparent"
              variant="demo"
              placeholder="변경 사항에 대한 회고를 작성하세요."
            />
          </div>
          <input
            className="w-full bg-red-200 focus:bg-blue-200 focus:placeholder:text-transparent"
            placeholder="으아아아아악"
          />
        </EditorContainer>
      </Plate>
    </DndProvider>
  );
}

export const PlateEditor = memo(
  forwardRef<PlateEditorHandle, unknown>(PlateEditorInner)
);

PlateEditor.displayName = "PlateEditor";
