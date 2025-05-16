"use client";

import { Plate } from "@udecode/plate/react";

import { Editor, EditorContainer } from "@/components/ui/editor";
import { useCreateEditor } from "@/components/use-create-editor";
import { ToolbarButton } from "@radix-ui/react-toolbar";
import { FixedToolbar } from "./ui/fixed-toolbar";
import { MarkToolbarButton } from "./ui/mark-toolbar-button";

const initialValue = [
  { type: "h3", children: [{ text: "Title" }] },
  { type: "blockquote", children: [{ text: "This is a quote." }] },
  {
    type: "p",
    children: [
      { text: "With some " },
      { text: "bold", bold: true },
      { text: " text for emphasis!" },
    ],
  },
];

export function PlateEditor() {
  const editor = useCreateEditor();

  return (
    <Plate editor={editor}>
      <FixedToolbar className="flex justify-start gap-1 rounded-t-lg">
        <ToolbarButton onClick={() => editor.tf.toggleBlock("h1")}>
          H1
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.tf.toggleBlock("h2")}>
          H2
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.tf.toggleBlock("h3")}>
          H3
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.tf.toggleBlock("blockquote")}>
          Quote
        </ToolbarButton>
        <MarkToolbarButton nodeType="bold" tooltip="Bold (⌘+B)">
          B
        </MarkToolbarButton>
        <MarkToolbarButton nodeType="italic" tooltip="Italic (⌘+I)">
          I
        </MarkToolbarButton>
        <MarkToolbarButton nodeType="underline" tooltip="Underline (⌘+U)">
          U
        </MarkToolbarButton>
        <div className="flex-1" />
        <ToolbarButton
          className="px-2"
          onClick={() => editor.tf.setValue(initialValue)}
        >
          Reset
        </ToolbarButton>
      </FixedToolbar>
      <EditorContainer>
        <Editor variant="demo" placeholder="Type..." />
      </EditorContainer>
    </Plate>
  );
}
