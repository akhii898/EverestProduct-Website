import ownerPhoto from "../assets/images/brand/owner-photo.jpeg";
import { site, waLink } from "../data/site";

function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="brand">
              <span className="brand-mark">
                <img src={ownerPhoto} alt={site.nameEn} />
              </span>
              <span className="brand-text">
                <span className="en">Everest</span>
                <span className="hi">{site.tagline}</span>
              </span>
            </div>
            <p>
              Everest Home Products makes germ-free, streak-free cleaning simple — from
              kitchen to car — for homes and businesses across Rajasthan.
            </p>
            <div className="footer-social">
              <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href={`tel:+91${site.phone}`} aria-label="Call">
                <i className="fa-solid fa-phone"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>Home Care</h5>
            <ul>
              <li><a href="#products">Dishwash Liquid</a></li>
              <li><a href="#products">Dish Wash Gel</a></li>
              <li><a href="#products">Toilet Cleaner</a></li>
              <li><a href="#products">Kapoor Phenyl</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Car Care</h5>
            <ul>
              <li><a href="#products">Car Shampoo</a></li>
              <li><a href="#products">Glass Cleaner</a></li>
              <li><a href="#products">Dashboard Polish</a></li>
              <li><a href="#products">Tyre Polish</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Contact</h5>
            <ul className="footer-contact">
              <li>
                <i className="fa-solid fa-location-dot"></i>
                <span>{site.address}</span>
              </li>
              <li>
                <i className="fa-solid fa-phone"></i>
                <span>{site.phoneDisplay}</span>
              </li>
              <li>
                <i className="fa-solid fa-user"></i>
                <span>Owner: {site.owner}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Everest Home Products. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
