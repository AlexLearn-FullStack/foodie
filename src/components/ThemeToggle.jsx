import { useState, useEffect } from "react";
import { Button } from "@ui/button";
import { Moon, Sun } from "lucide-react";

const initialTheme = "light";


export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || initialTheme,
  );

  const dark = theme === "dark";

  useEffect(() => {
    const root = window.document.documentElement;

    if (dark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);

  }, [dark, theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="toggle theme"
      onClick={
        () => setTheme(dark ? "light" : "dark")
      }
      className="icon"
    >
      {
        dark 
          ? <Sun className="h-5 w-5" /> 
          : <Moon className="h-5 w-5" />
      }
    </Button>
  );
}