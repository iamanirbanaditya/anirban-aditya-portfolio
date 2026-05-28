"use client";

import { motion } from "framer-motion";

export default function BeyondBusinessPage(){

return(

<section className="beyond-page">

  {/* =====================================================
     HERO
  ===================================================== */}

  <section className="beyond-hero">

    {/* OVERLAY */}

    <div className="beyond-overlay"></div>

    {/* CONTENT */}

    <motion.div
      className="beyond-hero-content"

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

      <p className="beyond-tag">
        BEYOND BUSINESS
      </p>

      <h1>
        Leadership Beyond
        <br />
        Boardrooms
      </h1>

      <div className="beyond-line"></div>

      <p className="beyond-subtitle">

        Cricket, travel, books,
        philanthropy, and spirituality —
        the experiences that shape
        perspective, purpose,
        and a life beyond leadership.

      </p>

      <a
        href="#beyond-sections"
        className="beyond-btn"
      >
        Explore Experiences
      </a>

    </motion.div>

  </section>





  {/* =====================================================
     CRICKET SECTION
  ===================================================== */}

  <section
    id="beyond-sections"
    className="beyond-story-section"
  >

    {/* LEFT CONTENT */}

    <motion.div
      className="story-content"

      initial={{
        opacity:0,
        x:-80
      }}

      whileInView={{
        opacity:1,
        x:0
      }}

      transition={{
        duration:1
      }}

      viewport={{
        once:true
      }}
    >

      <p className="story-tag">
        SPORTS
      </p>

      <h2>
        Discipline Beyond
        The Pitch
      </h2>

      <div className="story-line"></div>

      <p>

        Cricket represents far more than sport —
        it reflects patience, discipline,
        leadership, pressure management,
        and the ability to perform with focus
        under demanding circumstances.

      </p>

      <p>

        The spirit of teamwork, strategic thinking,
        and resilience continues to shape
        perspectives both personally
        and professionally.

      </p>

    </motion.div>



    {/* RIGHT MEDIA */}

    <motion.div
      className="cinematic-media-layout"

      initial={{
        opacity:0,
        x:80
      }}

      whileInView={{
        opacity:1,
        x:0
      }}

      transition={{
        duration:1
      }}

      viewport={{
        once:true
      }}
    >

      {/* BIG VIDEO */}

      <div className="cinematic-video">

        <video
        className="cinematic-reel"
        src="/videos/cricket.mp4"
        autoPlay
        muted
        loop
        playsInline
        ></video>

        <div className="cinematic-video-overlay"></div>

      </div>

      {/* FLOATING GALLERY */}

      <div className="floating-gallery">

        <div className="floating-img img-1">
            <img src="/images/cricket1.jpeg" alt="" />
        </div>

        <div className="floating-img img-2">
            <img src="/images/cricket2.jpeg" alt="" />
        </div>

        <div className="floating-img img-3">
            <img src="/images/cricket3.jpeg" alt="" />
        </div>

        <div className="floating-img img-4">
            <img src="/images/cricket4.jpeg" alt="" />
        </div>

      </div>

    </motion.div>

  </section>

  {/* =====================================================
   TRAVEL SECTION
    ===================================================== */}

  <section className="travel-section">

    {/* LEFT COLLAGE */}

    <motion.div
        className="travel-collage"

        initial={{
        opacity:0,
        y:80
        }}

        whileInView={{
        opacity:1,
        y:0
        }}

        transition={{
        duration:1
        }}

        viewport={{
        once:true
        }}
    >

        <div className="travel-img travel-img-1">
        <img src="/images/travel1.jpeg" alt="" />
        </div>

        <div className="travel-img travel-img-2">
        <img src="/images/travel2.jpeg" alt="" />
        </div>

        <div className="travel-img travel-img-3">
        <img src="/images/travel3.jpeg" alt="" />
        </div>

        <div className="travel-img travel-img-4">
        <img src="/images/travel4.jpeg" alt="" />
        </div>

        <div className="travel-img travel-img-5">
        <img src="/images/travel5.jpeg" alt="" />
        </div>

        <div className="travel-img travel-img-6">
        <img src="/images/travel6.jpeg" alt="" />
        </div>

    </motion.div>

    {/* RIGHT CONTENT */}

    <motion.div
        className="travel-content"

        initial={{
        opacity:0,
        x:80
        }}

        whileInView={{
        opacity:1,
        x:0
        }}

        transition={{
        duration:1
        }}

        viewport={{
        once:true
        }}
    >

        <p className="travel-tag">
        TRAVEL
        </p>

        <h2>
        Exploring Beyond
        Familiar Horizons
        </h2>

        <div className="travel-line"></div>

        <p>

        Travel creates perspective.
        Every destination introduces
        new cultures, experiences,
        conversations, and ideas
        that reshape the way
        leadership and life are understood.

        </p>

        <p>

        Beyond business,
        exploration becomes a journey
        of learning, reflection,
        adaptability, and human connection.

        </p>

    </motion.div>

  </section>

  

  {/* =====================================================
   BOOKS SECTION
  ===================================================== */}

  <section className="books-section">

    {/* =====================================================
        CINEMATIC BANNER
    ===================================================== */}

    <section className="books-banner">

        <div className="books-banner-overlay"></div>

        <motion.div
        className="books-banner-content"

        initial={{
            opacity:0,
            y:80
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1.2
        }}

        viewport={{
            once:true
        }}
        >

        <p className="books-tag">
            BOOKS & PHILOSOPHY
        </p>

        <h2>
            Ideas That
            <br />
            Shape Vision
        </h2>

        <div className="books-line"></div>

        <p>

            Books are more than knowledge —
            they are timeless conversations
            that shape perspective,
            leadership, discipline,
            creativity, and human understanding.

        </p>

        </motion.div>

    </section>





    {/* =====================================================
        PORTRAIT VIDEO
    ===================================================== */}

    <section className="books-video-section">

        <motion.div
        className="books-video-wrapper"

        initial={{
            opacity:0,
            scale:.9
        }}

        whileInView={{
            opacity:1,
            scale:1
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <video
            className="books-video"
            src="/videos/books.mp4"
            autoPlay
            muted
            loop
            playsInline
        ></video>

        <div className="books-video-overlay"></div>

        </motion.div>

    </section>





    {/* =====================================================
        BOOKS TIMELINE
    ===================================================== */}

    <section className="books-timeline">





        {/* =====================================================
        BOOK 1
        ===================================================== */}

        <motion.div
        className="book-story"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books1.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            01
            </span>

            <h3>
            Atomic Habits
            </h3>

            <span className="book-author">
            — James Clear
            </span>

            <p>

            A practical guide to building good habits
            and breaking bad ones using small daily improvements.
            Recommended because it provides immediately actionable
            systems rather than motivational theory,
            making it highly relevant for students,
            professionals, and entrepreneurs alike.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 2
        ===================================================== */}

        <motion.div
        className="book-story reverse"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books2.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            02
            </span>

            <h3>
            The Psychology of Money
            </h3>

            <span className="book-author">
            — Morgan Housel
            </span>

            <p>

            Explains how behavior and emotions
            influence financial decisions
            more than intelligence.
            Recommended for its timeless lessons
            delivered through simple,
            memorable storytelling.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 3
        ===================================================== */}

        <motion.div
        className="book-story"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books3.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            03
            </span>

            <h3>
            Rich Dad Poor Dad
            </h3>

            <span className="book-author">
            — Robert T. Kiyosaki
            </span>

            <p>

            Introduces the mindset difference
            between working for money
            and making money work for you.
            A foundational book for understanding
            financial freedom,
            investing, and assets.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 4
        ===================================================== */}

        <motion.div
        className="book-story reverse"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books4.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            04
            </span>

            <h3>
            Ikigai
            </h3>

            <span className="book-author">
            — Héctor García & Francesc Miralles
            </span>

            <p>

            Explores the Japanese philosophy
            of purpose, longevity,
            and meaningful living.
            Calm, reflective,
            and deeply grounding.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 5
        ===================================================== */}

        <motion.div
        className="book-story"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books5.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            05
            </span>

            <h3>
            Deep Work
            </h3>

            <span className="book-author">
            — Cal Newport
            </span>

            <p>

            Teaches how focused,
            distraction-free work
            creates exceptional results.
            Essential reading for productivity
            in the digital era.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 6
        ===================================================== */}

        <motion.div
        className="book-story reverse"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books6.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            06
            </span>

            <h3>
            Steve Jobs
            </h3>

            <span className="book-author">
            — Walter Isaacson
            </span>

            <p>

            A detailed biography exploring innovation,
            perfectionism,
            and visionary leadership
            behind one of the greatest
            modern entrepreneurs.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 7
        ===================================================== */}

        <motion.div
        className="book-story"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books7.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            07
            </span>

            <h3>
            Wings of Fire
            </h3>

            <span className="book-author">
            — A. P. J. Abdul Kalam
            </span>

            <p>

            An inspiring autobiography
            about perseverance,
            humility, science,
            and national service.
            A timeless reminder
            to dream fearlessly.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 8
        ===================================================== */}

        <motion.div
        className="book-story reverse"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books8.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            08
            </span>

            <h3>
            The 7 Habits of Highly Effective People
            </h3>

            <span className="book-author">
            — Stephen Covey
            </span>

            <p>

            A timeless framework for leadership,
            discipline,
            relationships,
            and long-term effectiveness
            in both personal and professional life.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 9
        ===================================================== */}

        <motion.div
        className="book-story"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books9.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            09
            </span>

            <h3>
            The Alchemist
            </h3>

            <span className="book-author">
            — Paulo Coelho
            </span>

            <p>

            A philosophical novel
            about dreams,
            destiny,
            courage,
            and self-discovery.
            Emotional and unforgettable.

            </p>

        </div>

        </motion.div>





        {/* =====================================================
        BOOK 10
        ===================================================== */}

        <motion.div
        className="book-story reverse"

        initial={{
            opacity:0,
            y:100
        }}

        whileInView={{
            opacity:1,
            y:0
        }}

        transition={{
            duration:1
        }}

        viewport={{
            once:true
        }}
        >

        <div className="book-story-image">

            <img
            src="/images/books10.jpeg"
            alt=""
            />

        </div>

        <div className="book-story-content">

            <span className="book-number">
            10
            </span>

            <h3>
            1984
            </h3>

            <span className="book-author">
            — George Orwell
            </span>

            <p>

            A dystopian masterpiece exploring
            surveillance,
            propaganda,
            freedom,
            and the dangers
            of authoritarian control.

            </p>

        </div>

        </motion.div>



    </section>

  </section>

</section>

);

}