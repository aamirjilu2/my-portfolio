import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      ["about", "skills", "projects", "contact"].forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 140 && rect.bottom >= 140) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl transition-all duration-300
        ${scrolled ? "top-2" : "top-4"}
      `}
    >
      <div
        className={`
          glass backdrop-blur-xl flex items-center justify-between px-6 transition-all duration-300
          ${scrolled ? "py-2" : "py-3"}
        `}
      >
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
              className={`
                relative transition
                ${
                  active === item
                    ? "text-primary"
                    : "text-slate-900 dark:text-gray-300"
                }
              `}
            >
              {item.toUpperCase()}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-primary transition-all
                  ${active === item ? "w-full" : "w-0"}
                `}
              />
            </a>
          ))}
        </div>

        {/* THEME TOGGLE */}
        <button
          onClick={toggleTheme}
          className="
            flex items-center justify-center
            w-10 h-10 rounded-full glass
            text-slate-900 dark:text-gray-200
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
