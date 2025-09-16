import React, { useEffect } from "react";

export default function Toast({ message, type, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const baseStyle =
    "fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg text-white animate-slide-in z-50 font-semibold";

  const typeStyles = {
    success: "bg-[#141414] border-l-4 border-[#E50914] text-white",
    error: "bg-[#141414] border-l-4 border-red-600 text-red-400",
    info: "bg-[#141414] border-l-4 border-gray-500 text-gray-300",
  };

  return (
    <div className={`${baseStyle} ${typeStyles[type] || typeStyles.info}`}>
      {message}
    </div>
  );
}
