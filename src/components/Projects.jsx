import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock } from "react-icons/fa";
import mda from "../assets/projects/mda-royal.png";
import ksrct from "../assets/projects/ksrct-booking.png";
import leave from "../assets/projects/leave-management.png";
import skin from "../assets/projects/skin-disease.png";

// Live screenshot images via Microlink API (free, no key needed)
const screenshot = (url) =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;

const projects = [
  {
    num: "01", title: "MDA Royal Technologies", type: "Corporate Website",
    desc: "Professional corporate site with responsive UI, SEO structure, and full deployment pipeline.",
    tech: ["HTML", "CSS", "JavaScript"], image: mda,
    live: "https://mdaroyaltechnologies.com",
    github: "https://github.com/mdaroyaltech/mda-royal-technologies",
    privateApp: false,
  },
  {
    num: "02", title: "KSRCT Venue Booking", type: "Web Application",
    desc: "Real-time Firebase booking platform with authentication and admin approval workflow.",
    tech: ["HTML", "CSS", "JS", "Firebase"], image: ksrct,
    live: "https://ksrcthallbooking.web.app",
    github: "https://github.com/aamirjilu2/Venue-Booking",
    privateApp: false,
  },
  {
    num: "03", title: "Leave Management System", type: "Admin Tool",
    desc: "Full-stack PHP & MySQL app for student leave submissions, approvals, and reporting.",
    tech: ["PHP", "MySQL"], image: leave,
    live: null,
    github: "https://github.com/aamirjilu2/Student-Leav-Management-System",
    privateApp: false,
  },
  {
    num: "04", title: "Skin Disease Detection", type: "AI Mobile App",
    desc: "TensorFlow CNN model embedded in Flutter — real-time skin condition analysis from camera.",
    tech: ["Python", "TensorFlow", "Flutter"], image: skin,
    live: null,
    github: "https://github.com/aamirjilu2/Skin-Disease-Detection-App",
    privateApp: false,
  },
  {
    num: "05", title: "School Management System", type: "Web Application",
    desc: "Full-featured school automation platform — student records, attendance, timetable, and admin dashboard built for real-world school operations.",
    tech: ["React", "JavaScript", "CSS"],
    image: screenshot("https://school-automation.vercel.app/"),
    live: "https://school-automation.vercel.app/",
    github: "https://github.com/mdaroyaltech/school-automation.git",
    privateApp: false,
  },
  {
    num: "06", title: "Trade Mentor GST", type: "Finance Tool",
    desc: "GST learning and trade mentorship platform — helping businesses and traders understand GST filing, compliance, and trade regulations.",
    tech: ["React", "JavaScript", "CSS"],
    image: screenshot("https://tradementorgst.vercel.app/"),
    live: "https://tradementorgst.vercel.app/",
    github: "https://github.com/mdaroyaltech/Trade-Mentor-GST.git",
    privateApp: false,
  },
  {
    num: "07", title: "Royal Computers — Income Tracker", type: "Private Office Tool",
    desc: "A personal daily income tracking dashboard built exclusively for my own office use at Royal Computers. Tracks shop revenue, daily entries, and financial records. Not publicly available.",
    tech: ["React", "JavaScript", "CSS"],
    image: screenshot("https://sptroyal-computers.vercel.app/login"),
    live: null,       // private — no public link shown
    github: null,
    privateApp: true,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="sec-pad" style={{ background: "var(--bg2)" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }} viewport={{ once: true }}
          style={{ marginBottom: "48px", position: "relative" }}>
          <div className="label" style={{ marginBottom: "14px" }}>Selected Work</div>
          <h2 className="f-display" style={{ fontSize: "clamp(1.8rem,3vw,3rem)", color: "var(--text)", letterSpacing: "-0.02em", fontStyle: "italic" }}>
            Featured <span className="teal-text">Projects</span>
          </h2>
          <span className="sec-num">02</span>
        </motion.div>

        {/* 3-col desktop → 2-col tablet → 1-col mobile */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,300px),1fr))", gap: "20px" }}>
          {projects.map((p, i) => (
            <motion.div key={i} className="card"
              initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: .5, delay: (i % 3) * 0.09 }} viewport={{ once: true }}>

              {/* Image */}
              <div style={{ overflow: "hidden", height: "185px", borderBottom: "1px solid var(--border)", background: "var(--bg3)", position: "relative" }}>
                <motion.img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: .5 }}
                  onError={e => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.background =
                      "linear-gradient(135deg, var(--teal-dim), var(--bg3))";
                  }}
                />
                {/* Private badge overlay */}
                {p.privateApp && (
                  <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", alignItems: "center", gap: "5px", padding: "4px 10px", borderRadius: "999px", background: "rgba(14,14,14,0.82)", border: "1px solid var(--border2)", backdropFilter: "blur(8px)" }}>
                    <FaLock size={9} style={{ color: "var(--muted)" }} />
                    <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}>Private</span>
                  </div>
                )}
              </div>

              <div style={{ padding: "22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "8px", marginBottom: "10px" }}>
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: "0.6rem", color: p.privateApp ? "var(--muted)" : "var(--teal)", letterSpacing: "0.12em", textTransform: "uppercase", display: "block", marginBottom: "4px" }}>
                      {p.num} — {p.type}
                    </span>
                    <h3 className="f-display" style={{ fontSize: "1.05rem", color: "var(--text)", fontStyle: "italic" }}>{p.title}</h3>
                  </div>
                  <div style={{ display: "flex", gap: "12px", flexShrink: 0, marginTop: "2px" }}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer"
                        style={{ color: "var(--muted)", transition: "color .2s" }}
                        onMouseEnter={e => e.target.style.color = "var(--text)"}
                        onMouseLeave={e => e.target.style.color = "var(--muted)"}>
                        <FaGithub size={16} />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer" style={{ color: "var(--teal)" }}>
                        <FaExternalLinkAlt size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <p style={{ color: "var(--text2)", fontSize: "0.845rem", lineHeight: 1.7, marginBottom: "14px" }}>{p.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {p.tech.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}