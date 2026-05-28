"use client";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function ContactPage(){

const [formData, setFormData] = useState({

from_name:"",
from_email:"",
contact_number:"",
company:"",
agenda:"",
message:""

});

const [loading, setLoading] = useState(false);

const [success, setSuccess] = useState(false);

const handleChange = (e) => {

setFormData({

...formData,
[e.target.name]:e.target.value

});

};

const handleSubmit = async (e) => {

e.preventDefault();

setLoading(true);

try{

await emailjs.send(

"service_o8ywpml",
"template_n16rr55",

formData,

"QICCSQntBzM3W4Hot"

);

setSuccess(true);

setFormData({

from_name:"",
from_email:"",
contact_number:"",
company:"",
agenda:"",
message:""

});

}catch(error){

console.log(error);

alert("Something went wrong.");

}

setLoading(false);

};

return(

<section className="contact-page">

  {/* HERO */}

  <section className="contact-hero">

    <div className="contact-overlay"></div>

    <motion.div
      className="contact-hero-content"

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
        href="https://wa.me/919230647430?text=Hello%20Mr.%20Anirban%20Aditya,%20I%20would%20like%20to%20schedule%20a%20strategic%20meeting."
        target="_blank"
        className="primary-btn"
        >
            Schedule Meeting
        </a>

        <a
        href="https://wa.me/919230647430"
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

  <form
  className="luxury-form"
  onSubmit={handleSubmit}
  >

    <div className="form-group">

      <input
      type="text"
      name="from_name"
      placeholder="Full Name"
      value={formData.from_name}
      onChange={handleChange}
      required
      />

    </div>

    <div className="form-group">

      <input
      type="email"
      name="from_email"
      placeholder="Email Address"
      value={formData.from_email}
      onChange={handleChange}
      required
      />

    </div>

    <div className="form-group">

      <input
      type="text"
      name="contact_number"
      placeholder="Contact Number"
      value={formData.contact_number}
      onChange={handleChange}
      />

    </div>

    <div className="form-group">

      <input
      type="text"
      name="company"
      placeholder="Associated Company"
      value={formData.company}
      onChange={handleChange}
      />

    </div>

    <div className="form-group">

      <input
      type="text"
      name="agenda"
      placeholder="Agenda"
      value={formData.agenda}
      onChange={handleChange}
      />

    </div>

    <div className="form-group full-width">

      <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
      required
      ></textarea>

    </div>

    <button
      type="submit"
      className="form-submit-btn"
    >
      {loading ? "Sending..." : "Send Inquiry"}
    </button>

    {success && (

    <p className="success-message">

    Inquiry submitted successfully.

    </p>

    )}

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


{/* FAQ SECTION */}

<section className="faq-section">

  <div className="faq-heading">

    <p>
      FAQ
    </p>

    <h2>
      Frequently Asked
      Questions
    </h2>

  </div>

  <div className="faq-container">

    {/* ITEM */}

    <div className="faq-item">

      <h3>
        What type of collaborations are accepted?
      </h3>

      <p>
        Strategic partnerships, educational initiatives,
        leadership engagements, institutional growth,
        innovation, and business collaborations.
      </p>

    </div>

    {/* ITEM */}

    <div className="faq-item">

      <h3>
        How can I schedule a business meeting?
      </h3>

      <p>
        You can schedule directly through the WhatsApp
        integration or submit the inquiry form above.
      </p>

    </div>

    {/* ITEM */}

    <div className="faq-item">

      <h3>
        Are speaking engagements and leadership events available?
      </h3>

      <p>
        Yes. Leadership talks, institutional events,
        educational summits, and executive discussions
        are available upon request.
      </p>

    </div>

    {/* ITEM */}

    <div className="faq-item">

      <h3>
        Where is the executive office located?
      </h3>

      <p>
        South Dumdum, West Bengal,
        India.
      </p>

    </div>

  </div>

</section>




{/* QUOTE SECTION */}

<section className="quote-section">

  <div className="quote-overlay"></div>

  <div className="quote-content">

    <span className="quote-mark">
      “
    </span>

    <h2>
      Leadership is not inherited —
      it is earned through vision,
      action, and an unwavering
      commitment to the people
      you serve.
    </h2>

    <div className="quote-line"></div>

    <p>
      — Anirban Aditya
    </p>

    <span className="quote-role">
      Chairman, Aditya Group
    </span>

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



{/* FOOTER */}

<footer className="luxury-footer">

  <div className="footer-grid">

    {/* BRAND */}

    <div className="footer-brand">

      <h2>
        Anirban Aditya
      </h2>

      <p>
        Leadership, vision, education,
        innovation, and purposeful impact.
      </p>

    </div>

    {/* ADDRESS */}

    <div className="footer-column">

      <span>
        Address
      </span>

      <p>
        JC86+6PQ Vivekananda Abasan,
        Amarpalli,
        South Dumdum,
        West Bengal
      </p>

    </div>

    {/* CONTACT */}

    <div className="footer-column">

      <span>
        Contact
      </span>

      <a href="mailto:info@adityagroupindia.org">
        info@adityagroupindia.org
      </a>

      <a href="https://adityagroupindia.org">
        adityagroupindia.org
      </a>

      <a href="033 25504429">
        033 25504429
      </a>

    </div>

    {/* SOCIALS */}

    <div className="footer-column">

      <span>
        Social
      </span>

      <a
        href="https://www.instagram.com/anirbanaditya/"
        target="_blank"
      >
        Instagram
      </a>

      <a
        href="https://www.facebook.com/anirbanadityaAG/"
        target="_blank"
      >
        Facebook
      </a>

      <a
        href="https://x.com/AnirbanAditya1"
        target="_blank"
      >
        Twitter
      </a>

      <a
        href="http://linkedin.com/in/anirban-aditya-9265072b"
        target="_blank"
      >
        LinkedIn
      </a>

    </div>

  </div>

  {/* BOTTOM */}

  <div className="footer-bottom">

    <p>
      © 2026 Anirban Aditya.
      All Rights Reserved.
    </p>

  </div>

</footer>

</section>

);

}