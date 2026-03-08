import { useState, useEffect } from 'react';

function Header() {
    // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // Update the 'data-theme' attribute on the <html> element whenever theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

    return(
        <div className="min-h-screen bg-base-100 text-base-content transition-all duration-300">

            <div className="navbar bg-base-200 shadow-lg px-8">

                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-primary">Đăng Khôi</h1>
                </div>

                <div className="flex-none">
                    <button 
                    onClick={toggleTheme} 
                    className="btn btn-primary btn-outline"
                    >
                    {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
                    </button>
                </div>
            </div>        
        </div>
    );
}

export default Header