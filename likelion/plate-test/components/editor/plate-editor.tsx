"use client";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Plate } from "@udecode/plate/react";

import { useCreateEditor } from "@/components/editor/use-create-editor";
import { Editor, EditorContainer } from "@/components/plate-ui/editor";
import { useEffect, useState } from "react";

const STORAGE_KEY = "my-plate-content";

export function PlateEditor() {
  const [isFocused, setIsFocused] = useState(false);

  // 1) 로컬 스토리지에서 불러온 값을 담을 state
  const [initialValue, setInitialValue] = useState(null as any[] | null);
  // 2) useCreateEditor에 넘겨줄 options
  const editor = useCreateEditor(
    { value: initialValue ?? undefined },
    [initialValue] // initialValue가 바뀔 때마다 에디터를 재생성
  );

  // 3) 마운트 시 로컬스토리지에서 꺼내오기
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      console.log("raw: ", raw);
      if (raw) {
        const parsed = JSON.parse(raw);
        console.log("parsed: ", parsed);
        setInitialValue(parsed);
      } else {
        // 없으면 빈 문서(혹은 기본값)가 들어가도록 null 처리
        setInitialValue(undefined);
      }
    } catch (e) {
      console.error("Failed to load editor content", e);
      setInitialValue(undefined);
    }
  }, []);

  // 4) 저장 핸들러
  const handleSave = () => {
    const content = editor.children;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
      console.log("Saved!", content);
    } catch (e) {
      console.error("Save failed", e);
    }
  };

  // 아직 initialValue가 세팅되기 전엔 로딩 화면(혹은 빈 화면) 보여주기
  if (initialValue === null) {
    return <p>Loading editor…</p>;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <Plate editor={editor}>
        <EditorContainer>
          <Editor
            variant="demo"
            className="border border-black max-h-100 h-100 overflow-y-auto"
            // placeholder는 포커스가 없을 때만 보여줌
            placeholder={isFocused ? "" : "회고를 작성하세요."}
            // focus 들어올 때
            onFocus={() => setIsFocused(true)}
            // focus 나갈 때
            onBlur={() => setIsFocused(false)}
          />
        </EditorContainer>

        {/* 저장 버튼을 툴바 아래나 원하는 위치에 추가 */}
        <div className="mt-4">
          <button onClick={handleSave}>저장하기</button>
        </div>
      </Plate>
    </DndProvider>
  );
}
