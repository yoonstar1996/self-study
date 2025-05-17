"use client";

import { HighlightPlugin } from "@udecode/plate-highlight/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";

import { BasicElementsPlugin } from "@udecode/plate-basic-elements/react";
import { BasicMarksPlugin } from "@udecode/plate-basic-marks/react";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { SlashPlugin } from "@udecode/plate-slash-command/react";
import { TrailingBlockPlugin } from "@udecode/plate-trailing-block";
import { autoformatPlugin } from "./autoformat-plugin";
import { dndPlugins } from "./dnd-plugins";
import { FloatingToolbarPlugin } from "./floating-toolbar-plugin";
import { indentListPlugins } from "./indent-list-plugins";

export const viewPlugins = [
  BasicElementsPlugin,
  BasicMarksPlugin,
  // ...basicNodesPlugins,
  HorizontalRulePlugin,
  // linkPlugin,
  // DatePlugin,
  // mentionPlugin,
  // tablePlugin,
  TogglePlugin,
  // tocPlugin,
  // ...mediaPlugins,
  // ...equationPlugins,
  // CalloutPlugin,
  // ColumnPlugin,

  // Marks
  // FontColorPlugin,
  // FontBackgroundColorPlugin,
  // FontSizePlugin,
  HighlightPlugin,
  // KbdPlugin,
  // skipMarkPlugin,

  // Block Style
  // alignPlugin,
  ...indentListPlugins,
  // lineHeightPlugin,

  // Collaboration
  // discussionPlugin,
  // commentsPlugin,
  // suggestionPlugin.configure({
  //   render: { belowNodes: SuggestionBelowNodes as any },
  // }),
] as const;

export const editorPlugins = [
  // AI
  // ...aiPlugins,

  // Nodes
  ...viewPlugins,

  // Functionality
  SlashPlugin.extend({
    options: {
      triggerQuery(editor) {
        return !editor.api.some({
          match: { type: editor.getType(CodeBlockPlugin) },
        });
      },
    },
  }),
  autoformatPlugin,
  // cursorOverlayPlugin,
  // ...blockMenuPlugins,
  ...dndPlugins,
  // EmojiPlugin.configure({ options: { data: emojiMartData as any } }),
  // exitBreakPlugin,
  // resetBlockTypePlugin,
  // ...deletePlugins,
  // softBreakPlugin,
  TrailingBlockPlugin,

  // Deserialization
  // DocxPlugin,
  // markdownPlugin,
  // JuicePlugin,

  // UI
  // FixedToolbarPlugin,
  FloatingToolbarPlugin,
];
