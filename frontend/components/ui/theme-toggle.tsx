// components/ui/theme-toggle.tsx
'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative inline-flex items-center justify-center p-2 rounded-lg
                bg-white/10 dark:bg-gray-800/10 backdrop-blur-lg
                border border-gray-200/20 dark:border-gray-700/20
                hover:bg-white/20 dark:hover:bg-gray-800/20
                transition-all duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-blue-500/50"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0
                     text-yellow-500 dark:text-yellow-400" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100
                     text-blue-500 dark:text-blue-400" />
    </button>
  );
}