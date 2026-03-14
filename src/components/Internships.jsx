import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const internships = [
  {
    role: "Authorised Service Operator",
    track: "Govt. Service Delivery",
    company: "TNeSevai — Tamil Nadu Government",
    period: "6+ Years · Ongoing",
    desc: "Officially authorised to deliver Tamil Nadu Government digital e-services to citizens at Royal Computers.",
    bullets: [
      "Delivering official TN Govt e-services — certificates, registrations, and more.",
      "Handling high volumes of citizen requests simultaneously on a daily basis.",
      "Authorised Digital Seva (Central Govt) operator as well — dual certification.",
      "Built strong expertise in government service delivery, documentation, and citizen handling.",
    ],
    links: [],
    badges: [
      { label: "TNeSevai — TN Govt Official", cls: "pill-blue" },
      { label: "Digital Seva — Central Govt", cls: "pill-amber" },
    ],
    highlight: true,
  },
  {
    role: "Cyber Security Intern",
    track: "Blue Team Ops",
    company: "Tutelr",
    period: "2023–2024",
    desc: "Blue Team operations — threat analysis, log monitoring, and structured incident response.",
    bullets: [
      "CHAPS (Cyber Hygiene & Protection System) project completed.",
      "Log analysis, threat identification, and security assessments.",
      "Applied Blue Team fundamentals and cybersecurity best practices.",
    ],
    links: [],
    badges: [],
    highlight: false,
  },
  {
    role: "Web Developer Intern",
    track: "Frontend Eng",
    company: "Technook",
    period: "2022",
    desc: "Delivered two live web applications, both deployed to production.",
    bullets: [
      "Minor Project — Historical Places in India",
      "Major Project — Weather Forecasting Application",
    ],
    links: [
      { label: "Historical Places", url: "https://historicalplaces-18041.web.app/" },
      { label: "Weather App", url: "https://weather-forecast-ap2.web.app/" },
    ],
    badges: [],
    highlight: false,
  },
];

export default function Internships() {
  return (
    <section id="internships" className="sec-pad" style={{ background: "var(--bg2)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: .6 }} viewport={{ once: true }} style={{ marginBottom: "48px", position: "relative" }}>
          <div className="label" style={{ marginBottom: "14px" }}>Industry Training</div>
          <h2 className="f-display" style={{ fontSize: "clamp(1.8rem,3vw,3rem)", color: "var(--text)", letterSpacing: "-0.02em", fontStyle: "italic" }}>
            <span className="teal-text">Internship</span> & Field Experience
          </h2>
          <span className="sec-num">03</span>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,320px),1fr))", gap: "20px" }}>
          {internships.map((item, i) => (
            <motion.div key={i} className="card"
              style={{
                padding: "26px",
                borderColor: item.highlight ? "var(--teal-bdr)" : "var(--border)",
                background: item.highlight ? "rgba(0,212,170,0.04)" : "var(--surface)",
              }}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: i * 0.1 }} viewport={{ once: true }}>

              {/* Track pill + optional highlight glow dot */}
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <span className="pill">{item.track}</span>
                {item.highlight && (
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "var(--teal)", display: "inline-block", animation: "glow-pulse 2.5s ease-in-out infinite" }} />
                )}
              </div>

              <h3 className="f-display" style={{ fontSize: "1.15rem", color: "var(--text)", fontStyle: "italic", marginBottom: "5px" }}>{item.role}</h3>
              <p style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.65rem", color: "var(--teal)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "14px" }}>
                {item.company} · {item.period}
              </p>

              {/* Govt badges */}
              {item.badges.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "7px", marginBottom: "14px" }}>
                  {item.badges.map(b => (
                    <span key={b.label} className={b.cls}>{b.label}</span>
                  ))}
                </div>
              )}

              <p style={{ color: "var(--text2)", fontSize: "0.875rem", lineHeight: 1.7, marginBottom: "12px" }}>{item.desc}</p>

              <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {item.bullets.map((b, j) => (
                  <li key={j} style={{ display: "flex", gap: "9px", fontSize: "0.845rem", color: "var(--text2)", lineHeight: 1.6 }}>
                    <span style={{ color: "var(--teal)", flexShrink: 0 }}>→</span>{b}
                  </li>
                ))}
              </ul>

              {item.links.length > 0 && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid var(--border)" }}>
                  {item.links.map(l => (
                    <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                      style={{ display: "flex", alignItems: "center", gap: "6px", fontFamily: "JetBrains Mono,monospace", fontSize: "0.65rem", color: "var(--teal)", textDecoration: "none" }}>
                      <FaExternalLinkAlt size={10} />{l.label}
                    </a>
                  ))}
                </div>
              )}

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}