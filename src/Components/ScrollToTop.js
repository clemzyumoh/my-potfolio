


import React, { useState, useEffect } from 'react';
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  const checkScrollTop = () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const currentScroll = window.scrollY;

    setScrollPercent((currentScroll / scrollTotal) * 100);

    if (currentScroll > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 cursor-pointer  p-2 rounded-full border-2 border-[#8750f7]
      ${showScroll ? "block" : "hidden"} transition-all duration-300`}
      onClick={scrollToTop}
      style={{
        background: `conic-gradient(#2a1454 ${scrollPercent}%, transparent 0)`,
        
      }}>
      <div className="relative flex items-center justify-center w-10 h-10">
        <BsArrowUpCircle className="absolute text-[#8750f7] text-4xl" />
      </div>
    </div>
  );
};

export default ScrollToTop;
