import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { InlineWidget } from "react-calendly";

const sections = ["about","skills","projects","internships","experience","certificates","contact"];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("about");
  const [menu, setMenu]         = useState(false);
  const [cal, setCal]           = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    const obs = new IntersectionObserver(
      e => e.forEach(x => x.isIntersecting && setActive(x.target.id)),
      { rootMargin:"-40% 0px -50% 0px", threshold:0 }
    );
    sections.forEach(id => { const el = document.getElementById(id); if(el) obs.observe(el); });
    return () => { window.removeEventListener("scroll", onScroll); obs.disconnect(); };
  }, []);

  useEffect(() => {
    const h = () => setCal(true);
    window.addEventListener("openCalendly", h);
    return () => window.removeEventListener("openCalendly", h);
  }, []);

  const navBg = scrolled
    ? (theme==="dark" ? "rgba(14,14,14,0.94)" : "rgba(240,238,233,0.94)")
    : "transparent";

  return (
    <>
      <nav style={{ position:"fixed", left:0, right:0, top:0, zIndex:50, background:navBg, backdropFilter:scrolled?"blur(20px)":"none", borderBottom:scrolled?"1px solid var(--border)":"none", transition:"all .4s" }}>
        <div className="nav-inner" style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 24px", display:"flex", alignItems:"center", justifyContent:"space-between", height:scrolled?"56px":"68px", transition:"height .4s" }}>

          {/* Logo */}
          <a href="#" style={{ textDecoration:"none", display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"var(--teal)", display:"flex", alignItems:"center", justifyContent:"center", fontFamily:"JetBrains Mono,monospace", fontSize:"0.75rem", fontWeight:700, color:"#0E0E0E", flexShrink:0 }}>M</div>
            <span style={{ fontFamily:"Fraunces,serif", fontSize:"1.05rem", color:"var(--text)" }}>Aamir</span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex" style={{ gap:"28px" }}>
            {sections.map(s => (
              <a key={s} href={`#${s}`} className={`nav-link ${active===s?"active":""}`}>{s}</a>
            ))}
          </div>

          {/* Right controls */}
          <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
            {/* Theme toggle */}
            <button onClick={toggleTheme}
              style={{ width:"34px", height:"34px", borderRadius:"8px", border:"1px solid var(--border)", background:"transparent", color:"var(--muted)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px", transition:"all .2s" }}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="var(--teal)";e.currentTarget.style.color="var(--teal)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="var(--border)";e.currentTarget.style.color="var(--muted)";}}>
              {theme==="dark"?"☀":"◗"}
            </button>

            {/* Book a call — desktop only */}
            <button onClick={()=>setCal(true)} className="btn hidden md:inline-flex" style={{ padding:"9px 18px", fontSize:"0.72rem" }}>
              Book a Call
            </button>

            {/* Hamburger — mobile only */}
            <button onClick={()=>setMenu(o=>!o)} className="md:hidden"
              style={{ width:"36px", height:"36px", borderRadius:"8px", border:"1px solid var(--border)", background:"transparent", color:"var(--text)", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:"5px" }}>
              <span style={{ display:"block", width:"16px", height:"1.5px", background:"var(--text)", borderRadius:"2px", transition:"all .3s", transform:menu?"rotate(45deg) translateY(6.5px)":"none" }}/>
              <span style={{ display:"block", width:"16px", height:"1.5px", background:"var(--text)", borderRadius:"2px", transition:"opacity .3s", opacity:menu?0:1 }}/>
              <span style={{ display:"block", width:"16px", height:"1.5px", background:"var(--text)", borderRadius:"2px", transition:"all .3s", transform:menu?"rotate(-45deg) translateY(-6.5px)":"none" }}/>
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {menu && (
          <div style={{ background:"var(--bg2)", borderTop:"1px solid var(--border)", padding:"8px 0 20px" }}>
            {sections.map(s => (
              <a key={s} href={`#${s}`} onClick={()=>setMenu(false)}
                style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"14px 24px", fontFamily:"JetBrains Mono,monospace", fontSize:"0.75rem", letterSpacing:"0.12em", textTransform:"uppercase", color:active===s?"var(--teal)":"var(--text2)", textDecoration:"none", borderBottom:"1px solid var(--border)" }}>
                {s}
                {active===s && <span style={{ color:"var(--teal)", fontSize:"10px" }}>●</span>}
              </a>
            ))}
            <div style={{ padding:"16px 24px 0" }}>
              <button onClick={()=>{setCal(true);setMenu(false);}} className="btn" style={{ width:"100%", justifyContent:"center" }}>
                📅 Book a Call
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Calendly modal */}
      {cal && (
        <div style={{ position:"fixed", inset:0, zIndex:9999, display:"flex", alignItems:"center", justifyContent:"center" }}>
          <div onClick={()=>setCal(false)} className="animate-fadeIn" style={{ position:"absolute", inset:0, background:"rgba(0,0,0,.82)", backdropFilter:"blur(12px)" }}/>
          <div className="animate-scaleUp" style={{ position:"relative", width:"95%", maxWidth:"640px", height:"84vh", borderRadius:"12px", overflow:"hidden", border:"1px solid var(--teal-bdr)", boxShadow:"0 40px 100px rgba(0,0,0,.6)" }}>
            <button onClick={()=>setCal(false)} style={{ position:"absolute", top:"12px", right:"12px", zIndex:50, width:"28px", height:"28px", borderRadius:"6px", background:"var(--teal)", border:"none", cursor:"pointer", color:"#0E0E0E", fontWeight:700, fontSize:"12px" }}>✕</button>
            <InlineWidget url="https://calendly.com/aamirirfu/30min" styles={{ height:"100%" }}/>
          </div>
        </div>
      )}
    </>
  );
}
