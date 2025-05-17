"use client";

import { editorPlugins } from "@/plugin/editor-plugins";
import { withProps } from "@udecode/cn";
import { AnyPluginConfig } from "@udecode/plate";
import {
  BoldPlugin,
  CodePlugin,
  ItalicPlugin,
  StrikethroughPlugin,
  UnderlinePlugin,
} from "@udecode/plate-basic-marks/react";
import { BlockquotePlugin } from "@udecode/plate-block-quote/react";
import { CalloutPlugin } from "@udecode/plate-callout/react";
import {
  CodeBlockPlugin,
  CodeLinePlugin,
  CodeSyntaxPlugin,
} from "@udecode/plate-code-block/react";
import { HEADING_KEYS } from "@udecode/plate-heading";
import { TocPlugin } from "@udecode/plate-heading/react";
import { HighlightPlugin } from "@udecode/plate-highlight/react";
import { HorizontalRulePlugin } from "@udecode/plate-horizontal-rule/react";
import { ColumnItemPlugin, ColumnPlugin } from "@udecode/plate-layout/react";
import { LinkPlugin } from "@udecode/plate-link/react";
import { SlashInputPlugin } from "@udecode/plate-slash-command/react";
import { SuggestionPlugin } from "@udecode/plate-suggestion/react";
import {
  TableCellHeaderPlugin,
  TableCellPlugin,
  TablePlugin,
  TableRowPlugin,
} from "@udecode/plate-table/react";
import { TogglePlugin } from "@udecode/plate-toggle/react";
import {
  CreatePlateEditorOptions,
  ParagraphPlugin,
  PlateLeaf,
  usePlateEditor,
} from "@udecode/plate/react";
import { BlockquoteElement } from "./ui/blockquote-element";
import { CalloutElement } from "./ui/callout-element";
import { CodeBlockElement } from "./ui/code-block-element";
import { CodeLeaf } from "./ui/code-leaf";
import { CodeLineElement } from "./ui/code-line-element";
import { CodeSyntaxLeaf } from "./ui/code-syntax-leaf";
import { ColumnElement } from "./ui/column-element";
import { ColumnGroupElement } from "./ui/column-group-element";
import { HeadingElement } from "./ui/heading-element";
import { HighlightLeaf } from "./ui/highlight-leaf";
import { HrElement } from "./ui/hr-element";
import { LinkElement } from "./ui/link-element";
import { ParagraphElement } from "./ui/paragraph-element";
import { withPlaceholders } from "./ui/placeholder";
import { SlashInputElement } from "./ui/slash-input-element";
import { SuggestionLeaf } from "./ui/suggestion-leaf";
import {
  TableCellElement,
  TableCellHeaderElement,
} from "./ui/table-cell-element";
import { TableElement } from "./ui/table-element";
import { TableRowElement } from "./ui/table-row-element";
import { TocElement } from "./ui/toc-element";
import { ToggleElement } from "./ui/toggle-element";

export const viewComponents = {
  // 글씨
  [ParagraphPlugin.key]: ParagraphElement,
  [BlockquotePlugin.key]: BlockquoteElement,
  [BoldPlugin.key]: withProps(PlateLeaf, { as: "strong" }),
  [StrikethroughPlugin.key]: withProps(PlateLeaf, { as: "s" }),
  [ItalicPlugin.key]: withProps(PlateLeaf, { as: "em" }),
  [UnderlinePlugin.key]: withProps(PlateLeaf, { as: "u" }),
  [HighlightPlugin.key]: HighlightLeaf,

  // 코드
  [CodeLinePlugin.key]: CodeLineElement,
  [CodePlugin.key]: CodeLeaf,
  [CodeSyntaxPlugin.key]: CodeSyntaxLeaf,
  [CodeBlockPlugin.key]: CodeBlockElement,

  [CalloutPlugin.key]: CalloutElement,

  // column
  [ColumnItemPlugin.key]: ColumnElement,
  [ColumnPlugin.key]: ColumnGroupElement,

  // 헤딩
  [HEADING_KEYS.h1]: withProps(HeadingElement, { variant: "h1" }),
  [HEADING_KEYS.h2]: withProps(HeadingElement, { variant: "h2" }),
  [HEADING_KEYS.h3]: withProps(HeadingElement, { variant: "h3" }),
  [HEADING_KEYS.h4]: withProps(HeadingElement, { variant: "h4" }),
  [HEADING_KEYS.h5]: withProps(HeadingElement, { variant: "h5" }),
  [HEADING_KEYS.h6]: withProps(HeadingElement, { variant: "h6" }),

  [HorizontalRulePlugin.key]: HrElement,

  [LinkPlugin.key]: LinkElement,

  // 테이블
  [TableCellHeaderPlugin.key]: TableCellHeaderElement,
  [TableCellPlugin.key]: TableCellElement,
  [TablePlugin.key]: TableElement,
  [TableRowPlugin.key]: TableRowElement,
  [TocPlugin.key]: TocElement,

  // 토글
  [TogglePlugin.key]: ToggleElement,

  [SuggestionPlugin.key]: SuggestionLeaf,
};

export const editorComponents = {
  ...viewComponents,
  [SlashInputPlugin.key]: SlashInputElement,
};

export const useCreateEditor = (
  {
    components,
    override,
    readOnly,
    ...options
  }: {
    components?: Record<string, unknown>;
    plugins?: AnyPluginConfig[];
    readOnly?: boolean;
  } & Omit<CreatePlateEditorOptions, "plugins"> = {},
  deps: unknown[] = []
) => {
  return usePlateEditor(
    {
      override: {
        components: {
          ...(readOnly ? viewComponents : withPlaceholders(editorComponents)),
          ...components,
        },
        ...override,
      },
      plugins: [...editorPlugins],
      ...options,
    },
    deps
  );
};
