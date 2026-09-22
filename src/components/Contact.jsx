import React, { useState } from "react";
import SectionBadge from "../components/SectionBadge";
const A = `${import.meta.env.BASE_URL}assets/`;

const GOOGLE_APPS_SCRIPT_URL =
  import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL || "";

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    if (!GOOGLE_APPS_SCRIPT_URL) {
      setStatus("not-configured");
      return;
    }

    setStatus("sending");

    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams([...formData.entries()]),
      });

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  }

  return (
    <section className="contact-section" id="contact">

      {/* ================================
          CONTACT
      ================================= */}

      <div className="container contact-wrap">

        {/* CONTACT COPY */}
        <div className="contact-copy reveal">

          <SectionBadge label="START A CONVERSATION" />

          <h2>
            Ready to make your <em>data work harder?</em>
          </h2>

          <p>
            Let's identify where modern data and AI can create
            measurable value for your enterprise.
          </p>

          <a href="mailto:contact@synertrix.com">
            contact@synertrix.com <span>↗</span>
          </a>

        </div>


        {/* CONTACT FORM */}
        <form
          className="contact-form reveal delay-1"
          onSubmit={handleSubmit}
        >

          {/* NAME */}
          <label>
            Name

            <input
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>


          {/* EMAIL */}
          <label>
            Work email

            <input
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>

           {/* Contact Number */}
          <label>
            Contact Number

            <input
              type="tel"
              name="phone"
              autoComplete="tel"
              required
            />
          </label>


          {/* MESSAGE */}
          <label>
            Tell us about your requirement

            <textarea
              name="message"
              rows="4"
              required
            />
          </label>


          {/* HONEYPOT SPAM FIELD */}
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-9999px",
              width: "1px",
              height: "1px",
              opacity: 0,
              pointerEvents: "none",
            }}
          />


          {/* SOURCE */}
          <input
            type="hidden"
            name="source"
            value="Synertrix Website"
          />


          {/* SUBMIT */}
          <button
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Sending..."
              : "Start a conversation"}

            {status !== "sending" && (
              <span>↗</span>
            )}
          </button>


          {/* SUCCESS */}
          {status === "success" && (
            <p className="form-success">
              Thanks! Your enquiry has been received.
            </p>
          )}


          {/* ERROR */}
          {status === "error" && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

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

    </section>
  );
}

export default Contact;