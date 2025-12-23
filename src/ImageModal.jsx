import React from "react";

export default function ImageModal({ src, alt, onClose }) {
  if (!src) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
    >
      <img 
        className="modal-image"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}
