import React from "react";
import "../index.css" // Ensure you have a CSS file for custom animations

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50">
      <div className="relative w-16 h-16">
        <div className="spinner-circle"></div>
      </div>
    </div>
  );
};

export default Loading;
