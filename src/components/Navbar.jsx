import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-black dark:text-white">
          Mohammed<span className="text-blue-500">Aamir</span>
        </h1>

        <div className="flex items-center gap-6">
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Contact
          </a>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-gray-400 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
