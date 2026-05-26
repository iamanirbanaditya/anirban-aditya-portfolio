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

{/* MAP SECTION */}

<section className="map-section">

  <div className="map-heading">

    <p>
      LOCATION
    </p>

    <h2>
      Visit The
      Executive Office
    </h2>

  </div>

  {/* MAP */}

  <div className="map-wrapper">

    <iframe
      src="https://www.google.com/maps?q=22.615611,88.411861&z=16&output=embed"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    {/* FLOATING CARD */}

    <div className="map-card">

      <h3>
        Aditya Group
      </h3>

      <p>
        JC86+6PQ Vivekananda Abasan,
        Amarpalli,
        South Dumdum,
        West Bengal
      </p>

      <a
        href="https://maps.google.com/?q=22.615611,88.411861"
        target="_blank"
        className="direction-btn"
      >
        Get Directions
      </a>

    </div>

  </div>

</section>


{/* FLOATING SOCIALS */}

<section className="floating-social-section">

  <div className="social-heading">

    <h2>
      Stay Connected
    </h2>

  </div>

  <div className="floating-socials">

    {/* EMAIL */}

    <a
      href="mailto:info@adityagroupindia.org"
      target="_blank"
      className="social-float email-icon"
    >
      ✉
    </a>

    {/* WEBSITE */}

    <a
      href="https://adityagroupindia.org"
      target="_blank"
      className="social-float website-icon"
    >
      ⌘
    </a>

    {/* LINKEDIN */}

    <a
      href="http://linkedin.com/in/anirban-aditya-9265072b"
      target="_blank"
      className="social-float linkedin-icon"
    >
      in
    </a>

    {/* FACEBOOK */}

    <a
      href="https://www.facebook.com/anirbanadityaAG/"
      target="_blank"
      className="social-float facebook-icon"
    >
      f
    </a>

    {/* INSTAGRAM */}

    <a
      href="https://www.instagram.com/anirbanaditya/"
      target="_blank"
      className="social-float instagram-icon"
    >
      ◎
    </a>

    {/* TWITTER */}

    <a
      href="https://x.com/AnirbanAditya1"
      target="_blank"
      className="social-float twitter-icon"
    >
      𝕏
    </a>

  </div>

</section>

</section>

);

}