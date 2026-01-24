export default function Certificates() {
  const certificates = [
    {
      title: "Artificial Intelligence Programmer – TN Skill Corporation (300 hrs)",
      org: "TN Skill Corporation (Government of Tamil Nadu)",
      desc: "Industry-oriented AI training with hands-on Python & Machine Learning projects.",
      projects: [
        "Employee Attrition Prediction using Artificial Neural Networks (ANN)",
        "Face Mask Detection using Computer Vision",
        "SHAP (SHapley Additive Explanations) Model Interpretability Project",
      ],
      link: "https://drive.google.com/file/d/1LhyeYGWcAfELr5oawTvgyCPlrAkzXtBK/view?usp=sharing",
    },
    {
      title: "Cyber Security Internship – DFIR & Blue Team",
      org: "Tutler Infinity Internships",
      link: "https://drive.google.com/file/d/1TOT0nFZBoeKUayoUFS1WFkpxI5RbqrO-/view?usp=sharing",
    },
    {
      title: "Cybersecurity Analyst Job Simulation",
      org: "TATA Group (Forage)",
      link: "https://drive.google.com/file/d/1R-7O5y8V-AEKy7PdS6jVA-dim6ldivrE/view?usp=sharing",
    },
    {
      title: "Advanced Software Engineering Job Simulation",
      org: "Walmart Global Tech (Forage)",
      link: "https://drive.google.com/file/d/1li9fV1GMAMnqYgymG79rYX-R8JlU9jUl/view?usp=sharing",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      org: "Amazon Web Services (AWS)",
      link: "https://drive.google.com/file/d/1SEVJX89WD4VIsSzfCZwvWGYCBQDUflQJ/view?usp=sharing",
    },
  ];

  return (
    <section id="certificates" className="py-20 min-h-[70vh] bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">

        {/* 🔹 STRONGER HEADING */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          <span className="text-blue-500">Certificates & Training</span>
        </h2>

        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="
                group relative overflow-hidden
                p-6 rounded-xl
                bg-gray-100 dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* LEFT ACCENT BAR */}
              <span className="absolute left-0 top-0 h-full w-1 bg-blue-500"></span>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-black dark:text-white">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {cert.org}
                  </p>

                  {cert.desc && (
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {cert.desc}
                    </p>
                  )}

                  {/* 🔹 AI PROJECT LABEL */}
                  {cert.projects && (
                    <>
                      <p className="mt-2 text-xs font-semibold text-blue-500">
                        Key Academic Projects
                      </p>

                      <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                        {cert.projects.map((project, i) => (
                          <li key={i}>{project}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    px-4 py-2 rounded-lg
                    text-sm font-semibold
                    text-blue-600 dark:text-blue-400
                    border border-blue-500/40
                    hover:bg-blue-500 hover:text-white
                    transition whitespace-nowrap
                  "
                >
                  View Certificate ↗
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 TRAINING & COURSEWORK */}
<div className="mt-16">
  <h3 className="text-2xl font-bold text-center mb-10 text-black dark:text-white">
    Training & <span className="text-blue-500">Coursework</span>
  </h3>

  <div className="space-y-6">
    {/* DevOps Training */}
    <div
      className="
        group relative overflow-hidden
        p-6 rounded-xl
        bg-gray-50 dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      <span className="absolute left-0 top-0 h-full w-1 bg-blue-500"></span>

      <h4 className="text-lg font-semibold text-black dark:text-white">
        DevOps Engineering – Placement Guarantee Program
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        LinuxWorld Informatics Pvt. Ltd.
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Completed placement-oriented DevOps training covering Linux, Git,
        Docker, CI/CD fundamentals, and cloud-native concepts.
      </p>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
        Certificate pending from training provider.
      </p>
    </div>

    {/* Kubernetes Workshop */}
    <div
      className="
        group relative overflow-hidden
        p-6 rounded-xl
        bg-gray-50 dark:bg-gray-900
        border border-gray-200 dark:border-gray-800
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl
      "
    >
      <span className="absolute left-0 top-0 h-full w-1 bg-blue-500"></span>

      <h4 className="text-lg font-semibold text-black dark:text-white">
        Kubernetes Fundamentals – Hands-on Workshop (8 Hours)
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
        LinuxWorld
      </p>
      <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
        Attended hands-on workshop covering Kubernetes basics, container
        orchestration concepts, and real-world use cases.
      </p>
      <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
        Certificate pending.
      </p>
    </div>
  </div>
</div>
        <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
          Additional certifications and course completions are available upon request.
        </p>
      </div>
    </section>
  );
}
