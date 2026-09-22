import React, { useEffect, useRef, useState } from "react";
import SectionBadge from "../components/SectionBadge";

function Services() {
  const services = [
    
    {
    title: "Cloud Modernization",
    desc: [
      "Your business didn't stand still — your infrastructure shouldn't either.",
      "Every hour your team spends fighting infrastructure is an hour not spent on growth.",
      "Starts with understanding: what's slowing you down, what it's costing you, and where you want to grow.",
      "From there, we build the path forward: migrating, re-architecting, and optimizing your cloud so it finally works for you.",
    ],
    closing: "Let's talk about where you are, and where you want to be.",
    small: "Modern platforms • Scalable architecture • Optimization",
  },
  {
    title: "Data Engineering",
    desc: [
      "Your data already knows things you don't, it's just scattered across systems that don't talk to each other.",
      "First, we understand your business. Then we build the pipelines, warehouses, and infrastructure that turn messy, fragmented data into something you can trust.",
      "This isn't about collecting more data. It's about making the data you already have finally work for you.",
    ],
    closing: "Let's find out what your data has been trying to tell you.",
    small: "Pipelines • Warehousing • Real-time infrastructure",
  },
  {
    title: "Data Analytics",
    desc: [
      "Data is only valuable the moment someone actually uses it to make a decision.",
      "We work alongside your teams to understand the questions that actually keep you up at night.",
      "Then we build the models, dashboards, and insights that answer your questions — not the ones a generic report happens to show.",
      "This isn't about more charts. It's about clarity, knowing what happened, why it happened, and what to do next.",
    ],
    closing: "Let's talk about the decision you're trying to make — we'll help you see it clearly.",
    small: "Dashboards • Predictive models • Decision clarity",
  },
  {
    title: "AI-Driven Execution",
    desc: [
      "Insight is only half the story — the real unlock is when your systems don't just tell you what to do, they go do it.",
      "We build AI agents that sit on top of your data and act, moving work forward without anyone having to keep it top of mind.",
      "This isn't about replacing your team. It's about giving them a tireless partner that handles the repeatable work.",
      "Let your team focus on the work that truly needs a human touch.",
    ],
    closing: "Let's talk about what you wish just happened automatically — and let's go build it.",
    small: "AI agents • Autonomous workflows • Action, not just insight",
  },
  ];

  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const showcaseRef = useRef(null);

  const openCarousel = () => setExpanded(true);

  const moveCarousel = (direction) => {
    setActiveIndex((current) => (current + direction + services.length) % services.length);
  };

  useEffect(() => {
    const node = showcaseRef.current;
    if (!node) return;

    const handleWheel = (event) => {
      if (!expanded && Math.abs(event.deltaY) > 6) {
        setExpanded(true);
        return;
      }

      if (expanded && Math.abs(event.deltaY) > 8) {
        event.preventDefault();
        moveCarousel(event.deltaY > 0 ? 1 : -1);
      }
    };

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [expanded]);

  const getOffset = (index) => {
    let offset = index - activeIndex;
    if (offset > services.length / 2) offset -= services.length;
    if (offset < -services.length / 2) offset += services.length;
    return offset;
  };

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-page-header reveal">
          <SectionBadge label="SERVICES" />
          <h2>From data foundations to <em>AI outcomes.</em></h2>
          <p>
            We build end-to-end AI ecosystems that transform enterprises into
            intelligent, autonomous and data-driven organizations.
          </p>
        </div>

        <div
          ref={showcaseRef}
          className={`services-showcase ${expanded ? "is-expanded" : "is-stacked"}`}
          role={!expanded ? "button" : undefined}
          tabIndex={!expanded ? 0 : undefined}
          aria-label={!expanded ? "Open services carousel" : "Services carousel"}
          onClick={!expanded ? openCarousel : undefined}
          onKeyDown={(event) => {
            if (!expanded && (event.key === "Enter" || event.key === " ")) {
              event.preventDefault();
              openCarousel();
            }
          }}
        >
          <div className="services-deck">
            {services.map((service, index) => {
              const offset = expanded ? getOffset(index) : 0;
              const distance = Math.min(Math.abs(offset), 2);
              const x = expanded ? `${offset * 62}%` : "0";
              const scale = expanded ? (distance === 0 ? 1 : distance === 1 ? 0.9 : 0.8) : 1;
              const opacity = expanded ? (distance === 0 ? 1 : distance === 1 ? 0.72 : 0.38) : 1;

              return (
                <article
                  key={service.title}
                  className={`service-card${service.featured ? " featured" : ""}${expanded && index === activeIndex ? " is-active" : ""}`}
                  style={expanded ? {
                    "--carousel-x": x,
                    "--carousel-scale": scale,
                    "--carousel-opacity": opacity,
                    "--carousel-z": 20 - distance,
                  } : undefined}
                  onClick={(event) => {
                    if (expanded) {
                      event.stopPropagation();
                      setActiveIndex(index);
                    }
                  }}
                >
                  <div className="service-top">
                    {/* <span className="service-kicker">0{index + 1}</span> */}
                    <h3>{service.title}</h3>
                  </div>
                  <ul className="service-desc-list">
                    {service.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <p className="service-closing">{service.closing}</p>
                  <div className="service-line" />
                  <small>{service.small}</small>
                </article>
              );
            })}
          </div>

          {expanded && (
            <div className="services-carousel-controls" aria-label="Service navigation">
              <button type="button" onClick={(event) => { event.stopPropagation(); moveCarousel(-1); }} aria-label="Previous service">←</button>
              <div className="services-carousel-dots">
                {services.map((service, index) => (
                  <button
                    type="button"
                    key={service.title}
                    className={index === activeIndex ? "active" : ""}
                    onClick={(event) => { event.stopPropagation(); setActiveIndex(index); }}
                    aria-label={`Show ${service.title}`}
                  />
                ))}
              </div>
              <button type="button" onClick={(event) => { event.stopPropagation(); moveCarousel(1); }} aria-label="Next service">→</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Services;
