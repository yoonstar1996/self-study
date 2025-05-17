"use client";

import { editorPlugins } from "@/plugin/editor-plugins";
import { withProps } from "@udecode/cn";
import {
  BoldPlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { SlashInputPlugin } from "@udecode/plate-slash-command/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import {
  ParagraphPlugin,
  PlateElement,
  PlateLeaf,
  usePlateEditor,
} from "@udecode/plate/react";
import { BlockquoteElement } from "./ui/blockquote-element";
import { CodeBlockElement } from "./ui/code-block-element";
import { HeadingElement } from "./ui/heading-element";
import { SlashInputElement } from "./ui/slash-input-element";
import { ToggleElement } from "./ui/toggle-element";

export const useCreateEditor = () => {
  return usePlateEditor({
    components: {
      // 기본 블록들
      blockquote: BlockquoteElement,
      [ParagraphPlugin.key]: withProps(PlateElement, {
        as: "p",
        className: "mb-4",
      }),

      // 헤딩
      h1: withProps(HeadingElement, { variant: "h1" }),
      h2: withProps(HeadingElement, { variant: "h2" }),
      h3: withProps(HeadingElement, { variant: "h3" }),
      h4: withProps(HeadingElement, { variant: "h4" }),
      h5: withProps(HeadingElement, { variant: "h5" }),
      h6: withProps(HeadingElement, { variant: "h6" }),

      // 코드 블록
      [CodeBlockPlugin.key]: CodeBlockElement,

      // 토글
      [TogglePlugin.key]: ToggleElement,

      // 마크(leaf)
      [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
      [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
      [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
      [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
      [SlashInputPlugin.key]: SlashInputElement,
    },
    plugins: [...editorPlugins],
    value: [
      {
        children: [{ text: "Basic Editor" }],
        type: "h1",
      },
      {
        children: [{ text: "Heading 2" }],
        type: "h2",
      },
      {
        children: [{ text: "Heading 3" }],
        type: "h3",
      },
      {
        children: [{ text: "This is a blockquote element" }],
        type: "blockquote",
      },
      {
        children: [
          { text: "Basic marks: " },
          { bold: true, text: "bold" },
          { text: ", " },
          { italic: true, text: "italic" },
          { text: ", " },
          { text: "underline", underline: true },
          { text: ", " },
          { strikethrough: true, text: "strikethrough" },
          { text: "." },
        ],
        type: ParagraphPlugin.key,
      },
    ],
  });
};
