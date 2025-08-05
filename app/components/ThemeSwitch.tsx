'use client';
import { useTheme } from 'next-themes';
import { FiSun, FiMoon } from 'react-icons/fi';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const ThemeSwitch = () => {
  // const [mounted, setMounted] = useState(false);
  // const { setTheme, resolvedTheme } = useTheme();

  const setColor = (input: any) => {
    document.body.setAttribute(
      'style',
      `--background: ${input}; 
  --foreground:  oklch(from ${input} calc(l * 1.2) c h);
  --med: oklch(from ${input} calc(l * 3) calc(c * 5) h);
  `
    );
  };
  return (
    <label htmlFor="">
      Background
      <input
        type="color"
        id="colorInput"
        onChange={(e) => setColor(e.target.value)}
      />
    </label>
  );
};

export default ThemeSwitch;
