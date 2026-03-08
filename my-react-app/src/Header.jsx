import { useTheme } from "./useTheme";

function Header() {

    const { theme, toggleTheme } = useTheme(); 
  
    return(
        <div className="navbar bg-base-20 shadow-lg px-8 mb-10 mx-auto rounded-box border border-base-300">

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
    );
}

export default Header