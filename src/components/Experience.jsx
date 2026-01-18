export default function Experience() {
  const timeline = [
    {
      title: "Founder & Web Developer",
      place: "MDA Royal Technologies",
      time: "2024 – Present",
      desc: "Built and managed company website, delivered client projects using HTML, CSS, JavaScript, and modern UI practices.",
    },
    {
      title: "AI Project Developer",
      place: "Skin Disease Detection App",
      time: "2023 – 2024",
      desc: "Developed an AI-based mobile app using CNN and TensorFlow for skin disease prediction.",
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
      desc: "Completed diploma in Computer Science Engineering with focus on programming fundamentals and practical lab work.",
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
