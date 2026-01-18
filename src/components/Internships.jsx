import { motion } from "framer-motion";

export default function Internships() {
  return (
    <section id="internships" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-gray-100"
        >
          <span className="gradient-text">Internships</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="glass p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-100">
              Cyber Security Intern (Blue Team)
            </h3>
            <p className="text-sm text-slate-600 dark:text-gray-400">
              Tutelr • 2023 – 2024
            </p>
            <p className="mt-3 text-slate-700 dark:text-gray-300">
              Worked on Blue Team operations including threat analysis, security
              monitoring, and incident response tasks.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="glass p-6"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-gray-100">
              Web Developer Intern
            </h3>
            <p className="text-sm text-slate-600 dark:text-gray-400">
              Technook • 2022
            </p>
            <p className="mt-3 text-slate-700 dark:text-gray-300">
              Developed frontend projects using HTML, CSS, JavaScript and API
              integration.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
