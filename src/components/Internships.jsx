import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Internships() {
  return (
    <section
      id="internships"
      className="py-20 min-h-[70vh] bg-gray-100 dark:bg-gray-900"
    >
      <div className="max-w-5xl mx-auto px-6">

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

          {/* Cyber Security Internship */}
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
              monitoring, and incident response activities.
            </p>
          </motion.div>

          {/* Web Development Internship */}
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
              Developed real-world frontend applications using
              <strong> HTML, CSS, JavaScript</strong> with live deployment.
            </p>

            {/* Projects */}
            <div className="mt-4 space-y-3">

              <div>
                <p className="font-medium text-slate-800 dark:text-gray-200">
                  🔹 Minor Project – Historical Places in India
                </p>
                <a
                  href="https://historicalplaces-18041.web.app/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                >
                  View Live <FaExternalLinkAlt />
                </a>
              </div>

              <div>
                <p className="font-medium text-slate-800 dark:text-gray-200">
                  🔹 Major Project – Weather Forecasting Application
                </p>
                <a
                  href="https://weather-forecast-ap2.web.app/"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-blue-600 hover:underline text-sm"
                >
                  View Live <FaExternalLinkAlt />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
