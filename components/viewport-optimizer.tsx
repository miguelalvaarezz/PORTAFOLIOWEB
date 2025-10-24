"use client";

import { useEffect } from 'react';

export function ViewportOptimizer() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    // Set overflow-x to hidden on mount
    html.style.overflowX = 'hidden';
    body.style.overflowX = 'hidden';

    // Clean up on unmount
    return () => {
      html.style.overflowX = '';
      body.style.overflowX = '';
    };
  }, []);

  return null; // This component doesn't render anything
}
