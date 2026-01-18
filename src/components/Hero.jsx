import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../assets/profile2.png";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Mohammed Aamir", "Software Engineer", "AI Programmer"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1400,
  });

  return (
    <section className="min-h-screen pt-32 flex items-center">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* BADGE */}
          <div className="inline-block mb-5 px-4 py-2 glass text-sm font-semibold text-slate-900 dark:text-gray-200">
            🚀 AI Programmer & Full-Stack Developer
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-gray-100">
            Hi, I’m{" "}
            <span className="gradient-text">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h1>

          {/* SUBTITLE */}
          <p className="mt-5 text-lg md:text-xl text-slate-700 dark:text-gray-400 max-w-xl">
            I build modern web, mobile, and AI-powered applications with clean UI
            and real-world functionality.
          </p>

          {/* CTA BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-7 py-3 rounded-xl glass font-semibold text-slate-900 dark:text-gray-200 hover:glow transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.img
            src={profile}
            alt="Mohammed Aamir"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-primary shadow-2xl"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
