import React, { useState } from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "~components/Button";

const LOCAL_STORAGE_KEY = "__theme";

type Theme = "light" | "dark";

export function ThemeSelector() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTheme && ["light", "dark"].includes(savedTheme)) {
      return savedTheme as Theme;
    }

    const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)");
    if (prefersLightTheme.matches) {
      return "light";
    }

    return "dark";
  });

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <Button
      size="icon"
      variant="ghost"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-description="Toggle theme"
    >
      {theme === "dark" ? (
        <MoonIcon className="h-4 w-4 mt-1" />
      ) : (
        <SunIcon className="h-4 w-4 mt-1" />
      )}
    </Button>
  );
}
