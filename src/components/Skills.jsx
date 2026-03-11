import { motion } from "framer-motion";
import { FaPython, FaReact, FaHtml5, FaPhp, FaAws, FaGitAlt } from "react-icons/fa";
import { SiFlutter, SiFirebase, SiTensorflow } from "react-icons/si";

const techSkills = [
  { name:"Python",     icon:<FaPython/>,     pct:90 },
  { name:"React",      icon:<FaReact/>,      pct:85 },
  { name:"Flutter",    icon:<SiFlutter/>,    pct:78 },
  { name:"Firebase",   icon:<SiFirebase/>,   pct:80 },
  { name:"TensorFlow", icon:<SiTensorflow/>, pct:72 },
  { name:"PHP",        icon:<FaPhp/>,        pct:74 },
  { name:"HTML/CSS",   icon:<FaHtml5/>,      pct:92 },
  { name:"AWS",        icon:<FaAws/>,        pct:65 },
  { name:"Git",        icon:<FaGitAlt/>,     pct:88 },
];
const softSkills = [
  { name:"Customer Handling",     pct:98, note:"6+ yrs · High-volume daily" },
  { name:"Business Operations",   pct:92, note:"Managing 2 enterprises" },
  { name:"Govt Service Delivery", pct:95, note:"TNeSevai & Digital Seva" },
  { name:"Problem Solving",       pct:90, note:"Software & real-world" },
  { name:"Communication",         pct:88, note:"Client & citizen facing" },
  { name:"Team Leadership",       pct:82, note:"Managing shop operations" },
];

export default function Skills() {
  return (
    <section id="skills" className="sec-pad" style={{ background:"var(--bg)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6 }} viewport={{ once:true }} style={{ marginBottom:"48px", position:"relative" }}>
          <div className="label" style={{ marginBottom:"14px" }}>Technical Expertise</div>
          <h2 className="f-display" style={{ fontSize:"clamp(1.8rem,3vw,3rem)", color:"var(--text)", letterSpacing:"-0.02em", fontStyle:"italic" }}>
            Skills &amp; <span className="teal-text">Proficiencies</span>
          </h2>
          <span className="sec-num">01</span>
        </motion.div>

        {/* 2-col desktop, 1-col mobile */}
        <div className="two-col">

          {/* Tech skills */}
          <div>
            <div className="label" style={{ marginBottom:"24px" }}>Technical</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
              {techSkills.map((sk,i) => (
                <motion.div key={sk.name} initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.4, delay:i*0.06 }} viewport={{ once:true }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"7px" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"9px" }}>
                      <span style={{ color:"var(--teal)", fontSize:"14px" }}>{sk.icon}</span>
                      <span style={{ fontSize:"0.875rem", fontWeight:500, color:"var(--text)" }}>{sk.name}</span>
                    </div>
                    <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.65rem", color:"var(--muted)" }}>{sk.pct}%</span>
                  </div>
                  <div className="sbar-track">
                    <motion.div className="sbar-fill" initial={{ width:0 }} whileInView={{ width:`${sk.pct}%` }} transition={{ duration:1.1, delay:i*0.06+0.2, ease:"easeOut" }} viewport={{ once:true }}/>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional skills */}
          <div>
            <div className="label" style={{ marginBottom:"24px" }}>Professional & Operational</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"18px" }}>
              {softSkills.map((sk,i) => (
                <motion.div key={sk.name} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:.4, delay:i*0.07 }} viewport={{ once:true }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"8px", marginBottom:"7px", flexWrap:"wrap" }}>
                    <div>
                      <span style={{ fontSize:"0.875rem", fontWeight:600, color:"var(--text)" }}>{sk.name}</span>
                      <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.57rem", color:"var(--teal)", marginLeft:"8px", letterSpacing:"0.04em" }}>{sk.note}</span>
                    </div>
                    <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.65rem", color:"var(--muted)", flexShrink:0 }}>{sk.pct}%</span>
                  </div>
                  <div className="sbar-track">
                    <motion.div initial={{ width:0 }} whileInView={{ width:`${sk.pct}%` }} transition={{ duration:1.1, delay:i*0.07+0.25, ease:"easeOut" }} viewport={{ once:true }}
                      style={{ height:"100%", borderRadius:"3px", background:"linear-gradient(90deg,#22c55e,#4ADE80)" }}/>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Highlight callout */}
            <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.5, delay:.5 }} viewport={{ once:true }}
              style={{ marginTop:"24px", padding:"18px 20px", borderRadius:"10px", background:"var(--teal-dim)", border:"1px solid var(--teal-bdr)" }}>
              <div style={{ display:"flex", gap:"12px", alignItems:"flex-start" }}>
                <span style={{ fontSize:"20px", flexShrink:0 }}>⭐</span>
                <div>
                  <div style={{ fontWeight:700, color:"var(--text)", fontSize:"0.9rem", marginBottom:"5px" }}>Core Strength: Customer Handling</div>
                  <div style={{ color:"var(--text2)", fontSize:"0.82rem", lineHeight:1.6 }}>
                    6+ years managing high-volume customers at Royal Computers — hardware issues, govt service requests, and citizen queries simultaneously. Directly improves UX thinking in software.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
