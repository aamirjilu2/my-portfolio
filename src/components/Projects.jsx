import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import mda from "../assets/projects/mda-royal.png";
import ksrct from "../assets/projects/ksrct-booking.png";
import leave from "../assets/projects/leave-management.png";
import skin from "../assets/projects/skin-disease.png";

export default function Projects() {
  const projects = [
    {
      title: "MDA Royal Technologies – Company Website",
      desc: "Official company website built using HTML, CSS and JavaScript.",
      tech: "HTML • CSS • JavaScript",
      image: mda,
      live: "https://mdaroyaltechnologies.com",
      github: "https://github.com/mdaroyaltech/mda-royal-technologies",
    },
    {
      title: "KSRCT Venue Booking System",
      desc: "Firebase-based hall booking system with authentication & admin workflow.",
      tech: "HTML • CSS • JavaScript • Firebase",
      image: ksrct,
      live: "https://ksrcthallbooking.web.app",
      github: "https://github.com/aamirjilu2/Venue-Booking",
    },
    {
      title: "Student Leave Management System",
      desc: "PHP & MySQL based system for leave approval and admin control.",
      tech: "PHP • MySQL",
      image: leave,
      live: null,
      github: "https://github.com/aamirjilu2/Student-Leav-Management-System",
    },
    {
      title: "Skin Disease Detection App",
      desc: "AI-based mobile app using CNN to detect skin diseases from images.",
      tech: "Python • TensorFlow • Flutter",
      image: skin,
      live: null,
      github: "https://github.com/aamirjilu2/Skin-Disease-Detection-App",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {p.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-3">
                  {p.desc}
                </p>

                <p className="text-sm text-blue-500 mb-4">{p.tech}</p>

                <div className="flex gap-4">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      className="flex items-center gap-2 text-blue-600 hover:underline"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-500"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
