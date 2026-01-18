import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import mda from "../assets/projects/mda-royal.png";
import ksrct from "../assets/projects/ksrct-booking.png";
import leave from "../assets/projects/leave-management.png";
import skin from "../assets/projects/skin-disease.png";

const projects = [
  {
    title: "MDA Royal Technologies – Company Website",
    desc: "Professional corporate website with responsive UI and SEO-friendly structure.",
    tech: "HTML • CSS • JavaScript",
    image: mda,
    live: "https://mdaroyaltechnologies.com",
    github: "https://github.com/mdaroyaltech/mda-royal-technologies",
  },
  {
    title: "KSRCT Venue Booking System",
    desc: "Firebase-based venue booking system with authentication and admin workflow.",
    tech: "HTML • CSS • JavaScript • Firebase",
    image: ksrct,
    live: "https://ksrcthallbooking.web.app",
    github: "https://github.com/aamirjilu2/Venue-Booking",
  },
  {
    title: "Student Leave Management System",
    desc: "PHP & MySQL based application for student leave approval and admin control.",
    tech: "PHP • MySQL",
    image: leave,
    live: null,
    github: "https://github.com/aamirjilu2/Student-Leav-Management-System",
  },
  {
    title: "Skin Disease Detection App",
    desc: "AI-powered mobile app using CNN to detect skin diseases from images.",
    tech: "Python • TensorFlow • Flutter",
    image: skin,
    live: null,
    github: "https://github.com/aamirjilu2/Skin-Disease-Detection-App",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-gray-100"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="glass overflow-hidden"
            >
              {/* IMAGE */}
              <motion.img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.4 }}
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-gray-100">
                  {p.title}
                </h3>

                <p className="text-slate-700 dark:text-gray-400 mb-3">
                  {p.desc}
                </p>

                <p className="text-sm text-primary mb-4">
                  {p.tech}
                </p>

                <div className="flex gap-4">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex items-center gap-2 text-slate-900 dark:text-gray-300 hover:text-primary"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
