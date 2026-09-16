import heroImg from "../assets/images/hero/hero-main.jpeg";
import { waLink } from "../data/site";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="wrap">
        <div className="hero-copy reveal in-view">
          <span className="hero-badge">
            <span className="dot"></span>
            Now with a full Car Care Range
          </span>

          <h1>
            Reach new heights in <span className="accent">cleanliness</span>
          </h1>

          <p className="lead">
            From kitchen to car, Everest Home Products makes germ-free, streak-free
            cleaning simple — trusted across Kuchaman City and beyond.
          </p>

          <div className="hero-cta">
            <a className="btn btn-amber" href={waLink("Hello, I want to place an order.")} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i>
              Order on WhatsApp
            </a>
            <a className="btn btn-ghost" href="#products" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.35)" }}>
              Explore Products
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">13+</div>
              <div className="label">Products across 2 ranges</div>
            </div>
            <div className="hero-stat">
              <div className="num">99.9%</div>
              <div className="label">Germ protection</div>
            </div>
            <div className="hero-stat">
              <div className="num">100%</div>
              <div className="label">Free home delivery*</div>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal in-view">
          <span className="ring"></span>
          <img src={heroImg} alt="Everest cleaning products" />
        </div>
      </div>

      <div className="hero-peak">
        <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path
            d="M0,90 L0,55 L180,15 L340,60 L520,5 L700,50 L900,10 L1080,55 L1260,20 L1440,50 L1440,90 Z"
            fill="#f6f9fb"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
