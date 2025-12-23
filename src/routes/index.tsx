import { createFileRoute } from "@tanstack/react-router";
import { Page } from "~modules/Home";

export const Route = createFileRoute("/")({
  component: Page,
});
