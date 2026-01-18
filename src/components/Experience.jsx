export default function Experience() {
const timeline = [
  {
  title: "Founder & Web Developer",
  place: "MDA Royal Technologies",
  time: "2024 – Present",
  desc: (
    <>
      <span className="inline-block mb-2 px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
        Founder
      </span>
      <ul className="mt-3 list-disc list-inside space-y-2">
        <li>
          Founded <strong>MDA Royal Technologies</strong> and built the official
          company website from scratch.
        </li>
        <li>
          Designed and developed responsive, SEO-friendly web pages using
          <strong> HTML, CSS, and JavaScript</strong>.
        </li>
        <li>
          Delivered client-facing web solutions and handled end-to-end
          development including design, deployment, and maintenance.
        </li>
        <li>
          Managed real-world project requirements, timelines, and quality
          standards.
        </li>
      </ul>

      <a
        href="https://mdaroyaltechnologies.com"
        target="_blank"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        🌐 Visit Company Website →
      </a>
    </>
  ),
},

  {
    title: "Web Developer (Project-Based / Contract)",
    place: "Rooteche Educational Private Limited",
    time: "Jul 2023 – Dec 2024",
    desc: "Built and deployed production-ready web applications using HTML, CSS, JavaScript, PHP, and Firebase. Developed authentication-based admin dashboards, responsive UIs, and handled API integration and database connectivity.",
  },
  {
    title: "B.Tech – Information Technology",
    place: "K.S. Rangasamy College of Technology (Anna University)",
    time: "2020 – 2024",
    desc: "Completed B.Tech in Information Technology with a strong foundation in programming, databases, web development, and software engineering.",
  },
  {
    title: "Diploma – Computer Science Engineering",
    place: "Government Polytechnic College, Uthangarai",
    time: "2017 – 2020",
    desc: "Completed diploma in Computer Science Engineering with a focus on programming fundamentals and practical lab work.",
  },
];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          Experience & <span className="text-blue-500">Education</span>
        </h2>

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div
              key={i}
              className="border-l-4 border-blue-500 pl-6"
            >
              <h3 className="text-xl font-semibold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500">{item.place} • {item.time}</p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
