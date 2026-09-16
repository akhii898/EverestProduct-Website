import Reveal from "./Reveal";

const features = [
  {
    icon: "fa-solid fa-shield-heart",
    title: "Safe & Skin-Friendly",
    desc: "Every formula is dermatologically balanced — tough on grease and dirt, gentle on hands and surfaces.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "Fast, Visible Results",
    desc: "Rich foam and quick-acting formulas mean less scrubbing and a shine you can see in one wash.",
  },
  {
    icon: "fa-solid fa-truck-fast",
    title: "Doorstep Delivery",
    desc: "Order on WhatsApp or call, and we deliver straight to your home, office or workshop.",
  },
  {
    icon: "fa-solid fa-boxes-packing",
    title: "Bulk & Business Pricing",
    desc: "Special rates for hotels, restaurants, defence canteens and car wash businesses on bulk orders.",
  },
];

function WhyEverest() {
  return (
    <section className="section features" id="why-everest">
      <div className="wrap">
        <Reveal as="div" className="section-head centre" style={{ maxWidth: 620 }}>
          <span className="eyebrow" style={{ color: "var(--amber)" }}>
            Why Everest
          </span>
          <h2 style={{ color: "#fff" }}>Built for real homes and real roads</h2>
          <p style={{ color: "rgba(255,255,255,0.7)" }}>
            Two ranges, one standard — every Everest product is made to work as hard as
            you do.
          </p>
        </Reveal>

        <div className="feature-grid">
          {features.map((f) => (
            <div className="feature-card" key={f.title}>
              <div className="feature-icon">
                <i className={f.icon}></i>
              </div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyEverest;
