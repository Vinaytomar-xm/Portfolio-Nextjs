"use client";

import { IoDocumentTextOutline } from "react-icons/io5";
import { BiRefresh } from "react-icons/bi";
import { useRef } from "react";

export default function FloatingButtons() {
  const refreshBtnRef = useRef(null);

  const handleRefresh = () => {
    if (refreshBtnRef.current) {
      refreshBtnRef.current.style.transform = "rotate(360deg) scale(0.9)";
    }
    setTimeout(() => location.reload(), 300);
  };

  return (
    <>
      <a
        href="/Vinay_resume.pdf"
        download="Vinay_Resume.pdf"
        className="resume-btn"
        aria-label="Download Resume"
        title="Download Resume"
      >
        <IoDocumentTextOutline />
      </a>

      <button
        className="refresh-btn"
        id="refreshBtn"
        ref={refreshBtnRef}
        aria-label="Refresh page"
        title="Refresh Page"
        onClick={handleRefresh}
      >
        <BiRefresh />
      </button>
    </>
  );
}
