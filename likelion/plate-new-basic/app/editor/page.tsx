"use client";

import { PlateEditor, PlateEditorHandle } from "@/components/plate-editor";
import { X } from "lucide-react";
import { useRef, useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const editorRef = useRef<PlateEditorHandle>(null);

  const handleSave = () => {
    const content = editorRef.current?.getContent() ?? [];
    const payload = { title, content, tags };

    console.log("payload: ", payload);
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags((prev) => [...prev, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    setTags((prev) => prev.filter((t) => t !== tag));
  };

  return (
    <div data-registry="plate" className="w-[500px] mx-auto">
      {/* 타이틀 */}
      <div>
        <label className="block text-sm font-medium" htmlFor="title">
          제목
        </label>
        <div>
          <input
            className="w-full rounded-md border px-2 py-1"
            type="text"
            placeholder="회고록 제목을 입력하세요..."
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>

      {/* 태그 */}
      <div>
        <label htmlFor="tags" className="block text-sm font-medium">
          태그
        </label>
        <div className="flex flex-wrap items-center gap-1 border border-gray-300 rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center bg-gray-100 text-sm rounded px-2 py-0.5"
            >
              {tag}
              <X
                size={14}
                className="ml-1 cursor-pointer hover:opacity-70"
                onClick={() => removeTag(tag)}
              />
            </span>
          ))}
          <input
            id="tags"
            className="flex-1 min-w-[100px] border-none focus:outline-none text-sm"
            placeholder="태그를 입력하고 Enter를 누르세요"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleTagKeyDown}
          />
        </div>
      </div>

      <PlateEditor ref={editorRef} />

      {/* 저장 버튼 */}
      <button
        type="button"
        className="mt-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        onClick={handleSave}
      >
        저장하기
      </button>
    </div>
  );
}
