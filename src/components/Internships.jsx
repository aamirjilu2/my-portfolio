export default function Internships() {
  return (
    <section id="internships" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          <span className="text-blue-500">Internships</span>
        </h2>

        <div className="space-y-8">
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Cyber Security Intern (Blue Team)
            </h3>
            <p className="text-sm text-gray-500">
              Tutelr • 2023 – 2024
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Worked on Blue Team operations including threat analysis, security
              monitoring, and investigation tasks. Gained hands-on experience in
              cybersecurity fundamentals and incident response.
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-black dark:text-white">
              Web Developer Intern
            </h3>
            <p className="text-sm text-gray-500">
              Technook • 2022
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Developed frontend projects including a weather application and a
              historical places website. Worked with HTML, CSS, JavaScript, and
              API integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
