"use client";

import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useRouter } from "next/navigation";

const slides = [

  {
    title: "My Story",
    subtitle: "A journey shaped through vision, leadership, purpose, and the relentless pursuit of impact beyond institutions.",
    className: "story-slide",
  },

  {
    title: "Ventures",
    subtitle: "Institutions, innovation, and impact.",
    className: "ventures-slide"
  },

  {
    title: "Beyond Business",
    subtitle: "Passions, travel, sports, and life.",
    className: "beyond-slide"
  },

  {
    title: "Let’s Talk",
    subtitle: "Connect. Collaborate. Converse.",
    className: "talk-slide"
  }

];

export default function MainSlider() {

  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const [isAnimating, setIsAnimating] = useState(false);

  // WHEEL NAVIGATION

  useEffect(() => {

  const handleWheel = (e) => {

    if (isAnimating) return;

    setIsAnimating(true);

    if (e.deltaY > 0) {

      setCurrentSlide((prev) =>
        prev < slides.length - 1 ? prev + 1 : prev
      );

    } else {

      setCurrentSlide((prev) =>
        prev > 0 ? prev - 1 : prev
      );

    }

    setTimeout(() => {
      setIsAnimating(false);
    }, 1400);

  };

  window.addEventListener("wheel", handleWheel);

  return () => {
    window.removeEventListener("wheel", handleWheel);
  };

}, [isAnimating]);

  return (

    <section className="slider-wrapper">

      <AnimatePresence mode="wait">

        <motion.section
          key={currentSlide}
          className={`slide ${slides[currentSlide].className}`}

          initial={{
            opacity:0,
            scale:1.08
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          exit={{
            opacity:0,
            scale:1.03
          }}

          transition={{
            duration:1.2,
            ease:[0.77,0,0.18,1]
          }}
        >

          <div className="slide-overlay"></div>

          <div className="slide-gradient"></div>

          <div className="slide-noise"></div>

          <div className="floating-orb orb-1"></div>
          <div className="floating-orb orb-2"></div>


          <motion.div
            className="slide-content"

            initial={{
              opacity:0,
              y:60
            }}

            animate={{
              opacity:1,
              y:0
            }}

            transition={{
              delay:.3,
              duration:1
            }}
          >


            <h1>
              {slides[currentSlide].title}
            </h1>

            <div className="story-line"></div>
            
            <p className="slide-subtitle">
              {slides[currentSlide].subtitle}
            </p>

            <button
            className="slide-btn"

            onClick={() => {

                if(currentSlide === 0){
                router.push("/my-story");
                }

                if(currentSlide === 1){
                router.push("/ventures");
                }

                if(currentSlide === 2){
                router.push("/beyond-business");
                }

                if(currentSlide === 3){
                router.push("/contact");
                }

            }}
            >
            Explore
            </button>

          </motion.div>

        </motion.section>

      </AnimatePresence>

      {/* SIDE NAVIGATION */}

      <div className="slider-nav">

        {slides.map((_, index) => (

          <button
            key={index}

            className={`nav-dot ${
              currentSlide === index ? "active-dot" : ""
            }`}

            onClick={() => setCurrentSlide(index)}
          ></button>

        ))}

      </div>

    </section>

  );

}