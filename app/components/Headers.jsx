"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";

export default function Headers() {
  const [activeSection, setActiveSection] = useState("");
  const [showHeader, setShowHeader] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      const aboutSection = document.querySelector(".about-section");
      let activeSectionName = "";
      if (heroSection && aboutSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();

        if (heroRect.bottom > 0) {
          setShowNavbar(true);
          setShowHeader(false);
        } else if (aboutRect.top <= window.innerHeight) {
          setShowNavbar(false);
          setShowHeader(true);
        }
      }

      const sections = document.querySelectorAll(".section");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.5 &&
          rect.bottom >= window.innerHeight * 0.5
        ) {
          activeSectionName = section.getAttribute("data-section-name");
        }
      });

      setActiveSection(activeSectionName);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      {/* <div
        className={`fixed top-0 left-0 bg-white z-50 pt-3 w-full px-3 xxs:px-4 sm:px-8 transition-transform duration-500 ease-in-out transform ${showHeader ? "translate-y-0" : " -translate-y-96"
          }`}
      >
        <Header activeSection={activeSection} showHeader={showHeader} />
      </div> */}
      {/* {showNavbar && <Navbar />} */}
      <Navbar activeSection={activeSection} />
    </>
  );
}
