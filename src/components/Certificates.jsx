import { motion } from "framer-motion";

const certificates = [
  "AI Programmer – TN Skill Development (Cultus)",
  "AWS Certified Modules – Cloud Practitioner, IAM, Billing & Cost",
  "Forage Virtual Experience – Walmart, EA Sports, TCS Cybersecurity",
  "Cybersecurity Blue Team Internship Certification",
  "Web Development Internship Certification",
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-slate-900 dark:text-gray-100"
        >
          <span className="gradient-text">Certificates</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass p-5 text-slate-900 dark:text-gray-200"
            >
              ✅ {cert}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
