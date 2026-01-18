import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gray-50 text-black dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          About <span className="text-blue-500">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center"
        >
          I am an <span className="font-semibold text-blue-500">AI Programmer</span> and
          Fresher Software Developer with hands-on experience in building real-world
          web, mobile, and AI-based applications. I have worked with technologies like
          Python, PHP, Flutter, Firebase, and modern web frameworks to create
          dashboards, booking systems, and predictive AI solutions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center"
        >
          I am passionate about problem-solving, continuous learning, and contributing
          to fast-paced IT environments. I enjoy turning ideas into functional,
          user-friendly applications and exploring emerging technologies in AI and
          cloud computing.
        </motion.p>
      </div>
    </section>
  );
}
