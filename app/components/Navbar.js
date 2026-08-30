"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import {FiMoon, FiSun} from "react-icons/fi";

const NAV_ITEMS = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleRef = useRef(null);
  const navLinksRef = useRef(null);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();

  // Load saved theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Apply theme to <html data-theme="">
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Close mobile menu on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (
        menuToggleRef.current &&
        navLinksRef.current &&
        !menuToggleRef.current.contains(e.target) &&
        !navLinksRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", onClickOutside);
    return () => document.removeEventListener("click", onClickOutside);
  }, []);

  // Close mobile menu whenever the route changes (page switched)
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.div className="scroll-progress" style={{ scaleX: scrollYProgress }} />

      <nav id="navbar">
        <Link href="/" className="logo">
          Vinay Tomar
        </Link>
        <div className="nav-right">
          <ul className={`nav-links${menuOpen ? " active" : ""}`} id="navLinks" ref={navLinksRef}>
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={pathname === item.href ? "active" : ""}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <span id="themeIcon">
              {theme === "light" ? <FiMoon size={22} /> : <FiSun size={22} />}
            </span>
          </button>
          <button
            className={`menu-toggle${menuOpen ? " active" : ""}`}
            id="menuToggle"
            aria-label="Toggle menu"
            ref={menuToggleRef}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </>
  );
}