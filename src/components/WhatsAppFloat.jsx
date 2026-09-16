import { waLink } from "../data/site";

function WhatsAppFloat() {
  return (
    <a
      className="wa-float"
      href={waLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}

export default WhatsAppFloat;
