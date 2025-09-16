// components/theme-toggle.tsx
"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle({ lite }: { lite?: boolean }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // avoids hydration mismatch

  const isDark = (theme ?? resolvedTheme) === "dark";

  if (lite)
    return (
      <span
        className="dark:text-white/60 inline text-gray-600 cursor-pointer hover:text-gray-900 dark:hover:text-white/80 transition-all"
        onClick={() => setTheme(isDark ? "light" : "dark")}
      >
        {isDark ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
      </span>
    );
  return (
    <div
      // variant="ghost"
      // size="icon"
      
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </div>
  );
}
