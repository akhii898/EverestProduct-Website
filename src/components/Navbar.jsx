import { useState } from "react";
import ownerPhoto from "../assets/images/brand/owner-photo.jpeg";
import { site, waLink } from "../data/site";

const links = ["Home", "Home Care", "Car Care", "Why Everest", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="wrap">
        <a href="#home" className="brand">
          <span className="brand-mark">
            <img src={ownerPhoto} alt="Everest Home Products" />
          </span>
          <span className="brand-text">
            <span className="en">Everest</span>
            <span className="hi">{site.tagline}</span>
          </span>
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}>{link}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a className="nav-call" href={`tel:+91${site.phone}`}>
            <i className="fa-solid fa-phone"></i>
            {site.phoneDisplay}
          </a>
          <a className="btn btn-primary btn-sm" href={waLink()} target="_blank" rel="noreferrer">
            <i className="fa-brands fa-whatsapp"></i>
            Order Now
          </a>
          <button className="hamburger" onClick={() => setOpen((v) => !v)} aria-label="Menu">
            <i className={`fa-solid ${open ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>

        <ul className={`mobile-menu${open ? " open" : ""}`}>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} onClick={() => setOpen(false)}>
                {link}
              </a>
            </li>
          ))}
          <li>
            <a className="btn btn-primary btn-sm" href={waLink()} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
              Order Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
