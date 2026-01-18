export default function Certificates() {
  const certificates = [
    "AI Programmer – TN Skill Development (Cultus)",
    "AWS Certified Modules – Cloud Practitioner, IAM, Billing & Cost",
    "Forage Virtual Experience Programs – Walmart, EA Sports, TCS Cybersecurity",
    "Cybersecurity Blue Teaming Internship Certification",
    "Web Development Internship Certification",
  ];

  return (
    <section id="certificates" className="py-20 bg-white dark:bg-black">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black dark:text-white">
          <span className="text-blue-500">Certificates</span>
        </h2>

        <ul className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <li
              key={i}
              className="p-5 bg-gray-100 dark:bg-gray-900 rounded-lg shadow text-gray-700 dark:text-gray-300"
            >
              ✔ {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
