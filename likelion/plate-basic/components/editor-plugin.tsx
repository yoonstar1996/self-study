import { autoformatPlugin } from "@/plugins/autoformat-plugin";
// import { dndPlugins } from "@/plugins/dnd-plugins";
import { BasicMarksPlugin } from "@udecode/plate-basic-marks/react";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { CodeBlockPlugin } from "@udecode/plate-code-block/react";
import { HEADING_KEYS } from "@udecode/plate-heading";
import { HeadingPlugin } from "@udecode/plate-heading/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import { IndentListPlugin } from "@udecode/plate-indent-list/react";
import { IndentPlugin } from "@udecode/plate-indent/react";
import { SlashPlugin } from "@udecode/plate-slash-command/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import { ParagraphPlugin } from "@udecode/plate/react";
import { all, createLowlight } from "lowlight";

const lowlight = createLowlight(all);

export const viewPlugins = [
  ParagraphPlugin,
  HeadingPlugin.configure({ options: { levels: 3 } }),
  BlockquotePlugin,
  CodeBlockPlugin.configure({ options: { lowlight } }),
  BasicMarksPlugin,

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
  IndentPlugin.configure({
    inject: {
      targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
    },
  }),
  IndentListPlugin.configure({
    inject: {
      targetPlugins: [ParagraphPlugin.key, HEADING_KEYS.h1],
    },
  }),

  // {Marks}
  // FontColorPlugin,
  // FontBackgroundColorPlugin,
  // FontSizePlugin,
  // HighlightPlugin,
  // KbdPlugin,
  // skipMarkPlugin,

  // {Block Style}
  // alignPlugin,
  // ...indentListPlugins,
  // lineHeightPlugin,
] as const;

export const editorPlugins = [
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
  // ...blockMenuPlugins,
  // ...dndPlugins,
  // EmojiPlugin.configure({ options: { data: emojiMartData as any } }),
  // exitBreakPlugin,
  // resetBlockTypePlugin,
  // ...deletePlugins,
  // softBreakPlugin,
  // TrailingBlockPlugin,

  // {Deserialization}
  // DocxPlugin,
  // markdownPlugin,
  // JuicePlugin,

  // {UI}
  // FixedToolbarPlugin,
  // FloatingToolbarPlugin,
];
