import { useState, useEffect } from 'react';

/**
 * Custom Hook to manage Dark/Light mode state,
 * update the HTML document, and save to localStorage.
 */
export function useTheme() {
  // 1. The State
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // 2. The Effect (Updates HTML and LocalStorage)
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // 3. The Toggle Function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // 4. Return the values so other components can use them
  return { theme, toggleTheme };
}