"use client";

import { useEffect, useState } from "react";

export default function Navigation({ profile }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const firstName = profile?.name?.split(" ")[0] || "Profile";

  return (
    <nav className={`navigation-bg py-3 ${scrolled ? "scrolled" : ""}`}>
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/" className="nav-brand">
          {firstName}
          <span className="accent-dot">.</span>
        </a>
        <div className="d-flex align-items-center gap-1">
          <a href="#portfolio" className="nav-link-custom">
            Portfolio
          </a>
          <a href="#about" className="nav-link-custom">
            About
          </a>
          <a href="#contact" className="nav-link-custom">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
