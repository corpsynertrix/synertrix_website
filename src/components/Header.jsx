import React, { useEffect, useState } from "react";

const A = `${import.meta.env.BASE_URL}assets/`;

const nav = [
  ["About", "about"],
  ["Services", "services"],
  ["Process", "process"],
  ["Industries", "industries"],
  ["Platforms", "platforms"],
];

function scrollToSection(id, setOpen) {
  setOpen(false);

  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);

    window.addEventListener("popstate", close);

    return () => {
      window.removeEventListener("popstate", close);
    };
  }, []);

  return (
    <header className="site-header" id="siteHeader">
      <div className="container nav-wrap">

        {/* LOGO */}
        <a
          href="/"
          className="wordmark"
          aria-label="Synertrix home"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={A + "Logos/LOGOS_MAIN-06.png"}
            alt="Synertrix"
            width="150"
            height="58"
          />
        </a>

        {/* MOBILE MENU */}
        <button
          className={"menu-toggle" + (open ? " active" : "")}
          id="menuToggle"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* NAVIGATION */}
        <nav
          className={"main-nav" + (open ? " open" : "")}
          id="mainNav"
          aria-label="Main navigation"
        >
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(id, setOpen);
              }}
            >
              {label}
            </a>
          ))}

          {/* CONTACT */}
          <a
            href="#contact"
            className="nav-contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact", setOpen);
            }}
          >
            Talk to us <span>↗</span>
          </a>
        </nav>

      </div>
    </header>
  );
}

export default Header;