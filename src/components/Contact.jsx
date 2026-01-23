import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        py-24 min-h-[80vh]
        bg-gray-50 text-black
        dark:bg-black dark:text-white
        flex items-center
      "
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            rounded-3xl p-12 text-center
            bg-white text-black shadow-xl
            dark:bg-white/10 dark:text-white
            dark:backdrop-blur-xl
            dark:border dark:border-white/10
          "
        >
          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let’s <span className="text-primary">Work Together</span>
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-2xl mx-auto">
            I’m open to full-time roles, internships & freelance projects.
            Let’s build something impactful 🚀
          </p>

          {/* CTA BUTTON */}
          <a
            href="mailto:aamirirfu@gmail.com?subject=Hiring%20Inquiry"
            className="
              inline-flex items-center justify-center
              px-10 py-4 rounded-xl
              bg-blue-600 text-white font-semibold text-lg
              hover:bg-blue-700 hover:scale-105
              transition-all duration-300
              shadow-lg
              mb-10
            "
          >
            Hire Me 🚀
          </a>

          {/* DIVIDER */}
          <div className="flex items-center justify-center mb-8">
            <span className="h-px w-24 bg-gray-300 dark:bg-gray-700"></span>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-10 text-3xl text-gray-600 dark:text-gray-300">
            <a
              href="mailto:aamirirfu@gmail.com"
              className="hover:text-primary hover:scale-110 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammedaamirjeelani/"
              target="_blank"
              className="hover:text-primary hover:scale-110 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/aamirjilu2"
              target="_blank"
              className="hover:text-primary hover:scale-110 transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>

          {/* AI BADGE (OPTIONAL) */}
          <p className="mt-10 text-sm text-gray-500 dark:text-gray-400">
            🤖 Powered by AI • Smart Portfolio Experience
          </p>
        </motion.div>
      </div>
    </section>
  );
}
