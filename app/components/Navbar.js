"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll } from "framer-motion";
import {
  FiSun,
  FiMoon,
  FiInfo,
  FiBriefcase,
  FiFolder,
  FiCode,
} from "react-icons/fi";
import { IoMdContact } from "react-icons/io";

const NAV_ITEMS = [
  { href: "/about", icon: <FiInfo />, label: "About" },
  { href: "/skills", icon: <FiCode />, label: "Skills" },
  { href: "/projects", icon: <FiFolder />, label: "Projects" },
  { href: "/experience", icon: <FiBriefcase />, label: "Experience" },
  { href: "/contact", icon: <IoMdContact />, label: "Contact" },
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

  // Apply theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle theme
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

    return () => {
      document.removeEventListener("click", onClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      <nav id="navbar">

        {/* Logo */}
        <Link href="/" className="logo">
          Vinay Tomar
        </Link>

        <div className="nav-right">

          {/* Navigation Links */}
          <ul
            className={`nav-links${menuOpen ? " active" : ""}`}
            id="navLinks"
            ref={navLinksRef}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={
                    pathname === item.href ? "active" : ""
                  }
                >
                  {/* Icon */}
                  <span className="nav-icon">
                    {item.icon}
                  </span>

                  {/* Label */}
                  <span className="nav-label">
                    {item.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            id="themeToggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            <span id="themeIcon">
              {theme === "light" ? (
                <FiMoon size={22} />
              ) : (
                <FiSun size={22} />
              )}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
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