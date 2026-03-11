import { motion } from "framer-motion";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import profile from "../assets/profile2.png";

export default function Hero() {
  const [text] = useTypewriter({
    words:["Mohammed Aamir","AI Programmer","Full-Stack Dev","Shop Owner"],
    loop:true, typeSpeed:72, deleteSpeed:40, delaySpeed:1800,
  });

  return (
    <section className="sec-pad" style={{ minHeight:"100vh", display:"flex", alignItems:"center", paddingTop:"90px", paddingBottom:"60px", position:"relative", overflow:"hidden" }}>

      {/* Glow blob */}
      <div style={{ position:"absolute", top:"20%", right:"10%", width:"400px", height:"400px", borderRadius:"50%", background:"radial-gradient(circle,rgba(0,212,170,.07) 0%,transparent 70%)", filter:"blur(60px)", pointerEvents:"none" }}/>
      {/* Dot grid */}
      <div style={{ position:"absolute", inset:0, pointerEvents:"none", backgroundImage:"radial-gradient(circle,rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize:"40px 40px", opacity:.6 }}/>

      <div style={{ maxWidth:"1280px", margin:"0 auto", width:"100%" }}>
        <div className="hero-grid">

          {/* ── LEFT: Text ── */}
          <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:.9 }}>

            {/* Available badge */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"6px 14px", borderRadius:"999px", background:"var(--teal-dim)", border:"1px solid var(--teal-bdr)", marginBottom:"24px" }}>
              <span style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#22c55e", display:"inline-block", animation:"pulse 2s ease-in-out infinite" }}/>
              <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.62rem", letterSpacing:"0.12em", textTransform:"uppercase", color:"var(--teal)" }}>Available for Hire</span>
            </div>

            <h1 className="f-display" style={{ fontSize:"clamp(2.4rem,5.5vw,5rem)", lineHeight:1.05, color:"var(--text)", letterSpacing:"-0.02em", marginBottom:"20px" }}>
              Hi, I'm<br/>
              <span className="teal-text" style={{ fontStyle:"italic" }}>{text}</span>
              <span style={{ color:"var(--teal)", opacity:.8 }}><Cursor cursorStyle="|"/></span>
            </h1>

            <p style={{ fontSize:"clamp(0.95rem,2vw,1.1rem)", lineHeight:1.78, color:"var(--text2)", maxWidth:"520px", marginBottom:"36px" }}>
              AI Programmer, Full-Stack Developer & Entrepreneur. Building software and running businesses — including an authorised government services centre — for <strong style={{ color:"var(--text)" }}>6+ years.</strong>
            </p>

            <div className="btn-row" style={{ display:"flex", flexWrap:"wrap", gap:"12px", marginBottom:"44px" }}>
              <a href="#projects" className="btn">View Projects →</a>
              <a href="/resume.pdf" download className="btn-ghost">Download CV</a>
            </div>

            {/* Stats — 4 cols desktop, 2×2 mobile */}
            <div className="stats-grid">
              {[
                { n:"6+",  l:"Years Running\nBusinesses" },
                { n:"10+", l:"Projects\nShipped" },
                { n:"2",   l:"Govt Services\nAuthorised" },
                { n:"5",   l:"Certificates\nEarned" },
              ].map(({n,l}) => (
                <div key={n} className="stat-box">
                  <span className="f-display" style={{ fontSize:"clamp(1.5rem,3vw,2rem)", lineHeight:1, color:"var(--teal)", fontWeight:700 }}>{n}</span>
                  <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.58rem", letterSpacing:"0.07em", textTransform:"uppercase", color:"var(--muted)", whiteSpace:"pre-line", lineHeight:1.5, marginTop:"6px" }}>{l}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Portrait ── */}
          <motion.div className="hero-portrait-col"
            initial={{ opacity:0, scale:.92 }} animate={{ opacity:1, scale:1 }}
            transition={{ duration:.9, delay:.2 }}
            style={{ display:"flex", justifyContent:"center", alignItems:"center", position:"relative", paddingTop:"30px", paddingBottom:"55px" }}
          >
            {/* Spinning ring */}
            <motion.div className="ring-outer" animate={{ rotate:360 }} transition={{ duration:24, repeat:Infinity, ease:"linear" }}
              style={{ position:"absolute", width:420, height:420, borderRadius:"50%", border:"1px dashed rgba(0,212,170,.18)" }}/>
            {/* Mid ring */}
            <div className="ring-mid" style={{ position:"absolute", width:370, height:370, borderRadius:"50%", border:"1px solid rgba(0,212,170,.08)" }}/>

            {/* Portrait image */}
            <motion.img src={profile} alt="Mohammed Aamir" className="portrait-img"
              style={{ position:"relative", zIndex:10, width:300, height:300, borderRadius:"50%", objectFit:"cover", border:"3px solid var(--teal-bdr)", boxShadow:"0 0 60px rgba(0,212,170,.12),0 30px 80px rgba(0,0,0,.4)" }}
              animate={{ y:[0,-10,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut" }}
            />

            {/* Royal Computers badge — below portrait, no overlap */}
            <div style={{ position:"absolute", bottom:0, left:"50%", transform:"translateX(-50%)", zIndex:20, display:"flex", alignItems:"center", gap:"8px", padding:"10px 18px", borderRadius:"10px", background:"var(--bg3)", border:"1px solid var(--teal-bdr)", boxShadow:"0 8px 32px rgba(0,0,0,.45)", whiteSpace:"nowrap" }}>
              <span style={{ fontSize:"16px" }}>💻</span>
              <div>
                <div style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.6rem", letterSpacing:"0.1em", textTransform:"uppercase", color:"var(--teal)", lineHeight:1 }}>Royal Computers</div>
                <div style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.55rem", color:"var(--muted)", marginTop:"2px" }}>TNeSevai · Digital Seva</div>
              </div>
            </div>

            {/* Floating skill tags — hidden on mobile via CSS */}
            {[
              { text:"AI / ML", style:{ top:"6%",  left:"-10%" } },
              { text:"React",   style:{ top:"50%", left:"-14%" } },
              { text:"Flutter", style:{ top:"22%", right:"-8%" } },
            ].map(({text,style}) => (
              <motion.div key={text} className="float-tag"
                style={{ position:"absolute", ...style, zIndex:15, padding:"7px 13px", borderRadius:"8px", background:"var(--bg3)", border:"1px solid var(--border2)", fontFamily:"JetBrains Mono,monospace", fontSize:"0.68rem", color:"var(--text)", boxShadow:"0 4px 20px rgba(0,0,0,.3)" }}
                animate={{ y:[0,-6,0] }}
                transition={{ duration:3.5, repeat:Infinity, ease:"easeInOut" }}>
                {text}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
