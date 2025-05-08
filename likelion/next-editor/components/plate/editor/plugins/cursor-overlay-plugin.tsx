"use client";

import { CursorOverlay } from "@/components/plate/plate-ui/cursor-overlay";
import { CursorOverlayPlugin } from "@udecode/plate-selection/react";

export const cursorOverlayPlugin = CursorOverlayPlugin.configure({
  render: {
    afterEditable: () => <CursorOverlay />,
  },
});
