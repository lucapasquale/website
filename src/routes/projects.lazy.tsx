import { createLazyFileRoute } from "@tanstack/react-router";

import { Page } from "~modules/Projects";

export const Route = createLazyFileRoute("/projects")({
  component: Page,
});
