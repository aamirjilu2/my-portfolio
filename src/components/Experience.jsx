import { motion } from "framer-motion";

const timeline = [
  {
    title:"Shop Owner & Service Operator", place:"Royal Computers", time:"6+ Years · Ongoing", type:"Entrepreneurship", highlight:true,
    desc:["Independently managing a Computer Hardware sales & service shop with consistently high customer footfall.","Authorised TNeSevai Centre — delivering Tamil Nadu Government digital e-services to citizens.","Authorised Digital Seva Centre — delivering Central Government online services to the public.","Handling multiple concurrent customers, resolving hardware issues, and managing government paperwork efficiently.","Built strong expertise in customer handling, operations, and citizen service delivery."],
    badges:[{label:"TNeSevai — TN Govt Official",cls:"pill-blue"},{label:"Digital Seva — Central Govt",cls:"pill-amber"},{label:"6+ Years",cls:"pill-green"}],
  },
  { title:"Founder & Web Developer", place:"MDA Royal Technologies", time:"2024 – Present", type:"Founder", highlight:false,
    desc:["Founded the company and built the official corporate website from scratch.","Designed responsive, SEO-optimised pages with full deployment and maintenance.","End-to-end ownership of development, hosting, and client communication."],
    link:{ label:"mdaroyaltechnologies.com", url:"https://mdaroyaltechnologies.com" } },
  { title:"Web Developer (Contract)", place:"Rooteche Educational Pvt Ltd", time:"Jul 2023 – Dec 2024", type:"Work", highlight:false,
    desc:["Built production-ready web applications to tight deadlines.","Admin dashboards, authentication systems, and data management tools.","Stack: PHP · Firebase · HTML/CSS · JavaScript."] },
  { title:"B.Tech — Information Technology", place:"K.S. Rangasamy College of Technology", time:"2020 – 2024", type:"Education", highlight:false,
    desc:["Graduated with a strong foundation in software engineering, algorithms, and applied computing."] },
  { title:"Diploma — Computer Science", place:"Government Polytechnic College", time:"2017 – 2020", type:"Education", highlight:false,
    desc:["Built core programming and hardware fundamentals through practical lab work."] },
];

export default function Experience() {
  return (
    <section id="experience" className="sec-pad" style={{ background:"var(--bg)" }}>
      <div style={{ maxWidth:"1100px", margin:"0 auto" }}>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} transition={{ duration:.6 }} viewport={{ once:true }} style={{ marginBottom:"48px", position:"relative" }}>
          <div className="label" style={{ marginBottom:"14px" }}>Career Path</div>
          <h2 className="f-display" style={{ fontSize:"clamp(1.8rem,3vw,3rem)", color:"var(--text)", letterSpacing:"-0.02em", fontStyle:"italic" }}>
            Experience &amp; <span className="teal-text">Education</span>
          </h2>
          <span className="sec-num">04</span>
        </motion.div>

        {/* Timeline — tl-wrap reduces indent on mobile via CSS */}
        <div className="tl-wrap" style={{ position:"relative", paddingLeft:"32px", borderLeft:"1px solid var(--border)" }}>
          {timeline.map((item,i) => (
            <motion.div key={i}
              initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }}
              transition={{ duration:.5, delay:i*0.08 }} viewport={{ once:true }}
              style={{ position:"relative", marginBottom:i<timeline.length-1?"28px":"0" }}>

              <span className="tl-dot" style={ item.highlight ? { background:"var(--teal)", boxShadow:"0 0 0 4px var(--teal-dim),0 0 16px rgba(0,212,170,.4)" } : {}}/>

              <div className="card" style={{ padding:"22px", borderColor:item.highlight?"var(--teal-bdr)":"var(--border)", background:item.highlight?"rgba(0,212,170,.04)":"var(--surface)" }}>
                <div style={{ display:"flex", flexWrap:"wrap", alignItems:"flex-start", justifyContent:"space-between", gap:"8px", marginBottom:"12px" }}>
                  <div style={{ flex:1, minWidth:0 }}>
                    <h3 className="f-display" style={{ fontSize:"clamp(1rem,2.5vw,1.15rem)", color:"var(--text)", marginBottom:"5px", fontStyle:item.highlight?"italic":"normal" }}>{item.title}</h3>
                    <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.63rem", color:"var(--teal)", letterSpacing:"0.08em", textTransform:"uppercase" }}>{item.place} · {item.time}</p>
                  </div>
                  <span className="pill" style={{ fontSize:"0.58rem", flexShrink:0 }}>{item.type}</span>
                </div>

                {item.badges?.length>0 && (
                  <div style={{ display:"flex", flexWrap:"wrap", gap:"7px", marginBottom:"12px" }}>
                    {item.badges.map(b => <span key={b.label} className={b.cls}>{b.label}</span>)}
                  </div>
                )}

                <ul style={{ display:"flex", flexDirection:"column", gap:"7px" }}>
                  {item.desc.map((d,j) => (
                    <li key={j} style={{ display:"flex", gap:"10px", fontSize:"0.855rem", color:"var(--text2)", lineHeight:1.65 }}>
                      <span style={{ color:"var(--teal)", flexShrink:0 }}>→</span>{d}
                    </li>
                  ))}
                </ul>

                {item.link && (
                  <a href={item.link.url} target="_blank" rel="noreferrer"
                    style={{ display:"inline-flex", alignItems:"center", gap:"6px", marginTop:"12px", fontFamily:"JetBrains Mono,monospace", fontSize:"0.68rem", color:"var(--teal)", textDecoration:"none", opacity:.85 }}>
                    ↗ {item.link.label}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
