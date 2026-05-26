"use client";

import { motion } from "framer-motion";

export default function ContactPage(){

return(

<section className="contact-page">

  {/* HERO */}

  <section className="contact-hero">

    <div className="contact-overlay"></div>

    <motion.div
      className="contact-content"

      initial={{
        opacity:0,
        y:80
      }}

      animate={{
        opacity:1,
        y:0
      }}

      transition={{
        duration:1.2
      }}
    >

      <p className="contact-tag">
        CONTACT
      </p>

      <h1>
        Let’s Build
        <br />
        Meaningful
        <br />
        Conversations
      </h1>

      <div className="contact-line"></div>

      <p className="contact-subtitle">
        Leadership begins with communication,
        collaboration, and a shared vision
        for impact.
      </p>

      <div className="contact-buttons">

        <a
        href="https://wa.me/918101417215?text=Hello%20Mr.%20Anirban%20Aditya,%20I%20would%20like%20to%20schedule%20a%20strategic%20meeting."
        target="_blank"
        className="primary-btn"
        >
            Schedule Meeting
        </a>

        <a
        href="https://wa.me/918101417215"
        target="_blank"
        className="secondary-btn"
        >
            WhatsApp Connect
        </a>

      </div>

    </motion.div>

  </section>



  {/* CONTACT STRIP */}

<section className="contact-strip-section">

  <div className="contact-strip-grid">

    {/* EMAIL */}

    <a
      href="mailto:info@adityagroupindia.org"
      className="contact-strip-item"
    >

      <div className="strip-icon">
        ✉
      </div>

      <div className="strip-content">

        <span>Email</span>

        <h3>
          info@adityagroupindia.org
        </h3>

      </div>

    </a>

    {/* PHONE */}

    <a
      href="#"
      className="contact-strip-item"
    >

      <div className="strip-icon">
        ☎
      </div>

      <div className="strip-content">

        <span>Phone</span>

        <h3>
          WhatsApp Integrated
        </h3>

      </div>

    </a>

    {/* WEBSITE */}

    <a
      href="https://adityagroupindia.org"
      target="_blank"
      className="contact-strip-item"
    >

      <div className="strip-icon">
        ◉
      </div>

      <div className="strip-content">

        <span>Website</span>

        <h3>
          adityagroupindia.org
        </h3>

      </div>

    </a>

    {/* LINKEDIN */}

    <a
      href="http://linkedin.com/in/anirban-aditya-9265072b"
      target="_blank"
      className="contact-strip-item"
    >

      <div className="strip-icon">
        in
      </div>

      <div className="strip-content">

        <span>LinkedIn</span>

        <h3>
          Executive Leadership Profile
        </h3>

      </div>

    </a>

    {/* ADDRESS */}

    <div className="contact-strip-item">

      <div className="strip-icon">
        ⌖
      </div>

      <div className="strip-content">

        <span>Office Address</span>

        <h3>
          South Dumdum, West Bengal
        </h3>

      </div>

    </div>

    {/* EXECUTIVE OFFICE */}

    <div className="contact-strip-item">

      <div className="strip-icon">
        ✦
      </div>

      <div className="strip-content">

        <span>Executive Office</span>

        <h3>
          Chairman’s Office, Aditya Group
        </h3>

      </div>

    </div>

  </div>

</section>

{/* BUSINESS FORM */}

<section className="business-form-section">

  <div className="form-left">

    <p className="form-tag">
      BUSINESS INQUIRY
    </p>

    <h2>
      Start a Strategic
      Conversation
    </h2>

    <div className="form-line"></div>

    <p className="form-description">

      Whether it’s leadership,
      education, partnerships,
      business collaborations,
      institutional growth,
      or strategic opportunities —
      meaningful conversations
      begin here.

    </p>

  </div>

  {/* FORM */}

  <form className="luxury-form">

    <div className="form-group">

      <input
        type="text"
        placeholder="Full Name"
      />

    </div>

    <div className="form-group">

      <input
        type="email"
        placeholder="Email Address"
      />

    </div>

    <div className="form-group">

      <input
        type="text"
        placeholder="Contact Number"
      />

    </div>

    <div className="form-group">

      <input
        type="text"
        placeholder="Associated Company"
      />

    </div>

    <div className="form-group">

      <input
        type="text"
        placeholder="Agenda"
      />

    </div>

    <div className="form-group full-width">

      <textarea
        placeholder="Message"
      ></textarea>

    </div>

    <button
      type="submit"
      className="form-submit-btn"
    >
      Send Inquiry
    </button>

  </form>

</section>

</section>

);

}