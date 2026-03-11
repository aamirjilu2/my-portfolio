import { motion } from "framer-motion";

const highlights = [
  { label:"Role",         value:"AI Programmer & Full-Stack Developer" },
  { label:"Businesses",   value:"MDA Royal Technologies · Royal Computers" },
  { label:"Govt Centres", value:"TNeSevai (TN) · Digital Seva (Central)" },
  { label:"Experience",   value:"6+ Years" },
  { label:"Location",     value:"Tamil Nadu, India" },
  { label:"Status",       value:"Open to Opportunities" },
];
const strengths = [
  { icon:"🧠", title:"AI & Machine Learning",  desc:"TensorFlow, CNN models, Python-based AI solutions deployed in production." },
  { icon:"🌐", title:"Full-Stack Development",  desc:"React, Flutter, PHP, Firebase — end-to-end product delivery." },
  { icon:"🏪", title:"Business & Operations",   desc:"6+ years managing Royal Computers — hardware, customer handling & govt services." },
  { icon:"🏛",  title:"Government Services",    desc:"Authorised TNeSevai & Digital Seva operator — high citizen volumes daily." },
];

export default function About() {
  return (
    <section id="about" className="sec-pad" style={{ background:"var(--bg2)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6 }} viewport={{ once:true }} style={{ marginBottom:"48px" }}>
          <div className="label" style={{ marginBottom:"16px" }}>About Me</div>
          <h2 className="f-display" style={{ fontSize:"clamp(1.8rem,4vw,3.2rem)", color:"var(--text)", letterSpacing:"-0.02em", fontStyle:"italic", lineHeight:1.15 }}>
            Developer. Entrepreneur.<br/>
            <span className="teal-text">Government-Authorised</span> Operator.
          </h2>
        </motion.div>

        {/* Bio + Quick Profile — side by side desktop, stacked mobile */}
        <div className="about-top">
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6 }} viewport={{ once:true }}
            className="bento">
            <p style={{ color:"var(--text2)", lineHeight:1.85, fontSize:"clamp(0.95rem,1.8vw,1.05rem)", marginBottom:"16px" }}>
              I'm an <strong style={{ color:"var(--text)" }}>AI Programmer & Full-Stack Developer</strong> who turns ideas into polished, production-grade software — web, mobile, and AI-powered.
            </p>
            <p style={{ color:"var(--text2)", lineHeight:1.85, fontSize:"clamp(0.95rem,1.8vw,1.05rem)", marginBottom:"16px" }}>
              Beyond software, I manage <strong style={{ color:"var(--text)" }}>Royal Computers</strong> — a Computer Hardware sales & service shop and authorised centre for{" "}
              <span style={{ color:"#60A5FA" }}>TNeSevai (Tamil Nadu Government)</span> and{" "}
              <span style={{ color:"#FBBF24" }}>Digital Seva (Central Government)</span> — serving hundreds of citizens, for over <strong style={{ color:"var(--teal)" }}>6 years.</strong>
            </p>
            <p style={{ color:"var(--text2)", lineHeight:1.85, fontSize:"clamp(0.95rem,1.8vw,1.05rem)" }}>
              Managing high customer volumes and government requests simultaneously — that's my daily reality, and it sharpens my software thinking too.
            </p>
          </motion.div>

          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6, delay:.1 }} viewport={{ once:true }}
            className="bento">
            <div className="label" style={{ marginBottom:"20px" }}>Quick Profile</div>
            <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
              {highlights.map((h,i) => (
                <div key={i} style={{ borderBottom:i<highlights.length-1?"1px solid var(--border)":"none", paddingBottom:i<highlights.length-1?"14px":"0" }}>
                  <div style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.6rem", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--muted)", marginBottom:"3px" }}>{h.label}</div>
                  <div style={{ fontSize:"0.875rem", color:"var(--text)", fontWeight:500 }}>{h.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 4 strength cards */}
        <div className="strength-row">
          {strengths.map((s,i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.5, delay:i*0.08 }} viewport={{ once:true }}
              className="bento">
              <div style={{ fontSize:"28px", marginBottom:"12px" }}>{s.icon}</div>
              <div style={{ fontWeight:600, color:"var(--text)", marginBottom:"8px", fontSize:"0.9rem" }}>{s.title}</div>
              <div style={{ fontSize:"0.82rem", color:"var(--text2)", lineHeight:1.65 }}>{s.desc}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
