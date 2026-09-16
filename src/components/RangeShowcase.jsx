import { useLayoutEffect, useRef, useState } from "react";
import { homeCareProducts, carCareProducts } from "../data/products";
import { waLink } from "../data/site";
import Reveal from "./Reveal";
import rangeGroup from "../assets/images/banners/carcare-range-group.jpeg";

const tabs = [
  { key: "home", label: "Home Care", data: homeCareProducts },
  { key: "car", label: "Car Care", data: carCareProducts },
];

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-media">
        <img src={product.image} alt={product.title} loading="lazy" />
        <span className="product-tag">{product.tag}</span>
      </div>
      <div className="product-body">
        <h3>{product.title}</h3>
        <div className="product-sizes">
          {product.sizes.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <ul className="product-feats">
          {product.features.map((f) => (
            <li key={f}>
              <i className="fa-solid fa-circle-check"></i>
              {f}
            </li>
          ))}
        </ul>
        <a
          className="btn btn-primary btn-sm"
          href={waLink(`Hello, I'm interested in ${product.title}. Please share details.`)}
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-whatsapp"></i>
          Enquire
        </a>
      </div>
    </div>
  );
}

function RangeShowcase() {
  const [active, setActive] = useState("home");
  const btnRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useLayoutEffect(() => {
    const node = btnRefs.current[active];
    if (node) {
      setIndicator({ left: node.offsetLeft, width: node.offsetWidth });
    }
  }, [active]);

  const activeTab = tabs.find((t) => t.key === active);

  return (
    <>
      <section className="section" id="home-care">
        <div className="wrap" id="products">
          <Reveal as="div" className="section-head centre">
            <span className="eyebrow">Our Range</span>
            <h2>One brand, every kind of clean</h2>
            <p>
              From dishwash to dashboards — pick a range below to see the full Everest
              line-up, available in the sizes your home or car needs.
            </p>
          </Reveal>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className={`range-tabs${active === "car" ? " car" : ""}`}>
              <span
                className="indicator"
                style={{ left: indicator.left, width: indicator.width }}
              ></span>
              {tabs.map((t) => (
                <button
                  key={t.key}
                  ref={(el) => (btnRefs.current[t.key] = el)}
                  className={active === t.key ? "active" : ""}
                  onClick={() => setActive(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="product-grid" id="car-care">
            {activeTab.data.map((p) => (
              <ProductCard product={p} key={p.id} />
            ))}
          </div>

          <Reveal className="range-banner">
            <img src={rangeGroup} alt="Everest Car Care Range" />
            <div className="overlay">
              <div className="overlay-content">
                <span className="eyebrow" style={{ color: "var(--amber)" }}>
                  New This Season
                </span>
                <h3>The complete Car Care Range</h3>
                <p>
                  Dashboard polish, interior cleaner, tyre polish, car shampoo and glass
                  cleaner — five products, one showroom finish.
                </p>
                <a
                  className="btn btn-amber"
                  href={waLink("Hello, I'd like to know more about the Car Care Range.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ask About Car Care
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default RangeShowcase;
