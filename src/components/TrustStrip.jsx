const badges = [
  { icon: "fa-solid fa-shield-halved", text: "99.9% Germ Protection" },
  { icon: "fa-solid fa-truck-fast", text: "Free Home Delivery" },
  { icon: "fa-solid fa-leaf", text: "Eco-Friendly Formulas" },
  { icon: "fa-solid fa-boxes-stacked", text: "Bulk Orders Available" },
  { icon: "fa-brands fa-whatsapp", text: "Order Directly on WhatsApp" },
  { icon: "fa-solid fa-award", text: "Trusted in Kuchaman City" },
];

function TrustStrip() {
  const items = [...badges, ...badges];

  return (
    <div className="trust-strip">
      <div className="wrap">
        <div className="trust-track">
          <ul>
            {items.map((b, i) => (
              <li key={i}>
                <i className={b.icon}></i>
                {b.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TrustStrip;
