import Reveal from "./Reveal";

const steps = [
  {
    title: "Pick your product",
    desc: "Browse the Home Care or Car Care range and pick the size you need.",
  },
  {
    title: "Message us",
    desc: "Tap 'Enquire' or message us directly on WhatsApp with your order.",
  },
  {
    title: "We confirm & pack",
    desc: "We confirm quantity, price and your delivery address the same day.",
  },
  {
    title: "Delivered to you",
    desc: "Your order reaches your doorstep — home, office or workshop.",
  },
];

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="wrap">
        <Reveal as="div" className="section-head centre">
          <span className="eyebrow">How To Order</span>
          <h2>Ordering is this simple</h2>
          <p>No app, no signup — just WhatsApp, and your order is on its way.</p>
        </Reveal>

        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="process-card" key={s.title}>
              <div className="process-num">{String(i + 1).padStart(2, "0")}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
