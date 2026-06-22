"use client";

import { useEffect, useState } from "react";

const navItems = [
  {
    label: "About",
    id: "about",
  },
  {
    label: "Journey",
    id: "experience",
  },

  {
    label: "Skills",
    id: "skills",
  },
  {
    label: "Strengths",
    id: "strengths",
  },
  {
    label: "Objective",
    id: "objective",
  },
  {
    label: "Connect",
    id: "contact",
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav
      className={`fixed left-1/2 z-50 -translate-x-1/2 overflow-x-auto rounded-full border border-white/40 backdrop-blur-xl transition-all duration-300 ${scrolled ? "top-3 bg-white/95 shadow-xl px-3 py-2" : "top-5 bg-white/80 shadow-lg px-4 py-3"}`}
    >
      <div className="flex items-center gap-2">
        <button
          onClick={() =>
            document.getElementById("home")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B08A5B] text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105"
        >
          D
        </button>

        <ul className="flex items-center gap-1 whitespace-nowrap">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-5 py-2 text-sm font-medium text-neutral-600 transition-all duration-200 hover:bg-[#B08A5B] hover:text-white"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
