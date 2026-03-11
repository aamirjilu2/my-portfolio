export default function Footer() {
  return (
    <footer style={{ padding:"22px 24px", borderTop:"1px solid var(--border)", background:"var(--bg)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", display:"flex", flexWrap:"wrap", justifyContent:"space-between", alignItems:"center", gap:"10px" }}>
        <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.63rem", color:"var(--muted)", letterSpacing:"0.08em" }}>
          © {new Date().getFullYear()} MOHAMMED AAMIR · ALL RIGHTS RESERVED
        </p>
        <p style={{ fontFamily:"JetBrains Mono,monospace", fontSize:"0.63rem", color:"var(--muted)", letterSpacing:"0.08em" }}>
          BUILT WITH REACT · FRAMER MOTION
        </p>
      </div>
    </footer>
  );
}
