'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Switch } from '@/components/ui/toggle'; // shadcn/ui toggle or switch

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-[9999] bg-muted px-3 py-2 rounded-md border border-border text-sm shadow transition hover:bg-accent"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}
