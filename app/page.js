"use client";

import { useState } from "react";

import IntroAnimation from "./components/IntroAnimation";
import MainSlider from "./components/MainSlider";

export default function Home() {

  const [enterSite, setEnterSite] = useState(false);

  return (
    <>
      {!enterSite ? (
        <IntroAnimation setEnterSite={setEnterSite} />
      ) : (
        <MainSlider />
      )}
    </>
  );
}