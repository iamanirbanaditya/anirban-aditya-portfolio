"use client";

import { useEffect, useState } from "react";

export default function IntroAnimation({ setEnterSite }) {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);

  }, []);

  return (

    <section className="intro-animation">

      {/* VIDEO */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="intro-video"
      >

        <source
          src="/videos/intro.mp4"
          type="video/mp4"
        />

      </video>

      {/* OVERLAY */}

      <div className="intro-overlay"></div>

      {/* ANIMATION LAYER */}

      <div className="intro-loader">

        <div className="loader-line"></div>

      </div>

      {/* CONTENT */}

      <div
        className={`intro-content ${
          showContent ? "show-content" : ""
        }`}
      >

        <p className="intro-tag">
          Anirban Aditya
        </p>

        <h1>
          Beyond Legacy
        </h1>

        <p className="intro-text">
          The Minds Behind Emerging Possibilities
        </p>

        <button
          className="explore-btn"
          onClick={() => setEnterSite(true)}
        >
          Let’s Explore
        </button>

      </div>

    </section>

  );
}