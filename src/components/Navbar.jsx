import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl">
      <div className="glass flex items-center justify-between px-6 py-3 backdrop-blur-xl">
        
        {/* LOGO */}
        <h1 className="text-lg md:text-xl font-bold tracking-wide text-slate-900 dark:text-gray-200">
          <span className="gradient-text">Mohammed</span>{" "}
          <span>Aamir</span>
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="
                relative group
                text-slate-900
                dark:text-gray-300
              "
            >
              {item.toUpperCase()}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="
            flex items-center justify-center
            w-10 h-10 rounded-full glass
            text-slate-900
            dark:text-gray-200
            hover:glow transition
          "
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
