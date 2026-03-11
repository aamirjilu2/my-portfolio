import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import mda   from "../assets/projects/mda-royal.png";
import ksrct from "../assets/projects/ksrct-booking.png";
import leave from "../assets/projects/leave-management.png";
import skin  from "../assets/projects/skin-disease.png";

const projects = [
  { num:"01", title:"MDA Royal Technologies", type:"Corporate Website", desc:"Professional corporate site with responsive UI, SEO structure, and full deployment pipeline.", tech:["HTML","CSS","JavaScript"], image:mda,   live:"https://mdaroyaltechnologies.com", github:"https://github.com/mdaroyaltech/mda-royal-technologies" },
  { num:"02", title:"KSRCT Venue Booking",    type:"Web Application",  desc:"Real-time Firebase booking platform with authentication and admin approval workflow.",         tech:["HTML","CSS","JS","Firebase"],  image:ksrct, live:"https://ksrcthallbooking.web.app", github:"https://github.com/aamirjilu2/Venue-Booking" },
  { num:"03", title:"Leave Management System",type:"Admin Tool",        desc:"Full-stack PHP & MySQL app for student leave submissions, approvals, and reporting.",          tech:["PHP","MySQL"],                 image:leave, live:null, github:"https://github.com/aamirjilu2/Student-Leav-Management-System" },
  { num:"04", title:"Skin Disease Detection", type:"AI Mobile App",    desc:"TensorFlow CNN model embedded in Flutter — real-time skin condition analysis from camera.",    tech:["Python","TensorFlow","Flutter"],image:skin,  live:null, github:"https://github.com/aamirjilu2/Skin-Disease-Detection-App" },
];

export default function Projects() {
  return (
    <section id="projects" className="sec-pad" style={{ background:"var(--bg2)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto" }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6 }} viewport={{ once:true }} style={{ marginBottom:"48px", position:"relative" }}>
          <div className="label" style={{ marginBottom:"14px" }}>Selected Work</div>
          <h2 className="f-display" style={{ fontSize:"clamp(1.8rem,3vw,3rem)", color:"var(--text)", letterSpacing:"-0.02em", fontStyle:"italic" }}>
            Featured <span className="teal-text">Projects</span>
          </h2>
          <span className="sec-num">02</span>
        </motion.div>

        {/* auto-fill: 2 cols desktop → 1 col mobile */}
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(min(100%,300px),1fr))", gap:"20px" }}>
          {projects.map((p,i) => (
            <motion.div key={i} className="card"
              initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }}
              transition={{ duration:.5, delay:i*0.09 }} viewport={{ once:true }}>
              <div style={{ overflow:"hidden", height:"185px", borderBottom:"1px solid var(--border)" }}>
                <motion.img src={p.image} alt={p.title} style={{ width:"100%", height:"100%", objectFit:"cover" }}
                  whileHover={{ scale:1.06 }} transition={{ duration:.5 }}/>
              </div>
              <div style={{ padding:"22px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:"8px", marginBottom:"10px" }}>
                  <div style={{ minWidth:0 }}>
                    <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.6rem", color:"var(--teal)", letterSpacing:"0.12em", textTransform:"uppercase", display:"block", marginBottom:"4px" }}>{p.num} — {p.type}</span>
                    <h3 className="f-display" style={{ fontSize:"1.05rem", color:"var(--text)", fontStyle:"italic" }}>{p.title}</h3>
                  </div>
                  <div style={{ display:"flex", gap:"12px", flexShrink:0, marginTop:"2px" }}>
                    {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{ color:"var(--muted)", transition:"color .2s" }} onMouseEnter={e=>e.target.style.color="var(--text)"} onMouseLeave={e=>e.target.style.color="var(--muted)"}><FaGithub size={16}/></a>}
                    {p.live   && <a href={p.live}   target="_blank" rel="noreferrer" style={{ color:"var(--teal)" }}><FaExternalLinkAlt size={14}/></a>}
                  </div>
                </div>
                <p style={{ color:"var(--text2)", fontSize:"0.845rem", lineHeight:1.7, marginBottom:"14px" }}>{p.desc}</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:"6px" }}>
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
