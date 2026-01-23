import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919150677609?text=Hi%20Aamir,%20I%20found%20your%20portfolio%20and%20want%20to%20connect"
      target="_blank"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 flex items-center justify-center
        rounded-full bg-green-500 text-white text-3xl
        shadow-xl hover:scale-110 transition
      "
      aria-label="WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}
