import Reveal from "./Reveal";
import { waLink } from "../data/site";
import { bulkPricing } from "../data/products";

function BulkCta() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="bulk-cta">
          <div>
            <span className="eyebrow" style={{ color: "var(--amber)" }}>
              For Hotels, Restaurants & Businesses
            </span>
            <h3>Bulk orders, special pricing</h3>
            <p>
              Running a hotel, restaurant, defence canteen or car wash? Get wholesale
              rates on {bulkPricing.product} and the full Everest range.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "1rem" }}>
            <div className="bulk-price">
              <span className="amount">{bulkPricing.price}</span>
              <span>{bulkPricing.unit}</span>
            </div>
            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.75)" }}>
              {bulkPricing.condition}
            </span>
            <a
              className="btn btn-amber"
              href={waLink("Hello, I want to place a bulk order. Please share pricing.")}
              target="_blank"
              rel="noreferrer"
            >
              Get Bulk Pricing
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default BulkCta;
