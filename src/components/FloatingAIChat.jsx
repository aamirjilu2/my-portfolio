import { useState, useRef, useEffect } from "react";

const KB = [
  { keys:["who","about","introduce","yourself","aamir","mohammed","profile"], ans:"Mohammed Aamir is an AI Programmer, Full-Stack Developer, and entrepreneur from Tamil Nadu, India. He runs MDA Royal Technologies and manages Royal Computers — an authorised TNeSevai (TN Govt) and Digital Seva (Central Govt) service centre." },
  { keys:["skill","tech","stack","language","framework","know","expertise"], ans:"Tech: Python · React · Flutter · Firebase · TensorFlow · PHP · HTML/CSS · AWS · Git\n\nOperational: Customer Handling (6+ yrs) · Govt Service Delivery · Business Operations · Problem Solving · Leadership" },
  { keys:["customer","handling","service","people","manage","crowd","volume"], ans:"Customer Handling is Aamir's strongest soft skill — 6+ years of managing high customer volumes at Royal Computers daily, resolving hardware issues, government service requests, and citizen queries simultaneously." },
  { keys:["royal computers","royal computer","hardware","shop","store","computer shop","computer service"], ans:"Royal Computers is a Computer Hardware sales & service shop managed by Aamir. It is an authorised TNeSevai centre (TN Govt) and Digital Seva centre (Central Govt). Operating for 6+ years with high daily footfall." },
  { keys:["tnesevai","tamil nadu govt","state govt service","tn service"], ans:"Aamir operates an authorised TNeSevai centre at Royal Computers, providing official Tamil Nadu Government digital services to citizens." },
  { keys:["digital seva","central govt","csc","common service"], ans:"Aamir operates an authorised Digital Seva (CSC) centre — delivering Central Government online services like Aadhaar, PAN, income certificates to citizens." },
  { keys:["mda","mda royal","company","startup","founded","tech company"], ans:"MDA Royal Technologies is Aamir's own tech company, founded in 2024. He built the official corporate website at mdaroyaltechnologies.com." },
  { keys:["project","built","developed","app","application","portfolio"], ans:"Key projects:\n• MDA Royal Technologies — Corporate website\n• KSRCT Venue Booking — Firebase real-time booking\n• Leave Management System — PHP + MySQL\n• Skin Disease Detection — TensorFlow CNN + Flutter AI app" },
  { keys:["internship","intern","technook","tutelr","cyber security"], ans:"Two internships:\n1. Cyber Security Intern (Blue Team) at Tutelr — 2023–2024\n2. Web Developer Intern at Technook — 2022 (2 live projects)" },
  { keys:["certificate","certif","aws","ai programmer","tata","walmart"], ans:"5 Certificates:\n• AI Programmer — TN Skill Corp (300 hrs)\n• Cyber Security — Tutler\n• Cybersecurity Analyst — TATA/Forage\n• Software Engineering — Walmart/Forage\n• AWS Cloud Practitioner" },
  { keys:["education","degree","college","btech","diploma"], ans:"B.Tech IT — K.S. Rangasamy College (2020–2024)\nDiploma CS — Govt Polytechnic College (2017–2020)" },
  { keys:["experience","work","career","job","years"], ans:"6+ years running Royal Computers · Founder MDA Royal Technologies (2024) · Web Developer at Rooteche Edu (2023–2024)" },
  { keys:["contact","email","reach","connect","mail"], ans:"📧 aamirirfu@gmail.com\n💼 linkedin.com/in/mohammedaamirjeelani\n💻 github.com/aamirjilu2" },
  { keys:["hire","available","freelance","open","job","opportunity"], ans:"Yes! Aamir is open to full-time roles, internships, and freelance projects. Software skills + 6+ years of real business & govt operations experience." },
  { keys:["book","call","meeting","calendly","schedule"], ans:()=>{window.dispatchEvent(new Event("openCalendly"));return "Opening the scheduling calendar now! 📅"} },
  { keys:["location","where","india","tamil"], ans:"Tamil Nadu, India 🇮🇳" },
  { keys:["help","what can","options","ask","guide"], ans:"Ask me about:\n• Skills & tech stack\n• Customer handling\n• Royal Computers\n• TNeSevai / Digital Seva\n• Projects\n• How to hire Aamir\n• Book a call" },
];

const SUGGESTIONS = ["What's his strongest skill?","Tell me about Royal Computers","Show his projects","Is he available for hire?"];
const GREETING = "👋 Hi! I'm Aamir's AI assistant.\nAsk me anything about his skills, Royal Computers, government services, or projects!";

function getReply(q) {
  const n = q.toLowerCase().replace(/[^a-z0-9\s]/g,"").trim();
  let best=null, score=0;
  for(const intent of KB) {
    const s = intent.keys.reduce((acc,k)=>acc+(n.includes(k)?k.length*2:0),0);
    if(s>score){score=s;best=intent;}
  }
  if(best&&score>0) return typeof best.ans==="function"?best.ans():best.ans;
  return "Not sure about that! Try asking about skills, Royal Computers, projects, or type 'help'.";
}

export default function FloatingAIChat() {
  const [open,setOpen]      = useState(false);
  const [msgs,setMsgs]      = useState([{from:"bot",text:GREETING,ts:new Date()}]);
  const [input,setInput]    = useState("");
  const [typing,setTyping]  = useState(false);
  const [showSug,setShowSug]= useState(true);
  const endRef  = useRef(null);
  const inpRef  = useRef(null);

  useEffect(()=>{ endRef.current?.scrollIntoView({behavior:"smooth"}); },[msgs,typing]);
  useEffect(()=>{ if(open) setTimeout(()=>inpRef.current?.focus(),300); },[open]);

  const send = (txt) => {
    const q=(txt||input).trim(); if(!q) return;
    setInput(""); setShowSug(false);
    setMsgs(m=>[...m,{from:"user",text:q,ts:new Date()}]);
    setTyping(true);
    setTimeout(()=>{
      setTyping(false);
      setMsgs(m=>[...m,{from:"bot",text:getReply(q),ts:new Date()}]);
    },600+Math.random()*400);
  };

  const fmt = d => d.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});
  const renderTxt = t => t.split("\n").map((l,i,a)=><span key={i}>{l}{i<a.length-1&&<br/>}</span>);

  return (
    <>
      {/* FAB */}
      <button onClick={()=>setOpen(o=>!o)} aria-label="AI Chat"
        style={{ position:"fixed", bottom:"24px", right:"24px", zIndex:50, width:"52px", height:"52px", borderRadius:"12px", background:open?"var(--bg4)":"var(--teal)", border:open?"1px solid var(--teal-bdr)":"none", color:open?"var(--teal)":"#0E0E0E", cursor:"pointer", fontWeight:700, fontFamily:"JetBrains Mono,monospace", fontSize:"0.7rem", letterSpacing:"0.06em", boxShadow:open?"none":"0 8px 28px rgba(0,212,170,.3)", transition:"all .25s", display:"flex", alignItems:"center", justifyContent:"center" }}>
        {open?"✕":"AI"}
      </button>

      {open && (
        <div className="ai-panel animate-scaleUp"
          style={{ position:"fixed", bottom:"88px", right:"24px", zIndex:50, width:"340px", display:"flex", flexDirection:"column", borderRadius:"14px", overflow:"hidden", border:"1px solid var(--teal-bdr)", boxShadow:"0 32px 80px rgba(0,0,0,.55)", background:"var(--bg2)" }}>

          {/* Header */}
          <div style={{ padding:"12px 16px", borderBottom:"1px solid var(--border)", background:"var(--bg3)", display:"flex", alignItems:"center", gap:"10px" }}>
            <div style={{ width:"32px", height:"32px", borderRadius:"8px", background:"var(--teal)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.6rem", fontWeight:700, color:"#0E0E0E" }}>AI</span>
            </div>
            <div style={{ flex:1, minWidth:0 }}>
              <p style={{ fontSize:"0.875rem", fontWeight:600, color:"var(--text)", lineHeight:1 }}>Aamir's Assistant</p>
              <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.56rem", color:"#4ADE80", marginTop:"3px", letterSpacing:"0.06em" }}>● ONLINE</p>
            </div>
            <button onClick={()=>setOpen(false)} style={{ background:"none", border:"none", cursor:"pointer", color:"var(--muted)", fontSize:"16px", flexShrink:0 }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex:1, overflowY:"auto", padding:"14px", display:"flex", flexDirection:"column", gap:"10px", maxHeight:"300px" }}>
            {msgs.map((m,i) => (
              <div key={i} style={{ display:"flex", flexDirection:"column", alignItems:m.from==="user"?"flex-end":"flex-start" }}>
                <div style={{ maxWidth:"88%", padding:"9px 13px", borderRadius:"10px", fontSize:"0.82rem", lineHeight:1.65, background:m.from==="user"?"var(--teal)":"var(--bg3)", color:m.from==="user"?"#0E0E0E":"var(--text2)", border:m.from==="bot"?"1px solid var(--border)":"none", fontWeight:m.from==="user"?500:400 }}>
                  {renderTxt(m.text)}
                </div>
                <span style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.53rem", color:"var(--muted)", marginTop:"3px" }}>{fmt(m.ts)}</span>
              </div>
            ))}
            {typing && (
              <div style={{ display:"flex", gap:"4px", padding:"9px 13px", background:"var(--bg3)", border:"1px solid var(--border)", borderRadius:"10px", width:"fit-content" }}>
                {[0,1,2].map(i=>(
                  <span key={i} style={{ width:"5px", height:"5px", borderRadius:"50%", background:"var(--teal)", display:"inline-block", animation:`bounce 1.2s ${i*0.2}s ease-in-out infinite` }}/>
                ))}
              </div>
            )}
            <div ref={endRef}/>
          </div>

          {/* Suggestions */}
          {showSug && (
            <div style={{ padding:"0 12px 10px", display:"flex", flexWrap:"wrap", gap:"6px" }}>
              {SUGGESTIONS.map(s => (
                <button key={s} onClick={()=>send(s)}
                  style={{ padding:"5px 10px", borderRadius:"999px", fontSize:"0.65rem", fontFamily:"JetBrains Mono,monospace", background:"var(--teal-dim)", color:"var(--teal)", border:"1px solid var(--teal-bdr)", cursor:"pointer", transition:"all .2s" }}
                  onMouseEnter={e=>{e.currentTarget.style.background="var(--teal)";e.currentTarget.style.color="#0E0E0E";}}
                  onMouseLeave={e=>{e.currentTarget.style.background="var(--teal-dim)";e.currentTarget.style.color="var(--teal)";}}>
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{ padding:"10px 12px", borderTop:"1px solid var(--border)", display:"flex", gap:"8px" }}>
            <input ref={inpRef} value={input} onChange={e=>setInput(e.target.value)}
              onKeyDown={e=>e.key==="Enter"&&!typing&&send()}
              placeholder="Ask anything..." disabled={typing}
              style={{ flex:1, padding:"9px 12px", borderRadius:"8px", fontSize:"0.8rem", background:"var(--bg3)", border:"1px solid var(--border)", color:"var(--text)", outline:"none", fontFamily:"Plus Jakarta Sans,sans-serif" }}
              onFocus={e=>e.target.style.borderColor="var(--teal-bdr)"}
              onBlur={e=>e.target.style.borderColor="var(--border)"}/>
            <button onClick={()=>send()} disabled={typing||!input.trim()}
              style={{ padding:"9px 14px", borderRadius:"8px", border:"none", cursor:input.trim()&&!typing?"pointer":"default", fontWeight:700, fontSize:"0.9rem", background:input.trim()&&!typing?"var(--teal)":"var(--bg4)", color:input.trim()&&!typing?"#0E0E0E":"var(--muted)", transition:"all .2s" }}>
              →
            </button>
          </div>
        </div>
      )}

      <style>{`@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </>
  );
}
