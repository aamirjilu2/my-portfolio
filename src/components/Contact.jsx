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
      "
    >
      <div className="max-w-4xl mx-auto px-6">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let’s <span className="text-primary">Work Together</span>
          </h2>

          <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg">
            I’m open to full-time roles, internships & freelance projects.
            Let’s build something impactful 🚀
          </p>

          <div className="flex justify-center gap-10 text-3xl text-gray-600 dark:text-gray-300">
            <a
              href="mailto:aamirirfu@gmail.com"
              className="hover:text-primary hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://www.linkedin.com/in/mohammedaamirjeelani/"
              target="_blank"
              className="hover:text-primary hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/aamirjilu2"
              target="_blank"
              className="hover:text-primary hover:scale-110 transition"
            >
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
