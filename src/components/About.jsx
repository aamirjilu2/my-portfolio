import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-gray-100 text-center">
            About <span className="gradient-text">Me</span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-700 dark:text-gray-300 text-center">
            I am an <span className="font-semibold text-primary">AI Programmer</span>{" "}
            and software developer with hands-on experience in building real-world
            web, mobile, and AI-powered applications. I enjoy creating clean user
            interfaces, scalable systems, and solving meaningful problems using
            modern technologies.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-slate-700 dark:text-gray-300 text-center">
            I have worked with technologies like{" "}
            <span className="font-medium">Python, React, Flutter, Firebase, PHP</span>{" "}
            and cloud tools to deliver functional, user-focused solutions. I’m
            passionate about continuous learning and growing as a professional
            developer.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
