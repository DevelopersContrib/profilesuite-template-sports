"use client";

import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export default function Navigation({ profile }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const firstName = profile?.name?.split(" ")[0] || "Profile";

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (!el) return;

    const navHeight = navRef.current?.offsetHeight ?? 0;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - navHeight - 8;

    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(targetId);
  };

  return (
    <nav
      ref={navRef}
      className={`navigation-bg py-3 ${scrolled ? "scrolled" : ""}`}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <a href="/" className="nav-brand">
          {firstName}
          <span className="accent-dot">.</span>
        </a>
        <div className="d-flex align-items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link-custom ${activeId === item.id ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
