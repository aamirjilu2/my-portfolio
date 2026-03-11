import { motion } from "framer-motion";

const certs = [
  { title:"Artificial Intelligence Programmer", org:"TN Skill Corporation — Govt of Tamil Nadu", meta:"300 Hours", desc:"Hands-on AI training — Python, ML, ANN, Computer Vision, Model Interpretability.", projects:["Employee Attrition Prediction via ANN","Face Mask Detection — CV","SHAP Model Interpretability"], link:"https://drive.google.com/file/d/1LhyeYGWcAfELr5oawTvgyCPlrAkzXtBK/view?usp=sharing" },
  { title:"Cyber Security Internship — DFIR & Blue Team", org:"Tutler Infinity Internships", link:"https://drive.google.com/file/d/1TOT0nFZBoeKUayoUFS1WFkpxI5RbqrO-/view?usp=sharing" },
  { title:"Cybersecurity Analyst Job Simulation", org:"TATA Group · Forage", link:"https://drive.google.com/file/d/1R-7O5y8V-AEKy7PdS6jVA-dim6ldivrE/view?usp=sharing" },
  { title:"Advanced Software Engineering Job Simulation", org:"Walmart Global Tech · Forage", link:"https://drive.google.com/file/d/1li9fV1GMAMnqYgymG79rYX-R8JlU9jUl/view?usp=sharing" },
  { title:"AWS Cloud Practitioner Essentials", org:"Amazon Web Services", link:"https://drive.google.com/file/d/1SEVJX89WD4VIsSzfCZwvWGYCBQDUflQJ/view?usp=sharing" },
];
const training = [
  { title:"DevOps Engineering — Placement Guarantee Program", org:"LinuxWorld Informatics Pvt. Ltd.", desc:"Linux, Git, Docker, CI/CD, cloud-native concepts. Certificate pending." },
  { title:"Kubernetes Fundamentals — Workshop (8 hrs)", org:"LinuxWorld", desc:"Container orchestration and Kubernetes production patterns. Certificate pending." },
];

export default function Certificates() {
  return (
    <section id="certificates" className="sec-pad" style={{ background:"var(--bg2)" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6 }} viewport={{ once:true }} style={{ marginBottom:"48px", position:"relative" }}>
          <div className="label" style={{ marginBottom:"14px" }}>Credentials</div>
          <h2 className="f-display" style={{ fontSize:"clamp(1.8rem,3vw,3rem)", color:"var(--text)", letterSpacing:"-0.02em", fontStyle:"italic" }}>
            Certificates &amp; <span className="teal-text">Training</span>
          </h2>
          <span className="sec-num">05</span>
        </motion.div>

        <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"40px" }}>
          {certs.map((c,i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.4, delay:i*0.07 }} viewport={{ once:true }}
              style={{ position:"relative", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"10px", overflow:"hidden", transition:"all .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--teal-bdr)";e.currentTarget.style.transform="translateY(-2px)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform="none";}}>
              {/* Left accent bar */}
              <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"3px", background:"var(--teal)", opacity:.7 }}/>
              <div className="cert-row" style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:"14px", padding:"20px 22px 20px 26px" }}>
                <div style={{ flex:"1 1 200px", minWidth:0 }}>
                  <h3 style={{ fontSize:"clamp(0.85rem,2vw,0.95rem)", fontWeight:600, color:"var(--text)", marginBottom:"4px" }}>{c.title}</h3>
                  <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.62rem", color:"var(--teal)", letterSpacing:"0.07em", marginBottom:c.desc||c.projects?"10px":"0" }}>
                    {c.org}{c.meta?` · ${c.meta}`:""}
                  </p>
                  {c.desc && <p style={{ fontSize:"0.83rem", color:"var(--text2)", lineHeight:1.65 }}>{c.desc}</p>}
                  {c.projects && (
                    <ul style={{ marginTop:"8px", display:"flex", flexDirection:"column", gap:"5px" }}>
                      {c.projects.map((p,j) => (
                        <li key={j} style={{ display:"flex", gap:"8px", fontSize:"0.8rem", color:"var(--text2)" }}>
                          <span style={{ color:"var(--teal)" }}>→</span>{p}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <a href={c.link} target="_blank" rel="noreferrer" className="btn-ghost" style={{ padding:"7px 16px", fontSize:"0.7rem", flexShrink:0, alignSelf:"flex-start", whiteSpace:"nowrap" }}>
                  View ↗
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="label" style={{ marginBottom:"18px" }}>Additional Coursework</div>
        <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
          {training.map((t,i) => (
            <motion.div key={i}
              initial={{ opacity:0, y:14 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.4, delay:i*0.08 }} viewport={{ once:true }}
              style={{ position:"relative", background:"var(--surface)", border:"1px solid var(--border)", borderRadius:"10px", padding:"18px 22px 18px 26px", overflow:"hidden" }}>
              <div style={{ position:"absolute", left:0, top:0, bottom:0, width:"3px", background:"var(--teal)", opacity:.3 }}/>
              <h3 style={{ fontSize:"0.9rem", fontWeight:600, color:"var(--text)", marginBottom:"4px" }}>{t.title}</h3>
              <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.63rem", color:"var(--teal)", letterSpacing:"0.07em", marginBottom:"8px" }}>{t.org}</p>
              <p style={{ fontSize:"0.83rem", color:"var(--text2)", lineHeight:1.65 }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <p style={{ textAlign:"center", marginTop:"32px", fontFamily:"JetBrains Mono,monospace", fontSize:"0.65rem", color:"var(--muted)", letterSpacing:"0.08em" }}>
          Additional certifications available upon request.
        </p>
      </div>
    </section>
  );
}
