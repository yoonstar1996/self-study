"use client";

import { LinkFloatingToolbar } from "@/components/ui/link-floating-toolbar";
import { LinkPlugin } from "@udecode/plate-link/react";

export const linkPlugin = LinkPlugin.extend({
  render: { afterEditable: () => <LinkFloatingToolbar /> },
});
