import { createLazyFileRoute } from "@tanstack/react-router";
import { Page } from "~modules/Secrets";

export const Route = createLazyFileRoute("/secrets")({
  component: Page,
});
