import { motion } from "framer-motion";
import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaAws,
  FaGitAlt,
} from "react-icons/fa";
import { SiFlutter, SiFirebase, SiTensorflow } from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython /> },
  { name: "React", icon: <FaReact /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "PHP", icon: <FaPhp /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "AWS", icon: <FaAws /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-gray-100"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.08,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 18,
              }}
              viewport={{ once: true }}
              className="
                glass p-6 flex flex-col items-center justify-center
                text-slate-900 dark:text-gray-200
                cursor-pointer
              "
            >
              <div className="text-4xl text-primary mb-3">
                {skill.icon}
              </div>
              <p className="font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
