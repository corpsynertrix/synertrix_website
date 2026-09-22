import React, { useRef } from "react";
import SectionBadge from "../components/SectionBadge";

const A = `${import.meta.env.BASE_URL}assets/`;

const platforms = [
  ["Google Cloud", "Google_Cloud_Logo.png"],
  ["Microsoft Azure", "Azure.png"],
  ["Oracle", "Oracle.png"],
  ["Salesforce", "salesforce-transparent.png"],
  ["Snowflake", "Snowflake.png"],
  ["Databricks", "Databricks.png"],
  ["BigQuery", "BigQuery.png"],
  ["Power BI", "PowerBI.png"],
  ["Looker", "Google_Looker_Studio.png"],
  ["Tableau", "Tableau.png"],
  ["Qlik", "QlikQ.png"]
];

function Platforms() {
  const trackRef = useRef(null);

  const scrollLeft = () => {
    trackRef.current?.scrollBy({
      left: -320,
      behavior: "smooth"
    });
  };

  const scrollRight = () => {
    trackRef.current?.scrollBy({
      left: 320,
      behavior: "smooth"
    });
  };

  return (
    <section className="platform-section" id="platforms">
      <div className="container">

        {/* PLATFORMS HEADER */}
        <div className="section-page-header reveal">

          <SectionBadge label="PLATFORMS" />

          <h2>
            Built across the{" "}
            <em>ecosystems</em> enterprises already trust.
          </h2>

        </div>

        {/* PLATFORM CAROUSEL */}
        <div className="platform-carousel reveal">

          {/* LEFT BUTTON */}
          <button
            className="platform-carousel-btn platform-carousel-prev"
            type="button"
            onClick={scrollLeft}
            aria-label="Previous platforms"
          >
            <span>←</span>
          </button>


          {/* LOGOS */}
          <div
            className="platform-carousel-track"
            ref={trackRef}
          >

            {platforms.map(([name, file]) => (
              <div
                className="platform-logo-item"
                key={name}
              >
                <img
                  src={A + "Tech Logos/" + file}
                  alt={name}
                />
              </div>
            ))}

          </div>


          {/* RIGHT BUTTON */}
          <button
            className="platform-carousel-btn platform-carousel-next"
            type="button"
            onClick={scrollRight}
            aria-label="Next platforms"
          >
            <span>→</span>
          </button>

        </div>
 {/* ================================
          TRUSTED PARTNERS
      ================================= */}

      <div className="container">

        <div className="trusted-partners reveal">

          {/* HEADER */}
          <div className="trusted-partners-header">

            <span className="trusted-partners-label">
              TRUSTED PARTNERS
            </span>

            <h3>
              Strategic <em>platform partnerships.</em>
            </h3>

            <p>
              Trusted platforms that extend our capabilities across
              business operations, automation, and enterprise transformation.
            </p>

          </div>


          {/* LOGOS */}
          <div className="trusted-partners-logos">

            {/* ZOHO */}
            <div className="trusted-partner-logo">

              <img
                src={A + "Tech Logos/zoho.png"}
                alt="Zoho"
              />

            </div>


            {/* ODOO */}
            <div className="trusted-partner-logo">

              <img
                src={A + "Tech Logos/odoo-official-partner.png"}
                alt="Odoo"
              />

            </div>

          </div>

        </div>

      </div>
      </div>
    </section>
  );
}

export default Platforms;