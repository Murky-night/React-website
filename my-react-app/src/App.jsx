import { useState, useEffect } from 'react';

/**
 * App Component
 * Handles the To-Do list logic and Dark Mode theme toggling.
 */
function App() {
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

  return (
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

      <main className="container mx-auto py-10 px-4">
        <div className="card bg-base-200 w-full max-w-md shadow-2xl mx-auto border border-base-300">
          <div className="card-body">
            <h2 className="card-title text-3xl font-extrabold mb-6 justify-center">To do list</h2>
            
            {/* Input Group */}
            <div className="join w-full mb-8">
              <input 
                type="text" 
                placeholder="What needs to be done?" 
                className="input input-bordered join-item w-full focus:outline-none" 
              />
              <button className="btn btn-primary join-item">Add</button>
            </div>

            {/* Tasks List */}
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-base-100 p-4 rounded-2xl shadow-sm border border-base-300 hover:border-primary transition-colors">
                <span className="font-medium">Prepare for assignment</span>
                <div className="flex gap-1">
                  <button className="btn btn-ghost btn-sm text-info">Edit</button>
                  <button className="btn btn-ghost btn-sm text-error">Delete</button>
                </div>
              </div>

              <div className="flex justify-between items-center bg-base-100 p-4 rounded-2xl shadow-sm border border-base-300 hover:border-primary transition-colors">
                <span className="font-medium">Go to the gym</span>
                <div className="flex gap-1">
                  <button className="btn btn-ghost btn-sm text-info">Edit</button>
                  <button className="btn btn-ghost btn-sm text-error">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;