"use client";

import { HEADING_KEYS } from "@udecode/plate-heading";

import { withProps } from "@udecode/cn";
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import {
  ParagraphPlugin,
  PlateLeaf,
  usePlateEditor,
} from "@udecode/plate/react";

import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from "@udecode/plate-code-block/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import { LinkPlugin } from "@udecode/plate-link/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import { editorPlugins } from "./editor-plugin";
import { CodeBlockElement } from "./ui/code-block-element";
import { CodeLeaf } from "./ui/code-leaf";
import { CodeLineElement } from "./ui/code-line-element";
import { CodeSyntaxLeaf } from "./ui/code-syntax-leaf";
import { HeadingElement } from "./ui/heading-element";
import { HrElement } from "./ui/hr-element";
import { LinkElement } from "./ui/link-element";
import { ParagraphElement } from "./ui/paragraph-element";
import { ToggleElement } from "./ui/toggle-element";

export const viewComponents = {
  // [AudioPlugin.key]: MediaAudioElement,
  // [BlockquotePlugin.key]: BlockquoteElement,
  [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
  // [CalloutPlugin.key]: CalloutElement,
  [CodeBlockPlugin.key]: CodeBlockElement,
  [CodeLinePlugin.key]: CodeLineElement,
  [CodePlugin.key]: CodeLeaf,
  [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
  // [ColumnItemPlugin.key]: ColumnElement,
  // [ColumnPlugin.key]: ColumnGroupElement,
  // [CommentsPlugin.key]: CommentLeaf,
  // [DatePlugin.key]: DateElement,
  // [EquationPlugin.key]: EquationElement,
  // [ExcalidrawPlugin.key]: ExcalidrawElement,
  // [FilePlugin.key]: MediaFileElement,
  [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: "h1" }),
  [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: "h2" }),
  [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: "h3" }),
  [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: "h4" }),
  // [HighlightPlugin.key]: HighlightLeaf,
  [HorizontalRulePlugin.key]: HrElement,
  // [ImagePlugin.key]: ImageElement,
  // [InlineEquationPlugin.key]: InlineEquationElement,
  [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
  // [KbdPlugin.key]: KbdLeaf,
  [LinkPlugin.key]: LinkElement,
  // [MediaEmbedPlugin.key]: MediaEmbedElement,
  // [MentionPlugin.key]: MentionElement,
  [ParagraphPlugin.key]: ParagraphElement,
  // [PlaceholderPlugin.key]: MediaPlaceholderElement,
  [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
  // [SubscriptPlugin.key]: withProps(PlateLeaf, { as: "sub" }),
  // [SuggestionPlugin.key]: SuggestionLeaf,
  // [SuperscriptPlugin.key]: withProps(PlateLeaf, { as: "sup" }),
  // [TableCellHeaderPlugin.key]: TableCellHeaderElement,
  // [TableCellPlugin.key]: TableCellElement,
  // [TablePlugin.key]: TableElement,
  // [TableRowPlugin.key]: TableRowElement,
  // [TocPlugin.key]: TocElement,
  [TogglePlugin.key]: ToggleElement,
  [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
  // [VideoPlugin.key]: MediaVideoElement,
};

export const editorComponents = {
  ...viewComponents,
};

export const useCreateEditor = () => {
  return usePlateEditor({
    components: { ...editorComponents },
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
