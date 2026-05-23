"use client";

import Link from "next/link";

export default function MyStoryPage() {

  return (

    <main className="story-page">

      

      {/* CONTENT */}

      <section className="story-header">

  <p className="story-label">
    MY STORY
  </p>

  <h1>
    The Journey of Purpose,
    Passion, and Legacy
  </h1>

</section>

<section className="story-content-grid">

  {/* LEFT */}

  <div className="story-left">

    <p className="story-intro">
      My North Star:
      The Man Who Lit the Path
    </p>

    <div className="story-line"></div>

    <div className="story-text">

      <p>
        Every journey has a guiding light.
        Mine has always been my father,
        Late Mr. Bhaskar Aditya.
        He is, and will always be,
        my North Star—the constant light
        that guides me through challenges,
        keeps me grounded in purpose,
        and reminds me that leadership
        is ultimately about service.
      </p>

      <p>
        Whatever I have built,
        whatever I have learned,
        and whatever I aspire to become
        is a continuation of the foundation
        he created.
      </p>

      <p>
        This journey is not mine alone.
        It is an extension of his dream.
      </p>

      <p>
        Thank you, Baba,
        for giving me not only a legacy
        to inherit, but a purpose to live.
      </p>

    </div>

  </div>

  {/* RIGHT */}

  <div className="story-right">

    <div className="story-image-wrap">

      <img
        src="/images/BhaskarAditya.jpeg"
        alt="Bhaskar Aditya"
        className="story-image"
      />

    </div>

  </div>

</section>

      {/* FLOATING CTA */}

      <Link
        href="/timeline"
        className="timeline-cta"
      >
        My Timeline →
      </Link>

    </main>

  );

}