import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const internships = [
  { role:"Cyber Security Intern", track:"Blue Team Ops", company:"Tutelr", period:"2023–2024",
    desc:"Blue Team operations — threat analysis, log monitoring, and structured incident response.",
    bullets:["CHAPS (Cyber Hygiene & Protection System) project completed.","Log analysis, threat identification, and security assessments.","Applied Blue Team fundamentals and cybersecurity best practices."],
    links:[] },
  { role:"Web Developer Intern", track:"Frontend Eng", company:"Technook", period:"2022",
    desc:"Delivered two live web applications, both deployed to production.",
    bullets:["Minor Project — Historical Places in India","Major Project — Weather Forecasting Application"],
    links:[{ label:"Historical Places", url:"https://historicalplaces-18041.web.app/" },{ label:"Weather App", url:"https://weather-forecast-ap2.web.app/" }] },
];

export default function Internships() {
  return (
    <section id="internships" className="sec-pad" style={{ background:"var(--bg2)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6 }} viewport={{ once:true }} style={{ marginBottom:"48px", position:"relative" }}>
          <div className="label" style={{ marginBottom:"14px" }}>Industry Training</div>
          <h2 className="f-display" style={{ fontSize:"clamp(1.8rem,3vw,3rem)", color:"var(--text)", letterSpacing:"-0.02em", fontStyle:"italic" }}>
            <span className="teal-text">Internship</span> Experience
          </h2>
          <span className="sec-num">03</span>
        </motion.div>

        {/* auto-fill — 2 col desktop, 1 col mobile */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,320px),1fr))", gap:"20px" }}>
          {internships.map((item,i) => (
            <motion.div key={i} className="card" style={{ padding:"26px" }}
              initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.5, delay:i*0.1 }} viewport={{ once:true }}>
              <span className="pill" style={{ marginBottom:"14px", display:"inline-flex" }}>{item.track}</span>
              <h3 className="f-display" style={{ fontSize:"1.15rem", color:"var(--text)", fontStyle:"italic", marginBottom:"5px" }}>{item.role}</h3>
              <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.65rem", color:"var(--teal)", letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:"14px" }}>{item.company} · {item.period}</p>
              <p style={{ color:"var(--text2)", fontSize:"0.875rem", lineHeight:1.7, marginBottom:"12px" }}>{item.desc}</p>
              <ul style={{ display:"flex", flexDirection:"column", gap:"8px" }}>
                {item.bullets.map((b,j) => (
                  <li key={j} style={{ display:"flex", gap:"9px", fontSize:"0.845rem", color:"var(--text2)", lineHeight:1.6 }}>
                    <span style={{ color:"var(--teal)", flexShrink:0 }}>→</span>{b}
                  </li>
                ))}
              </ul>
              {item.links.length>0 && (
                <div style={{ display:"flex", flexWrap:"wrap", gap:"16px", marginTop:"16px", paddingTop:"14px", borderTop:"1px solid var(--border)" }}>
                  {item.links.map(l => (
                    <a key={l.label} href={l.url} target="_blank" rel="noreferrer"
                      style={{ display:"flex", alignItems:"center", gap:"6px", fontFamily:"JetBrains Mono,monospace", fontSize:"0.65rem", color:"var(--teal)", textDecoration:"none" }}>
                      <FaExternalLinkAlt size={10}/>{l.label}
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
