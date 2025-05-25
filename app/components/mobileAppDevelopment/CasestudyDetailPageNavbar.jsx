"use client";
import React, { useEffect, useState } from "react";
import CasestudyNavbar from "./CasestudyNavBar";

export default function CaseStudyDetailPageNavBar({ link }) {
  const [activeSection, setActiveSection] = useState("");
  const [header, setHeader] = useState(false);
  const handleScroll = () => {
    const bodyDiv = document.getElementById("body");
    if (bodyDiv) {
      const rect = bodyDiv.getBoundingClientRect();
      if (rect.top <= 0) {
        setHeader(true);
      } else {
        setHeader(false);
      }
    }
    const sections = document.querySelectorAll("[data-section-name]");
    let current = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2
      ) {
        current = section.getAttribute("data-section-name");
      }
    });

    setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 bg-white z-50 pt-3 w-full px-4 sm:px-8 transition-transform duration-500 ease-in-out transform ${header ? "translate-y-0  " : " -translate-y-96"
        }`}
    >
      <CasestudyNavbar activeSection={activeSection} link={link} />
    </div>
  );
}
