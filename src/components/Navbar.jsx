import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const sections = [
  "about",
  "skills",
  "projects",
  "internships",
  "experience",
  "certificates",
  "contact",
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`
        fixed left-1/2 -translate-x-1/2 z-50
        w-[94%] max-w-6xl transition-all duration-300
        ${scrolled ? "top-2" : "top-4"}
      `}
    >
      <div
        className={`
          glass backdrop-blur-xl rounded-2xl
          flex items-center justify-between px-6
          ${scrolled ? "py-2 shadow-lg" : "py-3"}
        `}
      >
        {/* LOGO */}
        <h1 className="text-lg md:text-xl font-bold text-slate-900 dark:text-gray-200">
          <span className="gradient-text">Mohammed</span> Aamir
        </h1>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          {sections.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className={`
                relative uppercase tracking-wide transition
                ${
                  active === item
                    ? "text-primary"
                    : "text-slate-900 dark:text-gray-300"
                }
              `}
            >
              {item}
              <span
                className={`
                  absolute left-0 -bottom-1 h-[2px] bg-primary transition-all
                  ${active === item ? "w-full" : "w-0"}
                `}
              />
            </a>
          ))}
        </div>

        {/* THEME */}
        <button
          onClick={toggleTheme}
          className="w-10 h-10 rounded-full glass flex items-center justify-center"
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>
    </nav>
  );
}
