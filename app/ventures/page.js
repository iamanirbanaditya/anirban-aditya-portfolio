"use client";

import { motion } from "framer-motion";

export default function VenturesPage(){

return(

<section className="ventures-page">

  {/* =====================================================
     SCHOOLS SECTION
  ===================================================== */}

  <section className="venture-section schools-section">

    {/* LEFT */}

    <motion.div
      className="venture-content"

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

      <p className="venture-tag">
        EDUCATION
      </p>

      <a
       href="https://adityaacademygroupofschools.com/"
       target="_blank"
       rel="noopener noreferrer"
       className="venture-link"
      >

        <h2>
            Aditya Academy
            <br />
            Group of Schools
        </h2>

      </a>

      <div className="venture-line"></div>

      <p>

        Aditya Academy Group of Schools
        is dedicated to nurturing young minds
        through quality education,
        holistic development,
        and strong values-driven learning.

      </p>

      <p>

        With a focus on academics,
        innovation, sports,
        and personality development,
        the institution empowers students
        to become confident global citizens
        and future leaders.

      </p>

    </motion.div>





    {/* RIGHT */}

    <motion.div
      className="schools-gallery"

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

      <div className="school-img school-img-1">
        <img src="/images/schools1.jpg" alt="" />
      </div>

      <div className="school-img school-img-2">
        <img src="/images/schools2.jpg" alt="" />
      </div>

      <div className="school-img school-img-3">
        <img src="/images/schools3.jpg" alt="" />
      </div>

      <div className="school-img school-img-4">
        <img src="/images/schools4.jpg" alt="" />
      </div>

      <div className="school-img school-img-5">
        <img src="/images/schools5.jpg" alt="" />
      </div>

    </motion.div>

  </section>

  {/* =====================================================
   SPORTS SECTION
    ===================================================== */}

    <section className="venture-section sports-section">

    {/* LEFT */}

    <motion.div
        className="sports-gallery"

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

        <div className="sports-img sports-img-1">
        <img src="/images/sports1.jpg" alt="" />
        </div>

        <div className="sports-img sports-img-2">
        <img src="/images/sports2.jpg" alt="" />
        </div>

        <div className="sports-img sports-img-3">
        <img src="/images/sports3.jpg" alt="" />
        </div>

        <div className="sports-img sports-img-4">
        <img src="/images/sports4.jpg" alt="" />
        </div>

        <div className="sports-img sports-img-5">
        <img src="/images/sports5.jpg" alt="" />
        </div>

        <div className="sports-img sports-img-6">
        <img src="/images/sports6.jpg" alt="" />
        </div>

        <div className="sports-img sports-img-7">
        <img src="/images/sports7.jpg" alt="" />
        </div>

    </motion.div>





    {/* RIGHT */}

    <motion.div
        className="venture-content"

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

        <p className="venture-tag">
        SPORTS EDUCATION
        </p>

        <a
        href="https://adityaschoolofsports.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="venture-link"
        >

            <h2>
            Aditya School
            <br />
            of Sports
            </h2>

        </a>

        <div className="venture-line"></div>

        <p>

        Aditya School of Sports (ASOS)
        is committed to developing
        future champions by combining
        world-class sports training
        with discipline, education,
        and holistic personality development.

        </p>

        <p>

        With professional coaching,
        modern infrastructure,
        and competitive opportunities,
        ASOS empowers young athletes
        to excel at state,
        national, and international levels
        while building leadership,
        teamwork, and character.

        </p>

    </motion.div>

  </section>

  {/* =====================================================
   KREAMZ SECTION
    ===================================================== */}

    <section className="venture-section kreamz-section">

    {/* =====================================================
        LEFT CONTENT
    ===================================================== */}

    <motion.div
        className="venture-content"

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

        <p className="venture-tag">
        FOOD & CONFECTIONERY
        </p>

        <a
        href="https://kreamz.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="venture-link"
        >

            <h2>
            Kreamz
            <br />
            Confectionery
            </h2>

        </a>

        <div className="venture-line"></div>

        <p>

        Kreamz Confectionery Pvt. Ltd.
        is a fast-growing food
        and confectionery company
        focused on delivering affordable,
        innovative,
        and high-quality bakery
        and snack products
        for the mass market.

        </p>

        <p>

        With a vision to build joyful
        everyday brands,
        Kreamz combines taste,
        creativity,
        and strong distribution
        to create products loved
        across generations.

        </p>

    </motion.div>





    {/* =====================================================
        RIGHT GALLERY
    ===================================================== */}

    <motion.div
        className="kreamz-gallery"

        initial={{
        opacity:0,
        scale:.92
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

        {/* MAIN HERO */}

        <div className="kreamz-main">

        <img
            src="/images/kreamz1.jpg"
            alt=""
        />

        </div>





        {/* FLOATING CARD 1 */}

        <div className="kreamz-float kreamz-float-1">

        <img
            src="/images/kreamz2.jpg"
            alt=""
        />

        </div>





        {/* FLOATING CARD 2 */}

        <div className="kreamz-float kreamz-float-2">

        <img
            src="/images/kreamz3.jpg"
            alt=""
        />

        </div>





        {/* FLOATING CARD 3 */}

        <div className="kreamz-float kreamz-float-3">

        <img
            src="/images/kreamz4.jpg"
            alt=""
        />

        </div>





        {/* FLOATING CARD 4 */}

        <div className="kreamz-float kreamz-float-4">

        <img
            src="/images/kreamz5.jpg"
            alt=""
        />

        </div>

    </motion.div>

  </section>

  {/* =====================================================
   GRANDLY INTERIORS
    ===================================================== */}

    <section className="venture-section interiors-section">

    {/* LEFT GALLERY */}

    <motion.div
    className="interiors-gallery"

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

    {/* TOP HERO */}

    <div className="interior-hero">

        <img
        src="/images/grandly1.jpg"
        alt=""
        />

    </div>





    {/* EDITORIAL WALL */}

    <div className="interior-editorial-wall">

        <div className="interior-column">

        <div className="interior-card tall">
            <img src="/images/grandly2.jpg" alt="" />
        </div>

        <div className="interior-card medium">
            <img src="/images/grandly3.jpg" alt="" />
        </div>

        <div className="interior-card small">
            <img src="/images/grandly4.jpg" alt="" />
        </div>

        </div>





        <div className="interior-column">

        <div className="interior-card medium">
            <img src="/images/grandly5.jpg" alt="" />
        </div>

        <div className="interior-card tall">
            <img src="/images/grandly6.jpg" alt="" />
        </div>

        <div className="interior-card small">
            <img src="/images/grandly7.jpg" alt="" />
        </div>

        </div>

    </div>

    </motion.div>




    {/* RIGHT CONTENT */}

    <motion.div
        className="venture-content"

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

        <p className="venture-tag">
        INTERIOR DESIGN
        </p>

         <a
            href="https://grandly.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="venture-link"
         >

            <h2>
            Grandly
            <br />
            Interiors
            </h2>

        </a>

        <div className="venture-line"></div>

        <p>

        Grandly Interiors
        is a premium interior design
        and execution brand
        dedicated to transforming spaces
        with elegance,
        functionality,
        and modern aesthetics.

        </p>

        <p>

        From luxurious residences
        to commercial environments,
        Grandly delivers customized
        design solutions that blend
        creativity,
        comfort,
        and timeless sophistication.

        </p>

    </motion.div>

  </section>

  {/* =====================================================
   HOSPITALITY SECTION
    ===================================================== */}

    <section className="venture-section hospitality-section">

    {/* LEFT CONTENT */}

    <motion.div
        className="venture-content"

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

        <p className="venture-tag">
        HOSPITALITY
        </p>

        <h2>
        Bonding
        <br />
        Beyond Boundaries
        </h2>

        <div className="venture-line"></div>

        <p>

        Across vibrant rooftops,
        premium dining,
        cultural experiences,
        and lifestyle destinations —
        the hospitality ventures
        focus on creating spaces
        where ambience,
        food,
        music,
        and human connection
        come together beautifully.

        </p>





        {/* BRANDS */}

        <div className="hospitality-brands">

        <div className="hospitality-brand">
            
            <a
            href="https://www.facebook.com/bohothecafekolkata/"
            target="_blank"
            rel="noopener noreferrer"
            className="hospitality-link"
            >
                <span>Boho – The Sky Cafe</span>

            </a>
            <p>
            Rooftop ambience,
            premium dining,
            music,
            and unforgettable nightlife experiences.
            </p>
        </div>

        <div className="hospitality-brand">
            <a
            href="https://babumoshai.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hospitality-link"
            >
                <span>Baraf Restaurant</span>

            </a>
            <p>
            Elegant dining,
            rich flavors,
            and memorable culinary experiences.
            </p>
        </div>

        <div className="hospitality-brand">
            <a
            href="https://noodleoodle.co.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hospitality-link"
            >
                <span>Noodle Oodle</span>
            </a>
            <p>
            Modern Asian-inspired flavors
            with a youthful fast-dining experience.
            </p>
        </div>

        <div className="hospitality-brand">
            <a
            href="https://babumoshai.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hospitality-link"
            >
                <span>Babumoshai</span>
            </a>
            <p>
            Heritage-inspired hospitality
            celebrating Bengali culture,
            warmth,
            and authentic experiences.
            </p>
        </div>

        <div className="hospitality-brand">
            <span>Aditya Food Park</span>
            <p>
            A dynamic food and lifestyle destination
            designed for entertainment,
            gatherings,
            and culinary exploration.
            </p>
        </div>

        </div>

    </motion.div>





    {/* RIGHT GALLERY */}

    <motion.div
        className="hospitality-gallery"

        initial={{
        opacity:0,
        scale:.92
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

        {/* MAIN */}

        <div className="hospitality-main">

        <img
            src="/images/hospitality1.jpg"
            alt=""
        />

        </div>





        {/* SIDE IMAGES */}

        <div className="hospitality-card hospitality-card-1">
        <img src="/images/hospitality2.jpg" alt="" />
        </div>

        <div className="hospitality-card hospitality-card-2">
        <img src="/images/hospitality3.jpg" alt="" />
        </div>

        <div className="hospitality-card hospitality-card-3">
        <img src="/images/hospitality4.jpg" alt="" />
        </div>

        <div className="hospitality-card hospitality-card-4">
        <img src="/images/hospitality5.jpg" alt="" />
        </div>

        <div className="hospitality-card hospitality-card-5">
        <img src="/images/hospitality6.jpg" alt="" />
        </div>

    </motion.div>

  </section>

  {/* =====================================================
   APE STUDIOS
    ===================================================== */}

    <section className="venture-section ape-section">

    {/* LEFT CONTENT */}

    <motion.div
        className="venture-content"

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

        <p className="venture-tag">
        MEDIA & PRODUCTION
        </p>

        <a
        href="https://apeindia.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="venture-link"
        >

            <h2>
            APE
            <br />
            Studios
            </h2>

        </a>

        <div className="venture-line"></div>

        <p>

        APE Studios is a creative
        and modern production house
        specializing in innovative content creation,
        branding,
        digital storytelling,
        and visual experiences.

        </p>

        <p>

        Combining creativity,
        technology,
        and impactful execution,
        APE Studios transforms ideas
        into immersive media,
        cinematic visuals,
        and next-generation storytelling experiences.

        </p>

    </motion.div>





    {/* RIGHT GALLERY */}

    <motion.div
        className="ape-gallery"

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

        {/* MAIN */}

        <div className="ape-main">

        <img
            src="/images/ape1.jpg"
            alt=""
        />

        </div>





        {/* FLOAT 1 */}

        <div className="ape-float ape-float-1">

        <img
            src="/images/ape2.jpg"
            alt=""
        />

        </div>





        {/* FLOAT 2 */}

        <div className="ape-float ape-float-2">

        <img
            src="/images/ape3.jpg"
            alt=""
        />

        </div>





        {/* GLOW */}

        <div className="ape-glow"></div>

    </motion.div>

  </section>

  {/* =====================================================
   SHOPNAMO
    ===================================================== */}

    <section className="venture-section shopnamo-section">

    {/* LEFT GALLERY */}

    <motion.div
        className="shopnamo-gallery"

        initial={{
            opacity:0,
            scale:.92
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

        {/* GLOW */}

        <div className="shop-glow"></div>





        {/* MAIN HERO */}

        <div className="shop-main-card">

            <img
            src="/images/shopnamo1.jpg"
            alt=""
            />

        </div>





        {/* FLOAT 1 */}

        <div className="shop-float shop-float-1">

            <img
            src="/images/shopnamo2.jpg"
            alt=""
            />

        </div>





        {/* FLOAT 2 */}

        <div className="shop-float shop-float-2">

            <img
            src="/images/shopnamo3.jpg"
            alt=""
            />

        </div>





        {/* FLOAT 3 */}

        <div className="shop-float shop-float-3">

            <img
            src="/images/shopnamo4.jpg"
            alt=""
            />

        </div>





        {/* FLOAT 4 */}

        <div className="shop-float shop-float-4">

            <img
            src="/images/shopnamo5.jpg"
            alt=""
            />

        </div>

    </motion.div>





    {/* RIGHT CONTENT */}

    <motion.div
        className="venture-content"

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

        <p className="venture-tag">
        RETAIL & E-COMMERCE
        </p>

        <a
        href="https://shopnamo.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="venture-link"
        >

            <h2>
            ShopNamo
            </h2>

        </a>

        <div className="venture-line"></div>

        <p>

        ShopNamo is a modern retail
        and e-commerce platform
        focused on delivering seamless shopping
        experiences through quality products,
        smart technology,
        and customer-first service.

        </p>

        <p>

        Blending convenience,
        affordability,
        and innovation,
        ShopNamo aims to redefine
        everyday shopping
        for the digital generation.

        </p>

    </motion.div>

  </section>



  {/* =====================================================
   AWARDS SECTION
    ===================================================== */}

    <section className="awards-section">

    {/* =====================================================
        HEADING
    ===================================================== */}

    <motion.div
        className="awards-heading"

        initial={{
        opacity:0,
        y:60
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

        <p className="awards-tag">
        RECOGNITIONS
        </p>

        <h2>
        Awards &
        <br />
        Recognitions
        </h2>

        <p className="awards-subtitle">

        Celebrating excellence,
        innovation,
        leadership,
        and impactful contributions
        across education,
        business,
        hospitality,
        and entrepreneurship.

        </p>

    </motion.div>





    {/* =====================================================
        MARQUEE
    ===================================================== */}

    <div className="awards-marquee">

        <div className="awards-track">

        {/* =====================================================
            FIRST SET
        ===================================================== */}

        <div className="award-card">
            <img src="/images/award1.png" alt="" />

            <h3>
                Times Power ICONS 2021
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award2.png" alt="" />

            <h3>
                Times Design IKONS 2021
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award3.png" alt="" />

            <h3>
                Zee 24 Ghanta Education Excellence 2022
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award4.png" alt="" />

            <h3>
                News Bangla Education Eminence 2022
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award5.png" alt="" />

            <h3>
                India’s Greatest Brands & Leaders 2017–18
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award6.png" alt="" />

            <h3>
                Education Excellence Awards ’24
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award7.png" alt="" />

            <h3>
                    Mother Teresa Awards for Social Justice
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award8.png" alt="" />

            <h3>
                The Business Awards Kolkata 2021
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award9.png" alt="" />

            <h3>
                ASIA Architecture Design Awards 2024
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award10.png" alt="" />

            <h3>
                TIMES Food Nightlife Awards
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award11.png" alt="" />

            <h3>
                TIMES NOW Business Excellence Awards 2024
            </h3>
        </div>

        <div className="award-card">
            <img src="/images/award12.png" alt="" />

            <h3>
                Bengal Brilliance Awards
            </h3>
        </div>





        {/* =====================================================
            DUPLICATE SET FOR INFINITE LOOP
        ===================================================== */}

        <div className="award-card">
            <img src="/images/award1.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award2.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award3.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award4.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award5.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award6.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award7.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award8.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award9.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award10.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award11.png" alt="" />
        </div>

        <div className="award-card">
            <img src="/images/award12.png" alt="" />
        </div>

        </div>

    </div>

  </section>

</section>

);

}