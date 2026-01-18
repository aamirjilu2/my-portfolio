import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
        Get In <span className="text-blue-500">Touch</span>
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        I’m open to internships, full-time roles, and freelance projects.
      </p>

      <div className="flex justify-center gap-6 text-2xl">
        <a href="mailto:aamirirfu@gmail.com" className="text-blue-500">
          <FaEnvelope />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammedaamirjeelani/"
          target="_blank"
          className="text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/aamirjilu2"
          target="_blank"
          className="text-blue-500"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
