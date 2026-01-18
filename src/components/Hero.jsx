import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../assets/profile2.png";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Mohammed Aamir", "Software Engineer"],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 60,
    delaySpeed: 1500,
  });

  return (
    <section className="min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white pt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT - TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I’m{" "}
            <span className="text-blue-500">
              {text}
              <Cursor cursorStyle="|" />
            </span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-400">
            AI Programmer • Web & Mobile Developer
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-gray-400 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT - PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.img
            src={profile}
            alt="Mohammed Aamir"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-blue-500 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
