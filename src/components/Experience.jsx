import { motion } from "framer-motion";

const timeline = [
  {
    title: "Founder & Web Developer",
    place: "MDA Royal Technologies",
    time: "2024 – Present",
    desc: [
      "Founded MDA Royal Technologies and built the official company website.",
      "Designed responsive, SEO-friendly web pages using HTML, CSS, and JavaScript.",
      "Handled end-to-end development, deployment, and maintenance.",
    ],
    link: "https://mdaroyaltechnologies.com",
  },
  {
    title: "Web Developer (Contract)",
    place: "Rooteche Educational Pvt Ltd",
    time: "Jul 2023 – Dec 2024",
    desc: [
      "Built production-ready web applications.",
      "Developed admin dashboards and authentication systems.",
      "Worked with PHP, Firebase, and frontend technologies.",
    ],
  },
  {
    title: "B.Tech – Information Technology",
    place: "K.S. Rangasamy College of Technology",
    time: "2020 – 2024",
    desc: [
      "Strong foundation in programming and software engineering.",
    ],
  },
  {
    title: "Diploma – Computer Science",
    place: "Government Polytechnic College",
    time: "2017 – 2020",
    desc: [
      "Focused on programming fundamentals and practical lab work.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-slate-900 dark:text-gray-100"
        >
          Experience & <span className="gradient-text">Education</span>
        </motion.h2>

        <div className="relative border-l-2 border-primary pl-8 space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* DOT */}
              <span className="absolute -left-[11px] top-2 w-5 h-5 bg-primary rounded-full glow"></span>

              {/* CARD */}
              <div className="glass p-6">
                <h3 className="glass p-6 transition-transform duration-300 hover:-translate-y-1">
                  {item.title}
                </h3>

                <p className="text-sm text-primary font-medium">
                  {item.place} • {item.time}
                </p>

                <ul className="mt-4 list-disc list-inside text-slate-700 dark:text-gray-300 space-y-2">
                  {item.desc.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    className="inline-block mt-4 text-primary font-medium hover:underline"
                  >
                    🌐 Visit Website →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
