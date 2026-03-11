import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const socials = [
  { icon:<FaEnvelope/>,  label:"Email",    href:"mailto:aamirirfu@gmail.com",                         display:"aamirirfu@gmail.com" },
  { icon:<FaLinkedin/>,  label:"LinkedIn", href:"https://www.linkedin.com/in/mohammedaamirjeelani/",  display:"in/mohammedaamirjeelani" },
  { icon:<FaGithub/>,    label:"GitHub",   href:"https://github.com/aamirjilu2",                      display:"github.com/aamirjilu2" },
];

export default function Contact() {
  return (
    <section id="contact" className="sec-pad" style={{ minHeight:"65vh", display:"flex", alignItems:"center", background:"var(--bg)" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto", width:"100%" }}>

        <motion.div initial={{ opacity:0, y:28 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.7 }} viewport={{ once:true }}>
          <div className="label" style={{ marginBottom:"20px" }}>Contact</div>

          {/* 2-col desktop, 1-col mobile */}
          <div className="contact-grid">

            <div>
              <h2 className="f-display" style={{ fontSize:"clamp(2rem,4vw,3.8rem)", lineHeight:1.08, color:"var(--text)", letterSpacing:"-0.02em", marginBottom:"20px", fontStyle:"italic" }}>
                Let's build something<br/>
                <span className="teal-text">remarkable</span> together.
              </h2>
              <p style={{ color:"var(--text2)", fontSize:"clamp(0.95rem,1.8vw,1.05rem)", lineHeight:1.75, maxWidth:"480px", marginBottom:"36px" }}>
                Open to full-time roles, internships, and freelance projects. Software skills + 6+ years of real business & government operations — a rare combination.
              </p>
              <div className="btn-row" style={{ display:"flex", flexWrap:"wrap", gap:"14px" }}>
                <a href="mailto:aamirirfu@gmail.com?subject=Hiring%20Inquiry" className="btn" style={{ fontSize:"0.82rem" }}>Send an Email</a>
                <button onClick={()=>window.dispatchEvent(new Event("openCalendly"))} className="btn-ghost" style={{ fontSize:"0.82rem" }}>Schedule a Call</button>
              </div>
            </div>

            <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
                  style={{ display:"flex", alignItems:"center", gap:"14px", textDecoration:"none", padding:"16px 18px", borderRadius:"10px", background:"var(--surface)", border:"1px solid var(--border)", transition:"all .25s" }}
                  onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--teal-bdr)";e.currentTarget.style.transform="translateX(6px)";}}
                  onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.transform="none";}}>
                  <span style={{ color:"var(--teal)", fontSize:"18px", flexShrink:0 }}>{s.icon}</span>
                  <div style={{ minWidth:0 }}>
                    <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.6rem", color:"var(--muted)", letterSpacing:"0.12em", textTransform:"uppercase", marginBottom:"2px" }}>{s.label}</p>
                    <p style={{ fontSize:"0.875rem", color:"var(--text)", fontWeight:500, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{s.display}</p>
                  </div>
                  <span style={{ marginLeft:"auto", color:"var(--teal)", fontSize:"12px", flexShrink:0 }}>↗</span>
                </a>
              ))}
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
