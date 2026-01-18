import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-gray-100"
        >
          Get In <span className="gradient-text">Touch</span>
        </motion.h2>

        <p className="text-lg mb-10 text-slate-700 dark:text-gray-400">
          I’m open to internships, full-time roles, and freelance opportunities.
        </p>

        <div className="flex justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="mailto:aamirirfu@gmail.com"
            className="glass p-4 text-primary text-2xl"
          >
            <FaEnvelope />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/mohammedaamirjeelani/"
            target="_blank"
            className="glass p-4 text-primary text-2xl"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/aamirjilu2"
            target="_blank"
            className="glass p-4 text-primary text-2xl"
          >
            <FaGithub />
          </motion.a>
        </div>

      </div>
    </section>
  );
}
