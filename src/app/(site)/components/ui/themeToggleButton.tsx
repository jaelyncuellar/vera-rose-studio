"use client";

import { setTheme, getTheme } from "@/lib/theme";
import { useEffect, useState } from "react";
export default function ThemeToggleButton() {
  const [theme, setThemeState] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const storedTheme = getTheme();
    setThemeState(storedTheme);
    setTheme(storedTheme);
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setThemeState(newTheme);
  };
  return (
    <button onClick={toggleTheme}
      className="font-accent text-4xl
        transition-all duration-500
        hover:shadow-foreground
        hover:scale-[1.015]
        hover:text-primary/60
        text-foreground
       "
      aria-label="Toggle light and dark theme"
      >
      Vera Rose
    </button>
  );
}
