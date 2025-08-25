import React from "react";

export function Modal({ isOpen, onClose, content }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl font-semibold text-stone-600 hover:text-cyan-400"
        >
          ✕
        </button>

        {content}
      </div>
    </div>
  );
}
