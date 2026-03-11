export default function WhatsAppFloat() {
  return (
    <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="WhatsApp"
      style={{ position:"fixed", bottom:"90px", right:"24px", zIndex:49, width:"46px", height:"46px", borderRadius:"10px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"18px", background:"rgba(37,211,102,.12)", border:"1px solid rgba(37,211,102,.28)", color:"#25D366", backdropFilter:"blur(8px)", transition:"transform .2s,box-shadow .2s", textDecoration:"none" }}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.boxShadow="0 8px 24px rgba(37,211,102,.2)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="none";e.currentTarget.style.boxShadow="none";}}>
      💬
    </a>
  );
}
